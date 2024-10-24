'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationDepositoValas,
  T_SimulationDepositoValasRequest,
} from './api.get.deposito-valas.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationDepositoValas(
  request: T_SimulationDepositoValasRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationDepositoValas>>(
      '/api/brimw/simulasi/estimateDepositoValas',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'An error occurred during Get Simulation DepositoValas:',
      error
    );
    return undefined;
  }
}
