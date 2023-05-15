package keeper

import (
	"encoding/binary"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCapabilityCount get the total number of capability
func (k Keeper) GetCapabilityCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CapabilityCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCapabilityCount set the total number of capability
func (k Keeper) SetCapabilityCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CapabilityCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCapability appends a capability in the store with a new id and update the count
func (k Keeper) AppendCapability(
	ctx sdk.Context,
	capability types.Capability,
) uint64 {
	// Create the capability
	count := k.GetCapabilityCount(ctx)

	// Set the ID of the appended value
	capability.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CapabilityKey))
	appendedValue := k.cdc.MustMarshal(&capability)
	store.Set(GetCapabilityIDBytes(capability.Id), appendedValue)

	// Update capability count
	k.SetCapabilityCount(ctx, count+1)

	return count
}

// SetCapability set a specific capability in the store
func (k Keeper) SetCapability(ctx sdk.Context, capability types.Capability) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CapabilityKey))
	b := k.cdc.MustMarshal(&capability)
	store.Set(GetCapabilityIDBytes(capability.Id), b)
}

// GetCapability returns a capability from its id
func (k Keeper) GetCapability(ctx sdk.Context, id uint64) (val types.Capability, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CapabilityKey))
	b := store.Get(GetCapabilityIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCapability removes a capability from the store
func (k Keeper) RemoveCapability(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CapabilityKey))
	store.Delete(GetCapabilityIDBytes(id))
}

// GetAllCapability returns all capability
func (k Keeper) GetAllCapability(ctx sdk.Context) (list []types.Capability) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CapabilityKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Capability
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCapabilityIDBytes returns the byte representation of the ID
func GetCapabilityIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCapabilityIDFromBytes returns ID in uint64 format from a byte array
func GetCapabilityIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
