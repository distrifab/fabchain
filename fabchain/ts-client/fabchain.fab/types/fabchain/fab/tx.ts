/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fabchain.fab";

export interface MsgCreateUser {
  creator: string;
  manager: string;
  identifier: string;
}

export interface MsgCreateUserResponse {
  id: number;
}

export interface MsgUpdateUser {
  creator: string;
  id: number;
  manager: string;
  identifier: string;
}

export interface MsgUpdateUserResponse {
}

export interface MsgDeleteUser {
  creator: string;
  id: number;
}

export interface MsgDeleteUserResponse {
}

export interface MsgCreateFilestore {
  creator: string;
  owner: string;
  name: string;
  style: string;
  url: string;
}

export interface MsgCreateFilestoreResponse {
  id: number;
}

export interface MsgUpdateFilestore {
  creator: string;
  id: number;
  owner: string;
  name: string;
  style: string;
  url: string;
}

export interface MsgUpdateFilestoreResponse {
}

export interface MsgDeleteFilestore {
  creator: string;
  id: number;
}

export interface MsgDeleteFilestoreResponse {
}

export interface MsgCreateAgency {
  creator: string;
  owner: string;
  name: string;
  paymentProvider: string;
  paymentAddress: string;
}

export interface MsgCreateAgencyResponse {
  id: number;
}

export interface MsgUpdateAgency {
  creator: string;
  id: number;
  owner: string;
  name: string;
  paymentProvider: string;
  paymentAddress: string;
}

export interface MsgUpdateAgencyResponse {
}

export interface MsgDeleteAgency {
  creator: string;
  id: number;
}

export interface MsgDeleteAgencyResponse {
}

export interface MsgCreateProduct {
  creator: string;
  owner: string;
  name: string;
  agency: string;
  shares: string[];
  filestore: string;
  root: string;
  manifest: string;
}

export interface MsgCreateProductResponse {
  id: number;
}

export interface MsgUpdateProduct {
  creator: string;
  id: number;
  owner: string;
  name: string;
  agency: string;
  shares: string[];
  filestore: string;
  root: string;
  manifest: string;
}

export interface MsgUpdateProductResponse {
}

export interface MsgDeleteProduct {
  creator: string;
  id: number;
}

export interface MsgDeleteProductResponse {
}

export interface MsgCreateStorefront {
  creator: string;
  owner: string;
  name: string;
}

export interface MsgCreateStorefrontResponse {
  id: number;
}

export interface MsgUpdateStorefront {
  creator: string;
  id: number;
  owner: string;
  name: string;
}

export interface MsgUpdateStorefrontResponse {
}

export interface MsgDeleteStorefront {
  creator: string;
  id: number;
}

export interface MsgDeleteStorefrontResponse {
}

export interface MsgCreateRequest {
  creator: string;
  owner: string;
  product: string;
  settings: string;
}

export interface MsgCreateRequestResponse {
  id: number;
}

export interface MsgUpdateRequest {
  creator: string;
  id: number;
  owner: string;
  product: string;
  settings: string;
}

export interface MsgUpdateRequestResponse {
}

export interface MsgDeleteRequest {
  creator: string;
  id: number;
}

export interface MsgDeleteRequestResponse {
}

export interface MsgCreatePricer {
  creator: string;
  owner: string;
}

export interface MsgCreatePricerResponse {
  id: number;
}

export interface MsgUpdatePricer {
  creator: string;
  id: number;
  owner: string;
}

export interface MsgUpdatePricerResponse {
}

export interface MsgDeletePricer {
  creator: string;
  id: number;
}

export interface MsgDeletePricerResponse {
}

export interface MsgCreateManufacture {
  creator: string;
  owner: string;
  name: string;
  pricer: string[];
  paymentProvider: string;
  paymentAddress: string;
}

export interface MsgCreateManufactureResponse {
  id: number;
}

export interface MsgUpdateManufacture {
  creator: string;
  id: number;
  owner: string;
  name: string;
  pricer: string[];
  paymentProvider: string;
  paymentAddress: string;
}

export interface MsgUpdateManufactureResponse {
}

export interface MsgDeleteManufacture {
  creator: string;
  id: number;
}

export interface MsgDeleteManufactureResponse {
}

export interface MsgCreateCapability {
  creator: string;
  owner: string;
  manufacture: string;
  manifest: string;
}

export interface MsgCreateCapabilityResponse {
  id: number;
}

export interface MsgUpdateCapability {
  creator: string;
  id: number;
  owner: string;
  manufacture: string;
  manifest: string;
}

export interface MsgUpdateCapabilityResponse {
}

export interface MsgDeleteCapability {
  creator: string;
  id: number;
}

export interface MsgDeleteCapabilityResponse {
}

export interface MsgCreateResponse {
  creator: string;
  pricer: string;
  request: string;
  price: string;
}

export interface MsgCreateResponseResponse {
  id: number;
}

export interface MsgUpdateResponse {
  creator: string;
  id: number;
  pricer: string;
  request: string;
  price: string;
}

export interface MsgUpdateResponseResponse {
}

export interface MsgDeleteResponse {
  creator: string;
  id: number;
}

export interface MsgDeleteResponseResponse {
}

export interface MsgCreateOrder {
  creator: string;
  response: string;
  storefront: string;
  identifier: string;
  paymentProof: string;
}

export interface MsgCreateOrderResponse {
  id: number;
}

export interface MsgUpdateOrder {
  creator: string;
  id: number;
  response: string;
  storefront: string;
  identifier: string;
  paymentProof: string;
}

export interface MsgUpdateOrderResponse {
}

export interface MsgDeleteOrder {
  creator: string;
  id: number;
}

export interface MsgDeleteOrderResponse {
}

function createBaseMsgCreateUser(): MsgCreateUser {
  return { creator: "", manager: "", identifier: "" };
}

