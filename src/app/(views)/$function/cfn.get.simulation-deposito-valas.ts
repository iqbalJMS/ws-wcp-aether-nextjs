'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';

import {
  T_SimulationDepositoValas,
  T_SimulationDepositoValasRequest,
} from '@/api/simulation/deposito-valas/api.get.deposito-valas.type';
import { ACT_GetSimulationDepositoValas } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationDepositoValas(
  transit: Call,
  data: T_SimulationDepositoValasRequest,
  onSuccess?: (
    _data: T_PostResponse<T_SimulationDepositoValas> | undefined
  ) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationDepositoValas(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationDepositoValasPayload(
  form: T_SimulationDepositoValasRequest
): T_SimulationDepositoValasRequest {
  return {
    depositAmount: form.depositAmount,
    termInMonths: form.termInMonths,
    currency: form.currency,
  };
}

export function CFN_ValidateCreateSimulationDepositoValasFields(
  name: keyof T_SimulationDepositoValasRequest,
  value: any
): string {
  switch (name) {
    case 'depositAmount':
      return validateMaxMin(
        value,
        ' Nilai harus lebih besar dari 0 atau Nilai tidak boleh lebih besar dari 100.000.000',
        1,
        100000000
      );
    case 'termInMonths':
      return validateMaxMin(
        value,
        'Jangka Waktu harus lebih besar dari 0 atau Nilai tidak boleh lebih besar dari 24',
        1,
        24
      );
    default:
      return '';
  }
}
