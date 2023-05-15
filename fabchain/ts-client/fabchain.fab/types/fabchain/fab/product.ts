/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fabchain.fab";

export interface Product {
  id: number;
  owner: string;
  name: string;
  agency: string;
  shares: string[];
  filestore: string;
  root: string;
  manifest: string;
  creator: string;
}

export interface EventCreateProduct {
  id: number;
}

function createBaseProduct(): Product {
  return { id: 0, owner: "", name: "", agency: "", shares: [], filestore: "", root: "", manifest: "", creator: "" };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
        case 9:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      agency: isSet(object.agency) ? String(object.agency) : "",
      shares: Array.isArray(object?.shares) ? object.shares.map((e: any) => String(e)) : [],
      filestore: isSet(object.filestore) ? String(object.filestore) : "",
      root: isSet(object.root) ? String(object.root) : "",
      manifest: isSet(object.manifest) ? String(object.manifest) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
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
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.agency = object.agency ?? "";
    message.shares = object.shares?.map((e) => e) || [];
    message.filestore = object.filestore ?? "";
    message.root = object.root ?? "";
    message.manifest = object.manifest ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseEventCreateProduct(): EventCreateProduct {
  return { id: 0 };
}

export const EventCreateProduct = {
  encode(message: EventCreateProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateProduct();
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

  fromJSON(object: any): EventCreateProduct {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: EventCreateProduct): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateProduct>, I>>(object: I): EventCreateProduct {
    const message = createBaseEventCreateProduct();
    message.id = object.id ?? 0;
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
