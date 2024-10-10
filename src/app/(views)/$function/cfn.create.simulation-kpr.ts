'use client';
import { validateMin } from '@/lib/functions/global/validation';
/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
export type T_CreateSimulationKPR = {
  amountLoan: number;
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

export function CFN_MapToSimulationKPRPayload(
  form: T_CreateSimulationKPR
): T_CreateSimulationKPR {
  return {
    amountLoan: form.amountLoan,
    period: form.period,
    rate: form.rate
  };
}

export function CFN_ValidateCreateSimulationKPRFields(
  name: keyof T_CreateSimulationKPR,
  value: any
): string {
  
  switch (name) {
    case 'amountLoan':
      return validateMin(value, 'Jumlah Pinjaman', 1);
    case 'period':
      return validateMin(value, 'Jangka Waktu', 1);
    case 'rate':
      return validateMin(value, 'Suku Bunga Efektif', 1);
    default:
      return '';
  }
}
