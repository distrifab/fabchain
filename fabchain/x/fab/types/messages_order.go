package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateOrder = "create_order"
	TypeMsgUpdateOrder = "update_order"
	TypeMsgDeleteOrder = "delete_order"
)

var _ sdk.Msg = &MsgCreateOrder{}

func NewMsgCreateOrder(creator string, response string, storefront string, identifier string, paymentProof string) *MsgCreateOrder {
	return &MsgCreateOrder{
		Creator:      creator,
		Response:     response,
		Storefront:   storefront,
		Identifier:   identifier,
		PaymentProof: paymentProof,
	}
}

func (msg *MsgCreateOrder) Route() string {
	return RouterKey
}

func (msg *MsgCreateOrder) Type() string {
	return TypeMsgCreateOrder
}

func (msg *MsgCreateOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateOrder{}

func NewMsgUpdateOrder(creator string, id uint64, response string, storefront string, identifier string, paymentProof string) *MsgUpdateOrder {
	return &MsgUpdateOrder{
		Id:           id,
		Creator:      creator,
		Response:     response,
		Storefront:   storefront,
		Identifier:   identifier,
		PaymentProof: paymentProof,
	}
}

func (msg *MsgUpdateOrder) Route() string {
	return RouterKey
}

func (msg *MsgUpdateOrder) Type() string {
	return TypeMsgUpdateOrder
}

func (msg *MsgUpdateOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteOrder{}

func NewMsgDeleteOrder(creator string, id uint64) *MsgDeleteOrder {
	return &MsgDeleteOrder{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteOrder) Route() string {
	return RouterKey
}

func (msg *MsgDeleteOrder) Type() string {
	return TypeMsgDeleteOrder
}

func (msg *MsgDeleteOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
