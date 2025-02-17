'use server';

import { get } from '@/api/common/fetch';

import { T_PostResponse } from '@/api/common/fetch.type';
import { T_LocationProvince } from './api.get.location-province.type';

export async function API_GetLocationProvince() {
  try {
    const url = `/api/brimw/location/province`;

    if (!url) return undefined;
    const response = await get<T_PostResponse<T_LocationProvince>>(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Location:', error);
    return undefined;
  }
}
