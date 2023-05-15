package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"fabchain/x/fab/types"
)

func TestFilestoreMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateFilestore(ctx, &types.MsgCreateFilestore{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestFilestoreMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateFilestore
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateFilestore{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateFilestore{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateFilestore{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateFilestore(ctx, &types.MsgCreateFilestore{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateFilestore(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestFilestoreMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteFilestore
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteFilestore{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteFilestore{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteFilestore{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateFilestore(ctx, &types.MsgCreateFilestore{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteFilestore(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
