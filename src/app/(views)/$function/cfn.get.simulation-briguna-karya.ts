'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';
import {
  T_SimulationBrigunaKarya,
  T_SimulationBrigunaKaryaRequest,
} from '@/api/simulation/briguna-karya/api.get.briguna-karya.type';
import { ACT_GetSimulationBrigunaKarya } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationBrigunaKarya(
  transit: Call,
  data: T_SimulationBrigunaKaryaRequest,
  onSuccess?: (
    _data: T_PostResponse<T_SimulationBrigunaKarya> | undefined
  ) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationBrigunaKarya(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationBrigunaKaryaPayload(
  form: T_SimulationBrigunaKaryaRequest
): T_SimulationBrigunaKaryaRequest {
  return {
    installmentTerm: form.installmentTerm,
    interestRate: form.interestRate,
    salary: form.salary,
  };
}

export function CFN_ValidateCreateSimulationBrigunaKaryaFields(
  name: keyof T_SimulationBrigunaKaryaRequest,
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
        0.1,
        250
      );
    default:
      return '';
  }
}
