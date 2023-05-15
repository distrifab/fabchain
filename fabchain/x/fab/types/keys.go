package types

const (
	// ModuleName defines the module name
	ModuleName = "fab"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_fab"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	UserKey      = "User/value/"
	UserCountKey = "User/count/"
)

const (
	FilestoreKey      = "Filestore/value/"
	FilestoreCountKey = "Filestore/count/"
)

const (
	AgencyKey      = "Agency/value/"
	AgencyCountKey = "Agency/count/"
)

const (
	ProductKey      = "Product/value/"
	ProductCountKey = "Product/count/"
)

const (
	StorefrontKey      = "Storefront/value/"
	StorefrontCountKey = "Storefront/count/"
)

const (
	RequestKey      = "Request/value/"
	RequestCountKey = "Request/count/"
)

const (
	PricerKey      = "Pricer/value/"
	PricerCountKey = "Pricer/count/"
)

const (
	ManufactureKey      = "Manufacture/value/"
	ManufactureCountKey = "Manufacture/count/"
)

const (
	CapabilityKey      = "Capability/value/"
	CapabilityCountKey = "Capability/count/"
)

const (
	ResponseKey      = "Response/value/"
	ResponseCountKey = "Response/count/"
)

const (
	OrderKey      = "Order/value/"
	OrderCountKey = "Order/count/"
)
