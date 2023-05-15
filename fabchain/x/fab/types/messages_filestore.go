package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateFilestore = "create_filestore"
	TypeMsgUpdateFilestore = "update_filestore"
	TypeMsgDeleteFilestore = "delete_filestore"
)

var _ sdk.Msg = &MsgCreateFilestore{}

func NewMsgCreateFilestore(creator string, owner string, name string, style string, url string) *MsgCreateFilestore {
	return &MsgCreateFilestore{
		Creator: creator,
		Owner:   owner,
		Name:    name,
		Style:   style,
		Url:     url,
	}
}

func (msg *MsgCreateFilestore) Route() string {
	return RouterKey
}

func (msg *MsgCreateFilestore) Type() string {
	return TypeMsgCreateFilestore
}

func (msg *MsgCreateFilestore) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateFilestore) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateFilestore) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateFilestore{}

func NewMsgUpdateFilestore(creator string, id uint64, owner string, name string, style string, url string) *MsgUpdateFilestore {
	return &MsgUpdateFilestore{
		Id:      id,
		Creator: creator,
		Owner:   owner,
		Name:    name,
		Style:   style,
		Url:     url,
	}
}

func (msg *MsgUpdateFilestore) Route() string {
	return RouterKey
}

func (msg *MsgUpdateFilestore) Type() string {
	return TypeMsgUpdateFilestore
}

func (msg *MsgUpdateFilestore) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateFilestore) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateFilestore) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteFilestore{}

func NewMsgDeleteFilestore(creator string, id uint64) *MsgDeleteFilestore {
	return &MsgDeleteFilestore{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteFilestore) Route() string {
	return RouterKey
}

func (msg *MsgDeleteFilestore) Type() string {
	return TypeMsgDeleteFilestore
}

func (msg *MsgDeleteFilestore) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteFilestore) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteFilestore) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
