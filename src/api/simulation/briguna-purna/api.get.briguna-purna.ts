'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationBrigunaPurna,
  T_SimulationBrigunaPurnaRequest,
} from './api.get.briguna-purna.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationBrigunaPurna(
  request: T_SimulationBrigunaPurnaRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationBrigunaPurna>>(
      '/api/brimw/simulasi/estimateBrigunaPurna',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'An error occurred during Get Simulation BrigunaPurna:',
      error
    );
    return undefined;
  }
}
