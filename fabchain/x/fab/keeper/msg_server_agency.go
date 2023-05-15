package keeper

import (
	"context"
	"fmt"

	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateAgency(goCtx context.Context, msg *types.MsgCreateAgency) (*types.MsgCreateAgencyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var agency = types.Agency{
		Creator:         msg.Creator,
		Owner:           msg.Owner,
		Name:            msg.Name,
		PaymentProvider: msg.PaymentProvider,
		PaymentAddress:  msg.PaymentAddress,
	}

	id := k.AppendAgency(
		ctx,
		agency,
	)

	ctx.EventManager().EmitTypedEvent(&types.EventCreateAgency{
		Id: id,
	})

	return &types.MsgCreateAgencyResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateAgency(goCtx context.Context, msg *types.MsgUpdateAgency) (*types.MsgUpdateAgencyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var agency = types.Agency{
		Creator:         msg.Creator,
		Id:              msg.Id,
		Owner:           msg.Owner,
		Name:            msg.Name,
		PaymentProvider: msg.PaymentProvider,
		PaymentAddress:  msg.PaymentAddress,
	}

	// Checks that the element exists
	val, found := k.GetAgency(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetAgency(ctx, agency)

	return &types.MsgUpdateAgencyResponse{}, nil
}

func (k msgServer) DeleteAgency(goCtx context.Context, msg *types.MsgDeleteAgency) (*types.MsgDeleteAgencyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetAgency(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveAgency(ctx, msg.Id)

	return &types.MsgDeleteAgencyResponse{}, nil
}
