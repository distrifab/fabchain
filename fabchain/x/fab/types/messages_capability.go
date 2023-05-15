package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCapability = "create_capability"
	TypeMsgUpdateCapability = "update_capability"
	TypeMsgDeleteCapability = "delete_capability"
)

var _ sdk.Msg = &MsgCreateCapability{}

func NewMsgCreateCapability(creator string, owner string, manufacture string, manifest string) *MsgCreateCapability {
	return &MsgCreateCapability{
		Creator:     creator,
		Owner:       owner,
		Manufacture: manufacture,
		Manifest:    manifest,
	}
}

func (msg *MsgCreateCapability) Route() string {
	return RouterKey
}

func (msg *MsgCreateCapability) Type() string {
	return TypeMsgCreateCapability
}

func (msg *MsgCreateCapability) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCapability) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCapability) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCapability{}

func NewMsgUpdateCapability(creator string, id uint64, owner string, manufacture string, manifest string) *MsgUpdateCapability {
	return &MsgUpdateCapability{
		Id:          id,
		Creator:     creator,
		Owner:       owner,
		Manufacture: manufacture,
		Manifest:    manifest,
	}
}

func (msg *MsgUpdateCapability) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCapability) Type() string {
	return TypeMsgUpdateCapability
}

func (msg *MsgUpdateCapability) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCapability) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCapability) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCapability{}

func NewMsgDeleteCapability(creator string, id uint64) *MsgDeleteCapability {
	return &MsgDeleteCapability{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCapability) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCapability) Type() string {
	return TypeMsgDeleteCapability
}

func (msg *MsgDeleteCapability) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCapability) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCapability) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
