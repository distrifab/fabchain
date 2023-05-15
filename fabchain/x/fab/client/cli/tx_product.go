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

func CmdCreateProduct() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-product [owner] [name] [agency] [shares] [filestore] [root] [manifest]",
		Short: "Create a new product",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOwner := args[0]
			argName := args[1]
			argAgency := args[2]
			argShares := strings.Split(args[3], listSeparator)
			argFilestore := args[4]
			argRoot := args[5]
			argManifest := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateProduct(clientCtx.GetFromAddress().String(), argOwner, argName, argAgency, argShares, argFilestore, argRoot, argManifest)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateProduct() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-product [id] [owner] [name] [agency] [shares] [filestore] [root] [manifest]",
		Short: "Update a product",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argOwner := args[1]

			argName := args[2]

			argAgency := args[3]

			argShares := strings.Split(args[4], listSeparator)

			argFilestore := args[5]

			argRoot := args[6]

			argManifest := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateProduct(clientCtx.GetFromAddress().String(), id, argOwner, argName, argAgency, argShares, argFilestore, argRoot, argManifest)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteProduct() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-product [id]",
		Short: "Delete a product by id",
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

			msg := types.NewMsgDeleteProduct(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
