'use server';

import { get } from '@/api/common/fetch';

import { T_PostResponse } from '@/api/common/fetch.type';
import { T_Location, T_LocationRequest } from './api.get.location.type';

function objectToQueryString(obj: Record<string, string>): string {
  const params = new URLSearchParams(obj);
  return params.toString();
}

export async function API_GetLocation(request: T_LocationRequest) {
  try {
    let queryString = objectToQueryString(request);
    const url = `/api/brimw/location/location?${queryString}`;

    if (!url) return undefined;
    const response = await get<T_PostResponse<T_Location>>(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Location:', error);
    return undefined;
  }
}
