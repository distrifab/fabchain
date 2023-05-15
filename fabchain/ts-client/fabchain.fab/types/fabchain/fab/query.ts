/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
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

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetUserRequest {
  id: number;
}

export interface QueryGetUserResponse {
  User: User | undefined;
}

export interface QueryAllUserRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllUserResponse {
  User: User[];
  pagination: PageResponse | undefined;
}

export interface QueryGetFilestoreRequest {
  id: number;
}

export interface QueryGetFilestoreResponse {
  Filestore: Filestore | undefined;
}

export interface QueryAllFilestoreRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFilestoreResponse {
  Filestore: Filestore[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAgencyRequest {
  id: number;
}

export interface QueryGetAgencyResponse {
  Agency: Agency | undefined;
}

export interface QueryAllAgencyRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAgencyResponse {
  Agency: Agency[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProductRequest {
  id: number;
}

export interface QueryGetProductResponse {
  Product: Product | undefined;
}

export interface QueryAllProductRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProductResponse {
  Product: Product[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStorefrontRequest {
  id: number;
}

export interface QueryGetStorefrontResponse {
  Storefront: Storefront | undefined;
}

export interface QueryAllStorefrontRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStorefrontResponse {
  Storefront: Storefront[];
  pagination: PageResponse | undefined;
}

export interface QueryGetRequestRequest {
  id: number;
}

export interface QueryGetRequestResponse {
  Request: Request | undefined;
}

export interface QueryAllRequestRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRequestResponse {
  Request: Request[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPricerRequest {
  id: number;
}

export interface QueryGetPricerResponse {
  Pricer: Pricer | undefined;
}

export interface QueryAllPricerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPricerResponse {
  Pricer: Pricer[];
  pagination: PageResponse | undefined;
}

export interface QueryGetManufactureRequest {
  id: number;
}

export interface QueryGetManufactureResponse {
  Manufacture: Manufacture | undefined;
}

export interface QueryAllManufactureRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllManufactureResponse {
  Manufacture: Manufacture[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCapabilityRequest {
  id: number;
}

export interface QueryGetCapabilityResponse {
  Capability: Capability | undefined;
}

export interface QueryAllCapabilityRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCapabilityResponse {
  Capability: Capability[];
  pagination: PageResponse | undefined;
}

export interface QueryGetResponseRequest {
  id: number;
}

export interface QueryGetResponseResponse {
  Response: Response | undefined;
}

export interface QueryAllResponseRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllResponseResponse {
  Response: Response[];
  pagination: PageResponse | undefined;
}

export interface QueryGetOrderRequest {
  id: number;
}

export interface QueryGetOrderResponse {
  Order: Order | undefined;
}

export interface QueryAllOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOrderResponse {
  Order: Order[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetUserRequest(): QueryGetUserRequest {
  return { id: 0 };
}

export const QueryGetUserRequest = {
  encode(message: QueryGetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetUserRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserRequest>, I>>(object: I): QueryGetUserRequest {
    const message = createBaseQueryGetUserRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetUserResponse(): QueryGetUserResponse {
  return { User: undefined };
}

export const QueryGetUserResponse = {
  encode(message: QueryGetUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.User !== undefined) {
      User.encode(message.User, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.User = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserResponse {
    return { User: isSet(object.User) ? User.fromJSON(object.User) : undefined };
  },

  toJSON(message: QueryGetUserResponse): unknown {
    const obj: any = {};
    message.User !== undefined && (obj.User = message.User ? User.toJSON(message.User) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUserResponse>, I>>(object: I): QueryGetUserResponse {
    const message = createBaseQueryGetUserResponse();
    message.User = (object.User !== undefined && object.User !== null) ? User.fromPartial(object.User) : undefined;
    return message;
  },
};

function createBaseQueryAllUserRequest(): QueryAllUserRequest {
  return { pagination: undefined };
}

export const QueryAllUserRequest = {
  encode(message: QueryAllUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllUserRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserRequest>, I>>(object: I): QueryAllUserRequest {
    const message = createBaseQueryAllUserRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserResponse(): QueryAllUserResponse {
  return { User: [], pagination: undefined };
}

export const QueryAllUserResponse = {
  encode(message: QueryAllUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.User) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.User.push(User.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserResponse {
    return {
      User: Array.isArray(object?.User) ? object.User.map((e: any) => User.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserResponse): unknown {
    const obj: any = {};
    if (message.User) {
      obj.User = message.User.map((e) => e ? User.toJSON(e) : undefined);
    } else {
      obj.User = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllUserResponse>, I>>(object: I): QueryAllUserResponse {
    const message = createBaseQueryAllUserResponse();
    message.User = object.User?.map((e) => User.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetFilestoreRequest(): QueryGetFilestoreRequest {
  return { id: 0 };
}

export const QueryGetFilestoreRequest = {
  encode(message: QueryGetFilestoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFilestoreRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFilestoreRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFilestoreRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetFilestoreRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFilestoreRequest>, I>>(object: I): QueryGetFilestoreRequest {
    const message = createBaseQueryGetFilestoreRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetFilestoreResponse(): QueryGetFilestoreResponse {
  return { Filestore: undefined };
}

export const QueryGetFilestoreResponse = {
  encode(message: QueryGetFilestoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Filestore !== undefined) {
      Filestore.encode(message.Filestore, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFilestoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFilestoreResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Filestore = Filestore.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFilestoreResponse {
    return { Filestore: isSet(object.Filestore) ? Filestore.fromJSON(object.Filestore) : undefined };
  },

  toJSON(message: QueryGetFilestoreResponse): unknown {
    const obj: any = {};
    message.Filestore !== undefined
      && (obj.Filestore = message.Filestore ? Filestore.toJSON(message.Filestore) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFilestoreResponse>, I>>(object: I): QueryGetFilestoreResponse {
    const message = createBaseQueryGetFilestoreResponse();
    message.Filestore = (object.Filestore !== undefined && object.Filestore !== null)
      ? Filestore.fromPartial(object.Filestore)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFilestoreRequest(): QueryAllFilestoreRequest {
  return { pagination: undefined };
}

export const QueryAllFilestoreRequest = {
  encode(message: QueryAllFilestoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFilestoreRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilestoreRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFilestoreRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFilestoreRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFilestoreRequest>, I>>(object: I): QueryAllFilestoreRequest {
    const message = createBaseQueryAllFilestoreRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFilestoreResponse(): QueryAllFilestoreResponse {
  return { Filestore: [], pagination: undefined };
}

export const QueryAllFilestoreResponse = {
  encode(message: QueryAllFilestoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Filestore) {
      Filestore.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFilestoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFilestoreResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Filestore.push(Filestore.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFilestoreResponse {
    return {
      Filestore: Array.isArray(object?.Filestore) ? object.Filestore.map((e: any) => Filestore.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFilestoreResponse): unknown {
    const obj: any = {};
    if (message.Filestore) {
      obj.Filestore = message.Filestore.map((e) => e ? Filestore.toJSON(e) : undefined);
    } else {
      obj.Filestore = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFilestoreResponse>, I>>(object: I): QueryAllFilestoreResponse {
    const message = createBaseQueryAllFilestoreResponse();
    message.Filestore = object.Filestore?.map((e) => Filestore.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAgencyRequest(): QueryGetAgencyRequest {
  return { id: 0 };
}

export const QueryGetAgencyRequest = {
  encode(message: QueryGetAgencyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAgencyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAgencyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAgencyRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetAgencyRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAgencyRequest>, I>>(object: I): QueryGetAgencyRequest {
    const message = createBaseQueryGetAgencyRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetAgencyResponse(): QueryGetAgencyResponse {
  return { Agency: undefined };
}

export const QueryGetAgencyResponse = {
  encode(message: QueryGetAgencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Agency !== undefined) {
      Agency.encode(message.Agency, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAgencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAgencyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Agency = Agency.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAgencyResponse {
    return { Agency: isSet(object.Agency) ? Agency.fromJSON(object.Agency) : undefined };
  },

  toJSON(message: QueryGetAgencyResponse): unknown {
    const obj: any = {};
    message.Agency !== undefined && (obj.Agency = message.Agency ? Agency.toJSON(message.Agency) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAgencyResponse>, I>>(object: I): QueryGetAgencyResponse {
    const message = createBaseQueryGetAgencyResponse();
    message.Agency = (object.Agency !== undefined && object.Agency !== null)
      ? Agency.fromPartial(object.Agency)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAgencyRequest(): QueryAllAgencyRequest {
  return { pagination: undefined };
}

export const QueryAllAgencyRequest = {
  encode(message: QueryAllAgencyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAgencyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAgencyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAgencyRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAgencyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAgencyRequest>, I>>(object: I): QueryAllAgencyRequest {
    const message = createBaseQueryAllAgencyRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAgencyResponse(): QueryAllAgencyResponse {
  return { Agency: [], pagination: undefined };
}

export const QueryAllAgencyResponse = {
  encode(message: QueryAllAgencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Agency) {
      Agency.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAgencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAgencyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Agency.push(Agency.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAgencyResponse {
    return {
      Agency: Array.isArray(object?.Agency) ? object.Agency.map((e: any) => Agency.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAgencyResponse): unknown {
    const obj: any = {};
    if (message.Agency) {
      obj.Agency = message.Agency.map((e) => e ? Agency.toJSON(e) : undefined);
    } else {
      obj.Agency = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAgencyResponse>, I>>(object: I): QueryAllAgencyResponse {
    const message = createBaseQueryAllAgencyResponse();
    message.Agency = object.Agency?.map((e) => Agency.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetProductRequest(): QueryGetProductRequest {
  return { id: 0 };
}

export const QueryGetProductRequest = {
  encode(message: QueryGetProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProductRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetProductRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProductRequest>, I>>(object: I): QueryGetProductRequest {
    const message = createBaseQueryGetProductRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetProductResponse(): QueryGetProductResponse {
  return { Product: undefined };
}

export const QueryGetProductResponse = {
  encode(message: QueryGetProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Product !== undefined) {
      Product.encode(message.Product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Product = Product.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProductResponse {
    return { Product: isSet(object.Product) ? Product.fromJSON(object.Product) : undefined };
  },

  toJSON(message: QueryGetProductResponse): unknown {
    const obj: any = {};
    message.Product !== undefined && (obj.Product = message.Product ? Product.toJSON(message.Product) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProductResponse>, I>>(object: I): QueryGetProductResponse {
    const message = createBaseQueryGetProductResponse();
    message.Product = (object.Product !== undefined && object.Product !== null)
      ? Product.fromPartial(object.Product)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProductRequest(): QueryAllProductRequest {
  return { pagination: undefined };
}

export const QueryAllProductRequest = {
  encode(message: QueryAllProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProductRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProductRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProductRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProductRequest>, I>>(object: I): QueryAllProductRequest {
    const message = createBaseQueryAllProductRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProductResponse(): QueryAllProductResponse {
  return { Product: [], pagination: undefined };
}

export const QueryAllProductResponse = {
  encode(message: QueryAllProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Product) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Product.push(Product.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProductResponse {
    return {
      Product: Array.isArray(object?.Product) ? object.Product.map((e: any) => Product.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProductResponse): unknown {
    const obj: any = {};
    if (message.Product) {
      obj.Product = message.Product.map((e) => e ? Product.toJSON(e) : undefined);
    } else {
      obj.Product = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProductResponse>, I>>(object: I): QueryAllProductResponse {
    const message = createBaseQueryAllProductResponse();
    message.Product = object.Product?.map((e) => Product.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStorefrontRequest(): QueryGetStorefrontRequest {
  return { id: 0 };
}

export const QueryGetStorefrontRequest = {
  encode(message: QueryGetStorefrontRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStorefrontRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStorefrontRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStorefrontRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetStorefrontRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStorefrontRequest>, I>>(object: I): QueryGetStorefrontRequest {
    const message = createBaseQueryGetStorefrontRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetStorefrontResponse(): QueryGetStorefrontResponse {
  return { Storefront: undefined };
}

export const QueryGetStorefrontResponse = {
  encode(message: QueryGetStorefrontResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Storefront !== undefined) {
      Storefront.encode(message.Storefront, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStorefrontResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStorefrontResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Storefront = Storefront.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStorefrontResponse {
    return { Storefront: isSet(object.Storefront) ? Storefront.fromJSON(object.Storefront) : undefined };
  },

  toJSON(message: QueryGetStorefrontResponse): unknown {
    const obj: any = {};
    message.Storefront !== undefined
      && (obj.Storefront = message.Storefront ? Storefront.toJSON(message.Storefront) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStorefrontResponse>, I>>(object: I): QueryGetStorefrontResponse {
    const message = createBaseQueryGetStorefrontResponse();
    message.Storefront = (object.Storefront !== undefined && object.Storefront !== null)
      ? Storefront.fromPartial(object.Storefront)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStorefrontRequest(): QueryAllStorefrontRequest {
  return { pagination: undefined };
}

export const QueryAllStorefrontRequest = {
  encode(message: QueryAllStorefrontRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStorefrontRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStorefrontRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStorefrontRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStorefrontRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStorefrontRequest>, I>>(object: I): QueryAllStorefrontRequest {
    const message = createBaseQueryAllStorefrontRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStorefrontResponse(): QueryAllStorefrontResponse {
  return { Storefront: [], pagination: undefined };
}

export const QueryAllStorefrontResponse = {
  encode(message: QueryAllStorefrontResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Storefront) {
      Storefront.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStorefrontResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStorefrontResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Storefront.push(Storefront.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStorefrontResponse {
    return {
      Storefront: Array.isArray(object?.Storefront) ? object.Storefront.map((e: any) => Storefront.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStorefrontResponse): unknown {
    const obj: any = {};
    if (message.Storefront) {
      obj.Storefront = message.Storefront.map((e) => e ? Storefront.toJSON(e) : undefined);
    } else {
      obj.Storefront = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStorefrontResponse>, I>>(object: I): QueryAllStorefrontResponse {
    const message = createBaseQueryAllStorefrontResponse();
    message.Storefront = object.Storefront?.map((e) => Storefront.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRequestRequest(): QueryGetRequestRequest {
  return { id: 0 };
}

export const QueryGetRequestRequest = {
  encode(message: QueryGetRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRequestRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetRequestRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRequestRequest>, I>>(object: I): QueryGetRequestRequest {
    const message = createBaseQueryGetRequestRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetRequestResponse(): QueryGetRequestResponse {
  return { Request: undefined };
}

export const QueryGetRequestResponse = {
  encode(message: QueryGetRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Request !== undefined) {
      Request.encode(message.Request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Request = Request.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRequestResponse {
    return { Request: isSet(object.Request) ? Request.fromJSON(object.Request) : undefined };
  },

  toJSON(message: QueryGetRequestResponse): unknown {
    const obj: any = {};
    message.Request !== undefined && (obj.Request = message.Request ? Request.toJSON(message.Request) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRequestResponse>, I>>(object: I): QueryGetRequestResponse {
    const message = createBaseQueryGetRequestResponse();
    message.Request = (object.Request !== undefined && object.Request !== null)
      ? Request.fromPartial(object.Request)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRequestRequest(): QueryAllRequestRequest {
  return { pagination: undefined };
}

export const QueryAllRequestRequest = {
  encode(message: QueryAllRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRequestRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRequestRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRequestRequest>, I>>(object: I): QueryAllRequestRequest {
    const message = createBaseQueryAllRequestRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRequestResponse(): QueryAllRequestResponse {
  return { Request: [], pagination: undefined };
}

export const QueryAllRequestResponse = {
  encode(message: QueryAllRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Request) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Request.push(Request.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRequestResponse {
    return {
      Request: Array.isArray(object?.Request) ? object.Request.map((e: any) => Request.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRequestResponse): unknown {
    const obj: any = {};
    if (message.Request) {
      obj.Request = message.Request.map((e) => e ? Request.toJSON(e) : undefined);
    } else {
      obj.Request = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRequestResponse>, I>>(object: I): QueryAllRequestResponse {
    const message = createBaseQueryAllRequestResponse();
    message.Request = object.Request?.map((e) => Request.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPricerRequest(): QueryGetPricerRequest {
  return { id: 0 };
}

export const QueryGetPricerRequest = {
  encode(message: QueryGetPricerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPricerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPricerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPricerRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetPricerRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPricerRequest>, I>>(object: I): QueryGetPricerRequest {
    const message = createBaseQueryGetPricerRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetPricerResponse(): QueryGetPricerResponse {
  return { Pricer: undefined };
}

export const QueryGetPricerResponse = {
  encode(message: QueryGetPricerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Pricer !== undefined) {
      Pricer.encode(message.Pricer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPricerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPricerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pricer = Pricer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPricerResponse {
    return { Pricer: isSet(object.Pricer) ? Pricer.fromJSON(object.Pricer) : undefined };
  },

  toJSON(message: QueryGetPricerResponse): unknown {
    const obj: any = {};
    message.Pricer !== undefined && (obj.Pricer = message.Pricer ? Pricer.toJSON(message.Pricer) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPricerResponse>, I>>(object: I): QueryGetPricerResponse {
    const message = createBaseQueryGetPricerResponse();
    message.Pricer = (object.Pricer !== undefined && object.Pricer !== null)
      ? Pricer.fromPartial(object.Pricer)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPricerRequest(): QueryAllPricerRequest {
  return { pagination: undefined };
}

export const QueryAllPricerRequest = {
  encode(message: QueryAllPricerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPricerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPricerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPricerRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPricerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPricerRequest>, I>>(object: I): QueryAllPricerRequest {
    const message = createBaseQueryAllPricerRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPricerResponse(): QueryAllPricerResponse {
  return { Pricer: [], pagination: undefined };
}

export const QueryAllPricerResponse = {
  encode(message: QueryAllPricerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Pricer) {
      Pricer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPricerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPricerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pricer.push(Pricer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPricerResponse {
    return {
      Pricer: Array.isArray(object?.Pricer) ? object.Pricer.map((e: any) => Pricer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPricerResponse): unknown {
    const obj: any = {};
    if (message.Pricer) {
      obj.Pricer = message.Pricer.map((e) => e ? Pricer.toJSON(e) : undefined);
    } else {
      obj.Pricer = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPricerResponse>, I>>(object: I): QueryAllPricerResponse {
    const message = createBaseQueryAllPricerResponse();
    message.Pricer = object.Pricer?.map((e) => Pricer.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetManufactureRequest(): QueryGetManufactureRequest {
  return { id: 0 };
}

export const QueryGetManufactureRequest = {
  encode(message: QueryGetManufactureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManufactureRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManufactureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetManufactureRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetManufactureRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetManufactureRequest>, I>>(object: I): QueryGetManufactureRequest {
    const message = createBaseQueryGetManufactureRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetManufactureResponse(): QueryGetManufactureResponse {
  return { Manufacture: undefined };
}

export const QueryGetManufactureResponse = {
  encode(message: QueryGetManufactureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Manufacture !== undefined) {
      Manufacture.encode(message.Manufacture, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManufactureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManufactureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Manufacture = Manufacture.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetManufactureResponse {
    return { Manufacture: isSet(object.Manufacture) ? Manufacture.fromJSON(object.Manufacture) : undefined };
  },

  toJSON(message: QueryGetManufactureResponse): unknown {
    const obj: any = {};
    message.Manufacture !== undefined
      && (obj.Manufacture = message.Manufacture ? Manufacture.toJSON(message.Manufacture) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetManufactureResponse>, I>>(object: I): QueryGetManufactureResponse {
    const message = createBaseQueryGetManufactureResponse();
    message.Manufacture = (object.Manufacture !== undefined && object.Manufacture !== null)
      ? Manufacture.fromPartial(object.Manufacture)
      : undefined;
    return message;
  },
};

function createBaseQueryAllManufactureRequest(): QueryAllManufactureRequest {
  return { pagination: undefined };
}

export const QueryAllManufactureRequest = {
  encode(message: QueryAllManufactureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllManufactureRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllManufactureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllManufactureRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllManufactureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllManufactureRequest>, I>>(object: I): QueryAllManufactureRequest {
    const message = createBaseQueryAllManufactureRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllManufactureResponse(): QueryAllManufactureResponse {
  return { Manufacture: [], pagination: undefined };
}

export const QueryAllManufactureResponse = {
  encode(message: QueryAllManufactureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Manufacture) {
      Manufacture.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllManufactureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllManufactureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Manufacture.push(Manufacture.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllManufactureResponse {
    return {
      Manufacture: Array.isArray(object?.Manufacture)
        ? object.Manufacture.map((e: any) => Manufacture.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllManufactureResponse): unknown {
    const obj: any = {};
    if (message.Manufacture) {
      obj.Manufacture = message.Manufacture.map((e) => e ? Manufacture.toJSON(e) : undefined);
    } else {
      obj.Manufacture = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllManufactureResponse>, I>>(object: I): QueryAllManufactureResponse {
    const message = createBaseQueryAllManufactureResponse();
    message.Manufacture = object.Manufacture?.map((e) => Manufacture.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCapabilityRequest(): QueryGetCapabilityRequest {
  return { id: 0 };
}

export const QueryGetCapabilityRequest = {
  encode(message: QueryGetCapabilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCapabilityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCapabilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCapabilityRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetCapabilityRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCapabilityRequest>, I>>(object: I): QueryGetCapabilityRequest {
    const message = createBaseQueryGetCapabilityRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetCapabilityResponse(): QueryGetCapabilityResponse {
  return { Capability: undefined };
}

export const QueryGetCapabilityResponse = {
  encode(message: QueryGetCapabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Capability !== undefined) {
      Capability.encode(message.Capability, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCapabilityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCapabilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Capability = Capability.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCapabilityResponse {
    return { Capability: isSet(object.Capability) ? Capability.fromJSON(object.Capability) : undefined };
  },

  toJSON(message: QueryGetCapabilityResponse): unknown {
    const obj: any = {};
    message.Capability !== undefined
      && (obj.Capability = message.Capability ? Capability.toJSON(message.Capability) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCapabilityResponse>, I>>(object: I): QueryGetCapabilityResponse {
    const message = createBaseQueryGetCapabilityResponse();
    message.Capability = (object.Capability !== undefined && object.Capability !== null)
      ? Capability.fromPartial(object.Capability)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCapabilityRequest(): QueryAllCapabilityRequest {
  return { pagination: undefined };
}

export const QueryAllCapabilityRequest = {
  encode(message: QueryAllCapabilityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCapabilityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCapabilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCapabilityRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllCapabilityRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCapabilityRequest>, I>>(object: I): QueryAllCapabilityRequest {
    const message = createBaseQueryAllCapabilityRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCapabilityResponse(): QueryAllCapabilityResponse {
  return { Capability: [], pagination: undefined };
}

export const QueryAllCapabilityResponse = {
  encode(message: QueryAllCapabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Capability) {
      Capability.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCapabilityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCapabilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Capability.push(Capability.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCapabilityResponse {
    return {
      Capability: Array.isArray(object?.Capability) ? object.Capability.map((e: any) => Capability.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllCapabilityResponse): unknown {
    const obj: any = {};
    if (message.Capability) {
      obj.Capability = message.Capability.map((e) => e ? Capability.toJSON(e) : undefined);
    } else {
      obj.Capability = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCapabilityResponse>, I>>(object: I): QueryAllCapabilityResponse {
    const message = createBaseQueryAllCapabilityResponse();
    message.Capability = object.Capability?.map((e) => Capability.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetResponseRequest(): QueryGetResponseRequest {
  return { id: 0 };
}

export const QueryGetResponseRequest = {
  encode(message: QueryGetResponseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResponseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetResponseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetResponseRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetResponseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetResponseRequest>, I>>(object: I): QueryGetResponseRequest {
    const message = createBaseQueryGetResponseRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetResponseResponse(): QueryGetResponseResponse {
  return { Response: undefined };
}

export const QueryGetResponseResponse = {
  encode(message: QueryGetResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Response !== undefined) {
      Response.encode(message.Response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Response = Response.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetResponseResponse {
    return { Response: isSet(object.Response) ? Response.fromJSON(object.Response) : undefined };
  },

  toJSON(message: QueryGetResponseResponse): unknown {
    const obj: any = {};
    message.Response !== undefined && (obj.Response = message.Response ? Response.toJSON(message.Response) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetResponseResponse>, I>>(object: I): QueryGetResponseResponse {
    const message = createBaseQueryGetResponseResponse();
    message.Response = (object.Response !== undefined && object.Response !== null)
      ? Response.fromPartial(object.Response)
      : undefined;
    return message;
  },
};

function createBaseQueryAllResponseRequest(): QueryAllResponseRequest {
  return { pagination: undefined };
}

export const QueryAllResponseRequest = {
  encode(message: QueryAllResponseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllResponseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllResponseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllResponseRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllResponseRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllResponseRequest>, I>>(object: I): QueryAllResponseRequest {
    const message = createBaseQueryAllResponseRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllResponseResponse(): QueryAllResponseResponse {
  return { Response: [], pagination: undefined };
}

export const QueryAllResponseResponse = {
  encode(message: QueryAllResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Response) {
      Response.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Response.push(Response.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllResponseResponse {
    return {
      Response: Array.isArray(object?.Response) ? object.Response.map((e: any) => Response.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllResponseResponse): unknown {
    const obj: any = {};
    if (message.Response) {
      obj.Response = message.Response.map((e) => e ? Response.toJSON(e) : undefined);
    } else {
      obj.Response = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllResponseResponse>, I>>(object: I): QueryAllResponseResponse {
    const message = createBaseQueryAllResponseResponse();
    message.Response = object.Response?.map((e) => Response.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetOrderRequest(): QueryGetOrderRequest {
  return { id: 0 };
}

export const QueryGetOrderRequest = {
  encode(message: QueryGetOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOrderRequest>, I>>(object: I): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetOrderResponse(): QueryGetOrderResponse {
  return { Order: undefined };
}

export const QueryGetOrderResponse = {
  encode(message: QueryGetOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Order !== undefined) {
      Order.encode(message.Order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderResponse {
    return { Order: isSet(object.Order) ? Order.fromJSON(object.Order) : undefined };
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.Order !== undefined && (obj.Order = message.Order ? Order.toJSON(message.Order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetOrderResponse>, I>>(object: I): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    message.Order = (object.Order !== undefined && object.Order !== null) ? Order.fromPartial(object.Order) : undefined;
    return message;
  },
};

function createBaseQueryAllOrderRequest(): QueryAllOrderRequest {
  return { pagination: undefined };
}

export const QueryAllOrderRequest = {
  encode(message: QueryAllOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOrderRequest>, I>>(object: I): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOrderResponse(): QueryAllOrderResponse {
  return { Order: [], pagination: undefined };
}

export const QueryAllOrderResponse = {
  encode(message: QueryAllOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Order.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderResponse {
    return {
      Order: Array.isArray(object?.Order) ? object.Order.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.Order) {
      obj.Order = message.Order.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.Order = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllOrderResponse>, I>>(object: I): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.Order = object.Order?.map((e) => Order.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of User items. */
  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
  /** Queries a list of Filestore items. */
  Filestore(request: QueryGetFilestoreRequest): Promise<QueryGetFilestoreResponse>;
  FilestoreAll(request: QueryAllFilestoreRequest): Promise<QueryAllFilestoreResponse>;
  /** Queries a list of Agency items. */
  Agency(request: QueryGetAgencyRequest): Promise<QueryGetAgencyResponse>;
  AgencyAll(request: QueryAllAgencyRequest): Promise<QueryAllAgencyResponse>;
  /** Queries a list of Product items. */
  Product(request: QueryGetProductRequest): Promise<QueryGetProductResponse>;
  ProductAll(request: QueryAllProductRequest): Promise<QueryAllProductResponse>;
  /** Queries a list of Storefront items. */
  Storefront(request: QueryGetStorefrontRequest): Promise<QueryGetStorefrontResponse>;
  StorefrontAll(request: QueryAllStorefrontRequest): Promise<QueryAllStorefrontResponse>;
  /** Queries a list of Request items. */
  Request(request: QueryGetRequestRequest): Promise<QueryGetRequestResponse>;
  RequestAll(request: QueryAllRequestRequest): Promise<QueryAllRequestResponse>;
  /** Queries a list of Pricer items. */
  Pricer(request: QueryGetPricerRequest): Promise<QueryGetPricerResponse>;
  PricerAll(request: QueryAllPricerRequest): Promise<QueryAllPricerResponse>;
  /** Queries a list of Manufacture items. */
  Manufacture(request: QueryGetManufactureRequest): Promise<QueryGetManufactureResponse>;
  ManufactureAll(request: QueryAllManufactureRequest): Promise<QueryAllManufactureResponse>;
  /** Queries a list of Capability items. */
  Capability(request: QueryGetCapabilityRequest): Promise<QueryGetCapabilityResponse>;
  CapabilityAll(request: QueryAllCapabilityRequest): Promise<QueryAllCapabilityResponse>;
  /** Queries a list of Response items. */
  Response(request: QueryGetResponseRequest): Promise<QueryGetResponseResponse>;
  ResponseAll(request: QueryAllResponseRequest): Promise<QueryAllResponseResponse>;
  /** Queries a list of Order items. */
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.User = this.User.bind(this);
    this.UserAll = this.UserAll.bind(this);
    this.Filestore = this.Filestore.bind(this);
    this.FilestoreAll = this.FilestoreAll.bind(this);
    this.Agency = this.Agency.bind(this);
    this.AgencyAll = this.AgencyAll.bind(this);
    this.Product = this.Product.bind(this);
    this.ProductAll = this.ProductAll.bind(this);
    this.Storefront = this.Storefront.bind(this);
    this.StorefrontAll = this.StorefrontAll.bind(this);
    this.Request = this.Request.bind(this);
    this.RequestAll = this.RequestAll.bind(this);
    this.Pricer = this.Pricer.bind(this);
    this.PricerAll = this.PricerAll.bind(this);
    this.Manufacture = this.Manufacture.bind(this);
    this.ManufactureAll = this.ManufactureAll.bind(this);
    this.Capability = this.Capability.bind(this);
    this.CapabilityAll = this.CapabilityAll.bind(this);
    this.Response = this.Response.bind(this);
    this.ResponseAll = this.ResponseAll.bind(this);
    this.Order = this.Order.bind(this);
    this.OrderAll = this.OrderAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
    const data = QueryGetUserRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "User", data);
    return promise.then((data) => QueryGetUserResponse.decode(new _m0.Reader(data)));
  }

  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse> {
    const data = QueryAllUserRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "UserAll", data);
    return promise.then((data) => QueryAllUserResponse.decode(new _m0.Reader(data)));
  }

  Filestore(request: QueryGetFilestoreRequest): Promise<QueryGetFilestoreResponse> {
    const data = QueryGetFilestoreRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Filestore", data);
    return promise.then((data) => QueryGetFilestoreResponse.decode(new _m0.Reader(data)));
  }

  FilestoreAll(request: QueryAllFilestoreRequest): Promise<QueryAllFilestoreResponse> {
    const data = QueryAllFilestoreRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "FilestoreAll", data);
    return promise.then((data) => QueryAllFilestoreResponse.decode(new _m0.Reader(data)));
  }

  Agency(request: QueryGetAgencyRequest): Promise<QueryGetAgencyResponse> {
    const data = QueryGetAgencyRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Agency", data);
    return promise.then((data) => QueryGetAgencyResponse.decode(new _m0.Reader(data)));
  }

  AgencyAll(request: QueryAllAgencyRequest): Promise<QueryAllAgencyResponse> {
    const data = QueryAllAgencyRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "AgencyAll", data);
    return promise.then((data) => QueryAllAgencyResponse.decode(new _m0.Reader(data)));
  }

  Product(request: QueryGetProductRequest): Promise<QueryGetProductResponse> {
    const data = QueryGetProductRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Product", data);
    return promise.then((data) => QueryGetProductResponse.decode(new _m0.Reader(data)));
  }

  ProductAll(request: QueryAllProductRequest): Promise<QueryAllProductResponse> {
    const data = QueryAllProductRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "ProductAll", data);
    return promise.then((data) => QueryAllProductResponse.decode(new _m0.Reader(data)));
  }

  Storefront(request: QueryGetStorefrontRequest): Promise<QueryGetStorefrontResponse> {
    const data = QueryGetStorefrontRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Storefront", data);
    return promise.then((data) => QueryGetStorefrontResponse.decode(new _m0.Reader(data)));
  }

  StorefrontAll(request: QueryAllStorefrontRequest): Promise<QueryAllStorefrontResponse> {
    const data = QueryAllStorefrontRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "StorefrontAll", data);
    return promise.then((data) => QueryAllStorefrontResponse.decode(new _m0.Reader(data)));
  }

  Request(request: QueryGetRequestRequest): Promise<QueryGetRequestResponse> {
    const data = QueryGetRequestRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Request", data);
    return promise.then((data) => QueryGetRequestResponse.decode(new _m0.Reader(data)));
  }

  RequestAll(request: QueryAllRequestRequest): Promise<QueryAllRequestResponse> {
    const data = QueryAllRequestRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "RequestAll", data);
    return promise.then((data) => QueryAllRequestResponse.decode(new _m0.Reader(data)));
  }

  Pricer(request: QueryGetPricerRequest): Promise<QueryGetPricerResponse> {
    const data = QueryGetPricerRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Pricer", data);
    return promise.then((data) => QueryGetPricerResponse.decode(new _m0.Reader(data)));
  }

  PricerAll(request: QueryAllPricerRequest): Promise<QueryAllPricerResponse> {
    const data = QueryAllPricerRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "PricerAll", data);
    return promise.then((data) => QueryAllPricerResponse.decode(new _m0.Reader(data)));
  }

  Manufacture(request: QueryGetManufactureRequest): Promise<QueryGetManufactureResponse> {
    const data = QueryGetManufactureRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Manufacture", data);
    return promise.then((data) => QueryGetManufactureResponse.decode(new _m0.Reader(data)));
  }

  ManufactureAll(request: QueryAllManufactureRequest): Promise<QueryAllManufactureResponse> {
    const data = QueryAllManufactureRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "ManufactureAll", data);
    return promise.then((data) => QueryAllManufactureResponse.decode(new _m0.Reader(data)));
  }

  Capability(request: QueryGetCapabilityRequest): Promise<QueryGetCapabilityResponse> {
    const data = QueryGetCapabilityRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Capability", data);
    return promise.then((data) => QueryGetCapabilityResponse.decode(new _m0.Reader(data)));
  }

  CapabilityAll(request: QueryAllCapabilityRequest): Promise<QueryAllCapabilityResponse> {
    const data = QueryAllCapabilityRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "CapabilityAll", data);
    return promise.then((data) => QueryAllCapabilityResponse.decode(new _m0.Reader(data)));
  }

  Response(request: QueryGetResponseRequest): Promise<QueryGetResponseResponse> {
    const data = QueryGetResponseRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Response", data);
    return promise.then((data) => QueryGetResponseResponse.decode(new _m0.Reader(data)));
  }

  ResponseAll(request: QueryAllResponseRequest): Promise<QueryAllResponseResponse> {
    const data = QueryAllResponseRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "ResponseAll", data);
    return promise.then((data) => QueryAllResponseResponse.decode(new _m0.Reader(data)));
  }

  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "Order", data);
    return promise.then((data) => QueryGetOrderResponse.decode(new _m0.Reader(data)));
  }

  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Query", "OrderAll", data);
    return promise.then((data) => QueryAllOrderResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
