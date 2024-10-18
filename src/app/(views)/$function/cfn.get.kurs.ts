'use client';

import { T_Kurs, T_KursRequest } from '@/api/kurs/api.get.kurs.type';
import { validateMin } from '@/lib/functions/global/validation';
/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
import { ACT_GetKurs } from '@/app/(views)/$action/action.get.kurs';
import { T_PostResponse } from '@/api/common/fetch.type';
export type T_GetKurs = T_KursRequest;

export function CFN_GetKurs(
  transit: Call,
  data: T_GetKurs,
  onSuccess?: (data: T_PostResponse<T_Kurs> | undefined) => void
) {
  transit(async () => {
    const payload = CFN_MapToKursPayload(data);
    const actionResult = await ACT_GetKurs(payload);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToKursPayload(form: T_GetKurs): T_GetKurs {
  return {
    amount: form.amount,
    calcType: form.calcType,
    fromCurrency: form.fromCurrency,
    toCurrency: form.toCurrency,
    type: form.type,
  };
}

export function CFN_ValidateGetKursFields(
  name: keyof T_GetKurs,
  value: any
): string {
  switch (name) {
    case 'amount':
      return validateMin(value, 'Jumlah Pinjaman', 1);
    default:
      return '';
  }
}
