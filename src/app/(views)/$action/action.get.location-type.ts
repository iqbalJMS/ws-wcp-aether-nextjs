'use server';

import { API_GetLocationType } from '@/api/location/api.get.location-type';

export async function ACT_GetLocationType() {
  const response = await API_GetLocationType();
  return response;
}
