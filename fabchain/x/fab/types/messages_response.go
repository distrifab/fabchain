package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateResponse = "create_response"
	TypeMsgUpdateResponse = "update_response"
	TypeMsgDeleteResponse = "delete_response"
)

var _ sdk.Msg = &MsgCreateResponse{}

func NewMsgCreateResponse(creator string, pricer string, request string, price string) *MsgCreateResponse {
	return &MsgCreateResponse{
		Creator: creator,
		Pricer:  pricer,
		Request: request,
		Price:   price,
	}
}

func (msg *MsgCreateResponse) Route() string {
	return RouterKey
}

func (msg *MsgCreateResponse) Type() string {
	return TypeMsgCreateResponse
}

func (msg *MsgCreateResponse) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateResponse) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateResponse) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateResponse{}

func NewMsgUpdateResponse(creator string, id uint64, pricer string, request string, price string) *MsgUpdateResponse {
	return &MsgUpdateResponse{
		Id:      id,
		Creator: creator,
		Pricer:  pricer,
		Request: request,
		Price:   price,
	}
}

func (msg *MsgUpdateResponse) Route() string {
	return RouterKey
}

func (msg *MsgUpdateResponse) Type() string {
	return TypeMsgUpdateResponse
}

func (msg *MsgUpdateResponse) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateResponse) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateResponse) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteResponse{}

func NewMsgDeleteResponse(creator string, id uint64) *MsgDeleteResponse {
	return &MsgDeleteResponse{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteResponse) Route() string {
	return RouterKey
}

func (msg *MsgDeleteResponse) Type() string {
	return TypeMsgDeleteResponse
}

func (msg *MsgDeleteResponse) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteResponse) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteResponse) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
