package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateProduct = "create_product"
	TypeMsgUpdateProduct = "update_product"
	TypeMsgDeleteProduct = "delete_product"
)

var _ sdk.Msg = &MsgCreateProduct{}

func NewMsgCreateProduct(creator string, owner string, name string, agency string, shares []string, filestore string, root string, manifest string) *MsgCreateProduct {
	return &MsgCreateProduct{
		Creator:   creator,
		Owner:     owner,
		Name:      name,
		Agency:    agency,
		Shares:    shares,
		Filestore: filestore,
		Root:      root,
		Manifest:  manifest,
	}
}

func (msg *MsgCreateProduct) Route() string {
	return RouterKey
}

func (msg *MsgCreateProduct) Type() string {
	return TypeMsgCreateProduct
}

func (msg *MsgCreateProduct) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateProduct) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateProduct) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateProduct{}

func NewMsgUpdateProduct(creator string, id uint64, owner string, name string, agency string, shares []string, filestore string, root string, manifest string) *MsgUpdateProduct {
	return &MsgUpdateProduct{
		Id:        id,
		Creator:   creator,
		Owner:     owner,
		Name:      name,
		Agency:    agency,
		Shares:    shares,
		Filestore: filestore,
		Root:      root,
		Manifest:  manifest,
	}
}

func (msg *MsgUpdateProduct) Route() string {
	return RouterKey
}

func (msg *MsgUpdateProduct) Type() string {
	return TypeMsgUpdateProduct
}

func (msg *MsgUpdateProduct) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateProduct) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateProduct) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteProduct{}

func NewMsgDeleteProduct(creator string, id uint64) *MsgDeleteProduct {
	return &MsgDeleteProduct{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteProduct) Route() string {
	return RouterKey
}

func (msg *MsgDeleteProduct) Type() string {
	return TypeMsgDeleteProduct
}

func (msg *MsgDeleteProduct) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteProduct) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteProduct) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
