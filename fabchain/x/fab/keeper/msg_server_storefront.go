package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateStorefront(goCtx context.Context, msg *types.MsgCreateStorefront) (*types.MsgCreateStorefrontResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var storefront = types.Storefront{
		Creator: msg.Creator,
		Owner:   msg.Owner,
		Name:    msg.Name,
	}

	id := k.AppendStorefront(
		ctx,
		storefront,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateStorefront{
		Id: id,
	})

	return &types.MsgCreateStorefrontResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateStorefront(goCtx context.Context, msg *types.MsgUpdateStorefront) (*types.MsgUpdateStorefrontResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var storefront = types.Storefront{
		Creator: msg.Creator,
		Id:      msg.Id,
		Owner:   msg.Owner,
		Name:    msg.Name,
	}

	// Checks that the element exists
	val, found := k.GetStorefront(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetStorefront(ctx, storefront)

	return &types.MsgUpdateStorefrontResponse{}, nil
}

func (k msgServer) DeleteStorefront(goCtx context.Context, msg *types.MsgDeleteStorefront) (*types.MsgDeleteStorefrontResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetStorefront(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveStorefront(ctx, msg.Id)

	return &types.MsgDeleteStorefrontResponse{}, nil
}
