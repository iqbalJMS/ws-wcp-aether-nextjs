'use client';

/* eslint-disable no-unused-vars */
import { Arrival, Call, Departure } from '@strix/client';
import { T_ContentTypeRequest } from '@/api/content-type/api.get-content-type.type';
import { ACT_GetContentType } from '@/app/(views)/$action/action.get-content-type';

export function CFN_GetContentType(
  transit: Call,
  data: T_ContentTypeRequest,
  alias: string,
  onSuccess?: (data: any | undefined) => void
) {
  transit(async () => {
    const payload = CFN_MapToContentTypePayload(data);
    const actionResult = await ACT_GetContentType({ request: payload, alias });
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToContentTypePayload(
  form: T_ContentTypeRequest
): T_ContentTypeRequest {
  return {
    limit: form.limit,
    page: form.page,
    search: form.search,
  };
}

export function CFN_ValidateGetContentTypeFields(
  name: keyof T_ContentTypeRequest,
  value: any
): string {
  switch (name) {
    default:
      return '';
  }
}
