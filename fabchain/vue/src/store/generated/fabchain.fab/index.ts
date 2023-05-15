import { Client, registry, MissingWalletError } from 'fabchain-client-ts'

import { Agency } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateAgency } from "fabchain-client-ts/fabchain.fab/types"
import { Capability } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateCapability } from "fabchain-client-ts/fabchain.fab/types"
import { Filestore } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateFilestore } from "fabchain-client-ts/fabchain.fab/types"
import { Manufacture } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateManufacture } from "fabchain-client-ts/fabchain.fab/types"
import { Order } from "fabchain-client-ts/fabchain.fab/types"
import { Params } from "fabchain-client-ts/fabchain.fab/types"
import { Pricer } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreatePricer } from "fabchain-client-ts/fabchain.fab/types"
import { Product } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateProduct } from "fabchain-client-ts/fabchain.fab/types"
import { Request } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateRequest } from "fabchain-client-ts/fabchain.fab/types"
import { Response } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateResponse } from "fabchain-client-ts/fabchain.fab/types"
import { Storefront } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateStorefront } from "fabchain-client-ts/fabchain.fab/types"
import { User } from "fabchain-client-ts/fabchain.fab/types"
import { EventCreateUser } from "fabchain-client-ts/fabchain.fab/types"


