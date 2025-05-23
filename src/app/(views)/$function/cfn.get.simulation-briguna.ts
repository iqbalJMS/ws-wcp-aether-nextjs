'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import {
  T_SimulationBriguna,
  T_SimulationBrigunaRequest,
} from '@/api/simulation/briguna/api.get.briguna.type';
import { ACT_GetSimulationBriguna } from '@/app/(views)/$action/action.get.simulation';
import { validateMaxMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';

export function CFN_GetSimulationBriguna(
  transit: Call,
  data: T_SimulationBrigunaRequest,
  onSuccess?: (_data: T_PostResponse<T_SimulationBriguna> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationBriguna(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationBrigunaPayload(
  form: T_SimulationBrigunaRequest
): T_SimulationBrigunaRequest {
  return {
    installmentTerm: form.installmentTerm,
    interestRate: form.interestRate,
    salary: form.salary,
    type: form.type,
  };
}

export function CFN_ValidateCreateSimulationBrigunaFields(
  name: keyof T_SimulationBrigunaRequest,
  value: any
): string {
  switch (name) {
    case 'salary':
      return validateMaxMin(
        value,
        'Nilai harus lebih besar dari 0 atau Nilai tidak boleh lebih besar dari 10.000.000.000',
        1,
        10000000000
      );
    case 'installmentTerm':
      return validateMaxMin(
        value,
        'Nilai harus lebih besar dari 0 atau Nilai tidak boleh lebih besar dari 15',
        1,
        15
      );
    case 'interestRate':
      return validateMaxMin(
        value,
        'Nilai harus lebih besar dari 0% atau Nilai tidak boleh lebih besar dari 25%',
        0.01,
        25
      );
    default:
      return '';
  }
}
