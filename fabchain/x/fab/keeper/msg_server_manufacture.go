package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateManufacture(goCtx context.Context, msg *types.MsgCreateManufacture) (*types.MsgCreateManufactureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var manufacture = types.Manufacture{
		Creator:         msg.Creator,
		Owner:           msg.Owner,
		Name:            msg.Name,
		Pricer:          msg.Pricer,
		PaymentProvider: msg.PaymentProvider,
		PaymentAddress:  msg.PaymentAddress,
	}

	id := k.AppendManufacture(
		ctx,
		manufacture,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateManufacture{
		Id: id,
	})

	return &types.MsgCreateManufactureResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateManufacture(goCtx context.Context, msg *types.MsgUpdateManufacture) (*types.MsgUpdateManufactureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var manufacture = types.Manufacture{
		Creator:         msg.Creator,
		Id:              msg.Id,
		Owner:           msg.Owner,
		Name:            msg.Name,
		Pricer:          msg.Pricer,
		PaymentProvider: msg.PaymentProvider,
		PaymentAddress:  msg.PaymentAddress,
	}

	// Checks that the element exists
	val, found := k.GetManufacture(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetManufacture(ctx, manufacture)

	return &types.MsgUpdateManufactureResponse{}, nil
}

func (k msgServer) DeleteManufacture(goCtx context.Context, msg *types.MsgDeleteManufacture) (*types.MsgDeleteManufactureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetManufacture(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveManufacture(ctx, msg.Id)

	return &types.MsgDeleteManufactureResponse{}, nil
}
