'use client';


/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
import { ACT_GetKurs } from '@/app/(views)/$action/action.get.kurs';
import { T_PostResponse } from '@/api/common/fetch.type';
import { T_Location, T_LocationRequest } from '@/api/location/api.get.location.type';
import { ACT_GetLocation } from '@/app/(views)/$action/action.get.location';


export function CFN_GetLocation(
  transit: Call,
  data: T_LocationRequest,
  onSuccess?: (data: T_PostResponse<T_Location> | undefined) => void
) {
  transit(async () => {
    const payload = CFN_MapToLocationPayload(data);
    const actionResult = await ACT_GetLocation(payload);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToLocationPayload(form: T_LocationRequest): T_LocationRequest {
  return {
    limit: form.limit,
    skip: form.skip,
    province: form.province,
    type: form.type,
    category: form.category
  };
}

export function CFN_ValidateGetLocationFields(
  name: keyof T_LocationRequest,
  value: any
): string {
  switch (name) {
    default:
      return '';
  }
}
