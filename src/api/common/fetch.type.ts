export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface T_HttpRequestOptions<TBody = any> {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: TBody;
  signal?: AbortSignal;
}

export interface T_HttpResponse<T> {
  status: number;
  data: T;
}
