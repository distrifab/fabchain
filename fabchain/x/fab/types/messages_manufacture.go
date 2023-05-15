package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateManufacture = "create_manufacture"
	TypeMsgUpdateManufacture = "update_manufacture"
	TypeMsgDeleteManufacture = "delete_manufacture"
)

var _ sdk.Msg = &MsgCreateManufacture{}

func NewMsgCreateManufacture(creator string, owner string, name string, pricer []string, paymentProvider string, paymentAddress string) *MsgCreateManufacture {
	return &MsgCreateManufacture{
		Creator:         creator,
		Owner:           owner,
		Name:            name,
		Pricer:          pricer,
		PaymentProvider: paymentProvider,
		PaymentAddress:  paymentAddress,
	}
}

func (msg *MsgCreateManufacture) Route() string {
	return RouterKey
}

func (msg *MsgCreateManufacture) Type() string {
	return TypeMsgCreateManufacture
}

func (msg *MsgCreateManufacture) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateManufacture) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateManufacture) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateManufacture{}

func NewMsgUpdateManufacture(creator string, id uint64, owner string, name string, pricer []string, paymentProvider string, paymentAddress string) *MsgUpdateManufacture {
	return &MsgUpdateManufacture{
		Id:              id,
		Creator:         creator,
		Owner:           owner,
		Name:            name,
		Pricer:          pricer,
		PaymentProvider: paymentProvider,
		PaymentAddress:  paymentAddress,
	}
}

func (msg *MsgUpdateManufacture) Route() string {
	return RouterKey
}

func (msg *MsgUpdateManufacture) Type() string {
	return TypeMsgUpdateManufacture
}

func (msg *MsgUpdateManufacture) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateManufacture) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateManufacture) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteManufacture{}

func NewMsgDeleteManufacture(creator string, id uint64) *MsgDeleteManufacture {
	return &MsgDeleteManufacture{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteManufacture) Route() string {
	return RouterKey
}

func (msg *MsgDeleteManufacture) Type() string {
	return TypeMsgDeleteManufacture
}

func (msg *MsgDeleteManufacture) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteManufacture) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteManufacture) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
