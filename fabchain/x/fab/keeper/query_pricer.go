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

func (k Keeper) PricerAll(goCtx context.Context, req *types.QueryAllPricerRequest) (*types.QueryAllPricerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var pricers []types.Pricer
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	pricerStore := prefix.NewStore(store, types.KeyPrefix(types.PricerKey))

	pageRes, err := query.Paginate(pricerStore, req.Pagination, func(key []byte, value []byte) error {
		var pricer types.Pricer
		if err := k.cdc.Unmarshal(value, &pricer); err != nil {
			return err
		}

		pricers = append(pricers, pricer)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPricerResponse{Pricer: pricers, Pagination: pageRes}, nil
}

func (k Keeper) Pricer(goCtx context.Context, req *types.QueryGetPricerRequest) (*types.QueryGetPricerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	pricer, found := k.GetPricer(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPricerResponse{Pricer: pricer}, nil
}
