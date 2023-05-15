package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreatePricer = "create_pricer"
	TypeMsgUpdatePricer = "update_pricer"
	TypeMsgDeletePricer = "delete_pricer"
)

var _ sdk.Msg = &MsgCreatePricer{}

func NewMsgCreatePricer(creator string, owner string) *MsgCreatePricer {
	return &MsgCreatePricer{
		Creator: creator,
		Owner:   owner,
	}
}

func (msg *MsgCreatePricer) Route() string {
	return RouterKey
}

func (msg *MsgCreatePricer) Type() string {
	return TypeMsgCreatePricer
}

func (msg *MsgCreatePricer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePricer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePricer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePricer{}

func NewMsgUpdatePricer(creator string, id uint64, owner string) *MsgUpdatePricer {
	return &MsgUpdatePricer{
		Id:      id,
		Creator: creator,
		Owner:   owner,
	}
}

func (msg *MsgUpdatePricer) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePricer) Type() string {
	return TypeMsgUpdatePricer
}

func (msg *MsgUpdatePricer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePricer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePricer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePricer{}

func NewMsgDeletePricer(creator string, id uint64) *MsgDeletePricer {
	return &MsgDeletePricer{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePricer) Route() string {
	return RouterKey
}

func (msg *MsgDeletePricer) Type() string {
	return TypeMsgDeletePricer
}

func (msg *MsgDeletePricer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePricer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePricer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
