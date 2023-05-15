package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCapability(goCtx context.Context, msg *types.MsgCreateCapability) (*types.MsgCreateCapabilityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var capability = types.Capability{
		Creator:     msg.Creator,
		Owner:       msg.Owner,
		Manufacture: msg.Manufacture,
		Manifest:    msg.Manifest,
	}

	id := k.AppendCapability(
		ctx,
		capability,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateCapability{
		Id: id,
	})

	return &types.MsgCreateCapabilityResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCapability(goCtx context.Context, msg *types.MsgUpdateCapability) (*types.MsgUpdateCapabilityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var capability = types.Capability{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Owner:       msg.Owner,
		Manufacture: msg.Manufacture,
		Manifest:    msg.Manifest,
	}

	// Checks that the element exists
	val, found := k.GetCapability(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCapability(ctx, capability)

	return &types.MsgUpdateCapabilityResponse{}, nil
}

func (k msgServer) DeleteCapability(goCtx context.Context, msg *types.MsgDeleteCapability) (*types.MsgDeleteCapabilityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCapability(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCapability(ctx, msg.Id)

	return &types.MsgDeleteCapabilityResponse{}, nil
}
