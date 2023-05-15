package keeper

import (
	"context"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CapabilityAll(goCtx context.Context, req *types.QueryAllCapabilityRequest) (*types.QueryAllCapabilityResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var capabilitys []types.Capability
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	capabilityStore := prefix.NewStore(store, types.KeyPrefix(types.CapabilityKey))

	pageRes, err := query.Paginate(capabilityStore, req.Pagination, func(key []byte, value []byte) error {
		var capability types.Capability
		if err := k.cdc.Unmarshal(value, &capability); err != nil {
			return err
		}

		capabilitys = append(capabilitys, capability)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCapabilityResponse{Capability: capabilitys, Pagination: pageRes}, nil
}

func (k Keeper) Capability(goCtx context.Context, req *types.QueryGetCapabilityRequest) (*types.QueryGetCapabilityResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	capability, found := k.GetCapability(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCapabilityResponse{Capability: capability}, nil
}
