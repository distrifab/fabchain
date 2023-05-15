package keeper

import (
	"encoding/binary"

	"fabchain/x/fab/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetProductCount get the total number of product
func (k Keeper) GetProductCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ProductCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetProductCount set the total number of product
func (k Keeper) SetProductCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ProductCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendProduct appends a product in the store with a new id and update the count
func (k Keeper) AppendProduct(
	ctx sdk.Context,
	product types.Product,
) uint64 {
	// Create the product
	count := k.GetProductCount(ctx)

	// Set the ID of the appended value
	product.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	appendedValue := k.cdc.MustMarshal(&product)
	store.Set(GetProductIDBytes(product.Id), appendedValue)

	// Update product count
	k.SetProductCount(ctx, count+1)

	return count
}

// SetProduct set a specific product in the store
func (k Keeper) SetProduct(ctx sdk.Context, product types.Product) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	b := k.cdc.MustMarshal(&product)
	store.Set(GetProductIDBytes(product.Id), b)
}

// GetProduct returns a product from its id
func (k Keeper) GetProduct(ctx sdk.Context, id uint64) (val types.Product, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	b := store.Get(GetProductIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveProduct removes a product from the store
func (k Keeper) RemoveProduct(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	store.Delete(GetProductIDBytes(id))
}

// GetAllProduct returns all product
func (k Keeper) GetAllProduct(ctx sdk.Context) (list []types.Product) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Product
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetProductIDBytes returns the byte representation of the ID
func GetProductIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetProductIDFromBytes returns ID in uint64 format from a byte array
func GetProductIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
