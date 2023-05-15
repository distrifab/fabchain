package types_test

import (
	"testing"

	"fabchain/x/fab/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				UserList: []types.User{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				UserCount: 2,
				FilestoreList: []types.Filestore{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				FilestoreCount: 2,
				AgencyList: []types.Agency{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				AgencyCount: 2,
				ProductList: []types.Product{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				ProductCount: 2,
				StorefrontList: []types.Storefront{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				StorefrontCount: 2,
				RequestList: []types.Request{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				RequestCount: 2,
				PricerList: []types.Pricer{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				PricerCount: 2,
				ManufactureList: []types.Manufacture{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				ManufactureCount: 2,
				CapabilityList: []types.Capability{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				CapabilityCount: 2,
				ResponseList: []types.Response{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				ResponseCount: 2,
				OrderList: []types.Order{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				OrderCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated user",
			genState: &types.GenesisState{
				UserList: []types.User{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid user count",
			genState: &types.GenesisState{
				UserList: []types.User{
					{
						Id: 1,
					},
				},
				UserCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated filestore",
			genState: &types.GenesisState{
				FilestoreList: []types.Filestore{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid filestore count",
			genState: &types.GenesisState{
				FilestoreList: []types.Filestore{
					{
						Id: 1,
					},
				},
				FilestoreCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated agency",
			genState: &types.GenesisState{
				AgencyList: []types.Agency{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid agency count",
			genState: &types.GenesisState{
				AgencyList: []types.Agency{
					{
						Id: 1,
					},
				},
				AgencyCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated product",
			genState: &types.GenesisState{
				ProductList: []types.Product{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid product count",
			genState: &types.GenesisState{
				ProductList: []types.Product{
					{
						Id: 1,
					},
				},
				ProductCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated storefront",
			genState: &types.GenesisState{
				StorefrontList: []types.Storefront{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid storefront count",
			genState: &types.GenesisState{
				StorefrontList: []types.Storefront{
					{
						Id: 1,
					},
				},
				StorefrontCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated request",
			genState: &types.GenesisState{
				RequestList: []types.Request{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid request count",
			genState: &types.GenesisState{
				RequestList: []types.Request{
					{
						Id: 1,
					},
				},
				RequestCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated pricer",
			genState: &types.GenesisState{
				PricerList: []types.Pricer{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid pricer count",
			genState: &types.GenesisState{
				PricerList: []types.Pricer{
					{
						Id: 1,
					},
				},
				PricerCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated manufacture",
			genState: &types.GenesisState{
				ManufactureList: []types.Manufacture{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid manufacture count",
			genState: &types.GenesisState{
				ManufactureList: []types.Manufacture{
					{
						Id: 1,
					},
				},
				ManufactureCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated capability",
			genState: &types.GenesisState{
				CapabilityList: []types.Capability{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid capability count",
			genState: &types.GenesisState{
				CapabilityList: []types.Capability{
					{
						Id: 1,
					},
				},
				CapabilityCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated response",
			genState: &types.GenesisState{
				ResponseList: []types.Response{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid response count",
			genState: &types.GenesisState{
				ResponseList: []types.Response{
					{
						Id: 1,
					},
				},
				ResponseCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated order",
			genState: &types.GenesisState{
				OrderList: []types.Order{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid order count",
			genState: &types.GenesisState{
				OrderList: []types.Order{
					{
						Id: 1,
					},
				},
				OrderCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
