package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateOrder(goCtx context.Context, msg *types.MsgCreateOrder) (*types.MsgCreateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var order = types.Order{
		Creator:      msg.Creator,
		Response:     msg.Response,
		Storefront:   msg.Storefront,
		Identifier:   msg.Identifier,
		PaymentProof: msg.PaymentProof,
	}

	id := k.AppendOrder(
		ctx,
		order,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateOrder{
		Id: id,
	})

	return &types.MsgCreateOrderResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateOrder(goCtx context.Context, msg *types.MsgUpdateOrder) (*types.MsgUpdateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var order = types.Order{
		Creator:      msg.Creator,
		Id:           msg.Id,
		Response:     msg.Response,
		Storefront:   msg.Storefront,
		Identifier:   msg.Identifier,
		PaymentProof: msg.PaymentProof,
	}

	// Checks that the element exists
	val, found := k.GetOrder(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetOrder(ctx, order)

	return &types.MsgUpdateOrderResponse{}, nil
}

func (k msgServer) DeleteOrder(goCtx context.Context, msg *types.MsgDeleteOrder) (*types.MsgDeleteOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetOrder(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveOrder(ctx, msg.Id)

	return &types.MsgDeleteOrderResponse{}, nil
}
