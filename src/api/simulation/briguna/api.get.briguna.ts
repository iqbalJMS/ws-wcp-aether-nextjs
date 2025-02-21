'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationBriguna,
  T_SimulationBrigunaRequest,
} from './api.get.briguna.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationBriguna(
  request: T_SimulationBrigunaRequest
) {
  try {
    const formDataBriguna = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formDataBriguna.append(key, value.toString());
    });
    const responseBriguna = await post<T_PostResponse<T_SimulationBriguna[]>>(
      '/api/brimw/simulasi/estimateBriguna',
      formDataBriguna
    );

    return {
      data: {
        interestRate: responseBriguna.data.at(0)?.interestRate || 0,
        monthlyInstallment: responseBriguna.data.at(0)?.monthlyInstallment || 0,
        type: responseBriguna?.data.at(0)?.type || 'KARYA',
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation Briguna:', error);
    return undefined;
  }
}
