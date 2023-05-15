package keeper

import (
	"encoding/binary"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetFilestoreCount get the total number of filestore
func (k Keeper) GetFilestoreCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FilestoreCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetFilestoreCount set the total number of filestore
func (k Keeper) SetFilestoreCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FilestoreCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendFilestore appends a filestore in the store with a new id and update the count
func (k Keeper) AppendFilestore(
	ctx sdk.Context,
	filestore types.Filestore,
) uint64 {
	// Create the filestore
	count := k.GetFilestoreCount(ctx)

	// Set the ID of the appended value
	filestore.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FilestoreKey))
	appendedValue := k.cdc.MustMarshal(&filestore)
	store.Set(GetFilestoreIDBytes(filestore.Id), appendedValue)

	// Update filestore count
	k.SetFilestoreCount(ctx, count+1)

	return count
}

// SetFilestore set a specific filestore in the store
func (k Keeper) SetFilestore(ctx sdk.Context, filestore types.Filestore) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FilestoreKey))
	b := k.cdc.MustMarshal(&filestore)
	store.Set(GetFilestoreIDBytes(filestore.Id), b)
}

// GetFilestore returns a filestore from its id
func (k Keeper) GetFilestore(ctx sdk.Context, id uint64) (val types.Filestore, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FilestoreKey))
	b := store.Get(GetFilestoreIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFilestore removes a filestore from the store
func (k Keeper) RemoveFilestore(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FilestoreKey))
	store.Delete(GetFilestoreIDBytes(id))
}

// GetAllFilestore returns all filestore
func (k Keeper) GetAllFilestore(ctx sdk.Context) (list []types.Filestore) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FilestoreKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Filestore
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFilestoreIDBytes returns the byte representation of the ID
func GetFilestoreIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFilestoreIDFromBytes returns ID in uint64 format from a byte array
func GetFilestoreIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
