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

func createNStorefront(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Storefront {
	items := make([]types.Storefront, n)
	for i := range items {
		items[i].Id = keeper.AppendStorefront(ctx, items[i])
	}
	return items
}

func TestStorefrontGet(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNStorefront(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetStorefront(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestStorefrontRemove(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNStorefront(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStorefront(ctx, item.Id)
		_, found := keeper.GetStorefront(ctx, item.Id)
		require.False(t, found)
	}
}

func TestStorefrontGetAll(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNStorefront(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStorefront(ctx)),
	)
}

func TestStorefrontCount(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNStorefront(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetStorefrontCount(ctx))
}
