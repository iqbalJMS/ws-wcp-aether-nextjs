'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationBrigunaKarya,
  T_SimulationBrigunaKaryaRequest,
} from './api.get.briguna-karya.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationBrigunaKarya(
  request: T_SimulationBrigunaKaryaRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationBrigunaKarya>>(
      '/api/brimw/simulasi/estimateBrigunaKarya',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'An error occurred during Get Simulation BrigunaKarya:',
      error
    );
    return undefined;
  }
}
