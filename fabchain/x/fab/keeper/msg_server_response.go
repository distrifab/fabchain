package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateResponse(goCtx context.Context, msg *types.MsgCreateResponse) (*types.MsgCreateResponseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var response = types.Response{
		Creator: msg.Creator,
		Pricer:  msg.Pricer,
		Request: msg.Request,
		Price:   msg.Price,
	}

	id := k.AppendResponse(
		ctx,
		response,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateResponse{
		Id: id,
	})

	return &types.MsgCreateResponseResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateResponse(goCtx context.Context, msg *types.MsgUpdateResponse) (*types.MsgUpdateResponseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var response = types.Response{
		Creator: msg.Creator,
		Id:      msg.Id,
		Pricer:  msg.Pricer,
		Request: msg.Request,
		Price:   msg.Price,
	}

	// Checks that the element exists
	val, found := k.GetResponse(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetResponse(ctx, response)

	return &types.MsgUpdateResponseResponse{}, nil
}

func (k msgServer) DeleteResponse(goCtx context.Context, msg *types.MsgDeleteResponse) (*types.MsgDeleteResponseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetResponse(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveResponse(ctx, msg.Id)

	return &types.MsgDeleteResponseResponse{}, nil
}
