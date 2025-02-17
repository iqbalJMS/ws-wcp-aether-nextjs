'use server';

import { API_GetLocationCategory } from '@/api/location/api.get.location-category';
import { T_LocationCategoryRequest } from '@/api/location/api.get.location-category.type';

export async function ACT_GetLocationCategory(
  request: T_LocationCategoryRequest
) {
  const response = await API_GetLocationCategory(request);
  return response;
}
