package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateStorefront = "create_storefront"
	TypeMsgUpdateStorefront = "update_storefront"
	TypeMsgDeleteStorefront = "delete_storefront"
)

var _ sdk.Msg = &MsgCreateStorefront{}

func NewMsgCreateStorefront(creator string, owner string, name string) *MsgCreateStorefront {
	return &MsgCreateStorefront{
		Creator: creator,
		Owner:   owner,
		Name:    name,
	}
}

func (msg *MsgCreateStorefront) Route() string {
	return RouterKey
}

func (msg *MsgCreateStorefront) Type() string {
	return TypeMsgCreateStorefront
}

func (msg *MsgCreateStorefront) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateStorefront) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateStorefront) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateStorefront{}

func NewMsgUpdateStorefront(creator string, id uint64, owner string, name string) *MsgUpdateStorefront {
	return &MsgUpdateStorefront{
		Id:      id,
		Creator: creator,
		Owner:   owner,
		Name:    name,
	}
}

func (msg *MsgUpdateStorefront) Route() string {
	return RouterKey
}

func (msg *MsgUpdateStorefront) Type() string {
	return TypeMsgUpdateStorefront
}

func (msg *MsgUpdateStorefront) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateStorefront) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateStorefront) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteStorefront{}

func NewMsgDeleteStorefront(creator string, id uint64) *MsgDeleteStorefront {
	return &MsgDeleteStorefront{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteStorefront) Route() string {
	return RouterKey
}

func (msg *MsgDeleteStorefront) Type() string {
	return TypeMsgDeleteStorefront
}

func (msg *MsgDeleteStorefront) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteStorefront) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteStorefront) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
