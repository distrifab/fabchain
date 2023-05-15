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

func createNUser(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.User {
	items := make([]types.User, n)
	for i := range items {
		items[i].Id = keeper.AppendUser(ctx, items[i])
	}
	return items
}

func TestUserGet(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNUser(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetUser(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestUserRemove(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNUser(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveUser(ctx, item.Id)
		_, found := keeper.GetUser(ctx, item.Id)
		require.False(t, found)
	}
}

func TestUserGetAll(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNUser(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllUser(ctx)),
	)
}

func TestUserCount(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNUser(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetUserCount(ctx))
}
