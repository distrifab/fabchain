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

func createNFilestore(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Filestore {
	items := make([]types.Filestore, n)
	for i := range items {
		items[i].Id = keeper.AppendFilestore(ctx, items[i])
	}
	return items
}

func TestFilestoreGet(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNFilestore(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetFilestore(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestFilestoreRemove(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNFilestore(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFilestore(ctx, item.Id)
		_, found := keeper.GetFilestore(ctx, item.Id)
		require.False(t, found)
	}
}

func TestFilestoreGetAll(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNFilestore(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFilestore(ctx)),
	)
}

func TestFilestoreCount(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNFilestore(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetFilestoreCount(ctx))
}
