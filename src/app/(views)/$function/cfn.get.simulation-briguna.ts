'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin, validateMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';
import {
  T_SimulationBriguna,
  T_SimulationBrigunaRequest,
} from '@/api/simulation/briguna/api.get.briguna.type';
import { ACT_GetSimulationBriguna } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationBriguna(
  transit: Call,
  data: T_SimulationBrigunaRequest,
  onSuccess?: (_data: T_PostResponse<T_SimulationBriguna[]> | undefined) => void
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
    karyaInstallmentTerm: form.karyaInstallmentTerm,
    karyaInterestRate: form.karyaInterestRate,
    karyaSalary: form.karyaSalary,
    purnaInstallmentTerm : form.purnaInstallmentTerm,
    purnaInterestRate : form.purnaInterestRate,
    purnaSalary : form.purnaSalary
  };
}

export function CFN_ValidateCreateSimulationBrigunaFields(
  name: keyof T_SimulationBrigunaRequest,
  value: any
): string {
  switch (name) {
    case 'karyaSalary':
      return validateMin(value, 'Jumlah Gaji', 1);
    case 'karyaInstallmentTerm':
      return validateMaxMin(value, 'Jangka Waktu', 1, 15);
    case 'karyaInterestRate':
      return validateMaxMin(value, 'Suku Bunga Efektif', 0.01, 0.25);
    case 'purnaSalary':
      return validateMin(value, 'Jumlah Gaji', 1);
    case 'purnaInstallmentTerm':
      return validateMaxMin(value, 'Jangka Waktu', 1, 15);
    case 'purnaInterestRate':
      return validateMin(value, 'Suku Bunga Efektif', 1);
    default:
      return '';
  }
}
