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
    let requestKarya: T_SimulationBrigunaRequest = {
      ...request,
      type: 'KARYA',
    };
    const formDataKarya = new FormData();
    Object.entries(requestKarya).forEach(([key, value]) => {
      formDataKarya.append(key, value.toString());
    });
    const responseKarya = await post<T_PostResponse<T_SimulationBriguna[]>>(
      '/api/brimw/simulasi/estimateBriguna',
      formDataKarya
    );
    let requestPurna: T_SimulationBrigunaRequest = {
      ...request,
      type: 'PURNA',
    };
    const formDataPurna = new FormData();
    Object.entries(requestPurna).forEach(([key, value]) => {
      formDataPurna.append(key, value.toString());
    });
    const responsePurna = await post<T_PostResponse<T_SimulationBriguna[]>>(
      '/api/brimw/simulasi/estimateBriguna',
      formDataPurna
    );

    let response: T_SimulationBriguna[] = [];
    response.push({
      interestRate: responseKarya.data.at(0)?.interestRate || 0,
      monthlyInstallment: responseKarya.data.at(0)?.monthlyInstallment || 0,
      type: 'KARYA',
    });
    response.push({
      interestRate: responsePurna.data.at(0)?.interestRate || 0,
      monthlyInstallment: responsePurna.data.at(0)?.monthlyInstallment || 0,
      type: 'PURNA',
    });
    return { data: response };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Simulation Briguna:', error);
    return undefined;
  }
}
