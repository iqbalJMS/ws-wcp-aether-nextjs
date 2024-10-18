'use client';
import { T_PostResponse } from '@/api/common/fetch.type';
import { T_SimulationKPR, T_SimulationKPRRequest } from '@/api/simulation/kpr/api.get..simulation-kpr.type';
import { validateMin } from '@/lib/functions/global/validation';
/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';
import { ACT_GetSimulationKPR } from '@/app/(views)/$action/action.get.simulation-kpr';
export type T_CreateSimulationKPR = {
  amountLoan: number;
  period: number;
  rate: number;
};

export function CFN_GetSimulationKPR(
  transit: Call,
  data: T_SimulationKPRRequest,
  onSuccess?: (data: T_PostResponse<T_SimulationKPR> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationKPR(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}


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
