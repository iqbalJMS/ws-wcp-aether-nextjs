'use client';

import { T_KursRequest } from '@/api/kurs/api.get.kurs.type';
import { validateMin } from '@/lib/functions/global/validation';
/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
import { ACT_GetKurs } from '@/app/aether/$action/action.get.kurs';
export type T_GetKurs = T_KursRequest

export function CFN_GetKurs(
  transit: Call,
  data: T_GetKurs,
  // onSuccess: (
  //   result: T_CreatePersonalInfoResponse,
  //   form: T_CreatePersonalInfoRequest
  // ) => void,
  // onError: () => void,
  // onLoading: (status: boolean) => void
) {
  transit(async () => {
    // onLoading(true);
    const payload = CFN_MapToKursPayload(data);
    const dataEncrypted = Departure(payload);
    const actionResult = await ACT_GetKurs(payload);
    // console.log(payload)
    // console.log(actionResult)
    // const result = Arrival<T_CreatePersonalInfoResponse>(actionResult);
    // if (result) {
    //   onSuccess(result, data);
    // } else {
    //   onError();
    // }
    // onLoading(false);
  });
}

export function CFN_MapToKursPayload(
  form: T_GetKurs
): T_GetKurs {
  return {
    amount: form.amount,
    calcType: form.calcType,
    fromCurrency: form.fromCurrency,
    toCurrency: form.toCurrency,
    type: form.type
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