export { Agency, EventCreateAgency, Capability, EventCreateCapability, Filestore, EventCreateFilestore, Manufacture, EventCreateManufacture, Order, Params, Pricer, EventCreatePricer, Product, EventCreateProduct, Request, EventCreateRequest, Response, EventCreateResponse, Storefront, EventCreateStorefront, User, EventCreateUser };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				User: {},
				UserAll: {},
				Filestore: {},
				FilestoreAll: {},
				Agency: {},
				AgencyAll: {},
				Product: {},
				ProductAll: {},
				Storefront: {},
				StorefrontAll: {},
				Request: {},
				RequestAll: {},
				Pricer: {},
				PricerAll: {},
				Manufacture: {},
				ManufactureAll: {},
				Capability: {},
				CapabilityAll: {},
				Response: {},
				ResponseAll: {},
				Order: {},
				OrderAll: {},
				
				_Structure: {
						Agency: getStructure(Agency.fromPartial({})),
						EventCreateAgency: getStructure(EventCreateAgency.fromPartial({})),
						Capability: getStructure(Capability.fromPartial({})),
						EventCreateCapability: getStructure(EventCreateCapability.fromPartial({})),
						Filestore: getStructure(Filestore.fromPartial({})),
						EventCreateFilestore: getStructure(EventCreateFilestore.fromPartial({})),
						Manufacture: getStructure(Manufacture.fromPartial({})),
						EventCreateManufacture: getStructure(EventCreateManufacture.fromPartial({})),
						Order: getStructure(Order.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						Pricer: getStructure(Pricer.fromPartial({})),
						EventCreatePricer: getStructure(EventCreatePricer.fromPartial({})),
						Product: getStructure(Product.fromPartial({})),
						EventCreateProduct: getStructure(EventCreateProduct.fromPartial({})),
						Request: getStructure(Request.fromPartial({})),
						EventCreateRequest: getStructure(EventCreateRequest.fromPartial({})),
						Response: getStructure(Response.fromPartial({})),
						EventCreateResponse: getStructure(EventCreateResponse.fromPartial({})),
						Storefront: getStructure(Storefront.fromPartial({})),
						EventCreateStorefront: getStructure(EventCreateStorefront.fromPartial({})),
						User: getStructure(User.fromPartial({})),
						EventCreateUser: getStructure(EventCreateUser.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getUser: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.User[JSON.stringify(params)] ?? {}
		},
				getUserAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UserAll[JSON.stringify(params)] ?? {}
		},
				getFilestore: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Filestore[JSON.stringify(params)] ?? {}
		},
				getFilestoreAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FilestoreAll[JSON.stringify(params)] ?? {}
		},
				getAgency: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Agency[JSON.stringify(params)] ?? {}
		},
				getAgencyAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AgencyAll[JSON.stringify(params)] ?? {}
		},
				getProduct: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Product[JSON.stringify(params)] ?? {}
		},
				getProductAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProductAll[JSON.stringify(params)] ?? {}
		},
				getStorefront: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Storefront[JSON.stringify(params)] ?? {}
		},
				getStorefrontAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StorefrontAll[JSON.stringify(params)] ?? {}
		},
				getRequest: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Request[JSON.stringify(params)] ?? {}
		},
				getRequestAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RequestAll[JSON.stringify(params)] ?? {}
		},
				getPricer: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Pricer[JSON.stringify(params)] ?? {}
		},
				getPricerAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PricerAll[JSON.stringify(params)] ?? {}
		},
				getManufacture: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Manufacture[JSON.stringify(params)] ?? {}
		},
				getManufactureAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ManufactureAll[JSON.stringify(params)] ?? {}
		},
				getCapability: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Capability[JSON.stringify(params)] ?? {}
		},
				getCapabilityAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CapabilityAll[JSON.stringify(params)] ?? {}
		},
				getResponse: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Response[JSON.stringify(params)] ?? {}
		},
				getResponseAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ResponseAll[JSON.stringify(params)] ?? {}
		},
				getOrder: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Order[JSON.stringify(params)] ?? {}
		},
				getOrderAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.OrderAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: fabchain.fab initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUser({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryUser( key.id)).data
				
					
				commit('QUERY', { query: 'User', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUser', payload: { options: { all }, params: {...key},query }})
				return getters['getUser']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUser API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUserAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryUserAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryUserAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'UserAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUserAll', payload: { options: { all }, params: {...key},query }})
				return getters['getUserAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUserAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFilestore({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryFilestore( key.id)).data
				
					
				commit('QUERY', { query: 'Filestore', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFilestore', payload: { options: { all }, params: {...key},query }})
				return getters['getFilestore']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFilestore API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFilestoreAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryFilestoreAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryFilestoreAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FilestoreAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFilestoreAll', payload: { options: { all }, params: {...key},query }})
				return getters['getFilestoreAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFilestoreAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAgency({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryAgency( key.id)).data
				
					
				commit('QUERY', { query: 'Agency', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAgency', payload: { options: { all }, params: {...key},query }})
				return getters['getAgency']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAgency API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAgencyAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryAgencyAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryAgencyAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AgencyAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAgencyAll', payload: { options: { all }, params: {...key},query }})
				return getters['getAgencyAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAgencyAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProduct({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryProduct( key.id)).data
				
					
				commit('QUERY', { query: 'Product', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProduct', payload: { options: { all }, params: {...key},query }})
				return getters['getProduct']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProduct API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProductAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryProductAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryProductAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProductAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProductAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProductAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProductAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStorefront({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryStorefront( key.id)).data
				
					
				commit('QUERY', { query: 'Storefront', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStorefront', payload: { options: { all }, params: {...key},query }})
				return getters['getStorefront']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStorefront API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStorefrontAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryStorefrontAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryStorefrontAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'StorefrontAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStorefrontAll', payload: { options: { all }, params: {...key},query }})
				return getters['getStorefrontAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStorefrontAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRequest({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryRequest( key.id)).data
				
					
				commit('QUERY', { query: 'Request', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRequest', payload: { options: { all }, params: {...key},query }})
				return getters['getRequest']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRequest API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRequestAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryRequestAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryRequestAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'RequestAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRequestAll', payload: { options: { all }, params: {...key},query }})
				return getters['getRequestAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRequestAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPricer({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryPricer( key.id)).data
				
					
				commit('QUERY', { query: 'Pricer', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPricer', payload: { options: { all }, params: {...key},query }})
				return getters['getPricer']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPricer API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPricerAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryPricerAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryPricerAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PricerAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPricerAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPricerAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPricerAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryManufacture({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryManufacture( key.id)).data
				
					
				commit('QUERY', { query: 'Manufacture', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryManufacture', payload: { options: { all }, params: {...key},query }})
				return getters['getManufacture']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryManufacture API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryManufactureAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryManufactureAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryManufactureAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ManufactureAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryManufactureAll', payload: { options: { all }, params: {...key},query }})
				return getters['getManufactureAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryManufactureAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCapability({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryCapability( key.id)).data
				
					
				commit('QUERY', { query: 'Capability', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCapability', payload: { options: { all }, params: {...key},query }})
				return getters['getCapability']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCapability API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCapabilityAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryCapabilityAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryCapabilityAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CapabilityAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCapabilityAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCapabilityAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCapabilityAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryResponse({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryResponse( key.id)).data
				
					
				commit('QUERY', { query: 'Response', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryResponse', payload: { options: { all }, params: {...key},query }})
				return getters['getResponse']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryResponse API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryResponseAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryResponseAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryResponseAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ResponseAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryResponseAll', payload: { options: { all }, params: {...key},query }})
				return getters['getResponseAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryResponseAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryOrder({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryOrder( key.id)).data
				
					
				commit('QUERY', { query: 'Order', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryOrder', payload: { options: { all }, params: {...key},query }})
				return getters['getOrder']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryOrder API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryOrderAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.FabchainFab.query.queryOrderAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.FabchainFab.query.queryOrderAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'OrderAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryOrderAll', payload: { options: { all }, params: {...key},query }})
				return getters['getOrderAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryOrderAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgUpdateAgency({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateAgency({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateAgency:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateAgency:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateFilestore({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateFilestore({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateFilestore:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateFilestore:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeletePricer({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeletePricer({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePricer:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeletePricer:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteManufacture({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteManufacture({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteManufacture:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteManufacture:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreatePricer({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreatePricer({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePricer:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreatePricer:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateStorefront({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateStorefront({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateStorefront:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateStorefront:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdatePricer({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdatePricer({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePricer:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdatePricer:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteUser({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteUser({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteUser:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteUser:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateProduct({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateProduct({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateProduct:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateProduct:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteResponse({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteResponse({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteResponse:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteResponse:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateStorefront({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateStorefront({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateStorefront:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateStorefront:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateRequest({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateRequest({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCapability({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateCapability({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCapability:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCapability:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteOrder({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteOrder({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteOrder:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteOrder:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateUser({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateUser({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateUser:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateUser:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateProduct({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateProduct({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateProduct:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateProduct:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateRequest({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateRequest({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteRequest({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteRequest({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateUser({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateUser({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateUser:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateUser:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCapability({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteCapability({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCapability:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCapability:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateManufacture({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateManufacture({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateManufacture:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateManufacture:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateResponse({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateResponse({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateResponse:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateResponse:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateFilestore({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateFilestore({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateFilestore:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateFilestore:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateOrder({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateOrder({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateOrder:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateOrder:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateAgency({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateAgency({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateAgency:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateAgency:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteFilestore({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteFilestore({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteFilestore:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteFilestore:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteStorefront({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteStorefront({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteStorefront:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteStorefront:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateResponse({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateResponse({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateResponse:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateResponse:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteProduct({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteProduct({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteProduct:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteProduct:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteAgency({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgDeleteAgency({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteAgency:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteAgency:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateManufacture({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateManufacture({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateManufacture:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateManufacture:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCapability({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgCreateCapability({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCapability:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCapability:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateOrder({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.FabchainFab.tx.sendMsgUpdateOrder({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateOrder:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateOrder:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgUpdateAgency({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateAgency({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateAgency:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateAgency:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateFilestore({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateFilestore({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateFilestore:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateFilestore:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeletePricer({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeletePricer({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePricer:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeletePricer:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteManufacture({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteManufacture({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteManufacture:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteManufacture:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreatePricer({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreatePricer({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePricer:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreatePricer:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateStorefront({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateStorefront({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateStorefront:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateStorefront:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdatePricer({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdatePricer({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePricer:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdatePricer:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteUser({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteUser({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteUser:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteUser:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateProduct({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateProduct({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateProduct:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateProduct:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteResponse({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteResponse({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteResponse:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteResponse:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateStorefront({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateStorefront({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateStorefront:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateStorefront:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCapability({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateCapability({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCapability:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCapability:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteOrder({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteOrder({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteOrder:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteOrder:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateUser({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateUser({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateUser:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateUser:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateProduct({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateProduct({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateProduct:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateProduct:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateUser({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateUser({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateUser:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateUser:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCapability({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteCapability({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCapability:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCapability:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateManufacture({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateManufacture({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateManufacture:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateManufacture:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateResponse({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateResponse({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateResponse:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateResponse:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateFilestore({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateFilestore({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateFilestore:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateFilestore:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateOrder({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateOrder({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateOrder:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateOrder:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateAgency({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateAgency({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateAgency:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateAgency:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteFilestore({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteFilestore({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteFilestore:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteFilestore:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteStorefront({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteStorefront({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteStorefront:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteStorefront:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateResponse({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateResponse({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateResponse:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateResponse:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteProduct({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteProduct({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteProduct:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteProduct:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteAgency({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgDeleteAgency({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteAgency:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteAgency:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateManufacture({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateManufacture({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateManufacture:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateManufacture:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCapability({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgCreateCapability({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCapability:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCapability:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateOrder({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.FabchainFab.tx.msgUpdateOrder({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateOrder:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateOrder:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}