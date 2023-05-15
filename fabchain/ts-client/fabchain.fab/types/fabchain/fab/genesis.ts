/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Agency } from "./agency";
import { Capability } from "./capability";
import { Filestore } from "./filestore";
import { Manufacture } from "./manufacture";
import { Order } from "./order";
import { Params } from "./params";
import { Pricer } from "./pricer";
import { Product } from "./product";
import { Request } from "./request";
import { Response } from "./response";
import { Storefront } from "./storefront";
import { User } from "./user";

export const protobufPackage = "fabchain.fab";

/** GenesisState defines the fab module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  userList: User[];
  userCount: number;
  filestoreList: Filestore[];
  filestoreCount: number;
  agencyList: Agency[];
  agencyCount: number;
  productList: Product[];
  productCount: number;
  storefrontList: Storefront[];
  storefrontCount: number;
  requestList: Request[];
  requestCount: number;
  pricerList: Pricer[];
  pricerCount: number;
  manufactureList: Manufacture[];
  manufactureCount: number;
  capabilityList: Capability[];
  capabilityCount: number;
  responseList: Response[];
  responseCount: number;
  orderList: Order[];
  orderCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    userList: [],
    userCount: 0,
    filestoreList: [],
    filestoreCount: 0,
    agencyList: [],
    agencyCount: 0,
    productList: [],
    productCount: 0,
    storefrontList: [],
    storefrontCount: 0,
    requestList: [],
    requestCount: 0,
    pricerList: [],
    pricerCount: 0,
    manufactureList: [],
    manufactureCount: 0,
    capabilityList: [],
    capabilityCount: 0,
    responseList: [],
    responseCount: 0,
    orderList: [],
    orderCount: 0,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.userCount !== 0) {
      writer.uint32(24).uint64(message.userCount);
    }
    for (const v of message.filestoreList) {
      Filestore.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.filestoreCount !== 0) {
      writer.uint32(40).uint64(message.filestoreCount);
    }
    for (const v of message.agencyList) {
      Agency.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.agencyCount !== 0) {
      writer.uint32(56).uint64(message.agencyCount);
    }
    for (const v of message.productList) {
      Product.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.productCount !== 0) {
      writer.uint32(72).uint64(message.productCount);
    }
    for (const v of message.storefrontList) {
      Storefront.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.storefrontCount !== 0) {
      writer.uint32(88).uint64(message.storefrontCount);
    }
    for (const v of message.requestList) {
      Request.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.requestCount !== 0) {
      writer.uint32(104).uint64(message.requestCount);
    }
    for (const v of message.pricerList) {
      Pricer.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.pricerCount !== 0) {
      writer.uint32(120).uint64(message.pricerCount);
    }
    for (const v of message.manufactureList) {
      Manufacture.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.manufactureCount !== 0) {
      writer.uint32(136).uint64(message.manufactureCount);
    }
    for (const v of message.capabilityList) {
      Capability.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.capabilityCount !== 0) {
      writer.uint32(152).uint64(message.capabilityCount);
    }
    for (const v of message.responseList) {
      Response.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.responseCount !== 0) {
      writer.uint32(168).uint64(message.responseCount);
    }
    for (const v of message.orderList) {
      Order.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.orderCount !== 0) {
      writer.uint32(184).uint64(message.orderCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.userList.push(User.decode(reader, reader.uint32()));
          break;
        case 3:
          message.userCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.filestoreList.push(Filestore.decode(reader, reader.uint32()));
          break;
        case 5:
          message.filestoreCount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.agencyList.push(Agency.decode(reader, reader.uint32()));
          break;
        case 7:
          message.agencyCount = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.productList.push(Product.decode(reader, reader.uint32()));
          break;
        case 9:
          message.productCount = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.storefrontList.push(Storefront.decode(reader, reader.uint32()));
          break;
        case 11:
          message.storefrontCount = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.requestList.push(Request.decode(reader, reader.uint32()));
          break;
        case 13:
          message.requestCount = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.pricerList.push(Pricer.decode(reader, reader.uint32()));
          break;
        case 15:
          message.pricerCount = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.manufactureList.push(Manufacture.decode(reader, reader.uint32()));
          break;
        case 17:
          message.manufactureCount = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.capabilityList.push(Capability.decode(reader, reader.uint32()));
          break;
        case 19:
          message.capabilityCount = longToNumber(reader.uint64() as Long);
          break;
        case 20:
          message.responseList.push(Response.decode(reader, reader.uint32()));
          break;
        case 21:
          message.responseCount = longToNumber(reader.uint64() as Long);
          break;
        case 22:
          message.orderList.push(Order.decode(reader, reader.uint32()));
          break;
        case 23:
          message.orderCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      userList: Array.isArray(object?.userList) ? object.userList.map((e: any) => User.fromJSON(e)) : [],
      userCount: isSet(object.userCount) ? Number(object.userCount) : 0,
      filestoreList: Array.isArray(object?.filestoreList)
        ? object.filestoreList.map((e: any) => Filestore.fromJSON(e))
        : [],
      filestoreCount: isSet(object.filestoreCount) ? Number(object.filestoreCount) : 0,
      agencyList: Array.isArray(object?.agencyList) ? object.agencyList.map((e: any) => Agency.fromJSON(e)) : [],
      agencyCount: isSet(object.agencyCount) ? Number(object.agencyCount) : 0,
      productList: Array.isArray(object?.productList) ? object.productList.map((e: any) => Product.fromJSON(e)) : [],
      productCount: isSet(object.productCount) ? Number(object.productCount) : 0,
      storefrontList: Array.isArray(object?.storefrontList)
        ? object.storefrontList.map((e: any) => Storefront.fromJSON(e))
        : [],
      storefrontCount: isSet(object.storefrontCount) ? Number(object.storefrontCount) : 0,
      requestList: Array.isArray(object?.requestList) ? object.requestList.map((e: any) => Request.fromJSON(e)) : [],
      requestCount: isSet(object.requestCount) ? Number(object.requestCount) : 0,
      pricerList: Array.isArray(object?.pricerList) ? object.pricerList.map((e: any) => Pricer.fromJSON(e)) : [],
      pricerCount: isSet(object.pricerCount) ? Number(object.pricerCount) : 0,
      manufactureList: Array.isArray(object?.manufactureList)
        ? object.manufactureList.map((e: any) => Manufacture.fromJSON(e))
        : [],
      manufactureCount: isSet(object.manufactureCount) ? Number(object.manufactureCount) : 0,
      capabilityList: Array.isArray(object?.capabilityList)
        ? object.capabilityList.map((e: any) => Capability.fromJSON(e))
        : [],
      capabilityCount: isSet(object.capabilityCount) ? Number(object.capabilityCount) : 0,
      responseList: Array.isArray(object?.responseList)
        ? object.responseList.map((e: any) => Response.fromJSON(e))
        : [],
      responseCount: isSet(object.responseCount) ? Number(object.responseCount) : 0,
      orderList: Array.isArray(object?.orderList) ? object.orderList.map((e: any) => Order.fromJSON(e)) : [],
      orderCount: isSet(object.orderCount) ? Number(object.orderCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.userList) {
      obj.userList = message.userList.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.userList = [];
    }
    message.userCount !== undefined && (obj.userCount = Math.round(message.userCount));
    if (message.filestoreList) {
      obj.filestoreList = message.filestoreList.map((e) => e ? Filestore.toJSON(e) : undefined);
    } else {
      obj.filestoreList = [];
    }
    message.filestoreCount !== undefined && (obj.filestoreCount = Math.round(message.filestoreCount));
    if (message.agencyList) {
      obj.agencyList = message.agencyList.map((e) => e ? Agency.toJSON(e) : undefined);
    } else {
      obj.agencyList = [];
    }
    message.agencyCount !== undefined && (obj.agencyCount = Math.round(message.agencyCount));
    if (message.productList) {
      obj.productList = message.productList.map((e) => e ? Product.toJSON(e) : undefined);
    } else {
      obj.productList = [];
    }
    message.productCount !== undefined && (obj.productCount = Math.round(message.productCount));
    if (message.storefrontList) {
      obj.storefrontList = message.storefrontList.map((e) => e ? Storefront.toJSON(e) : undefined);
    } else {
      obj.storefrontList = [];
    }
    message.storefrontCount !== undefined && (obj.storefrontCount = Math.round(message.storefrontCount));
    if (message.requestList) {
      obj.requestList = message.requestList.map((e) => e ? Request.toJSON(e) : undefined);
    } else {
      obj.requestList = [];
    }
    message.requestCount !== undefined && (obj.requestCount = Math.round(message.requestCount));
    if (message.pricerList) {
      obj.pricerList = message.pricerList.map((e) => e ? Pricer.toJSON(e) : undefined);
    } else {
      obj.pricerList = [];
    }
    message.pricerCount !== undefined && (obj.pricerCount = Math.round(message.pricerCount));
    if (message.manufactureList) {
      obj.manufactureList = message.manufactureList.map((e) => e ? Manufacture.toJSON(e) : undefined);
    } else {
      obj.manufactureList = [];
    }
    message.manufactureCount !== undefined && (obj.manufactureCount = Math.round(message.manufactureCount));
    if (message.capabilityList) {
      obj.capabilityList = message.capabilityList.map((e) => e ? Capability.toJSON(e) : undefined);
    } else {
      obj.capabilityList = [];
    }
    message.capabilityCount !== undefined && (obj.capabilityCount = Math.round(message.capabilityCount));
    if (message.responseList) {
      obj.responseList = message.responseList.map((e) => e ? Response.toJSON(e) : undefined);
    } else {
      obj.responseList = [];
    }
    message.responseCount !== undefined && (obj.responseCount = Math.round(message.responseCount));
    if (message.orderList) {
      obj.orderList = message.orderList.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orderList = [];
    }
    message.orderCount !== undefined && (obj.orderCount = Math.round(message.orderCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.userList = object.userList?.map((e) => User.fromPartial(e)) || [];
    message.userCount = object.userCount ?? 0;
    message.filestoreList = object.filestoreList?.map((e) => Filestore.fromPartial(e)) || [];
    message.filestoreCount = object.filestoreCount ?? 0;
    message.agencyList = object.agencyList?.map((e) => Agency.fromPartial(e)) || [];
    message.agencyCount = object.agencyCount ?? 0;
    message.productList = object.productList?.map((e) => Product.fromPartial(e)) || [];
    message.productCount = object.productCount ?? 0;
    message.storefrontList = object.storefrontList?.map((e) => Storefront.fromPartial(e)) || [];
    message.storefrontCount = object.storefrontCount ?? 0;
    message.requestList = object.requestList?.map((e) => Request.fromPartial(e)) || [];
    message.requestCount = object.requestCount ?? 0;
    message.pricerList = object.pricerList?.map((e) => Pricer.fromPartial(e)) || [];
    message.pricerCount = object.pricerCount ?? 0;
    message.manufactureList = object.manufactureList?.map((e) => Manufacture.fromPartial(e)) || [];
    message.manufactureCount = object.manufactureCount ?? 0;
    message.capabilityList = object.capabilityList?.map((e) => Capability.fromPartial(e)) || [];
    message.capabilityCount = object.capabilityCount ?? 0;
    message.responseList = object.responseList?.map((e) => Response.fromPartial(e)) || [];
    message.responseCount = object.responseCount ?? 0;
    message.orderList = object.orderList?.map((e) => Order.fromPartial(e)) || [];
    message.orderCount = object.orderCount ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
