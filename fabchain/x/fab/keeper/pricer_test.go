package keeper_test

import (
	"testing"

	keepertest "fabchain/testutil/keeper"
	"fabchain/testutil/nullify"
	"fabchain/x/fab/keeper"
	"fabchain/x/fab/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNPricer(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Pricer {
	items := make([]types.Pricer, n)
	for i := range items {
		items[i].Id = keeper.AppendPricer(ctx, items[i])
	}
	return items
}

func TestPricerGet(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNPricer(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPricer(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPricerRemove(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNPricer(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePricer(ctx, item.Id)
		_, found := keeper.GetPricer(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPricerGetAll(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNPricer(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPricer(ctx)),
	)
}

func TestPricerCount(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNPricer(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPricerCount(ctx))
}
