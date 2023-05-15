package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateAgency = "create_agency"
	TypeMsgUpdateAgency = "update_agency"
	TypeMsgDeleteAgency = "delete_agency"
)

var _ sdk.Msg = &MsgCreateAgency{}

func NewMsgCreateAgency(creator string, owner string, name string, paymentProvider string, paymentAddress string) *MsgCreateAgency {
	return &MsgCreateAgency{
		Creator:         creator,
		Owner:           owner,
		Name:            name,
		PaymentProvider: paymentProvider,
		PaymentAddress:  paymentAddress,
	}
}

func (msg *MsgCreateAgency) Route() string {
	return RouterKey
}

func (msg *MsgCreateAgency) Type() string {
	return TypeMsgCreateAgency
}

func (msg *MsgCreateAgency) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAgency) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAgency) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAgency{}

func NewMsgUpdateAgency(creator string, id uint64, owner string, name string, paymentProvider string, paymentAddress string) *MsgUpdateAgency {
	return &MsgUpdateAgency{
		Id:              id,
		Creator:         creator,
		Owner:           owner,
		Name:            name,
		PaymentProvider: paymentProvider,
		PaymentAddress:  paymentAddress,
	}
}

func (msg *MsgUpdateAgency) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAgency) Type() string {
	return TypeMsgUpdateAgency
}

func (msg *MsgUpdateAgency) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAgency) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAgency) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteAgency{}

func NewMsgDeleteAgency(creator string, id uint64) *MsgDeleteAgency {
	return &MsgDeleteAgency{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteAgency) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAgency) Type() string {
	return TypeMsgDeleteAgency
}

func (msg *MsgDeleteAgency) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAgency) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAgency) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
