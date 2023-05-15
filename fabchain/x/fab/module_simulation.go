package fab

import (
	"math/rand"

	"fabchain/testutil/sample"
	fabsimulation "fabchain/x/fab/simulation"
	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = fabsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateUser = "op_weight_msg_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateUser int = 100

	opWeightMsgUpdateUser = "op_weight_msg_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateUser int = 100

	opWeightMsgDeleteUser = "op_weight_msg_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteUser int = 100

	opWeightMsgCreateFilestore = "op_weight_msg_filestore"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateFilestore int = 100

	opWeightMsgUpdateFilestore = "op_weight_msg_filestore"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateFilestore int = 100

	opWeightMsgDeleteFilestore = "op_weight_msg_filestore"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteFilestore int = 100

	opWeightMsgCreateAgency = "op_weight_msg_agency"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateAgency int = 100

	opWeightMsgUpdateAgency = "op_weight_msg_agency"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateAgency int = 100

	opWeightMsgDeleteAgency = "op_weight_msg_agency"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteAgency int = 100

	opWeightMsgCreateProduct = "op_weight_msg_product"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateProduct int = 100

	opWeightMsgUpdateProduct = "op_weight_msg_product"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateProduct int = 100

	opWeightMsgDeleteProduct = "op_weight_msg_product"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteProduct int = 100

	opWeightMsgCreateStorefront = "op_weight_msg_storefront"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateStorefront int = 100

	opWeightMsgUpdateStorefront = "op_weight_msg_storefront"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateStorefront int = 100

	opWeightMsgDeleteStorefront = "op_weight_msg_storefront"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteStorefront int = 100

	opWeightMsgCreateRequest = "op_weight_msg_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateRequest int = 100

	opWeightMsgUpdateRequest = "op_weight_msg_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateRequest int = 100

	opWeightMsgDeleteRequest = "op_weight_msg_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteRequest int = 100

	opWeightMsgCreatePricer = "op_weight_msg_pricer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePricer int = 100

	opWeightMsgUpdatePricer = "op_weight_msg_pricer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePricer int = 100

	opWeightMsgDeletePricer = "op_weight_msg_pricer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePricer int = 100

	opWeightMsgCreateManufacture = "op_weight_msg_manufacture"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateManufacture int = 100

	opWeightMsgUpdateManufacture = "op_weight_msg_manufacture"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateManufacture int = 100

	opWeightMsgDeleteManufacture = "op_weight_msg_manufacture"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteManufacture int = 100

	opWeightMsgCreateCapability = "op_weight_msg_capability"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCapability int = 100

	opWeightMsgUpdateCapability = "op_weight_msg_capability"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCapability int = 100

	opWeightMsgDeleteCapability = "op_weight_msg_capability"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCapability int = 100

	opWeightMsgCreateResponse = "op_weight_msg_response"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateResponse int = 100

	opWeightMsgUpdateResponse = "op_weight_msg_response"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateResponse int = 100

	opWeightMsgDeleteResponse = "op_weight_msg_response"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteResponse int = 100

	opWeightMsgCreateOrder = "op_weight_msg_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateOrder int = 100

	opWeightMsgUpdateOrder = "op_weight_msg_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateOrder int = 100

	opWeightMsgDeleteOrder = "op_weight_msg_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteOrder int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	fabGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		UserList: []types.User{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		UserCount: 2,
		FilestoreList: []types.Filestore{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		FilestoreCount: 2,
		AgencyList: []types.Agency{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		AgencyCount: 2,
		ProductList: []types.Product{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ProductCount: 2,
		StorefrontList: []types.Storefront{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		StorefrontCount: 2,
		RequestList: []types.Request{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		RequestCount: 2,
		PricerList: []types.Pricer{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		PricerCount: 2,
		ManufactureList: []types.Manufacture{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ManufactureCount: 2,
		CapabilityList: []types.Capability{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		CapabilityCount: 2,
		ResponseList: []types.Response{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ResponseCount: 2,
		OrderList: []types.Order{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		OrderCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&fabGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateUser, &weightMsgCreateUser, nil,
		func(_ *rand.Rand) {
			weightMsgCreateUser = defaultWeightMsgCreateUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateUser,
		fabsimulation.SimulateMsgCreateUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateUser, &weightMsgUpdateUser, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateUser = defaultWeightMsgUpdateUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateUser,
		fabsimulation.SimulateMsgUpdateUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteUser, &weightMsgDeleteUser, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteUser = defaultWeightMsgDeleteUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteUser,
		fabsimulation.SimulateMsgDeleteUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateFilestore int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateFilestore, &weightMsgCreateFilestore, nil,
		func(_ *rand.Rand) {
			weightMsgCreateFilestore = defaultWeightMsgCreateFilestore
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateFilestore,
		fabsimulation.SimulateMsgCreateFilestore(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateFilestore int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateFilestore, &weightMsgUpdateFilestore, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateFilestore = defaultWeightMsgUpdateFilestore
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateFilestore,
		fabsimulation.SimulateMsgUpdateFilestore(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteFilestore int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteFilestore, &weightMsgDeleteFilestore, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteFilestore = defaultWeightMsgDeleteFilestore
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteFilestore,
		fabsimulation.SimulateMsgDeleteFilestore(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateAgency int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateAgency, &weightMsgCreateAgency, nil,
		func(_ *rand.Rand) {
			weightMsgCreateAgency = defaultWeightMsgCreateAgency
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateAgency,
		fabsimulation.SimulateMsgCreateAgency(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateAgency int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateAgency, &weightMsgUpdateAgency, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateAgency = defaultWeightMsgUpdateAgency
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateAgency,
		fabsimulation.SimulateMsgUpdateAgency(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteAgency int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteAgency, &weightMsgDeleteAgency, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteAgency = defaultWeightMsgDeleteAgency
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteAgency,
		fabsimulation.SimulateMsgDeleteAgency(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateProduct int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateProduct, &weightMsgCreateProduct, nil,
		func(_ *rand.Rand) {
			weightMsgCreateProduct = defaultWeightMsgCreateProduct
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateProduct,
		fabsimulation.SimulateMsgCreateProduct(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateProduct int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateProduct, &weightMsgUpdateProduct, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateProduct = defaultWeightMsgUpdateProduct
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateProduct,
		fabsimulation.SimulateMsgUpdateProduct(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteProduct int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteProduct, &weightMsgDeleteProduct, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteProduct = defaultWeightMsgDeleteProduct
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteProduct,
		fabsimulation.SimulateMsgDeleteProduct(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateStorefront int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateStorefront, &weightMsgCreateStorefront, nil,
		func(_ *rand.Rand) {
			weightMsgCreateStorefront = defaultWeightMsgCreateStorefront
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateStorefront,
		fabsimulation.SimulateMsgCreateStorefront(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateStorefront int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateStorefront, &weightMsgUpdateStorefront, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateStorefront = defaultWeightMsgUpdateStorefront
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateStorefront,
		fabsimulation.SimulateMsgUpdateStorefront(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteStorefront int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteStorefront, &weightMsgDeleteStorefront, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteStorefront = defaultWeightMsgDeleteStorefront
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteStorefront,
		fabsimulation.SimulateMsgDeleteStorefront(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateRequest, &weightMsgCreateRequest, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRequest = defaultWeightMsgCreateRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRequest,
		fabsimulation.SimulateMsgCreateRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateRequest, &weightMsgUpdateRequest, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateRequest = defaultWeightMsgUpdateRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateRequest,
		fabsimulation.SimulateMsgUpdateRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteRequest, &weightMsgDeleteRequest, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteRequest = defaultWeightMsgDeleteRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteRequest,
		fabsimulation.SimulateMsgDeleteRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreatePricer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePricer, &weightMsgCreatePricer, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePricer = defaultWeightMsgCreatePricer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePricer,
		fabsimulation.SimulateMsgCreatePricer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePricer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePricer, &weightMsgUpdatePricer, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePricer = defaultWeightMsgUpdatePricer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePricer,
		fabsimulation.SimulateMsgUpdatePricer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePricer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePricer, &weightMsgDeletePricer, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePricer = defaultWeightMsgDeletePricer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePricer,
		fabsimulation.SimulateMsgDeletePricer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateManufacture int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateManufacture, &weightMsgCreateManufacture, nil,
		func(_ *rand.Rand) {
			weightMsgCreateManufacture = defaultWeightMsgCreateManufacture
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateManufacture,
		fabsimulation.SimulateMsgCreateManufacture(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateManufacture int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateManufacture, &weightMsgUpdateManufacture, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateManufacture = defaultWeightMsgUpdateManufacture
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateManufacture,
		fabsimulation.SimulateMsgUpdateManufacture(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteManufacture int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteManufacture, &weightMsgDeleteManufacture, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteManufacture = defaultWeightMsgDeleteManufacture
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteManufacture,
		fabsimulation.SimulateMsgDeleteManufacture(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCapability int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCapability, &weightMsgCreateCapability, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCapability = defaultWeightMsgCreateCapability
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCapability,
		fabsimulation.SimulateMsgCreateCapability(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCapability int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCapability, &weightMsgUpdateCapability, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCapability = defaultWeightMsgUpdateCapability
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCapability,
		fabsimulation.SimulateMsgUpdateCapability(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCapability int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCapability, &weightMsgDeleteCapability, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCapability = defaultWeightMsgDeleteCapability
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCapability,
		fabsimulation.SimulateMsgDeleteCapability(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateResponse int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateResponse, &weightMsgCreateResponse, nil,
		func(_ *rand.Rand) {
			weightMsgCreateResponse = defaultWeightMsgCreateResponse
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateResponse,
		fabsimulation.SimulateMsgCreateResponse(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateResponse int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateResponse, &weightMsgUpdateResponse, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateResponse = defaultWeightMsgUpdateResponse
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateResponse,
		fabsimulation.SimulateMsgUpdateResponse(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteResponse int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteResponse, &weightMsgDeleteResponse, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteResponse = defaultWeightMsgDeleteResponse
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteResponse,
		fabsimulation.SimulateMsgDeleteResponse(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateOrder, &weightMsgCreateOrder, nil,
		func(_ *rand.Rand) {
			weightMsgCreateOrder = defaultWeightMsgCreateOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateOrder,
		fabsimulation.SimulateMsgCreateOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateOrder, &weightMsgUpdateOrder, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateOrder = defaultWeightMsgUpdateOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateOrder,
		fabsimulation.SimulateMsgUpdateOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteOrder, &weightMsgDeleteOrder, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteOrder = defaultWeightMsgDeleteOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteOrder,
		fabsimulation.SimulateMsgDeleteOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