export const MsgCreateUser = {
  encode(message: MsgCreateUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.manager !== "") {
      writer.uint32(18).string(message.manager);
    }
    if (message.identifier !== "") {
      writer.uint32(26).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.manager = reader.string();
          break;
        case 3:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      manager: isSet(object.manager) ? String(object.manager) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
    };
  },

  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.manager !== undefined && (obj.manager = message.manager);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUser>, I>>(object: I): MsgCreateUser {
    const message = createBaseMsgCreateUser();
    message.creator = object.creator ?? "";
    message.manager = object.manager ?? "";
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseMsgCreateUserResponse(): MsgCreateUserResponse {
  return { id: 0 };
}

export const MsgCreateUserResponse = {
  encode(message: MsgCreateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserResponse();
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

  fromJSON(object: any): MsgCreateUserResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateUserResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserResponse>, I>>(object: I): MsgCreateUserResponse {
    const message = createBaseMsgCreateUserResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateUser(): MsgUpdateUser {
  return { creator: "", id: 0, manager: "", identifier: "" };
}

export const MsgUpdateUser = {
  encode(message: MsgUpdateUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.manager !== "") {
      writer.uint32(26).string(message.manager);
    }
    if (message.identifier !== "") {
      writer.uint32(34).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.manager = reader.string();
          break;
        case 4:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      manager: isSet(object.manager) ? String(object.manager) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
    };
  },

  toJSON(message: MsgUpdateUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.manager !== undefined && (obj.manager = message.manager);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUser>, I>>(object: I): MsgUpdateUser {
    const message = createBaseMsgUpdateUser();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.manager = object.manager ?? "";
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseMsgUpdateUserResponse(): MsgUpdateUserResponse {
  return {};
}

export const MsgUpdateUserResponse = {
  encode(_: MsgUpdateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateUserResponse();
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

  fromJSON(_: any): MsgUpdateUserResponse {
    return {};
  },

  toJSON(_: MsgUpdateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateUserResponse>, I>>(_: I): MsgUpdateUserResponse {
    const message = createBaseMsgUpdateUserResponse();
    return message;
  },
};

function createBaseMsgDeleteUser(): MsgDeleteUser {
  return { creator: "", id: 0 };
}

export const MsgDeleteUser = {
  encode(message: MsgDeleteUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUser>, I>>(object: I): MsgDeleteUser {
    const message = createBaseMsgDeleteUser();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteUserResponse(): MsgDeleteUserResponse {
  return {};
}

export const MsgDeleteUserResponse = {
  encode(_: MsgDeleteUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserResponse();
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

  fromJSON(_: any): MsgDeleteUserResponse {
    return {};
  },

  toJSON(_: MsgDeleteUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserResponse>, I>>(_: I): MsgDeleteUserResponse {
    const message = createBaseMsgDeleteUserResponse();
    return message;
  },
};

function createBaseMsgCreateFilestore(): MsgCreateFilestore {
  return { creator: "", owner: "", name: "", style: "", url: "" };
}

export const MsgCreateFilestore = {
  encode(message: MsgCreateFilestore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.style !== "") {
      writer.uint32(34).string(message.style);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFilestore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFilestore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.style = reader.string();
          break;
        case 5:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFilestore {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      style: isSet(object.style) ? String(object.style) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: MsgCreateFilestore): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.style !== undefined && (obj.style = message.style);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFilestore>, I>>(object: I): MsgCreateFilestore {
    const message = createBaseMsgCreateFilestore();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.style = object.style ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseMsgCreateFilestoreResponse(): MsgCreateFilestoreResponse {
  return { id: 0 };
}

export const MsgCreateFilestoreResponse = {
  encode(message: MsgCreateFilestoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFilestoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFilestoreResponse();
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

  fromJSON(object: any): MsgCreateFilestoreResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateFilestoreResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFilestoreResponse>, I>>(object: I): MsgCreateFilestoreResponse {
    const message = createBaseMsgCreateFilestoreResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateFilestore(): MsgUpdateFilestore {
  return { creator: "", id: 0, owner: "", name: "", style: "", url: "" };
}

export const MsgUpdateFilestore = {
  encode(message: MsgUpdateFilestore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.style !== "") {
      writer.uint32(42).string(message.style);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFilestore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFilestore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.style = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFilestore {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      style: isSet(object.style) ? String(object.style) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: MsgUpdateFilestore): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.style !== undefined && (obj.style = message.style);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFilestore>, I>>(object: I): MsgUpdateFilestore {
    const message = createBaseMsgUpdateFilestore();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.style = object.style ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseMsgUpdateFilestoreResponse(): MsgUpdateFilestoreResponse {
  return {};
}

export const MsgUpdateFilestoreResponse = {
  encode(_: MsgUpdateFilestoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFilestoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFilestoreResponse();
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

  fromJSON(_: any): MsgUpdateFilestoreResponse {
    return {};
  },

  toJSON(_: MsgUpdateFilestoreResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFilestoreResponse>, I>>(_: I): MsgUpdateFilestoreResponse {
    const message = createBaseMsgUpdateFilestoreResponse();
    return message;
  },
};

function createBaseMsgDeleteFilestore(): MsgDeleteFilestore {
  return { creator: "", id: 0 };
}

export const MsgDeleteFilestore = {
  encode(message: MsgDeleteFilestore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFilestore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteFilestore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteFilestore {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteFilestore): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteFilestore>, I>>(object: I): MsgDeleteFilestore {
    const message = createBaseMsgDeleteFilestore();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteFilestoreResponse(): MsgDeleteFilestoreResponse {
  return {};
}

export const MsgDeleteFilestoreResponse = {
  encode(_: MsgDeleteFilestoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFilestoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteFilestoreResponse();
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

  fromJSON(_: any): MsgDeleteFilestoreResponse {
    return {};
  },

  toJSON(_: MsgDeleteFilestoreResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteFilestoreResponse>, I>>(_: I): MsgDeleteFilestoreResponse {
    const message = createBaseMsgDeleteFilestoreResponse();
    return message;
  },
};

function createBaseMsgCreateAgency(): MsgCreateAgency {
  return { creator: "", owner: "", name: "", paymentProvider: "", paymentAddress: "" };
}

export const MsgCreateAgency = {
  encode(message: MsgCreateAgency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.paymentProvider !== "") {
      writer.uint32(34).string(message.paymentProvider);
    }
    if (message.paymentAddress !== "") {
      writer.uint32(42).string(message.paymentAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAgency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAgency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.paymentProvider = reader.string();
          break;
        case 5:
          message.paymentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAgency {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      paymentProvider: isSet(object.paymentProvider) ? String(object.paymentProvider) : "",
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
    };
  },

  toJSON(message: MsgCreateAgency): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.paymentProvider !== undefined && (obj.paymentProvider = message.paymentProvider);
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAgency>, I>>(object: I): MsgCreateAgency {
    const message = createBaseMsgCreateAgency();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.paymentProvider = object.paymentProvider ?? "";
    message.paymentAddress = object.paymentAddress ?? "";
    return message;
  },
};

function createBaseMsgCreateAgencyResponse(): MsgCreateAgencyResponse {
  return { id: 0 };
}

export const MsgCreateAgencyResponse = {
  encode(message: MsgCreateAgencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAgencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAgencyResponse();
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

  fromJSON(object: any): MsgCreateAgencyResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateAgencyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAgencyResponse>, I>>(object: I): MsgCreateAgencyResponse {
    const message = createBaseMsgCreateAgencyResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateAgency(): MsgUpdateAgency {
  return { creator: "", id: 0, owner: "", name: "", paymentProvider: "", paymentAddress: "" };
}

export const MsgUpdateAgency = {
  encode(message: MsgUpdateAgency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.paymentProvider !== "") {
      writer.uint32(42).string(message.paymentProvider);
    }
    if (message.paymentAddress !== "") {
      writer.uint32(50).string(message.paymentAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAgency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.paymentProvider = reader.string();
          break;
        case 6:
          message.paymentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAgency {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      paymentProvider: isSet(object.paymentProvider) ? String(object.paymentProvider) : "",
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
    };
  },

  toJSON(message: MsgUpdateAgency): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.paymentProvider !== undefined && (obj.paymentProvider = message.paymentProvider);
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAgency>, I>>(object: I): MsgUpdateAgency {
    const message = createBaseMsgUpdateAgency();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.paymentProvider = object.paymentProvider ?? "";
    message.paymentAddress = object.paymentAddress ?? "";
    return message;
  },
};

function createBaseMsgUpdateAgencyResponse(): MsgUpdateAgencyResponse {
  return {};
}

export const MsgUpdateAgencyResponse = {
  encode(_: MsgUpdateAgencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAgencyResponse();
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

  fromJSON(_: any): MsgUpdateAgencyResponse {
    return {};
  },

  toJSON(_: MsgUpdateAgencyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAgencyResponse>, I>>(_: I): MsgUpdateAgencyResponse {
    const message = createBaseMsgUpdateAgencyResponse();
    return message;
  },
};

function createBaseMsgDeleteAgency(): MsgDeleteAgency {
  return { creator: "", id: 0 };
}

export const MsgDeleteAgency = {
  encode(message: MsgDeleteAgency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAgency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAgency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAgency {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteAgency): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAgency>, I>>(object: I): MsgDeleteAgency {
    const message = createBaseMsgDeleteAgency();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteAgencyResponse(): MsgDeleteAgencyResponse {
  return {};
}

export const MsgDeleteAgencyResponse = {
  encode(_: MsgDeleteAgencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAgencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAgencyResponse();
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

  fromJSON(_: any): MsgDeleteAgencyResponse {
    return {};
  },

  toJSON(_: MsgDeleteAgencyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAgencyResponse>, I>>(_: I): MsgDeleteAgencyResponse {
    const message = createBaseMsgDeleteAgencyResponse();
    return message;
  },
};

function createBaseMsgCreateProduct(): MsgCreateProduct {
  return { creator: "", owner: "", name: "", agency: "", shares: [], filestore: "", root: "", manifest: "" };
}

export const MsgCreateProduct = {
  encode(message: MsgCreateProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.agency !== "") {
      writer.uint32(34).string(message.agency);
    }
    for (const v of message.shares) {
      writer.uint32(42).string(v!);
    }
    if (message.filestore !== "") {
      writer.uint32(50).string(message.filestore);
    }
    if (message.root !== "") {
      writer.uint32(58).string(message.root);
    }
    if (message.manifest !== "") {
      writer.uint32(66).string(message.manifest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.agency = reader.string();
          break;
        case 5:
          message.shares.push(reader.string());
          break;
        case 6:
          message.filestore = reader.string();
          break;
        case 7:
          message.root = reader.string();
          break;
        case 8:
          message.manifest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProduct {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      agency: isSet(object.agency) ? String(object.agency) : "",
      shares: Array.isArray(object?.shares) ? object.shares.map((e: any) => String(e)) : [],
      filestore: isSet(object.filestore) ? String(object.filestore) : "",
      root: isSet(object.root) ? String(object.root) : "",
      manifest: isSet(object.manifest) ? String(object.manifest) : "",
    };
  },

  toJSON(message: MsgCreateProduct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.agency !== undefined && (obj.agency = message.agency);
    if (message.shares) {
      obj.shares = message.shares.map((e) => e);
    } else {
      obj.shares = [];
    }
    message.filestore !== undefined && (obj.filestore = message.filestore);
    message.root !== undefined && (obj.root = message.root);
    message.manifest !== undefined && (obj.manifest = message.manifest);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProduct>, I>>(object: I): MsgCreateProduct {
    const message = createBaseMsgCreateProduct();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.agency = object.agency ?? "";
    message.shares = object.shares?.map((e) => e) || [];
    message.filestore = object.filestore ?? "";
    message.root = object.root ?? "";
    message.manifest = object.manifest ?? "";
    return message;
  },
};

function createBaseMsgCreateProductResponse(): MsgCreateProductResponse {
  return { id: 0 };
}

export const MsgCreateProductResponse = {
  encode(message: MsgCreateProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProductResponse();
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

  fromJSON(object: any): MsgCreateProductResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateProductResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProductResponse>, I>>(object: I): MsgCreateProductResponse {
    const message = createBaseMsgCreateProductResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateProduct(): MsgUpdateProduct {
  return { creator: "", id: 0, owner: "", name: "", agency: "", shares: [], filestore: "", root: "", manifest: "" };
}

export const MsgUpdateProduct = {
  encode(message: MsgUpdateProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.agency !== "") {
      writer.uint32(42).string(message.agency);
    }
    for (const v of message.shares) {
      writer.uint32(50).string(v!);
    }
    if (message.filestore !== "") {
      writer.uint32(58).string(message.filestore);
    }
    if (message.root !== "") {
      writer.uint32(66).string(message.root);
    }
    if (message.manifest !== "") {
      writer.uint32(74).string(message.manifest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.agency = reader.string();
          break;
        case 6:
          message.shares.push(reader.string());
          break;
        case 7:
          message.filestore = reader.string();
          break;
        case 8:
          message.root = reader.string();
          break;
        case 9:
          message.manifest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProduct {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      agency: isSet(object.agency) ? String(object.agency) : "",
      shares: Array.isArray(object?.shares) ? object.shares.map((e: any) => String(e)) : [],
      filestore: isSet(object.filestore) ? String(object.filestore) : "",
      root: isSet(object.root) ? String(object.root) : "",
      manifest: isSet(object.manifest) ? String(object.manifest) : "",
    };
  },

  toJSON(message: MsgUpdateProduct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.agency !== undefined && (obj.agency = message.agency);
    if (message.shares) {
      obj.shares = message.shares.map((e) => e);
    } else {
      obj.shares = [];
    }
    message.filestore !== undefined && (obj.filestore = message.filestore);
    message.root !== undefined && (obj.root = message.root);
    message.manifest !== undefined && (obj.manifest = message.manifest);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateProduct>, I>>(object: I): MsgUpdateProduct {
    const message = createBaseMsgUpdateProduct();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.agency = object.agency ?? "";
    message.shares = object.shares?.map((e) => e) || [];
    message.filestore = object.filestore ?? "";
    message.root = object.root ?? "";
    message.manifest = object.manifest ?? "";
    return message;
  },
};

function createBaseMsgUpdateProductResponse(): MsgUpdateProductResponse {
  return {};
}

export const MsgUpdateProductResponse = {
  encode(_: MsgUpdateProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProductResponse();
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

  fromJSON(_: any): MsgUpdateProductResponse {
    return {};
  },

  toJSON(_: MsgUpdateProductResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateProductResponse>, I>>(_: I): MsgUpdateProductResponse {
    const message = createBaseMsgUpdateProductResponse();
    return message;
  },
};

function createBaseMsgDeleteProduct(): MsgDeleteProduct {
  return { creator: "", id: 0 };
}

export const MsgDeleteProduct = {
  encode(message: MsgDeleteProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProduct {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteProduct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProduct>, I>>(object: I): MsgDeleteProduct {
    const message = createBaseMsgDeleteProduct();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteProductResponse(): MsgDeleteProductResponse {
  return {};
}

export const MsgDeleteProductResponse = {
  encode(_: MsgDeleteProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProductResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProductResponse();
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

  fromJSON(_: any): MsgDeleteProductResponse {
    return {};
  },

  toJSON(_: MsgDeleteProductResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProductResponse>, I>>(_: I): MsgDeleteProductResponse {
    const message = createBaseMsgDeleteProductResponse();
    return message;
  },
};

function createBaseMsgCreateStorefront(): MsgCreateStorefront {
  return { creator: "", owner: "", name: "" };
}

export const MsgCreateStorefront = {
  encode(message: MsgCreateStorefront, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStorefront {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStorefront();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStorefront {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgCreateStorefront): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateStorefront>, I>>(object: I): MsgCreateStorefront {
    const message = createBaseMsgCreateStorefront();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgCreateStorefrontResponse(): MsgCreateStorefrontResponse {
  return { id: 0 };
}

export const MsgCreateStorefrontResponse = {
  encode(message: MsgCreateStorefrontResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStorefrontResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStorefrontResponse();
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

  fromJSON(object: any): MsgCreateStorefrontResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateStorefrontResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateStorefrontResponse>, I>>(object: I): MsgCreateStorefrontResponse {
    const message = createBaseMsgCreateStorefrontResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateStorefront(): MsgUpdateStorefront {
  return { creator: "", id: 0, owner: "", name: "" };
}

export const MsgUpdateStorefront = {
  encode(message: MsgUpdateStorefront, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStorefront {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStorefront();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateStorefront {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgUpdateStorefront): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateStorefront>, I>>(object: I): MsgUpdateStorefront {
    const message = createBaseMsgUpdateStorefront();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgUpdateStorefrontResponse(): MsgUpdateStorefrontResponse {
  return {};
}

export const MsgUpdateStorefrontResponse = {
  encode(_: MsgUpdateStorefrontResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStorefrontResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStorefrontResponse();
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

  fromJSON(_: any): MsgUpdateStorefrontResponse {
    return {};
  },

  toJSON(_: MsgUpdateStorefrontResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateStorefrontResponse>, I>>(_: I): MsgUpdateStorefrontResponse {
    const message = createBaseMsgUpdateStorefrontResponse();
    return message;
  },
};

function createBaseMsgDeleteStorefront(): MsgDeleteStorefront {
  return { creator: "", id: 0 };
}

export const MsgDeleteStorefront = {
  encode(message: MsgDeleteStorefront, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteStorefront {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteStorefront();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteStorefront {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteStorefront): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteStorefront>, I>>(object: I): MsgDeleteStorefront {
    const message = createBaseMsgDeleteStorefront();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteStorefrontResponse(): MsgDeleteStorefrontResponse {
  return {};
}

export const MsgDeleteStorefrontResponse = {
  encode(_: MsgDeleteStorefrontResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteStorefrontResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteStorefrontResponse();
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

  fromJSON(_: any): MsgDeleteStorefrontResponse {
    return {};
  },

  toJSON(_: MsgDeleteStorefrontResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteStorefrontResponse>, I>>(_: I): MsgDeleteStorefrontResponse {
    const message = createBaseMsgDeleteStorefrontResponse();
    return message;
  },
};

function createBaseMsgCreateRequest(): MsgCreateRequest {
  return { creator: "", owner: "", product: "", settings: "" };
}

export const MsgCreateRequest = {
  encode(message: MsgCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.product !== "") {
      writer.uint32(26).string(message.product);
    }
    if (message.settings !== "") {
      writer.uint32(34).string(message.settings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.product = reader.string();
          break;
        case 4:
          message.settings = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      product: isSet(object.product) ? String(object.product) : "",
      settings: isSet(object.settings) ? String(object.settings) : "",
    };
  },

  toJSON(message: MsgCreateRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.product !== undefined && (obj.product = message.product);
    message.settings !== undefined && (obj.settings = message.settings);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRequest>, I>>(object: I): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.product = object.product ?? "";
    message.settings = object.settings ?? "";
    return message;
  },
};

function createBaseMsgCreateRequestResponse(): MsgCreateRequestResponse {
  return { id: 0 };
}

export const MsgCreateRequestResponse = {
  encode(message: MsgCreateRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRequestResponse();
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

  fromJSON(object: any): MsgCreateRequestResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateRequestResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRequestResponse>, I>>(object: I): MsgCreateRequestResponse {
    const message = createBaseMsgCreateRequestResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateRequest(): MsgUpdateRequest {
  return { creator: "", id: 0, owner: "", product: "", settings: "" };
}

export const MsgUpdateRequest = {
  encode(message: MsgUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.product !== "") {
      writer.uint32(34).string(message.product);
    }
    if (message.settings !== "") {
      writer.uint32(42).string(message.settings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.product = reader.string();
          break;
        case 5:
          message.settings = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      product: isSet(object.product) ? String(object.product) : "",
      settings: isSet(object.settings) ? String(object.settings) : "",
    };
  },

  toJSON(message: MsgUpdateRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.product !== undefined && (obj.product = message.product);
    message.settings !== undefined && (obj.settings = message.settings);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRequest>, I>>(object: I): MsgUpdateRequest {
    const message = createBaseMsgUpdateRequest();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.product = object.product ?? "";
    message.settings = object.settings ?? "";
    return message;
  },
};

function createBaseMsgUpdateRequestResponse(): MsgUpdateRequestResponse {
  return {};
}

export const MsgUpdateRequestResponse = {
  encode(_: MsgUpdateRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRequestResponse();
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

  fromJSON(_: any): MsgUpdateRequestResponse {
    return {};
  },

  toJSON(_: MsgUpdateRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRequestResponse>, I>>(_: I): MsgUpdateRequestResponse {
    const message = createBaseMsgUpdateRequestResponse();
    return message;
  },
};

function createBaseMsgDeleteRequest(): MsgDeleteRequest {
  return { creator: "", id: 0 };
}

export const MsgDeleteRequest = {
  encode(message: MsgDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRequest>, I>>(object: I): MsgDeleteRequest {
    const message = createBaseMsgDeleteRequest();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteRequestResponse(): MsgDeleteRequestResponse {
  return {};
}

export const MsgDeleteRequestResponse = {
  encode(_: MsgDeleteRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRequestResponse();
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

  fromJSON(_: any): MsgDeleteRequestResponse {
    return {};
  },

  toJSON(_: MsgDeleteRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRequestResponse>, I>>(_: I): MsgDeleteRequestResponse {
    const message = createBaseMsgDeleteRequestResponse();
    return message;
  },
};

function createBaseMsgCreatePricer(): MsgCreatePricer {
  return { creator: "", owner: "" };
}

export const MsgCreatePricer = {
  encode(message: MsgCreatePricer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePricer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePricer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePricer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgCreatePricer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePricer>, I>>(object: I): MsgCreatePricer {
    const message = createBaseMsgCreatePricer();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgCreatePricerResponse(): MsgCreatePricerResponse {
  return { id: 0 };
}

export const MsgCreatePricerResponse = {
  encode(message: MsgCreatePricerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePricerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePricerResponse();
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

  fromJSON(object: any): MsgCreatePricerResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreatePricerResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePricerResponse>, I>>(object: I): MsgCreatePricerResponse {
    const message = createBaseMsgCreatePricerResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdatePricer(): MsgUpdatePricer {
  return { creator: "", id: 0, owner: "" };
}

export const MsgUpdatePricer = {
  encode(message: MsgUpdatePricer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePricer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePricer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePricer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgUpdatePricer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePricer>, I>>(object: I): MsgUpdatePricer {
    const message = createBaseMsgUpdatePricer();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgUpdatePricerResponse(): MsgUpdatePricerResponse {
  return {};
}

export const MsgUpdatePricerResponse = {
  encode(_: MsgUpdatePricerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePricerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePricerResponse();
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

  fromJSON(_: any): MsgUpdatePricerResponse {
    return {};
  },

  toJSON(_: MsgUpdatePricerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePricerResponse>, I>>(_: I): MsgUpdatePricerResponse {
    const message = createBaseMsgUpdatePricerResponse();
    return message;
  },
};

function createBaseMsgDeletePricer(): MsgDeletePricer {
  return { creator: "", id: 0 };
}

export const MsgDeletePricer = {
  encode(message: MsgDeletePricer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePricer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePricer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePricer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeletePricer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePricer>, I>>(object: I): MsgDeletePricer {
    const message = createBaseMsgDeletePricer();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeletePricerResponse(): MsgDeletePricerResponse {
  return {};
}

export const MsgDeletePricerResponse = {
  encode(_: MsgDeletePricerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePricerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePricerResponse();
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

  fromJSON(_: any): MsgDeletePricerResponse {
    return {};
  },

  toJSON(_: MsgDeletePricerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePricerResponse>, I>>(_: I): MsgDeletePricerResponse {
    const message = createBaseMsgDeletePricerResponse();
    return message;
  },
};

function createBaseMsgCreateManufacture(): MsgCreateManufacture {
  return { creator: "", owner: "", name: "", pricer: [], paymentProvider: "", paymentAddress: "" };
}

export const MsgCreateManufacture = {
  encode(message: MsgCreateManufacture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.pricer) {
      writer.uint32(34).string(v!);
    }
    if (message.paymentProvider !== "") {
      writer.uint32(42).string(message.paymentProvider);
    }
    if (message.paymentAddress !== "") {
      writer.uint32(50).string(message.paymentAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateManufacture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateManufacture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.pricer.push(reader.string());
          break;
        case 5:
          message.paymentProvider = reader.string();
          break;
        case 6:
          message.paymentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateManufacture {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      pricer: Array.isArray(object?.pricer) ? object.pricer.map((e: any) => String(e)) : [],
      paymentProvider: isSet(object.paymentProvider) ? String(object.paymentProvider) : "",
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
    };
  },

  toJSON(message: MsgCreateManufacture): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    if (message.pricer) {
      obj.pricer = message.pricer.map((e) => e);
    } else {
      obj.pricer = [];
    }
    message.paymentProvider !== undefined && (obj.paymentProvider = message.paymentProvider);
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateManufacture>, I>>(object: I): MsgCreateManufacture {
    const message = createBaseMsgCreateManufacture();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.pricer = object.pricer?.map((e) => e) || [];
    message.paymentProvider = object.paymentProvider ?? "";
    message.paymentAddress = object.paymentAddress ?? "";
    return message;
  },
};

function createBaseMsgCreateManufactureResponse(): MsgCreateManufactureResponse {
  return { id: 0 };
}

export const MsgCreateManufactureResponse = {
  encode(message: MsgCreateManufactureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateManufactureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateManufactureResponse();
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

  fromJSON(object: any): MsgCreateManufactureResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateManufactureResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateManufactureResponse>, I>>(object: I): MsgCreateManufactureResponse {
    const message = createBaseMsgCreateManufactureResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateManufacture(): MsgUpdateManufacture {
  return { creator: "", id: 0, owner: "", name: "", pricer: [], paymentProvider: "", paymentAddress: "" };
}

export const MsgUpdateManufacture = {
  encode(message: MsgUpdateManufacture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    for (const v of message.pricer) {
      writer.uint32(42).string(v!);
    }
    if (message.paymentProvider !== "") {
      writer.uint32(50).string(message.paymentProvider);
    }
    if (message.paymentAddress !== "") {
      writer.uint32(58).string(message.paymentAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManufacture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateManufacture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.pricer.push(reader.string());
          break;
        case 6:
          message.paymentProvider = reader.string();
          break;
        case 7:
          message.paymentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateManufacture {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      pricer: Array.isArray(object?.pricer) ? object.pricer.map((e: any) => String(e)) : [],
      paymentProvider: isSet(object.paymentProvider) ? String(object.paymentProvider) : "",
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
    };
  },

  toJSON(message: MsgUpdateManufacture): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    if (message.pricer) {
      obj.pricer = message.pricer.map((e) => e);
    } else {
      obj.pricer = [];
    }
    message.paymentProvider !== undefined && (obj.paymentProvider = message.paymentProvider);
    message.paymentAddress !== undefined && (obj.paymentAddress = message.paymentAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateManufacture>, I>>(object: I): MsgUpdateManufacture {
    const message = createBaseMsgUpdateManufacture();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.pricer = object.pricer?.map((e) => e) || [];
    message.paymentProvider = object.paymentProvider ?? "";
    message.paymentAddress = object.paymentAddress ?? "";
    return message;
  },
};

function createBaseMsgUpdateManufactureResponse(): MsgUpdateManufactureResponse {
  return {};
}

export const MsgUpdateManufactureResponse = {
  encode(_: MsgUpdateManufactureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManufactureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateManufactureResponse();
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

  fromJSON(_: any): MsgUpdateManufactureResponse {
    return {};
  },

  toJSON(_: MsgUpdateManufactureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateManufactureResponse>, I>>(_: I): MsgUpdateManufactureResponse {
    const message = createBaseMsgUpdateManufactureResponse();
    return message;
  },
};

function createBaseMsgDeleteManufacture(): MsgDeleteManufacture {
  return { creator: "", id: 0 };
}

export const MsgDeleteManufacture = {
  encode(message: MsgDeleteManufacture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteManufacture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteManufacture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteManufacture {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteManufacture): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteManufacture>, I>>(object: I): MsgDeleteManufacture {
    const message = createBaseMsgDeleteManufacture();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteManufactureResponse(): MsgDeleteManufactureResponse {
  return {};
}

export const MsgDeleteManufactureResponse = {
  encode(_: MsgDeleteManufactureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteManufactureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteManufactureResponse();
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

  fromJSON(_: any): MsgDeleteManufactureResponse {
    return {};
  },

  toJSON(_: MsgDeleteManufactureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteManufactureResponse>, I>>(_: I): MsgDeleteManufactureResponse {
    const message = createBaseMsgDeleteManufactureResponse();
    return message;
  },
};

function createBaseMsgCreateCapability(): MsgCreateCapability {
  return { creator: "", owner: "", manufacture: "", manifest: "" };
}

export const MsgCreateCapability = {
  encode(message: MsgCreateCapability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.manufacture !== "") {
      writer.uint32(26).string(message.manufacture);
    }
    if (message.manifest !== "") {
      writer.uint32(34).string(message.manifest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCapability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.manufacture = reader.string();
          break;
        case 4:
          message.manifest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCapability {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      manufacture: isSet(object.manufacture) ? String(object.manufacture) : "",
      manifest: isSet(object.manifest) ? String(object.manifest) : "",
    };
  },

  toJSON(message: MsgCreateCapability): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.owner !== undefined && (obj.owner = message.owner);
    message.manufacture !== undefined && (obj.manufacture = message.manufacture);
    message.manifest !== undefined && (obj.manifest = message.manifest);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCapability>, I>>(object: I): MsgCreateCapability {
    const message = createBaseMsgCreateCapability();
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.manufacture = object.manufacture ?? "";
    message.manifest = object.manifest ?? "";
    return message;
  },
};

function createBaseMsgCreateCapabilityResponse(): MsgCreateCapabilityResponse {
  return { id: 0 };
}

export const MsgCreateCapabilityResponse = {
  encode(message: MsgCreateCapabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCapabilityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCapabilityResponse();
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

  fromJSON(object: any): MsgCreateCapabilityResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateCapabilityResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCapabilityResponse>, I>>(object: I): MsgCreateCapabilityResponse {
    const message = createBaseMsgCreateCapabilityResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateCapability(): MsgUpdateCapability {
  return { creator: "", id: 0, owner: "", manufacture: "", manifest: "" };
}

export const MsgUpdateCapability = {
  encode(message: MsgUpdateCapability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.manufacture !== "") {
      writer.uint32(34).string(message.manufacture);
    }
    if (message.manifest !== "") {
      writer.uint32(42).string(message.manifest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCapability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.manufacture = reader.string();
          break;
        case 5:
          message.manifest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCapability {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      manufacture: isSet(object.manufacture) ? String(object.manufacture) : "",
      manifest: isSet(object.manifest) ? String(object.manifest) : "",
    };
  },

  toJSON(message: MsgUpdateCapability): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.manufacture !== undefined && (obj.manufacture = message.manufacture);
    message.manifest !== undefined && (obj.manifest = message.manifest);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCapability>, I>>(object: I): MsgUpdateCapability {
    const message = createBaseMsgUpdateCapability();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.manufacture = object.manufacture ?? "";
    message.manifest = object.manifest ?? "";
    return message;
  },
};

function createBaseMsgUpdateCapabilityResponse(): MsgUpdateCapabilityResponse {
  return {};
}

export const MsgUpdateCapabilityResponse = {
  encode(_: MsgUpdateCapabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCapabilityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCapabilityResponse();
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

  fromJSON(_: any): MsgUpdateCapabilityResponse {
    return {};
  },

  toJSON(_: MsgUpdateCapabilityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCapabilityResponse>, I>>(_: I): MsgUpdateCapabilityResponse {
    const message = createBaseMsgUpdateCapabilityResponse();
    return message;
  },
};

function createBaseMsgDeleteCapability(): MsgDeleteCapability {
  return { creator: "", id: 0 };
}

export const MsgDeleteCapability = {
  encode(message: MsgDeleteCapability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCapability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCapability {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteCapability): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCapability>, I>>(object: I): MsgDeleteCapability {
    const message = createBaseMsgDeleteCapability();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteCapabilityResponse(): MsgDeleteCapabilityResponse {
  return {};
}

export const MsgDeleteCapabilityResponse = {
  encode(_: MsgDeleteCapabilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCapabilityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCapabilityResponse();
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

  fromJSON(_: any): MsgDeleteCapabilityResponse {
    return {};
  },

  toJSON(_: MsgDeleteCapabilityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCapabilityResponse>, I>>(_: I): MsgDeleteCapabilityResponse {
    const message = createBaseMsgDeleteCapabilityResponse();
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return { creator: "", pricer: "", request: "", price: "" };
}

export const MsgCreateResponse = {
  encode(message: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pricer !== "") {
      writer.uint32(18).string(message.pricer);
    }
    if (message.request !== "") {
      writer.uint32(26).string(message.request);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pricer = reader.string();
          break;
        case 3:
          message.request = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pricer: isSet(object.pricer) ? String(object.pricer) : "",
      request: isSet(object.request) ? String(object.request) : "",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: MsgCreateResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pricer !== undefined && (obj.pricer = message.pricer);
    message.request !== undefined && (obj.request = message.request);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResponse>, I>>(object: I): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    message.creator = object.creator ?? "";
    message.pricer = object.pricer ?? "";
    message.request = object.request ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseMsgCreateResponseResponse(): MsgCreateResponseResponse {
  return { id: 0 };
}

export const MsgCreateResponseResponse = {
  encode(message: MsgCreateResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponseResponse();
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

  fromJSON(object: any): MsgCreateResponseResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateResponseResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResponseResponse>, I>>(object: I): MsgCreateResponseResponse {
    const message = createBaseMsgCreateResponseResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateResponse(): MsgUpdateResponse {
  return { creator: "", id: 0, pricer: "", request: "", price: "" };
}

export const MsgUpdateResponse = {
  encode(message: MsgUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.pricer !== "") {
      writer.uint32(26).string(message.pricer);
    }
    if (message.request !== "") {
      writer.uint32(34).string(message.request);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.pricer = reader.string();
          break;
        case 4:
          message.request = reader.string();
          break;
        case 5:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      pricer: isSet(object.pricer) ? String(object.pricer) : "",
      request: isSet(object.request) ? String(object.request) : "",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: MsgUpdateResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.pricer !== undefined && (obj.pricer = message.pricer);
    message.request !== undefined && (obj.request = message.request);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateResponse>, I>>(object: I): MsgUpdateResponse {
    const message = createBaseMsgUpdateResponse();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.pricer = object.pricer ?? "";
    message.request = object.request ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseMsgUpdateResponseResponse(): MsgUpdateResponseResponse {
  return {};
}

export const MsgUpdateResponseResponse = {
  encode(_: MsgUpdateResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResponseResponse();
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

  fromJSON(_: any): MsgUpdateResponseResponse {
    return {};
  },

  toJSON(_: MsgUpdateResponseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateResponseResponse>, I>>(_: I): MsgUpdateResponseResponse {
    const message = createBaseMsgUpdateResponseResponse();
    return message;
  },
};

function createBaseMsgDeleteResponse(): MsgDeleteResponse {
  return { creator: "", id: 0 };
}

export const MsgDeleteResponse = {
  encode(message: MsgDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteResponse>, I>>(object: I): MsgDeleteResponse {
    const message = createBaseMsgDeleteResponse();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteResponseResponse(): MsgDeleteResponseResponse {
  return {};
}

export const MsgDeleteResponseResponse = {
  encode(_: MsgDeleteResponseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteResponseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteResponseResponse();
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

  fromJSON(_: any): MsgDeleteResponseResponse {
    return {};
  },

  toJSON(_: MsgDeleteResponseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteResponseResponse>, I>>(_: I): MsgDeleteResponseResponse {
    const message = createBaseMsgDeleteResponseResponse();
    return message;
  },
};

function createBaseMsgCreateOrder(): MsgCreateOrder {
  return { creator: "", response: "", storefront: "", identifier: "", paymentProof: "" };
}

export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.response !== "") {
      writer.uint32(18).string(message.response);
    }
    if (message.storefront !== "") {
      writer.uint32(26).string(message.storefront);
    }
    if (message.identifier !== "") {
      writer.uint32(34).string(message.identifier);
    }
    if (message.paymentProof !== "") {
      writer.uint32(42).string(message.paymentProof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.response = reader.string();
          break;
        case 3:
          message.storefront = reader.string();
          break;
        case 4:
          message.identifier = reader.string();
          break;
        case 5:
          message.paymentProof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      response: isSet(object.response) ? String(object.response) : "",
      storefront: isSet(object.storefront) ? String(object.storefront) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      paymentProof: isSet(object.paymentProof) ? String(object.paymentProof) : "",
    };
  },

  toJSON(message: MsgCreateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.response !== undefined && (obj.response = message.response);
    message.storefront !== undefined && (obj.storefront = message.storefront);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.paymentProof !== undefined && (obj.paymentProof = message.paymentProof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOrder>, I>>(object: I): MsgCreateOrder {
    const message = createBaseMsgCreateOrder();
    message.creator = object.creator ?? "";
    message.response = object.response ?? "";
    message.storefront = object.storefront ?? "";
    message.identifier = object.identifier ?? "";
    message.paymentProof = object.paymentProof ?? "";
    return message;
  },
};

function createBaseMsgCreateOrderResponse(): MsgCreateOrderResponse {
  return { id: 0 };
}

export const MsgCreateOrderResponse = {
  encode(message: MsgCreateOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrderResponse();
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

  fromJSON(object: any): MsgCreateOrderResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateOrderResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOrderResponse>, I>>(object: I): MsgCreateOrderResponse {
    const message = createBaseMsgCreateOrderResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateOrder(): MsgUpdateOrder {
  return { creator: "", id: 0, response: "", storefront: "", identifier: "", paymentProof: "" };
}

export const MsgUpdateOrder = {
  encode(message: MsgUpdateOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.response !== "") {
      writer.uint32(26).string(message.response);
    }
    if (message.storefront !== "") {
      writer.uint32(34).string(message.storefront);
    }
    if (message.identifier !== "") {
      writer.uint32(42).string(message.identifier);
    }
    if (message.paymentProof !== "") {
      writer.uint32(50).string(message.paymentProof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.response = reader.string();
          break;
        case 4:
          message.storefront = reader.string();
          break;
        case 5:
          message.identifier = reader.string();
          break;
        case 6:
          message.paymentProof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      response: isSet(object.response) ? String(object.response) : "",
      storefront: isSet(object.storefront) ? String(object.storefront) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      paymentProof: isSet(object.paymentProof) ? String(object.paymentProof) : "",
    };
  },

  toJSON(message: MsgUpdateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.response !== undefined && (obj.response = message.response);
    message.storefront !== undefined && (obj.storefront = message.storefront);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.paymentProof !== undefined && (obj.paymentProof = message.paymentProof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateOrder>, I>>(object: I): MsgUpdateOrder {
    const message = createBaseMsgUpdateOrder();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.response = object.response ?? "";
    message.storefront = object.storefront ?? "";
    message.identifier = object.identifier ?? "";
    message.paymentProof = object.paymentProof ?? "";
    return message;
  },
};

function createBaseMsgUpdateOrderResponse(): MsgUpdateOrderResponse {
  return {};
}

export const MsgUpdateOrderResponse = {
  encode(_: MsgUpdateOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOrderResponse();
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

  fromJSON(_: any): MsgUpdateOrderResponse {
    return {};
  },

  toJSON(_: MsgUpdateOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateOrderResponse>, I>>(_: I): MsgUpdateOrderResponse {
    const message = createBaseMsgUpdateOrderResponse();
    return message;
  },
};

function createBaseMsgDeleteOrder(): MsgDeleteOrder {
  return { creator: "", id: 0 };
}

export const MsgDeleteOrder = {
  encode(message: MsgDeleteOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteOrder>, I>>(object: I): MsgDeleteOrder {
    const message = createBaseMsgDeleteOrder();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteOrderResponse(): MsgDeleteOrderResponse {
  return {};
}

export const MsgDeleteOrderResponse = {
  encode(_: MsgDeleteOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOrderResponse();
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

  fromJSON(_: any): MsgDeleteOrderResponse {
    return {};
  },

  toJSON(_: MsgDeleteOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteOrderResponse>, I>>(_: I): MsgDeleteOrderResponse {
    const message = createBaseMsgDeleteOrderResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
  CreateFilestore(request: MsgCreateFilestore): Promise<MsgCreateFilestoreResponse>;
  UpdateFilestore(request: MsgUpdateFilestore): Promise<MsgUpdateFilestoreResponse>;
  DeleteFilestore(request: MsgDeleteFilestore): Promise<MsgDeleteFilestoreResponse>;
  CreateAgency(request: MsgCreateAgency): Promise<MsgCreateAgencyResponse>;
  UpdateAgency(request: MsgUpdateAgency): Promise<MsgUpdateAgencyResponse>;
  DeleteAgency(request: MsgDeleteAgency): Promise<MsgDeleteAgencyResponse>;
  CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse>;
  UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse>;
  DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse>;
  CreateStorefront(request: MsgCreateStorefront): Promise<MsgCreateStorefrontResponse>;
  UpdateStorefront(request: MsgUpdateStorefront): Promise<MsgUpdateStorefrontResponse>;
  DeleteStorefront(request: MsgDeleteStorefront): Promise<MsgDeleteStorefrontResponse>;
  CreateRequest(request: MsgCreateRequest): Promise<MsgCreateRequestResponse>;
  UpdateRequest(request: MsgUpdateRequest): Promise<MsgUpdateRequestResponse>;
  DeleteRequest(request: MsgDeleteRequest): Promise<MsgDeleteRequestResponse>;
  CreatePricer(request: MsgCreatePricer): Promise<MsgCreatePricerResponse>;
  UpdatePricer(request: MsgUpdatePricer): Promise<MsgUpdatePricerResponse>;
  DeletePricer(request: MsgDeletePricer): Promise<MsgDeletePricerResponse>;
  CreateManufacture(request: MsgCreateManufacture): Promise<MsgCreateManufactureResponse>;
  UpdateManufacture(request: MsgUpdateManufacture): Promise<MsgUpdateManufactureResponse>;
  DeleteManufacture(request: MsgDeleteManufacture): Promise<MsgDeleteManufactureResponse>;
  CreateCapability(request: MsgCreateCapability): Promise<MsgCreateCapabilityResponse>;
  UpdateCapability(request: MsgUpdateCapability): Promise<MsgUpdateCapabilityResponse>;
  DeleteCapability(request: MsgDeleteCapability): Promise<MsgDeleteCapabilityResponse>;
  CreateResponse(request: MsgCreateResponse): Promise<MsgCreateResponseResponse>;
  UpdateResponse(request: MsgUpdateResponse): Promise<MsgUpdateResponseResponse>;
  DeleteResponse(request: MsgDeleteResponse): Promise<MsgDeleteResponseResponse>;
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateUser = this.CreateUser.bind(this);
    this.UpdateUser = this.UpdateUser.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
    this.CreateFilestore = this.CreateFilestore.bind(this);
    this.UpdateFilestore = this.UpdateFilestore.bind(this);
    this.DeleteFilestore = this.DeleteFilestore.bind(this);
    this.CreateAgency = this.CreateAgency.bind(this);
    this.UpdateAgency = this.UpdateAgency.bind(this);
    this.DeleteAgency = this.DeleteAgency.bind(this);
    this.CreateProduct = this.CreateProduct.bind(this);
    this.UpdateProduct = this.UpdateProduct.bind(this);
    this.DeleteProduct = this.DeleteProduct.bind(this);
    this.CreateStorefront = this.CreateStorefront.bind(this);
    this.UpdateStorefront = this.UpdateStorefront.bind(this);
    this.DeleteStorefront = this.DeleteStorefront.bind(this);
    this.CreateRequest = this.CreateRequest.bind(this);
    this.UpdateRequest = this.UpdateRequest.bind(this);
    this.DeleteRequest = this.DeleteRequest.bind(this);
    this.CreatePricer = this.CreatePricer.bind(this);
    this.UpdatePricer = this.UpdatePricer.bind(this);
    this.DeletePricer = this.DeletePricer.bind(this);
    this.CreateManufacture = this.CreateManufacture.bind(this);
    this.UpdateManufacture = this.UpdateManufacture.bind(this);
    this.DeleteManufacture = this.DeleteManufacture.bind(this);
    this.CreateCapability = this.CreateCapability.bind(this);
    this.UpdateCapability = this.UpdateCapability.bind(this);
    this.DeleteCapability = this.DeleteCapability.bind(this);
    this.CreateResponse = this.CreateResponse.bind(this);
    this.UpdateResponse = this.UpdateResponse.bind(this);
    this.DeleteResponse = this.DeleteResponse.bind(this);
    this.CreateOrder = this.CreateOrder.bind(this);
    this.UpdateOrder = this.UpdateOrder.bind(this);
    this.DeleteOrder = this.DeleteOrder.bind(this);
  }
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateUser", data);
    return promise.then((data) => MsgCreateUserResponse.decode(new _m0.Reader(data)));
  }

  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse> {
    const data = MsgUpdateUser.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateUser", data);
    return promise.then((data) => MsgUpdateUserResponse.decode(new _m0.Reader(data)));
  }

  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse> {
    const data = MsgDeleteUser.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteUser", data);
    return promise.then((data) => MsgDeleteUserResponse.decode(new _m0.Reader(data)));
  }

  CreateFilestore(request: MsgCreateFilestore): Promise<MsgCreateFilestoreResponse> {
    const data = MsgCreateFilestore.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateFilestore", data);
    return promise.then((data) => MsgCreateFilestoreResponse.decode(new _m0.Reader(data)));
  }

  UpdateFilestore(request: MsgUpdateFilestore): Promise<MsgUpdateFilestoreResponse> {
    const data = MsgUpdateFilestore.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateFilestore", data);
    return promise.then((data) => MsgUpdateFilestoreResponse.decode(new _m0.Reader(data)));
  }

  DeleteFilestore(request: MsgDeleteFilestore): Promise<MsgDeleteFilestoreResponse> {
    const data = MsgDeleteFilestore.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteFilestore", data);
    return promise.then((data) => MsgDeleteFilestoreResponse.decode(new _m0.Reader(data)));
  }

  CreateAgency(request: MsgCreateAgency): Promise<MsgCreateAgencyResponse> {
    const data = MsgCreateAgency.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateAgency", data);
    return promise.then((data) => MsgCreateAgencyResponse.decode(new _m0.Reader(data)));
  }

  UpdateAgency(request: MsgUpdateAgency): Promise<MsgUpdateAgencyResponse> {
    const data = MsgUpdateAgency.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateAgency", data);
    return promise.then((data) => MsgUpdateAgencyResponse.decode(new _m0.Reader(data)));
  }

  DeleteAgency(request: MsgDeleteAgency): Promise<MsgDeleteAgencyResponse> {
    const data = MsgDeleteAgency.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteAgency", data);
    return promise.then((data) => MsgDeleteAgencyResponse.decode(new _m0.Reader(data)));
  }

  CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse> {
    const data = MsgCreateProduct.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateProduct", data);
    return promise.then((data) => MsgCreateProductResponse.decode(new _m0.Reader(data)));
  }

  UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse> {
    const data = MsgUpdateProduct.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateProduct", data);
    return promise.then((data) => MsgUpdateProductResponse.decode(new _m0.Reader(data)));
  }

  DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse> {
    const data = MsgDeleteProduct.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteProduct", data);
    return promise.then((data) => MsgDeleteProductResponse.decode(new _m0.Reader(data)));
  }

  CreateStorefront(request: MsgCreateStorefront): Promise<MsgCreateStorefrontResponse> {
    const data = MsgCreateStorefront.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateStorefront", data);
    return promise.then((data) => MsgCreateStorefrontResponse.decode(new _m0.Reader(data)));
  }

  UpdateStorefront(request: MsgUpdateStorefront): Promise<MsgUpdateStorefrontResponse> {
    const data = MsgUpdateStorefront.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateStorefront", data);
    return promise.then((data) => MsgUpdateStorefrontResponse.decode(new _m0.Reader(data)));
  }

  DeleteStorefront(request: MsgDeleteStorefront): Promise<MsgDeleteStorefrontResponse> {
    const data = MsgDeleteStorefront.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteStorefront", data);
    return promise.then((data) => MsgDeleteStorefrontResponse.decode(new _m0.Reader(data)));
  }

  CreateRequest(request: MsgCreateRequest): Promise<MsgCreateRequestResponse> {
    const data = MsgCreateRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateRequest", data);
    return promise.then((data) => MsgCreateRequestResponse.decode(new _m0.Reader(data)));
  }

  UpdateRequest(request: MsgUpdateRequest): Promise<MsgUpdateRequestResponse> {
    const data = MsgUpdateRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateRequest", data);
    return promise.then((data) => MsgUpdateRequestResponse.decode(new _m0.Reader(data)));
  }

  DeleteRequest(request: MsgDeleteRequest): Promise<MsgDeleteRequestResponse> {
    const data = MsgDeleteRequest.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteRequest", data);
    return promise.then((data) => MsgDeleteRequestResponse.decode(new _m0.Reader(data)));
  }

  CreatePricer(request: MsgCreatePricer): Promise<MsgCreatePricerResponse> {
    const data = MsgCreatePricer.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreatePricer", data);
    return promise.then((data) => MsgCreatePricerResponse.decode(new _m0.Reader(data)));
  }

  UpdatePricer(request: MsgUpdatePricer): Promise<MsgUpdatePricerResponse> {
    const data = MsgUpdatePricer.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdatePricer", data);
    return promise.then((data) => MsgUpdatePricerResponse.decode(new _m0.Reader(data)));
  }

  DeletePricer(request: MsgDeletePricer): Promise<MsgDeletePricerResponse> {
    const data = MsgDeletePricer.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeletePricer", data);
    return promise.then((data) => MsgDeletePricerResponse.decode(new _m0.Reader(data)));
  }

  CreateManufacture(request: MsgCreateManufacture): Promise<MsgCreateManufactureResponse> {
    const data = MsgCreateManufacture.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateManufacture", data);
    return promise.then((data) => MsgCreateManufactureResponse.decode(new _m0.Reader(data)));
  }

  UpdateManufacture(request: MsgUpdateManufacture): Promise<MsgUpdateManufactureResponse> {
    const data = MsgUpdateManufacture.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateManufacture", data);
    return promise.then((data) => MsgUpdateManufactureResponse.decode(new _m0.Reader(data)));
  }

  DeleteManufacture(request: MsgDeleteManufacture): Promise<MsgDeleteManufactureResponse> {
    const data = MsgDeleteManufacture.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteManufacture", data);
    return promise.then((data) => MsgDeleteManufactureResponse.decode(new _m0.Reader(data)));
  }

  CreateCapability(request: MsgCreateCapability): Promise<MsgCreateCapabilityResponse> {
    const data = MsgCreateCapability.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateCapability", data);
    return promise.then((data) => MsgCreateCapabilityResponse.decode(new _m0.Reader(data)));
  }

  UpdateCapability(request: MsgUpdateCapability): Promise<MsgUpdateCapabilityResponse> {
    const data = MsgUpdateCapability.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateCapability", data);
    return promise.then((data) => MsgUpdateCapabilityResponse.decode(new _m0.Reader(data)));
  }

  DeleteCapability(request: MsgDeleteCapability): Promise<MsgDeleteCapabilityResponse> {
    const data = MsgDeleteCapability.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteCapability", data);
    return promise.then((data) => MsgDeleteCapabilityResponse.decode(new _m0.Reader(data)));
  }

  CreateResponse(request: MsgCreateResponse): Promise<MsgCreateResponseResponse> {
    const data = MsgCreateResponse.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateResponse", data);
    return promise.then((data) => MsgCreateResponseResponse.decode(new _m0.Reader(data)));
  }

  UpdateResponse(request: MsgUpdateResponse): Promise<MsgUpdateResponseResponse> {
    const data = MsgUpdateResponse.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateResponse", data);
    return promise.then((data) => MsgUpdateResponseResponse.decode(new _m0.Reader(data)));
  }

  DeleteResponse(request: MsgDeleteResponse): Promise<MsgDeleteResponseResponse> {
    const data = MsgDeleteResponse.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteResponse", data);
    return promise.then((data) => MsgDeleteResponseResponse.decode(new _m0.Reader(data)));
  }

  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "CreateOrder", data);
    return promise.then((data) => MsgCreateOrderResponse.decode(new _m0.Reader(data)));
  }

  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse> {
    const data = MsgUpdateOrder.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "UpdateOrder", data);
    return promise.then((data) => MsgUpdateOrderResponse.decode(new _m0.Reader(data)));
  }

  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse> {
    const data = MsgDeleteOrder.encode(request).finish();
    const promise = this.rpc.request("fabchain.fab.Msg", "DeleteOrder", data);
    return promise.then((data) => MsgDeleteOrderResponse.decode(new _m0.Reader(data)));
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
