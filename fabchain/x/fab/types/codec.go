package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateUser{}, "fab/CreateUser", nil)
	cdc.RegisterConcrete(&MsgUpdateUser{}, "fab/UpdateUser", nil)
	cdc.RegisterConcrete(&MsgDeleteUser{}, "fab/DeleteUser", nil)
	cdc.RegisterConcrete(&MsgCreateFilestore{}, "fab/CreateFilestore", nil)
	cdc.RegisterConcrete(&MsgUpdateFilestore{}, "fab/UpdateFilestore", nil)
	cdc.RegisterConcrete(&MsgDeleteFilestore{}, "fab/DeleteFilestore", nil)
	cdc.RegisterConcrete(&MsgCreateAgency{}, "fab/CreateAgency", nil)
	cdc.RegisterConcrete(&MsgUpdateAgency{}, "fab/UpdateAgency", nil)
	cdc.RegisterConcrete(&MsgDeleteAgency{}, "fab/DeleteAgency", nil)
	cdc.RegisterConcrete(&MsgCreateProduct{}, "fab/CreateProduct", nil)
	cdc.RegisterConcrete(&MsgUpdateProduct{}, "fab/UpdateProduct", nil)
	cdc.RegisterConcrete(&MsgDeleteProduct{}, "fab/DeleteProduct", nil)
	cdc.RegisterConcrete(&MsgCreateStorefront{}, "fab/CreateStorefront", nil)
	cdc.RegisterConcrete(&MsgUpdateStorefront{}, "fab/UpdateStorefront", nil)
	cdc.RegisterConcrete(&MsgDeleteStorefront{}, "fab/DeleteStorefront", nil)
	cdc.RegisterConcrete(&MsgCreateRequest{}, "fab/CreateRequest", nil)
	cdc.RegisterConcrete(&MsgUpdateRequest{}, "fab/UpdateRequest", nil)
	cdc.RegisterConcrete(&MsgDeleteRequest{}, "fab/DeleteRequest", nil)
	cdc.RegisterConcrete(&MsgCreatePricer{}, "fab/CreatePricer", nil)
	cdc.RegisterConcrete(&MsgUpdatePricer{}, "fab/UpdatePricer", nil)
	cdc.RegisterConcrete(&MsgDeletePricer{}, "fab/DeletePricer", nil)
	cdc.RegisterConcrete(&MsgCreateManufacture{}, "fab/CreateManufacture", nil)
	cdc.RegisterConcrete(&MsgUpdateManufacture{}, "fab/UpdateManufacture", nil)
	cdc.RegisterConcrete(&MsgDeleteManufacture{}, "fab/DeleteManufacture", nil)
	cdc.RegisterConcrete(&MsgCreateCapability{}, "fab/CreateCapability", nil)
	cdc.RegisterConcrete(&MsgUpdateCapability{}, "fab/UpdateCapability", nil)
	cdc.RegisterConcrete(&MsgDeleteCapability{}, "fab/DeleteCapability", nil)
	cdc.RegisterConcrete(&MsgCreateResponse{}, "fab/CreateResponse", nil)
	cdc.RegisterConcrete(&MsgUpdateResponse{}, "fab/UpdateResponse", nil)
	cdc.RegisterConcrete(&MsgDeleteResponse{}, "fab/DeleteResponse", nil)
	cdc.RegisterConcrete(&MsgCreateOrder{}, "fab/CreateOrder", nil)
	cdc.RegisterConcrete(&MsgUpdateOrder{}, "fab/UpdateOrder", nil)
	cdc.RegisterConcrete(&MsgDeleteOrder{}, "fab/DeleteOrder", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateUser{},
		&MsgUpdateUser{},
		&MsgDeleteUser{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateFilestore{},
		&MsgUpdateFilestore{},
		&MsgDeleteFilestore{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAgency{},
		&MsgUpdateAgency{},
		&MsgDeleteAgency{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProduct{},
		&MsgUpdateProduct{},
		&MsgDeleteProduct{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateStorefront{},
		&MsgUpdateStorefront{},
		&MsgDeleteStorefront{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRequest{},
		&MsgUpdateRequest{},
		&MsgDeleteRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePricer{},
		&MsgUpdatePricer{},
		&MsgDeletePricer{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateManufacture{},
		&MsgUpdateManufacture{},
		&MsgDeleteManufacture{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCapability{},
		&MsgUpdateCapability{},
		&MsgDeleteCapability{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateResponse{},
		&MsgUpdateResponse{},
		&MsgDeleteResponse{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateOrder{},
		&MsgUpdateOrder{},
		&MsgDeleteOrder{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
