'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationBritamaRencana,
  T_SimulationBritamaRencanaRequest,
} from './api.get.britama-rencana.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationBritamaRencana(
  request: T_SimulationBritamaRencanaRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationBritamaRencana>>(
      '/api/brimw/simulasi/estimateBritamaRencana',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'An error occurred during Get Simulation Britama Rencana:',
      error
    );
    return undefined;
  }
}
