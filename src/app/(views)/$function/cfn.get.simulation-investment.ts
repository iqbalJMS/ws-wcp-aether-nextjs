'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin, validateMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';
import {
  T_SimulationInvestment,
  T_SimulationInvestmentRequest,
} from '@/api/simulation/investment/api.get.investment.type';
import { ACT_GetSimulationInvestment } from '@/app/(views)/$action/action.get.simulation';

export function CFN_GetSimulationInvestment(
  transit: Call,
  data: T_SimulationInvestmentRequest,
  onSuccess?: (_data: T_PostResponse<T_SimulationInvestment> | undefined) => void
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
      return validateMin(value, 'Plafond Kredit ', 1);
    case 'duration':
      return validateMaxMin(value, 'Jangka Waktu', 1, 15);
    case 'interestRate':
      return validateMin(value, 'Suku Bunga Efektif', 1);
    default:
      return '';
  }
}
