'use client';
/* eslint-disable no-unused-vars */
import { validateMin } from '@/lib/functions/global/validation';

import { Arrival, Call, Departure } from '@strix/client';
export type T_CreateSimulationBRIGuna = {
  amount: number;
  period: number;
  rate: number;
};

// export function CFN_CreatePersonalInfo(
//   transit: Call,
//   data: T_PersonalInfoForm,
//   onSuccess: (
//     result: T_CreatePersonalInfoResponse,
//     form: T_CreatePersonalInfoRequest
//   ) => void,
//   onError: () => void,
//   onLoading: (status: boolean) => void
// ) {
//   transit(async () => {
//     onLoading(true);
//     const payload: T_CreatePersonalInfoRequest =
//       CFN_MapToPersonalInfoPayload(data);
//     const dataEncrypted = Departure(payload);
//     const actionResult = await ACT_CreatePersonalInfo(dataEncrypted);
//     const result = Arrival<T_CreatePersonalInfoResponse>(actionResult);
//     if (result) {
//       onSuccess(result, data);
//     } else {
//       onError();
//     }
//     onLoading(false);
//   });
// }

export function CFN_MapToSimulationBRIGunaPayload(
  form: T_CreateSimulationBRIGuna
): T_CreateSimulationBRIGuna {
  return {
    amount: form.amount,
    period: form.period,
    rate: form.rate
  };
}

export function CFN_ValidateCreateSimulationBRIGunaFields(
  name: keyof T_CreateSimulationBRIGuna,
  value: any
): string {
  
  switch (name) {
    case 'amount':
      return validateMin(value, 'Plafond');
    case 'period':
      return validateMin(value, 'Jangka Waktu');
    case 'rate':
      return validateMin(value, 'Suku Bunga Efektif');
    default:
      return '';
  }
}
