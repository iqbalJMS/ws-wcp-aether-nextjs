'use server';

import { post } from '@/api/common/fetch';
import { T_SimulationKPRS, T_SimulationKPRSRequest } from './api.get.kprs.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationKPRS(request: T_SimulationKPRSRequest) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationKPRS>>(
      '/api/brimw/simulasi/estimateKprs',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation KPRS:', error);
    return undefined;
  }
}
