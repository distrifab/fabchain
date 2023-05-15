package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		UserList:        []User{},
		FilestoreList:   []Filestore{},
		AgencyList:      []Agency{},
		ProductList:     []Product{},
		StorefrontList:  []Storefront{},
		RequestList:     []Request{},
		PricerList:      []Pricer{},
		ManufactureList: []Manufacture{},
		CapabilityList:  []Capability{},
		ResponseList:    []Response{},
		OrderList:       []Order{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in user
	userIdMap := make(map[uint64]bool)
	userCount := gs.GetUserCount()
	for _, elem := range gs.UserList {
		if _, ok := userIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for user")
		}
		if elem.Id >= userCount {
			return fmt.Errorf("user id should be lower or equal than the last id")
		}
		userIdMap[elem.Id] = true
	}
	// Check for duplicated ID in filestore
	filestoreIdMap := make(map[uint64]bool)
	filestoreCount := gs.GetFilestoreCount()
	for _, elem := range gs.FilestoreList {
		if _, ok := filestoreIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for filestore")
		}
		if elem.Id >= filestoreCount {
			return fmt.Errorf("filestore id should be lower or equal than the last id")
		}
		filestoreIdMap[elem.Id] = true
	}
	// Check for duplicated ID in agency
	agencyIdMap := make(map[uint64]bool)
	agencyCount := gs.GetAgencyCount()
	for _, elem := range gs.AgencyList {
		if _, ok := agencyIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for agency")
		}
		if elem.Id >= agencyCount {
			return fmt.Errorf("agency id should be lower or equal than the last id")
		}
		agencyIdMap[elem.Id] = true
	}
	// Check for duplicated ID in product
	productIdMap := make(map[uint64]bool)
	productCount := gs.GetProductCount()
	for _, elem := range gs.ProductList {
		if _, ok := productIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for product")
		}
		if elem.Id >= productCount {
			return fmt.Errorf("product id should be lower or equal than the last id")
		}
		productIdMap[elem.Id] = true
	}
	// Check for duplicated ID in storefront
	storefrontIdMap := make(map[uint64]bool)
	storefrontCount := gs.GetStorefrontCount()
	for _, elem := range gs.StorefrontList {
		if _, ok := storefrontIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for storefront")
		}
		if elem.Id >= storefrontCount {
			return fmt.Errorf("storefront id should be lower or equal than the last id")
		}
		storefrontIdMap[elem.Id] = true
	}
	// Check for duplicated ID in request
	requestIdMap := make(map[uint64]bool)
	requestCount := gs.GetRequestCount()
	for _, elem := range gs.RequestList {
		if _, ok := requestIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for request")
		}
		if elem.Id >= requestCount {
			return fmt.Errorf("request id should be lower or equal than the last id")
		}
		requestIdMap[elem.Id] = true
	}
	// Check for duplicated ID in pricer
	pricerIdMap := make(map[uint64]bool)
	pricerCount := gs.GetPricerCount()
	for _, elem := range gs.PricerList {
		if _, ok := pricerIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for pricer")
		}
		if elem.Id >= pricerCount {
			return fmt.Errorf("pricer id should be lower or equal than the last id")
		}
		pricerIdMap[elem.Id] = true
	}
	// Check for duplicated ID in manufacture
	manufactureIdMap := make(map[uint64]bool)
	manufactureCount := gs.GetManufactureCount()
	for _, elem := range gs.ManufactureList {
		if _, ok := manufactureIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for manufacture")
		}
		if elem.Id >= manufactureCount {
			return fmt.Errorf("manufacture id should be lower or equal than the last id")
		}
		manufactureIdMap[elem.Id] = true
	}
	// Check for duplicated ID in capability
	capabilityIdMap := make(map[uint64]bool)
	capabilityCount := gs.GetCapabilityCount()
	for _, elem := range gs.CapabilityList {
		if _, ok := capabilityIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for capability")
		}
		if elem.Id >= capabilityCount {
			return fmt.Errorf("capability id should be lower or equal than the last id")
		}
		capabilityIdMap[elem.Id] = true
	}
	// Check for duplicated ID in response
	responseIdMap := make(map[uint64]bool)
	responseCount := gs.GetResponseCount()
	for _, elem := range gs.ResponseList {
		if _, ok := responseIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for response")
		}
		if elem.Id >= responseCount {
			return fmt.Errorf("response id should be lower or equal than the last id")
		}
		responseIdMap[elem.Id] = true
	}
	// Check for duplicated ID in order
	orderIdMap := make(map[uint64]bool)
	orderCount := gs.GetOrderCount()
	for _, elem := range gs.OrderList {
		if _, ok := orderIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for order")
		}
		if elem.Id >= orderCount {
			return fmt.Errorf("order id should be lower or equal than the last id")
		}
		orderIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
