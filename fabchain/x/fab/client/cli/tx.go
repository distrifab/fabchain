package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"fabchain/x/fab/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateUser())
	cmd.AddCommand(CmdUpdateUser())
	cmd.AddCommand(CmdDeleteUser())
	cmd.AddCommand(CmdCreateFilestore())
	cmd.AddCommand(CmdUpdateFilestore())
	cmd.AddCommand(CmdDeleteFilestore())
	cmd.AddCommand(CmdCreateAgency())
	cmd.AddCommand(CmdUpdateAgency())
	cmd.AddCommand(CmdDeleteAgency())
	cmd.AddCommand(CmdCreateProduct())
	cmd.AddCommand(CmdUpdateProduct())
	cmd.AddCommand(CmdDeleteProduct())
	cmd.AddCommand(CmdCreateStorefront())
	cmd.AddCommand(CmdUpdateStorefront())
	cmd.AddCommand(CmdDeleteStorefront())
	cmd.AddCommand(CmdCreateRequest())
	cmd.AddCommand(CmdUpdateRequest())
	cmd.AddCommand(CmdDeleteRequest())
	cmd.AddCommand(CmdCreatePricer())
	cmd.AddCommand(CmdUpdatePricer())
	cmd.AddCommand(CmdDeletePricer())
	cmd.AddCommand(CmdCreateManufacture())
	cmd.AddCommand(CmdUpdateManufacture())
	cmd.AddCommand(CmdDeleteManufacture())
	cmd.AddCommand(CmdCreateCapability())
	cmd.AddCommand(CmdUpdateCapability())
	cmd.AddCommand(CmdDeleteCapability())
	cmd.AddCommand(CmdCreateResponse())
	cmd.AddCommand(CmdUpdateResponse())
	cmd.AddCommand(CmdDeleteResponse())
	cmd.AddCommand(CmdCreateOrder())
	cmd.AddCommand(CmdUpdateOrder())
	cmd.AddCommand(CmdDeleteOrder())
	// this line is used by starport scaffolding # 1

	return cmd
}
