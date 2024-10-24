'use server';

import { post } from '@/api/common/fetch';
import { T_SimulationBriguna, T_SimulationBrigunaRequest } from './api.get.briguna.type';
import { T_PostResponse } from '@/api/common/fetch.type';


export async function API_GetSimulationBriguna(request: T_SimulationBrigunaRequest) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationBriguna[]>>('/api/brimw/simulasi/estimateBriguna', formData);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation Briguna:', error);
    return undefined;
  }
}
