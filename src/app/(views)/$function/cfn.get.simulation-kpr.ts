'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin } from '@/lib/functions/global/validation';
/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';

import {
  T_SimulationKPR,
  T_SimulationKPRRequest,
} from '@/api/simulation/kpr/api.get.kpr.type';
import { ACT_GetSimulationKPR } from '@/app/(views)/$action/action.get.simulation';

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
  form: T_SimulationKPRRequest
): T_SimulationKPRRequest {
  return {
    installmentAmount: form.installmentAmount,
    installmentTerm: form.installmentTerm,
  };
}

export function CFN_ValidateCreateSimulationKPRFields(
  name: keyof T_SimulationKPRRequest,
  value: any
): string {
  switch (name) {
    case 'installmentAmount':
      return validateMaxMin(
        value,
        'Jumlah Pinjaman',
        1,
        10000000000,
        'currency'
      );
    case 'installmentTerm':
      return validateMaxMin(value, 'Jangka Waktu', 1, 20);
    default:
      return '';
  }
}
