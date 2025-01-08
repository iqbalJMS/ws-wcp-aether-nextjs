'use server';

import { get } from '@/api/common/fetch';

import { T_PostResponse } from '@/api/common/fetch.type';
import { T_LocationType } from './api.get.location-type.type';



export async function API_GetLocationType() {
  try {
    const url = `/api/brimw/location/tipe`;
    
    if (!url) return undefined;
    const response = await get<T_PostResponse<T_LocationType>>(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Location:', error);
    return undefined;
  }
}
