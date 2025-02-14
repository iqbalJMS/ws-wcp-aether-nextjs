'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';
import {
  T_SimulationBrigunaPurna,
  T_SimulationBrigunaPurnaRequest,
} from '@/api/simulation/briguna-purna/api.get.briguna-purna.type';
import { ACT_GetSimulationBrigunaPurna } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationBrigunaPurna(
  transit: Call,
  data: T_SimulationBrigunaPurnaRequest,
  onSuccess?: (_data: T_PostResponse<T_SimulationBrigunaPurna> | undefined) => void
) {

  transit(async () => {
    const actionResult = await ACT_GetSimulationBrigunaPurna(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });

}

export function CFN_MapToSimulationBrigunaPurnaPayload(
  form: T_SimulationBrigunaPurnaRequest
): T_SimulationBrigunaPurnaRequest {
  return {
    installmentTerm: form.installmentTerm,
    interestRate: form.interestRate,
    salary: form.salary,
  };
}

export function CFN_ValidateCreateSimulationBrigunaPurnaFields(
  name: keyof T_SimulationBrigunaPurnaRequest,
  value: any
): string {
  switch (name) {
    case 'salary':
      return validateMaxMin(value, 'Jumlah Uang Pensiun', 1, 10000000000, 'currency');
    case 'installmentTerm':
      return validateMaxMin(value, 'Jangka Waktu', 1, 15);
    case 'interestRate':
      return validateMaxMin(value, 'Suku Bunga Efektif', 0.01, 0.025);
    default:
      return '';
  }
}
