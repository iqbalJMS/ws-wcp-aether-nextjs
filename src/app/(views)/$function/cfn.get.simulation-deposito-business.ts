'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';

import {
  T_SimulationDepositoBusiness,
  T_SimulationDepositoBusinessRequest,
} from '@/api/simulation/deposito-business/api.get.deposito-business.type';
import { ACT_GetSimulationDepositoBusiness } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationDepositoBusiness(
  transit: Call,
  data: T_SimulationDepositoBusinessRequest,
  onSuccess?: (
    _data: T_PostResponse<T_SimulationDepositoBusiness> | undefined
  ) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationDepositoBusiness(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationDepositoBusinessPayload(
  form: T_SimulationDepositoBusinessRequest
): T_SimulationDepositoBusinessRequest {
  return {
    depositAmount: form.depositAmount,
    termInMonths: form.termInMonths,
  };
}

export function CFN_ValidateCreateSimulationDepositoBusinessFields(
  name: keyof T_SimulationDepositoBusinessRequest,
  value: any
): string {
  switch (name) {
    case 'depositAmount':
      return validateMaxMin(value, 'Jumlah Deposito', 1, 10000000000);
    case 'termInMonths':
      return validateMaxMin(value, 'Jangka Waktu', 1, 24);
    default:
      return '';
  }
}
