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

func (k Keeper) ManufactureAll(goCtx context.Context, req *types.QueryAllManufactureRequest) (*types.QueryAllManufactureResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var manufactures []types.Manufacture
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	manufactureStore := prefix.NewStore(store, types.KeyPrefix(types.ManufactureKey))

	pageRes, err := query.Paginate(manufactureStore, req.Pagination, func(key []byte, value []byte) error {
		var manufacture types.Manufacture
		if err := k.cdc.Unmarshal(value, &manufacture); err != nil {
			return err
		}

		manufactures = append(manufactures, manufacture)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllManufactureResponse{Manufacture: manufactures, Pagination: pageRes}, nil
}

func (k Keeper) Manufacture(goCtx context.Context, req *types.QueryGetManufactureRequest) (*types.QueryGetManufactureResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	manufacture, found := k.GetManufacture(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetManufactureResponse{Manufacture: manufacture}, nil
}
