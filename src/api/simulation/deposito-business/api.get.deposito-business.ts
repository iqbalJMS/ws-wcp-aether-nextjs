'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationDepositoBusiness,
  T_SimulationDepositoBusinessRequest,
} from './api.get.deposito-business.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationDepositoBusiness(
  request: T_SimulationDepositoBusinessRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationDepositoBusiness>>(
      '/api/brimw/simulasi/estimateDepositoBusiness',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'An error occurred during Get Simulation DepositoBusiness:',
      error
    );
    return undefined;
  }
}
