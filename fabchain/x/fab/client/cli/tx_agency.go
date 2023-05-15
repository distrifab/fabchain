package cli

import (
	"strconv"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateAgency() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-agency [owner] [name] [payment-provider] [payment-address]",
		Short: "Create a new agency",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOwner := args[0]
			argName := args[1]
			argPaymentProvider := args[2]
			argPaymentAddress := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAgency(clientCtx.GetFromAddress().String(), argOwner, argName, argPaymentProvider, argPaymentAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateAgency() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-agency [id] [owner] [name] [payment-provider] [payment-address]",
		Short: "Update a agency",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argOwner := args[1]

			argName := args[2]

			argPaymentProvider := args[3]

			argPaymentAddress := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateAgency(clientCtx.GetFromAddress().String(), id, argOwner, argName, argPaymentProvider, argPaymentAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteAgency() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-agency [id]",
		Short: "Delete a agency by id",
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

			msg := types.NewMsgDeleteAgency(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
