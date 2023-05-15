package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateProduct(goCtx context.Context, msg *types.MsgCreateProduct) (*types.MsgCreateProductResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var product = types.Product{
		Creator:   msg.Creator,
		Owner:     msg.Owner,
		Name:      msg.Name,
		Agency:    msg.Agency,
		Shares:    msg.Shares,
		Filestore: msg.Filestore,
		Root:      msg.Root,
		Manifest:  msg.Manifest,
	}

	id := k.AppendProduct(
		ctx,
		product,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateProduct{
		Id: id,
	})

	return &types.MsgCreateProductResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateProduct(goCtx context.Context, msg *types.MsgUpdateProduct) (*types.MsgUpdateProductResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var product = types.Product{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Owner:     msg.Owner,
		Name:      msg.Name,
		Agency:    msg.Agency,
		Shares:    msg.Shares,
		Filestore: msg.Filestore,
		Root:      msg.Root,
		Manifest:  msg.Manifest,
	}

	// Checks that the element exists
	val, found := k.GetProduct(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetProduct(ctx, product)

	return &types.MsgUpdateProductResponse{}, nil
}

func (k msgServer) DeleteProduct(goCtx context.Context, msg *types.MsgDeleteProduct) (*types.MsgDeleteProductResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetProduct(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveProduct(ctx, msg.Id)

	return &types.MsgDeleteProductResponse{}, nil
}
