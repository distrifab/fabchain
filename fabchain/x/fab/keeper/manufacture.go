package keeper

import (
	"encoding/binary"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetManufactureCount get the total number of manufacture
func (k Keeper) GetManufactureCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ManufactureCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetManufactureCount set the total number of manufacture
func (k Keeper) SetManufactureCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ManufactureCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendManufacture appends a manufacture in the store with a new id and update the count
func (k Keeper) AppendManufacture(
	ctx sdk.Context,
	manufacture types.Manufacture,
) uint64 {
	// Create the manufacture
	count := k.GetManufactureCount(ctx)

	// Set the ID of the appended value
	manufacture.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ManufactureKey))
	appendedValue := k.cdc.MustMarshal(&manufacture)
	store.Set(GetManufactureIDBytes(manufacture.Id), appendedValue)

	// Update manufacture count
	k.SetManufactureCount(ctx, count+1)

	return count
}

// SetManufacture set a specific manufacture in the store
func (k Keeper) SetManufacture(ctx sdk.Context, manufacture types.Manufacture) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ManufactureKey))
	b := k.cdc.MustMarshal(&manufacture)
	store.Set(GetManufactureIDBytes(manufacture.Id), b)
}

// GetManufacture returns a manufacture from its id
func (k Keeper) GetManufacture(ctx sdk.Context, id uint64) (val types.Manufacture, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ManufactureKey))
	b := store.Get(GetManufactureIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveManufacture removes a manufacture from the store
func (k Keeper) RemoveManufacture(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ManufactureKey))
	store.Delete(GetManufactureIDBytes(id))
}

// GetAllManufacture returns all manufacture
func (k Keeper) GetAllManufacture(ctx sdk.Context) (list []types.Manufacture) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ManufactureKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Manufacture
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetManufactureIDBytes returns the byte representation of the ID
func GetManufactureIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetManufactureIDFromBytes returns ID in uint64 format from a byte array
func GetManufactureIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
