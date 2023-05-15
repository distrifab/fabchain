package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"fabchain/x/fab/types"
)

func TestManufactureMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateManufacture(ctx, &types.MsgCreateManufacture{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestManufactureMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateManufacture
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateManufacture{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateManufacture{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateManufacture{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateManufacture(ctx, &types.MsgCreateManufacture{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateManufacture(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestManufactureMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteManufacture
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteManufacture{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteManufacture{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteManufacture{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateManufacture(ctx, &types.MsgCreateManufacture{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteManufacture(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
