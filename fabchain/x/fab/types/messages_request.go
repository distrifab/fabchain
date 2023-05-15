package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateRequest = "create_request"
	TypeMsgUpdateRequest = "update_request"
	TypeMsgDeleteRequest = "delete_request"
)

var _ sdk.Msg = &MsgCreateRequest{}

func NewMsgCreateRequest(creator string, owner string, product string, settings string) *MsgCreateRequest {
	return &MsgCreateRequest{
		Creator:  creator,
		Owner:    owner,
		Product:  product,
		Settings: settings,
	}
}

func (msg *MsgCreateRequest) Route() string {
	return RouterKey
}

func (msg *MsgCreateRequest) Type() string {
	return TypeMsgCreateRequest
}

func (msg *MsgCreateRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRequest{}

func NewMsgUpdateRequest(creator string, id uint64, owner string, product string, settings string) *MsgUpdateRequest {
	return &MsgUpdateRequest{
		Id:       id,
		Creator:  creator,
		Owner:    owner,
		Product:  product,
		Settings: settings,
	}
}

func (msg *MsgUpdateRequest) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRequest) Type() string {
	return TypeMsgUpdateRequest
}

func (msg *MsgUpdateRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRequest{}

func NewMsgDeleteRequest(creator string, id uint64) *MsgDeleteRequest {
	return &MsgDeleteRequest{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteRequest) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRequest) Type() string {
	return TypeMsgDeleteRequest
}

func (msg *MsgDeleteRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
