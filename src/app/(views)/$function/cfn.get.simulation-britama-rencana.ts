'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateEmpty, validateMin } from '@/lib/functions/global/validation';

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
    amount: form.amount,
    month: form.month,
    premiAsuransi: form.premiAsuransi,
  };
}

export function CFN_ValidateCreateSimulationBritamaRencanaFields(
  name: keyof T_SimulationBritamaRencanaRequest,
  value: any
): string {
  switch (name) {
    case 'amount':
      return validateMin(value, 'Setoran Bulan BritAma Rencana', 1);
    case 'month':
      return validateMin(value, 'Jumlah Bulan', 1);
    case 'premiAsuransi':
      return validateEmpty(value, '% Premi Asuransi BritAma Rencana Perbulan');
    default:
      return '';
  }
}
