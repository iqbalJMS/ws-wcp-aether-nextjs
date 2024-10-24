'use server';

import { post } from '@/api/common/fetch';
import { T_SimulationKPR, T_SimulationKPRRequest } from './api.get.kpr.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationKPR(request: T_SimulationKPRRequest) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationKPR>>(
      '/api/brimw/simulasi/estimateKpr',
      formData
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation KPR:', error);
    return undefined;
  }
}
