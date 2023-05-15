package fab_test

import (
	"testing"

	keepertest "fabchain/testutil/keeper"
	"fabchain/testutil/nullify"
	"fabchain/x/fab"
	"fabchain/x/fab/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		UserList: []types.User{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		UserCount: 2,
		FilestoreList: []types.Filestore{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		FilestoreCount: 2,
		AgencyList: []types.Agency{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		AgencyCount: 2,
		ProductList: []types.Product{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ProductCount: 2,
		StorefrontList: []types.Storefront{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		StorefrontCount: 2,
		RequestList: []types.Request{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		RequestCount: 2,
		PricerList: []types.Pricer{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PricerCount: 2,
		ManufactureList: []types.Manufacture{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ManufactureCount: 2,
		CapabilityList: []types.Capability{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CapabilityCount: 2,
		ResponseList: []types.Response{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ResponseCount: 2,
		OrderList: []types.Order{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		OrderCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.FabKeeper(t)
	fab.InitGenesis(ctx, *k, genesisState)
	got := fab.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.UserList, got.UserList)
	require.Equal(t, genesisState.UserCount, got.UserCount)
	require.ElementsMatch(t, genesisState.FilestoreList, got.FilestoreList)
	require.Equal(t, genesisState.FilestoreCount, got.FilestoreCount)
	require.ElementsMatch(t, genesisState.AgencyList, got.AgencyList)
	require.Equal(t, genesisState.AgencyCount, got.AgencyCount)
	require.ElementsMatch(t, genesisState.ProductList, got.ProductList)
	require.Equal(t, genesisState.ProductCount, got.ProductCount)
	require.ElementsMatch(t, genesisState.StorefrontList, got.StorefrontList)
	require.Equal(t, genesisState.StorefrontCount, got.StorefrontCount)
	require.ElementsMatch(t, genesisState.RequestList, got.RequestList)
	require.Equal(t, genesisState.RequestCount, got.RequestCount)
	require.ElementsMatch(t, genesisState.PricerList, got.PricerList)
	require.Equal(t, genesisState.PricerCount, got.PricerCount)
	require.ElementsMatch(t, genesisState.ManufactureList, got.ManufactureList)
	require.Equal(t, genesisState.ManufactureCount, got.ManufactureCount)
	require.ElementsMatch(t, genesisState.CapabilityList, got.CapabilityList)
	require.Equal(t, genesisState.CapabilityCount, got.CapabilityCount)
	require.ElementsMatch(t, genesisState.ResponseList, got.ResponseList)
	require.Equal(t, genesisState.ResponseCount, got.ResponseCount)
	require.ElementsMatch(t, genesisState.OrderList, got.OrderList)
	require.Equal(t, genesisState.OrderCount, got.OrderCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
