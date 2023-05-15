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

func createNResponse(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Response {
	items := make([]types.Response, n)
	for i := range items {
		items[i].Id = keeper.AppendResponse(ctx, items[i])
	}
	return items
}

func TestResponseGet(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNResponse(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetResponse(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestResponseRemove(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNResponse(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveResponse(ctx, item.Id)
		_, found := keeper.GetResponse(ctx, item.Id)
		require.False(t, found)
	}
}

func TestResponseGetAll(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNResponse(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllResponse(ctx)),
	)
}

func TestResponseCount(t *testing.T) {
	keeper, ctx := keepertest.FabKeeper(t)
	items := createNResponse(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetResponseCount(ctx))
}
