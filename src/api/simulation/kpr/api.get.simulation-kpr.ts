'use server';

import { post } from '@/api/common/fetch';
import { T_SimulationKPR, T_SimulationKPRRequest } from './api.get..simulation-kpr.type';
import { T_PostResponse } from '@/api/common/fetch.type';


export async function API_GetSimulationKPR(request: T_SimulationKPRRequest) {
  try {
    const response = await post<T_PostResponse<T_SimulationKPR>>('api/brimw/simulasi/estimateKpr', request);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation KPR:', error);
    return undefined;
  }
}
