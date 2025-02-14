'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin } from '@/lib/functions/global/validation';
/* eslint-disable no-unused-vars */

import { Arrival, Call, Departure } from '@strix/client';

import {
  T_SimulationKPRS,
  T_SimulationKPRSRequest,
} from '@/api/simulation/kprs/api.get.kprs.type';
import { ACT_GetSimulationKPRS } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationKPRS(
  transit: Call,
  data: T_SimulationKPRSRequest,
  onSuccess?: (data: T_PostResponse<T_SimulationKPRS> | undefined) => void
) {

  transit(async () => {
    const actionResult = await ACT_GetSimulationKPRS(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });

}

export function CFN_MapToSimulationKPRSPayload(
  form: T_SimulationKPRSRequest
): T_SimulationKPRSRequest {
  return {
    installmentAmount: form.installmentAmount,
    installmentTerm: form.installmentTerm,
  };
}

export function CFN_ValidateCreateSimulationKPRSFields(
  name: keyof T_SimulationKPRSRequest,
  value: any
): string {
  switch (name) {
    case 'installmentAmount':
      return validateMaxMin(value, 'Jumlah Pinjaman', 1, 10000000000, 'currency');
    case 'installmentTerm':
      return validateMaxMin(value, 'Jangka Waktu', 1, 15);
    default:
      return '';
  }
}
