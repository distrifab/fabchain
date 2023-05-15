package keeper

import (
	"encoding/binary"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetResponseCount get the total number of response
func (k Keeper) GetResponseCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ResponseCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetResponseCount set the total number of response
func (k Keeper) SetResponseCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ResponseCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendResponse appends a response in the store with a new id and update the count
func (k Keeper) AppendResponse(
	ctx sdk.Context,
	response types.Response,
) uint64 {
	// Create the response
	count := k.GetResponseCount(ctx)

	// Set the ID of the appended value
	response.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResponseKey))
	appendedValue := k.cdc.MustMarshal(&response)
	store.Set(GetResponseIDBytes(response.Id), appendedValue)

	// Update response count
	k.SetResponseCount(ctx, count+1)

	return count
}

// SetResponse set a specific response in the store
func (k Keeper) SetResponse(ctx sdk.Context, response types.Response) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResponseKey))
	b := k.cdc.MustMarshal(&response)
	store.Set(GetResponseIDBytes(response.Id), b)
}

// GetResponse returns a response from its id
func (k Keeper) GetResponse(ctx sdk.Context, id uint64) (val types.Response, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResponseKey))
	b := store.Get(GetResponseIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveResponse removes a response from the store
func (k Keeper) RemoveResponse(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResponseKey))
	store.Delete(GetResponseIDBytes(id))
}

// GetAllResponse returns all response
func (k Keeper) GetAllResponse(ctx sdk.Context) (list []types.Response) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResponseKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Response
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetResponseIDBytes returns the byte representation of the ID
func GetResponseIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetResponseIDFromBytes returns ID in uint64 format from a byte array
func GetResponseIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
