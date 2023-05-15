package keeper

import (
	"encoding/binary"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPricerCount get the total number of pricer
func (k Keeper) GetPricerCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PricerCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPricerCount set the total number of pricer
func (k Keeper) SetPricerCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PricerCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPricer appends a pricer in the store with a new id and update the count
func (k Keeper) AppendPricer(
	ctx sdk.Context,
	pricer types.Pricer,
) uint64 {
	// Create the pricer
	count := k.GetPricerCount(ctx)

	// Set the ID of the appended value
	pricer.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PricerKey))
	appendedValue := k.cdc.MustMarshal(&pricer)
	store.Set(GetPricerIDBytes(pricer.Id), appendedValue)

	// Update pricer count
	k.SetPricerCount(ctx, count+1)

	return count
}

// SetPricer set a specific pricer in the store
func (k Keeper) SetPricer(ctx sdk.Context, pricer types.Pricer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PricerKey))
	b := k.cdc.MustMarshal(&pricer)
	store.Set(GetPricerIDBytes(pricer.Id), b)
}

// GetPricer returns a pricer from its id
func (k Keeper) GetPricer(ctx sdk.Context, id uint64) (val types.Pricer, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PricerKey))
	b := store.Get(GetPricerIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePricer removes a pricer from the store
func (k Keeper) RemovePricer(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PricerKey))
	store.Delete(GetPricerIDBytes(id))
}

// GetAllPricer returns all pricer
func (k Keeper) GetAllPricer(ctx sdk.Context) (list []types.Pricer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PricerKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pricer
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPricerIDBytes returns the byte representation of the ID
func GetPricerIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPricerIDFromBytes returns ID in uint64 format from a byte array
func GetPricerIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
