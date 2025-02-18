'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';

import {
  T_SimulationDeposito,
  T_SimulationDepositoRequest,
} from '@/api/simulation/deposito/api.get.deposito.type';
import { ACT_GetSimulationDeposito } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationDeposito(
  transit: Call,
  data: T_SimulationDepositoRequest,
  onSuccess?: (_data: T_PostResponse<T_SimulationDeposito> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationDeposito(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationDepositoPayload(
  form: T_SimulationDepositoRequest
): T_SimulationDepositoRequest {
  return {
    depositAmount: form.depositAmount,
    termInMonths: form.termInMonths,
  };
}

export function CFN_ValidateCreateSimulationDepositoFields(
  name: keyof T_SimulationDepositoRequest,
  value: any
): string {
  switch (name) {
    case 'depositAmount':
      return validateMaxMin(value, 'Jumlah Deposito', 1, 10000000000);
    case 'termInMonths':
      return validateMaxMin(value, 'Jangka Waktu', 1, 36);
    default:
      return '';
  }
}
