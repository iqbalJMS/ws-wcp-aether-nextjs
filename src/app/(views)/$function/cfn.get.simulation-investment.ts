'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';
import {
  T_SimulationInvestment,
  T_SimulationInvestmentRequest,
} from '@/api/simulation/investment/api.get.investment.type';
import { ACT_GetSimulationInvestment } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationInvestment(
  transit: Call,
  data: T_SimulationInvestmentRequest,
  onSuccess?: (
    _data: T_PostResponse<T_SimulationInvestment> | undefined
  ) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationInvestment(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationInvestmentPayload(
  form: T_SimulationInvestmentRequest
): T_SimulationInvestmentRequest {
  return {
    duration: form.duration,
    investmentAmount: form.investmentAmount,
    interestRate: form.interestRate,
  };
}

export function CFN_ValidateCreateSimulationInvestmentFields(
  name: keyof T_SimulationInvestmentRequest,
  value: any
): string {
  switch (name) {
    case 'investmentAmount':
      return validateMaxMin(value, 'Plafond Kredit ', 1, 100000000);
    case 'duration':
      return validateMaxMin(value, 'Jangka Waktu', 1, 120);
    case 'interestRate':
      return validateMaxMin(value, 'Suku Bunga Efektif', 0.1, 100);
    default:
      return '';
  }
}
