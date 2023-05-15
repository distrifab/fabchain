package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"fabchain/x/fab/types"
)

func TestProductMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateProduct(ctx, &types.MsgCreateProduct{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestProductMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateProduct
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateProduct{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateProduct{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateProduct{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateProduct(ctx, &types.MsgCreateProduct{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateProduct(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestProductMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteProduct
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteProduct{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteProduct{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteProduct{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateProduct(ctx, &types.MsgCreateProduct{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteProduct(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
