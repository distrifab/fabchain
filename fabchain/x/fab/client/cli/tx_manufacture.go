package cli

import (
	"strconv"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateManufacture() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-manufacture [owner] [name] [pricer] [payment-provider] [payment-address]",
		Short: "Create a new manufacture",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOwner := args[0]
			argName := args[1]
			argPricer := strings.Split(args[2], listSeparator)
			argPaymentProvider := args[3]
			argPaymentAddress := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateManufacture(clientCtx.GetFromAddress().String(), argOwner, argName, argPricer, argPaymentProvider, argPaymentAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateManufacture() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-manufacture [id] [owner] [name] [pricer] [payment-provider] [payment-address]",
		Short: "Update a manufacture",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argOwner := args[1]

			argName := args[2]

			argPricer := strings.Split(args[3], listSeparator)

			argPaymentProvider := args[4]

			argPaymentAddress := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateManufacture(clientCtx.GetFromAddress().String(), id, argOwner, argName, argPricer, argPaymentProvider, argPaymentAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteManufacture() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-manufacture [id]",
		Short: "Delete a manufacture by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteManufacture(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
