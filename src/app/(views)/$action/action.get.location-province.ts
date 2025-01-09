'use server';

import { API_GetLocationProvince } from "@/api/location/api.get.location-province";

export async function ACT_GetLocationProvince() {
  const response = await API_GetLocationProvince();
  return response;
}
