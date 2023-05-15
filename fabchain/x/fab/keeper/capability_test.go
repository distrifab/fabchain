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

func createNCapability(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Capability {
	items := make([]types.Capability, n)
	for i := range items {
		items[i].Id = keeper.AppendCapability(ctx, items[i])
	}
	return items
}

func TestCapabilityGet(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNCapability(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCapability(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCapabilityRemove(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNCapability(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCapability(ctx, item.Id)
		_, found := keeper.GetCapability(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCapabilityGetAll(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNCapability(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCapability(ctx)),
	)
}

func TestCapabilityCount(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNCapability(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCapabilityCount(ctx))
}
