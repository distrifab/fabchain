package keeper

import (
	"encoding/binary"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetAgencyCount get the total number of agency
func (k Keeper) GetAgencyCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.AgencyCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetAgencyCount set the total number of agency
func (k Keeper) SetAgencyCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.AgencyCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendAgency appends a agency in the store with a new id and update the count
func (k Keeper) AppendAgency(
	ctx sdk.Context,
	agency types.Agency,
) uint64 {
	// Create the agency
	count := k.GetAgencyCount(ctx)

	// Set the ID of the appended value
	agency.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AgencyKey))
	appendedValue := k.cdc.MustMarshal(&agency)
	store.Set(GetAgencyIDBytes(agency.Id), appendedValue)

	// Update agency count
	k.SetAgencyCount(ctx, count+1)

	return count
}

// SetAgency set a specific agency in the store
func (k Keeper) SetAgency(ctx sdk.Context, agency types.Agency) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AgencyKey))
	b := k.cdc.MustMarshal(&agency)
	store.Set(GetAgencyIDBytes(agency.Id), b)
}

// GetAgency returns a agency from its id
func (k Keeper) GetAgency(ctx sdk.Context, id uint64) (val types.Agency, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AgencyKey))
	b := store.Get(GetAgencyIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAgency removes a agency from the store
func (k Keeper) RemoveAgency(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AgencyKey))
	store.Delete(GetAgencyIDBytes(id))
}

// GetAllAgency returns all agency
func (k Keeper) GetAllAgency(ctx sdk.Context) (list []types.Agency) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AgencyKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Agency
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAgencyIDBytes returns the byte representation of the ID
func GetAgencyIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetAgencyIDFromBytes returns ID in uint64 format from a byte array
func GetAgencyIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
