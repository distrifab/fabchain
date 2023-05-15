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

func createNManufacture(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Manufacture {
	items := make([]types.Manufacture, n)
	for i := range items {
		items[i].Id = keeper.AppendManufacture(ctx, items[i])
	}
	return items
}

func TestManufactureGet(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNManufacture(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetManufacture(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestManufactureRemove(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNManufacture(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveManufacture(ctx, item.Id)
		_, found := keeper.GetManufacture(ctx, item.Id)
		require.False(t, found)
	}
}

func TestManufactureGetAll(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNManufacture(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllManufacture(ctx)),
	)
}

func TestManufactureCount(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNManufacture(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetManufactureCount(ctx))
}
