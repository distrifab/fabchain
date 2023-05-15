/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface FabAgency {
  /** @format uint64 */
  id?: string;
  owner?: string;
  name?: string;
  paymentProvider?: string;
  paymentAddress?: string;
  creator?: string;
}

export interface FabCapability {
  /** @format uint64 */
  id?: string;
  owner?: string;
  manufacture?: string;
  manifest?: string;
  creator?: string;
}

export interface FabFilestore {
  /** @format uint64 */
  id?: string;
  owner?: string;
  name?: string;
  style?: string;
  url?: string;
  creator?: string;
}

export interface FabManufacture {
  /** @format uint64 */
  id?: string;
  owner?: string;
  name?: string;
  pricer?: string[];
  paymentProvider?: string;
  paymentAddress?: string;
  creator?: string;
}

export interface FabMsgCreateAgencyResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateCapabilityResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateFilestoreResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateManufactureResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateOrderResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreatePricerResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateProductResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateRequestResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateResponseResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateStorefrontResponse {
  /** @format uint64 */
  id?: string;
}

export interface FabMsgCreateUserResponse {
  /** @format uint64 */
  id?: string;
}

export type FabMsgDeleteAgencyResponse = object;

export type FabMsgDeleteCapabilityResponse = object;

export type FabMsgDeleteFilestoreResponse = object;

export type FabMsgDeleteManufactureResponse = object;

export type FabMsgDeleteOrderResponse = object;

export type FabMsgDeletePricerResponse = object;

export type FabMsgDeleteProductResponse = object;

export type FabMsgDeleteRequestResponse = object;

export type FabMsgDeleteResponseResponse = object;

export type FabMsgDeleteStorefrontResponse = object;

export type FabMsgDeleteUserResponse = object;

export type FabMsgUpdateAgencyResponse = object;

export type FabMsgUpdateCapabilityResponse = object;

export type FabMsgUpdateFilestoreResponse = object;

export type FabMsgUpdateManufactureResponse = object;

export type FabMsgUpdateOrderResponse = object;

export type FabMsgUpdatePricerResponse = object;

export type FabMsgUpdateProductResponse = object;

export type FabMsgUpdateRequestResponse = object;

export type FabMsgUpdateResponseResponse = object;

export type FabMsgUpdateStorefrontResponse = object;

export type FabMsgUpdateUserResponse = object;

