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

func (k Keeper) FilestoreAll(goCtx context.Context, req *types.QueryAllFilestoreRequest) (*types.QueryAllFilestoreResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var filestores []types.Filestore
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	filestoreStore := prefix.NewStore(store, types.KeyPrefix(types.FilestoreKey))

	pageRes, err := query.Paginate(filestoreStore, req.Pagination, func(key []byte, value []byte) error {
		var filestore types.Filestore
		if err := k.cdc.Unmarshal(value, &filestore); err != nil {
			return err
		}

		filestores = append(filestores, filestore)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFilestoreResponse{Filestore: filestores, Pagination: pageRes}, nil
}

func (k Keeper) Filestore(goCtx context.Context, req *types.QueryGetFilestoreRequest) (*types.QueryGetFilestoreResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	filestore, found := k.GetFilestore(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetFilestoreResponse{Filestore: filestore}, nil
}
