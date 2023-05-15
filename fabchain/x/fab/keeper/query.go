package keeper

import (
	"fabchain/x/fab/types"
)

var _ types.QueryServer = Keeper{}
