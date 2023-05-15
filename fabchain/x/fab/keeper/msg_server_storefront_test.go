package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"fabchain/x/fab/types"
)

func TestStorefrontMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateStorefront(ctx, &types.MsgCreateStorefront{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestStorefrontMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateStorefront
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateStorefront{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateStorefront{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateStorefront{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateStorefront(ctx, &types.MsgCreateStorefront{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateStorefront(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestStorefrontMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteStorefront
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteStorefront{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteStorefront{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteStorefront{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateStorefront(ctx, &types.MsgCreateStorefront{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteStorefront(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
