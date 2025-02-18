'use client';

/* eslint-disable no-unused-vars */
import { Arrival, Call, Departure } from '@strix/client';
import { T_PromoRequest } from '@/api/promo/api.get-promo.type';
import { ACT_GetPromo } from '@/app/(views)/$action/action.get.promo';

export function CFN_GetPromo(
  transit: Call,
  data: T_PromoRequest,
  alias: string,
  lang: string,
  onSuccess?: (data: any | undefined) => void
) {
  transit(async () => {
    const payload = CFN_MapToPromoPayload(data);
    const actionResult = await ACT_GetPromo({ request: payload, alias, lang });
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToPromoPayload(form: T_PromoRequest): T_PromoRequest {
  return {
    limit: form.limit,
    page: form.page,
    category_id: form.category_id,
    search: form.search,
    location_id: form.location_id,
    product_id: form.product_id,
  };
}

export function CFN_ValidateGetPromoFields(
  name: keyof T_PromoRequest,
  value: any
): string {
  switch (name) {
    default:
      return '';
  }
}
