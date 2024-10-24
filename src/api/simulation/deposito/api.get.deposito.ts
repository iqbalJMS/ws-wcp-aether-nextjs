'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationDeposito,
  T_SimulationDepositoRequest,
} from './api.get.deposito.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationDeposito(
  request: T_SimulationDepositoRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationDeposito>>(
      '/api/brimw/simulasi/estimateDeposito',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation Deposito:', error);
    return undefined;
  }
}
