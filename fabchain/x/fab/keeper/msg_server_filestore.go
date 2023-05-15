package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateFilestore(goCtx context.Context, msg *types.MsgCreateFilestore) (*types.MsgCreateFilestoreResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var filestore = types.Filestore{
		Creator: msg.Creator,
		Owner:   msg.Owner,
		Name:    msg.Name,
		Style:   msg.Style,
		Url:     msg.Url,
	}

	id := k.AppendFilestore(
		ctx,
		filestore,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateFilestore{
		Id: id,
	})

	return &types.MsgCreateFilestoreResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateFilestore(goCtx context.Context, msg *types.MsgUpdateFilestore) (*types.MsgUpdateFilestoreResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var filestore = types.Filestore{
		Creator: msg.Creator,
		Id:      msg.Id,
		Owner:   msg.Owner,
		Name:    msg.Name,
		Style:   msg.Style,
		Url:     msg.Url,
	}

	// Checks that the element exists
	val, found := k.GetFilestore(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetFilestore(ctx, filestore)

	return &types.MsgUpdateFilestoreResponse{}, nil
}

func (k msgServer) DeleteFilestore(goCtx context.Context, msg *types.MsgDeleteFilestore) (*types.MsgDeleteFilestoreResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetFilestore(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveFilestore(ctx, msg.Id)

	return &types.MsgDeleteFilestoreResponse{}, nil
}
