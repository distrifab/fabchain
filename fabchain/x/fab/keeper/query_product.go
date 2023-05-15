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

func (k Keeper) ProductAll(goCtx context.Context, req *types.QueryAllProductRequest) (*types.QueryAllProductResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var products []types.Product
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	productStore := prefix.NewStore(store, types.KeyPrefix(types.ProductKey))

	pageRes, err := query.Paginate(productStore, req.Pagination, func(key []byte, value []byte) error {
		var product types.Product
		if err := k.cdc.Unmarshal(value, &product); err != nil {
			return err
		}

		products = append(products, product)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProductResponse{Product: products, Pagination: pageRes}, nil
}

func (k Keeper) Product(goCtx context.Context, req *types.QueryGetProductRequest) (*types.QueryGetProductResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	product, found := k.GetProduct(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetProductResponse{Product: product}, nil
}
