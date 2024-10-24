'use server';

import { post } from '@/api/common/fetch';
import {
  T_SimulationVehicleInstallment,
  T_SimulationVehicleInstallmentRequest,
} from './api.get.vehicle-installment.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetSimulationVehicleInstallment(
  request: T_SimulationVehicleInstallmentRequest
) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    const response = await post<T_PostResponse<T_SimulationVehicleInstallment>>(
      '/api/brimw/simulasi/estimateVehicleInstallment',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'An error occurred during Get Simulation VehicleInstallment:',
      error
    );
    return undefined;
  }
}
