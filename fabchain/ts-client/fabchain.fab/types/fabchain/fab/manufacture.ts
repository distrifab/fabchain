/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fabchain.fab";

export interface Manufacture {
  id: number;
  owner: string;
  name: string;
  pricer: string[];
  paymentProvider: string;
  paymentAddress: string;
  creator: string;
}

export interface EventCreateManufacture {
  id: number;
}

function createBaseManufacture(): Manufacture {
  return { id: 0, owner: "", name: "", pricer: [], paymentProvider: "", paymentAddress: "", creator: "" };
}

export const Manufacture = {
  encode(message: Manufacture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Manufacture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManufacture();
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
          message.pricer.push(reader.string());
          break;
        case 5:
          message.paymentProvider = reader.string();
          break;
        case 6:
          message.paymentAddress = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Manufacture {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      pricer: Array.isArray(object?.pricer) ? object.pricer.map((e: any) => String(e)) : [],
      paymentProvider: isSet(object.paymentProvider) ? String(object.paymentProvider) : "",
      paymentAddress: isSet(object.paymentAddress) ? String(object.paymentAddress) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Manufacture): unknown {
    const obj: any = {};
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
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Manufacture>, I>>(object: I): Manufacture {
    const message = createBaseManufacture();
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.pricer = object.pricer?.map((e) => e) || [];
    message.paymentProvider = object.paymentProvider ?? "";
    message.paymentAddress = object.paymentAddress ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseEventCreateManufacture(): EventCreateManufacture {
  return { id: 0 };
}

export const EventCreateManufacture = {
  encode(message: EventCreateManufacture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateManufacture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateManufacture();
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

  fromJSON(object: any): EventCreateManufacture {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: EventCreateManufacture): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateManufacture>, I>>(object: I): EventCreateManufacture {
    const message = createBaseEventCreateManufacture();
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