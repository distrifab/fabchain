package fab

import (
	"fabchain/x/fab/keeper"
	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the user
	for _, elem := range genState.UserList {
		k.SetUser(ctx, elem)
	}

	// Set user count
	k.SetUserCount(ctx, genState.UserCount)
	// Set all the filestore
	for _, elem := range genState.FilestoreList {
		k.SetFilestore(ctx, elem)
	}

	// Set filestore count
	k.SetFilestoreCount(ctx, genState.FilestoreCount)
	// Set all the agency
	for _, elem := range genState.AgencyList {
		k.SetAgency(ctx, elem)
	}

	// Set agency count
	k.SetAgencyCount(ctx, genState.AgencyCount)
	// Set all the product
	for _, elem := range genState.ProductList {
		k.SetProduct(ctx, elem)
	}

	// Set product count
	k.SetProductCount(ctx, genState.ProductCount)
	// Set all the storefront
	for _, elem := range genState.StorefrontList {
		k.SetStorefront(ctx, elem)
	}

	// Set storefront count
	k.SetStorefrontCount(ctx, genState.StorefrontCount)
	// Set all the request
	for _, elem := range genState.RequestList {
		k.SetRequest(ctx, elem)
	}

	// Set request count
	k.SetRequestCount(ctx, genState.RequestCount)
	// Set all the pricer
	for _, elem := range genState.PricerList {
		k.SetPricer(ctx, elem)
	}

	// Set pricer count
	k.SetPricerCount(ctx, genState.PricerCount)
	// Set all the manufacture
	for _, elem := range genState.ManufactureList {
		k.SetManufacture(ctx, elem)
	}

	// Set manufacture count
	k.SetManufactureCount(ctx, genState.ManufactureCount)
	// Set all the capability
	for _, elem := range genState.CapabilityList {
		k.SetCapability(ctx, elem)
	}

	// Set capability count
	k.SetCapabilityCount(ctx, genState.CapabilityCount)
	// Set all the response
	for _, elem := range genState.ResponseList {
		k.SetResponse(ctx, elem)
	}

	// Set response count
	k.SetResponseCount(ctx, genState.ResponseCount)
	// Set all the order
	for _, elem := range genState.OrderList {
		k.SetOrder(ctx, elem)
	}

	// Set order count
	k.SetOrderCount(ctx, genState.OrderCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.UserList = k.GetAllUser(ctx)
	genesis.UserCount = k.GetUserCount(ctx)
	genesis.FilestoreList = k.GetAllFilestore(ctx)
	genesis.FilestoreCount = k.GetFilestoreCount(ctx)
	genesis.AgencyList = k.GetAllAgency(ctx)
	genesis.AgencyCount = k.GetAgencyCount(ctx)
	genesis.ProductList = k.GetAllProduct(ctx)
	genesis.ProductCount = k.GetProductCount(ctx)
	genesis.StorefrontList = k.GetAllStorefront(ctx)
	genesis.StorefrontCount = k.GetStorefrontCount(ctx)
	genesis.RequestList = k.GetAllRequest(ctx)
	genesis.RequestCount = k.GetRequestCount(ctx)
	genesis.PricerList = k.GetAllPricer(ctx)
	genesis.PricerCount = k.GetPricerCount(ctx)
	genesis.ManufactureList = k.GetAllManufacture(ctx)
	genesis.ManufactureCount = k.GetManufactureCount(ctx)
	genesis.CapabilityList = k.GetAllCapability(ctx)
	genesis.CapabilityCount = k.GetCapabilityCount(ctx)
	genesis.ResponseList = k.GetAllResponse(ctx)
	genesis.ResponseCount = k.GetResponseCount(ctx)
	genesis.OrderList = k.GetAllOrder(ctx)
	genesis.OrderCount = k.GetOrderCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
