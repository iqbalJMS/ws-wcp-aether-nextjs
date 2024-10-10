'use client';
import { validateEmpty, validateMin } from '@/lib/functions/global/validation';
/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
export type T_CreateSimulationCar = {
  carStatus: string;
  otrPrice: number;
  dp: number;
  dpIDR: number;
  principalDebt: number;
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

export function CFN_MapToSimulationCarPayload(
  form: T_CreateSimulationCar
): T_CreateSimulationCar {
  return {
    carStatus: form.carStatus,
    otrPrice: form.otrPrice,
    dp: form.dp,
    dpIDR: form.dpIDR,
    principalDebt: form.principalDebt,
    period: form.period,
    rate: form.rate
  };
}

export function CFN_ValidateCreateSimulationCarFields(
  name: keyof T_CreateSimulationCar,
  value: any
): string {
  
  switch (name) {
    case 'carStatus':
      return validateEmpty(value, 'Status Kendaraan');
    case 'otrPrice':
      return validateMin(value, 'Harga OTR');
    case 'dp':
      return validateMin(value, 'Uang Muka');
    case 'dpIDR':
      return validateMin(value, 'Uang Muka');
    case 'principalDebt':
      return validateMin(value, 'Pokok Hutang');
    case 'period':
      return validateMin(value, 'Jangka Waktu');
    case 'rate':
      return validateMin(value, 'Bunga');
    default:
      return '';
  }
}
