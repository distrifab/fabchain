package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRequest(goCtx context.Context, msg *types.MsgCreateRequest) (*types.MsgCreateRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var request = types.Request{
		Creator:  msg.Creator,
		Owner:    msg.Owner,
		Product:  msg.Product,
		Settings: msg.Settings,
	}

	id := k.AppendRequest(
		ctx,
		request,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateRequest{
		Id: id,
	})

	return &types.MsgCreateRequestResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateRequest(goCtx context.Context, msg *types.MsgUpdateRequest) (*types.MsgUpdateRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var request = types.Request{
		Creator:  msg.Creator,
		Id:       msg.Id,
		Owner:    msg.Owner,
		Product:  msg.Product,
		Settings: msg.Settings,
	}

	// Checks that the element exists
	val, found := k.GetRequest(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetRequest(ctx, request)

	return &types.MsgUpdateRequestResponse{}, nil
}

func (k msgServer) DeleteRequest(goCtx context.Context, msg *types.MsgDeleteRequest) (*types.MsgDeleteRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetRequest(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRequest(ctx, msg.Id)

	return &types.MsgDeleteRequestResponse{}, nil
}
