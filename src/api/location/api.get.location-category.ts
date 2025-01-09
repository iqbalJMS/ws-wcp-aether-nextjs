'use server';

import { get } from '@/api/common/fetch';

import { T_PostResponse } from '@/api/common/fetch.type';
import {
  T_LocationCategory,
  T_LocationCategoryRequest,
} from './api.get.location-category.type';

function objectToQueryString(obj: Record<string, string>): string {
  const params = new URLSearchParams(obj);
  return params.toString();
}

export async function API_GetLocationCategory(
  request: T_LocationCategoryRequest
) {
  try {
    let queryString = objectToQueryString(request);
    const url = `/api/brimw/location/category?${queryString}`;

    if (!url) return undefined;
    const response = await get<T_PostResponse<T_LocationCategory>>(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Location:', error);
    return undefined;
  }
}