export interface FabOrder {
  /** @format uint64 */
  id?: string;
  response?: string;
  storefront?: string;
  identifier?: string;
  paymentProof?: string;
  creator?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type FabParams = object;

export interface FabPricer {
  /** @format uint64 */
  id?: string;
  owner?: string;
  creator?: string;
}

export interface FabProduct {
  /** @format uint64 */
  id?: string;
  owner?: string;
  name?: string;
  agency?: string;
  shares?: string[];
  filestore?: string;
  root?: string;
  manifest?: string;
  creator?: string;
}

export interface FabQueryAllAgencyResponse {
  Agency?: FabAgency[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllCapabilityResponse {
  Capability?: FabCapability[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllFilestoreResponse {
  Filestore?: FabFilestore[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllManufactureResponse {
  Manufacture?: FabManufacture[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllOrderResponse {
  Order?: FabOrder[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllPricerResponse {
  Pricer?: FabPricer[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllProductResponse {
  Product?: FabProduct[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllRequestResponse {
  Request?: FabRequest[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllResponseResponse {
  Response?: FabResponse[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllStorefrontResponse {
  Storefront?: FabStorefront[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryAllUserResponse {
  User?: FabUser[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FabQueryGetAgencyResponse {
  Agency?: FabAgency;
}

export interface FabQueryGetCapabilityResponse {
  Capability?: FabCapability;
}

export interface FabQueryGetFilestoreResponse {
  Filestore?: FabFilestore;
}

export interface FabQueryGetManufactureResponse {
  Manufacture?: FabManufacture;
}

export interface FabQueryGetOrderResponse {
  Order?: FabOrder;
}

export interface FabQueryGetPricerResponse {
  Pricer?: FabPricer;
}

export interface FabQueryGetProductResponse {
  Product?: FabProduct;
}

export interface FabQueryGetRequestResponse {
  Request?: FabRequest;
}

export interface FabQueryGetResponseResponse {
  Response?: FabResponse;
}

export interface FabQueryGetStorefrontResponse {
  Storefront?: FabStorefront;
}

export interface FabQueryGetUserResponse {
  User?: FabUser;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface FabQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: FabParams;
}

export interface FabRequest {
  /** @format uint64 */
  id?: string;
  owner?: string;
  product?: string;
  settings?: string;
  creator?: string;
}

export interface FabResponse {
  /** @format uint64 */
  id?: string;
  pricer?: string;
  request?: string;
  price?: string;
  creator?: string;
}

export interface FabStorefront {
  /** @format uint64 */
  id?: string;
  owner?: string;
  name?: string;
  creator?: string;
}

export interface FabUser {
  /** @format uint64 */
  id?: string;
  manager?: string;
  identifier?: string;
  creator?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title fabchain/fab/agency.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAgencyAll
   * @request GET:/fabchain/fab/agency
   */
  queryAgencyAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllAgencyResponse, RpcStatus>({
      path: `/fabchain/fab/agency`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAgency
   * @summary Queries a list of Agency items.
   * @request GET:/fabchain/fab/agency/{id}
   */
  queryAgency = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetAgencyResponse, RpcStatus>({
      path: `/fabchain/fab/agency/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCapabilityAll
   * @request GET:/fabchain/fab/capability
   */
  queryCapabilityAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllCapabilityResponse, RpcStatus>({
      path: `/fabchain/fab/capability`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCapability
   * @summary Queries a list of Capability items.
   * @request GET:/fabchain/fab/capability/{id}
   */
  queryCapability = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetCapabilityResponse, RpcStatus>({
      path: `/fabchain/fab/capability/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFilestoreAll
   * @request GET:/fabchain/fab/filestore
   */
  queryFilestoreAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllFilestoreResponse, RpcStatus>({
      path: `/fabchain/fab/filestore`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFilestore
   * @summary Queries a list of Filestore items.
   * @request GET:/fabchain/fab/filestore/{id}
   */
  queryFilestore = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetFilestoreResponse, RpcStatus>({
      path: `/fabchain/fab/filestore/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryManufactureAll
   * @request GET:/fabchain/fab/manufacture
   */
  queryManufactureAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllManufactureResponse, RpcStatus>({
      path: `/fabchain/fab/manufacture`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryManufacture
   * @summary Queries a list of Manufacture items.
   * @request GET:/fabchain/fab/manufacture/{id}
   */
  queryManufacture = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetManufactureResponse, RpcStatus>({
      path: `/fabchain/fab/manufacture/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrderAll
   * @request GET:/fabchain/fab/order
   */
  queryOrderAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllOrderResponse, RpcStatus>({
      path: `/fabchain/fab/order`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOrder
   * @summary Queries a list of Order items.
   * @request GET:/fabchain/fab/order/{id}
   */
  queryOrder = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetOrderResponse, RpcStatus>({
      path: `/fabchain/fab/order/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/fabchain/fab/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<FabQueryParamsResponse, RpcStatus>({
      path: `/fabchain/fab/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPricerAll
   * @request GET:/fabchain/fab/pricer
   */
  queryPricerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllPricerResponse, RpcStatus>({
      path: `/fabchain/fab/pricer`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPricer
   * @summary Queries a list of Pricer items.
   * @request GET:/fabchain/fab/pricer/{id}
   */
  queryPricer = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetPricerResponse, RpcStatus>({
      path: `/fabchain/fab/pricer/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProductAll
   * @request GET:/fabchain/fab/product
   */
  queryProductAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllProductResponse, RpcStatus>({
      path: `/fabchain/fab/product`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProduct
   * @summary Queries a list of Product items.
   * @request GET:/fabchain/fab/product/{id}
   */
  queryProduct = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetProductResponse, RpcStatus>({
      path: `/fabchain/fab/product/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRequestAll
   * @request GET:/fabchain/fab/request
   */
  queryRequestAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllRequestResponse, RpcStatus>({
      path: `/fabchain/fab/request`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRequest
   * @summary Queries a list of Request items.
   * @request GET:/fabchain/fab/request/{id}
   */
  queryRequest = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetRequestResponse, RpcStatus>({
      path: `/fabchain/fab/request/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryResponseAll
   * @request GET:/fabchain/fab/response
   */
  queryResponseAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllResponseResponse, RpcStatus>({
      path: `/fabchain/fab/response`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryResponse
   * @summary Queries a list of Response items.
   * @request GET:/fabchain/fab/response/{id}
   */
  queryResponse = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetResponseResponse, RpcStatus>({
      path: `/fabchain/fab/response/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryStorefrontAll
   * @request GET:/fabchain/fab/storefront
   */
  queryStorefrontAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllStorefrontResponse, RpcStatus>({
      path: `/fabchain/fab/storefront`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryStorefront
   * @summary Queries a list of Storefront items.
   * @request GET:/fabchain/fab/storefront/{id}
   */
  queryStorefront = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetStorefrontResponse, RpcStatus>({
      path: `/fabchain/fab/storefront/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUserAll
   * @request GET:/fabchain/fab/user
   */
  queryUserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FabQueryAllUserResponse, RpcStatus>({
      path: `/fabchain/fab/user`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUser
   * @summary Queries a list of User items.
   * @request GET:/fabchain/fab/user/{id}
   */
  queryUser = (id: string, params: RequestParams = {}) =>
    this.request<FabQueryGetUserResponse, RpcStatus>({
      path: `/fabchain/fab/user/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
