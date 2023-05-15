package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"fabchain/x/fab/types"
)

func TestResponseMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateResponse(ctx, &types.MsgCreateResponse{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestResponseMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateResponse
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateResponse{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateResponse{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateResponse{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateResponse(ctx, &types.MsgCreateResponse{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateResponse(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestResponseMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteResponse
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteResponse{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteResponse{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteResponse{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateResponse(ctx, &types.MsgCreateResponse{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteResponse(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
