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

func (k Keeper) ResponseAll(goCtx context.Context, req *types.QueryAllResponseRequest) (*types.QueryAllResponseResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var responses []types.Response
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	responseStore := prefix.NewStore(store, types.KeyPrefix(types.ResponseKey))

	pageRes, err := query.Paginate(responseStore, req.Pagination, func(key []byte, value []byte) error {
		var response types.Response
		if err := k.cdc.Unmarshal(value, &response); err != nil {
			return err
		}

		responses = append(responses, response)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllResponseResponse{Response: responses, Pagination: pageRes}, nil
}

func (k Keeper) Response(goCtx context.Context, req *types.QueryGetResponseRequest) (*types.QueryGetResponseResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	response, found := k.GetResponse(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetResponseResponse{Response: response}, nil
}
