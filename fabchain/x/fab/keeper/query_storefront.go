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

func (k Keeper) StorefrontAll(goCtx context.Context, req *types.QueryAllStorefrontRequest) (*types.QueryAllStorefrontResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storefronts []types.Storefront
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	storefrontStore := prefix.NewStore(store, types.KeyPrefix(types.StorefrontKey))

	pageRes, err := query.Paginate(storefrontStore, req.Pagination, func(key []byte, value []byte) error {
		var storefront types.Storefront
		if err := k.cdc.Unmarshal(value, &storefront); err != nil {
			return err
		}

		storefronts = append(storefronts, storefront)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStorefrontResponse{Storefront: storefronts, Pagination: pageRes}, nil
}

func (k Keeper) Storefront(goCtx context.Context, req *types.QueryGetStorefrontRequest) (*types.QueryGetStorefrontResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	storefront, found := k.GetStorefront(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetStorefrontResponse{Storefront: storefront}, nil
}
