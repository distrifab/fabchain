/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fabchain.fab";

export interface Order {
  id: number;
  response: string;
  storefront: string;
  identifier: string;
  paymentProof: string;
  creator: string;
}

function createBaseOrder(): Order {
  return { id: 0, response: "", storefront: "", identifier: "", paymentProof: "", creator: "" };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      response: isSet(object.response) ? String(object.response) : "",
      storefront: isSet(object.storefront) ? String(object.storefront) : "",
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      paymentProof: isSet(object.paymentProof) ? String(object.paymentProof) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.response !== undefined && (obj.response = message.response);
    message.storefront !== undefined && (obj.storefront = message.storefront);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.paymentProof !== undefined && (obj.paymentProof = message.paymentProof);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.id = object.id ?? 0;
    message.response = object.response ?? "";
    message.storefront = object.storefront ?? "";
    message.identifier = object.identifier ?? "";
    message.paymentProof = object.paymentProof ?? "";
    message.creator = object.creator ?? "";
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
