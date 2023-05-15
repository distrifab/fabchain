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

func createNAgency(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Agency {
	items := make([]types.Agency, n)
	for i := range items {
		items[i].Id = keeper.AppendAgency(ctx, items[i])
	}
	return items
}

func TestAgencyGet(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNAgency(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetAgency(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestAgencyRemove(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNAgency(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAgency(ctx, item.Id)
		_, found := keeper.GetAgency(ctx, item.Id)
		require.False(t, found)
	}
}

func TestAgencyGetAll(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNAgency(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAgency(ctx)),
	)
}

func TestAgencyCount(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNAgency(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetAgencyCount(ctx))
}
