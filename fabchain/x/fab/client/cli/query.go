package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"fabchain/x/fab/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group fab queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListUser())
	cmd.AddCommand(CmdShowUser())
	cmd.AddCommand(CmdListFilestore())
	cmd.AddCommand(CmdShowFilestore())
	cmd.AddCommand(CmdListAgency())
	cmd.AddCommand(CmdShowAgency())
	cmd.AddCommand(CmdListProduct())
	cmd.AddCommand(CmdShowProduct())
	cmd.AddCommand(CmdListStorefront())
	cmd.AddCommand(CmdShowStorefront())
	cmd.AddCommand(CmdListRequest())
	cmd.AddCommand(CmdShowRequest())
	cmd.AddCommand(CmdListPricer())
	cmd.AddCommand(CmdShowPricer())
	cmd.AddCommand(CmdListManufacture())
	cmd.AddCommand(CmdShowManufacture())
	cmd.AddCommand(CmdListCapability())
	cmd.AddCommand(CmdShowCapability())
	cmd.AddCommand(CmdListResponse())
	cmd.AddCommand(CmdShowResponse())
	cmd.AddCommand(CmdListOrder())
	cmd.AddCommand(CmdShowOrder())
	// this line is used by starport scaffolding # 1

	return cmd
}
