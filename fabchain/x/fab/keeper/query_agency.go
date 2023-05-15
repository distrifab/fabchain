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

func (k Keeper) AgencyAll(goCtx context.Context, req *types.QueryAllAgencyRequest) (*types.QueryAllAgencyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var agencys []types.Agency
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	agencyStore := prefix.NewStore(store, types.KeyPrefix(types.AgencyKey))

	pageRes, err := query.Paginate(agencyStore, req.Pagination, func(key []byte, value []byte) error {
		var agency types.Agency
		if err := k.cdc.Unmarshal(value, &agency); err != nil {
			return err
		}

		agencys = append(agencys, agency)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAgencyResponse{Agency: agencys, Pagination: pageRes}, nil
}

func (k Keeper) Agency(goCtx context.Context, req *types.QueryGetAgencyRequest) (*types.QueryGetAgencyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	agency, found := k.GetAgency(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetAgencyResponse{Agency: agency}, nil
}
