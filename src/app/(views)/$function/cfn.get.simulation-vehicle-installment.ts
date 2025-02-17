'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import { validateMaxMin, validateMin } from '@/lib/functions/global/validation';
import { Call } from '@strix/client';
import { ACT_GetSimulationVehicleInstallment } from '@/app/(views)/$action/action.get.simulation';
import {
  T_SimulationVehicleInstallment,
  T_SimulationVehicleInstallmentRequest,
} from '@/api/simulation/vehicle-installment/api.get.vehicle-installment.type';

export function CFN_GetSimulationVehicleInstallment(
  transit: Call,
  data: T_SimulationVehicleInstallmentRequest,
  onSuccess?: (
    _data: T_PostResponse<T_SimulationVehicleInstallment> | undefined
  ) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSimulationVehicleInstallment(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToSimulationVehicleInstallmentPayload(
  form: T_SimulationVehicleInstallmentRequest
): T_SimulationVehicleInstallmentRequest {
  return {
    installmentTerm: form.installmentTerm,
    vehiclePrice: form.vehiclePrice,
    vehicleStatus: form.vehicleStatus,
  };
}

let vehicleStatusValue: string;
export function CFN_ValidateCreateSimulationVehicleInstallmentFields(
  name: keyof T_SimulationVehicleInstallmentRequest,
  value: any
): string {
  switch (name) {
    case 'vehiclePrice':
      return validateMaxMin(
        value,
        'Nilai harus lebih besar dari 0 atau Nilai tidak boleh lebih besar dari 10.000.000.000',
        1,
        10000000000
      );
    case 'vehicleStatus':
      vehicleStatusValue = value;
      return validateMin(value, 'Jumlah Pinjaman', 1);
    case 'installmentTerm':
      if (vehicleStatusValue === 'NEW') {
        return validateMaxMin(
          value,
          'Nilai harus lebih besar dari 0 atau Nilai tidak boleh lebih besar dari 6',
          1,
          6
        );
      } else {
        return validateMaxMin(
          value,
          'Nilai harus lebih besar dari 0 atau Nilai tidak boleh lebih besar dari 4',
          1,
          4
        );
      }
    default:
      return '';
  }
}
