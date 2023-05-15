package keeper

import (
	"encoding/binary"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetStorefrontCount get the total number of storefront
func (k Keeper) GetStorefrontCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.StorefrontCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetStorefrontCount set the total number of storefront
func (k Keeper) SetStorefrontCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.StorefrontCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendStorefront appends a storefront in the store with a new id and update the count
func (k Keeper) AppendStorefront(
	ctx sdk.Context,
	storefront types.Storefront,
) uint64 {
	// Create the storefront
	count := k.GetStorefrontCount(ctx)

	// Set the ID of the appended value
	storefront.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StorefrontKey))
	appendedValue := k.cdc.MustMarshal(&storefront)
	store.Set(GetStorefrontIDBytes(storefront.Id), appendedValue)

	// Update storefront count
	k.SetStorefrontCount(ctx, count+1)

	return count
}

// SetStorefront set a specific storefront in the store
func (k Keeper) SetStorefront(ctx sdk.Context, storefront types.Storefront) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StorefrontKey))
	b := k.cdc.MustMarshal(&storefront)
	store.Set(GetStorefrontIDBytes(storefront.Id), b)
}

// GetStorefront returns a storefront from its id
func (k Keeper) GetStorefront(ctx sdk.Context, id uint64) (val types.Storefront, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StorefrontKey))
	b := store.Get(GetStorefrontIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStorefront removes a storefront from the store
func (k Keeper) RemoveStorefront(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StorefrontKey))
	store.Delete(GetStorefrontIDBytes(id))
}

// GetAllStorefront returns all storefront
func (k Keeper) GetAllStorefront(ctx sdk.Context) (list []types.Storefront) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StorefrontKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Storefront
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetStorefrontIDBytes returns the byte representation of the ID
func GetStorefrontIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetStorefrontIDFromBytes returns ID in uint64 format from a byte array
func GetStorefrontIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
