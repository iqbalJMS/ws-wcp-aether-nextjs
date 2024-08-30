import { T_HttpRequestOptions, T_HttpResponse } from "./fetch.type";

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
};

async function handleResponse<T>(
  response: Response
): Promise<T_HttpResponse<T>> {
  const contentType = response.headers.get("Content-Type");
  const isJson = contentType?.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const errorMessage = `Error ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage + (isJson ? JSON.stringify(data) : data));
  }

  return { status: response.status, data };
}

async function api<TResponse, TBody = any>(
  url: string,
  {
    method = "GET",
    headers = {},
    body,
    signal,
  }: T_HttpRequestOptions<TBody> = {}
): Promise<T_HttpResponse<TResponse>> {
  const response = await fetch(url, {
    method,
    headers: { ...defaultHeaders, ...headers },
    body: body ? JSON.stringify(body) : undefined,
    signal,
  });

  return handleResponse<TResponse>(response);
}

export const get = <TResponse>({
  url,
  options,
}: {
  url: string;
  options?: T_HttpRequestOptions;
}): Promise<T_HttpResponse<TResponse>> =>
  api<TResponse>(url, { ...options, method: "GET" });

export const post = <TResponse, TBody = any>({
  url,
  body,
  options,
}: {
  url: string;
  body: TBody;
  options?: T_HttpRequestOptions;
}): Promise<T_HttpResponse<TResponse>> =>
  api<TResponse, TBody>(url, { ...options, method: "POST", body });

export const put = <TResponse, TBody = any>({
  url,
  body,
  options,
}: {
  url: string;
  body: TBody;
  options?: T_HttpRequestOptions;
}): Promise<T_HttpResponse<TResponse>> =>
  api<TResponse, TBody>(url, { ...options, method: "PUT", body });

export const del = <TResponse>({
  url,
  options,
}: {
  url: string;
  options?: T_HttpRequestOptions;
}): Promise<T_HttpResponse<TResponse>> =>
  api<TResponse>(url, { ...options, method: "DELETE" });
