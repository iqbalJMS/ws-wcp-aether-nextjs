'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import {
  validateEmpty,
  validateMaxMin,
  validateMin,
} from '@/lib/functions/global/validation';

import { Call } from '@strix/client';

import {
  T_SimulationBritamaRencana,
  T_SimulationBritamaRencanaRequest,
} from '@/api/simulation/britama-rencana/api.get.britama-rencana.type';
import { ACT_GetSimulationBritamaRencana } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationBritamaRencana(
  transit: Call,
  data: T_SimulationBritamaRencanaRequest,
  onSuccess?: (
    _data: T_PostResponse<T_SimulationBritamaRencana> | undefined
  ) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationBritamaRencana(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationBritamaRencanaPayload(
  form: T_SimulationBritamaRencanaRequest
): T_SimulationBritamaRencanaRequest {
  return {
    monthlyDeposit: form.monthlyDeposit,
    durationInMonths: form.durationInMonths,
    insurancePremium: form.insurancePremium,
  };
}

export function CFN_ValidateCreateSimulationBritamaRencanaFields(
  name: keyof T_SimulationBritamaRencanaRequest,
  value: any
): string {
  switch (name) {
    case 'monthlyDeposit':
      return validateMin(value, 'Nilai harus lebih dari 0', 1);
    case 'durationInMonths':
      return validateMaxMin(value, 'Nilai harus lebih dari 0 ', 1);
    case 'insurancePremium':
      return validateEmpty(value, '% Premi Asuransi BritAma Rencana Perbulan');
    default:
      return '';
  }
}
