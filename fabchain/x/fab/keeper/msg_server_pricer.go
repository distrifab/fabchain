package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePricer(goCtx context.Context, msg *types.MsgCreatePricer) (*types.MsgCreatePricerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var pricer = types.Pricer{
		Creator: msg.Creator,
		Owner:   msg.Owner,
	}

	id := k.AppendPricer(
		ctx,
		pricer,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreatePricer{
		Id: id,
	})

	return &types.MsgCreatePricerResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePricer(goCtx context.Context, msg *types.MsgUpdatePricer) (*types.MsgUpdatePricerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var pricer = types.Pricer{
		Creator: msg.Creator,
		Id:      msg.Id,
		Owner:   msg.Owner,
	}

	// Checks that the element exists
	val, found := k.GetPricer(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPricer(ctx, pricer)

	return &types.MsgUpdatePricerResponse{}, nil
}

func (k msgServer) DeletePricer(goCtx context.Context, msg *types.MsgDeletePricer) (*types.MsgDeletePricerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetPricer(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePricer(ctx, msg.Id)

	return &types.MsgDeletePricerResponse{}, nil
}
