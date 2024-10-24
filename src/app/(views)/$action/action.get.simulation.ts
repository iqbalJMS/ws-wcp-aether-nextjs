'use server';

import { T_SimulationKPRRequest } from '@/api/simulation/kpr/api.get.kpr.type';
import { API_GetSimulationKPR } from '@/api/simulation/kpr/api.get.kpr';
import { API_GetSimulationVehicleInstallment } from '@/api/simulation/vehicle-installment/api.get.vehicle-installment';
import { T_SimulationVehicleInstallmentRequest } from '@/api/simulation/vehicle-installment/api.get.vehicle-installment.type';
import { T_SimulationBrigunaRequest } from '@/api/simulation/briguna/api.get.briguna.type';
import { API_GetSimulationBriguna } from '@/api/simulation/briguna/api.get.briguna';
import { T_SimulationKPRSRequest } from '@/api/simulation/kprs/api.get.kprs.type';
import { API_GetSimulationKPRS } from '@/api/simulation/kprs/api.get.kprs';
import { T_SimulationBritamaRencanaRequest } from '@/api/simulation/britama-rencana/api.get.britama-rencana.type';
import { API_GetSimulationBritamaRencana } from '@/api/simulation/britama-rencana/api.get.britama-rencana';
import { T_SimulationBrigunaKaryaRequest } from '@/api/simulation/briguna-karya/api.get.briguna-karya.type';
import { API_GetSimulationBrigunaKarya } from '@/api/simulation/briguna-karya/api.get.briguna-karya';
import { T_SimulationBrigunaPurnaRequest } from '@/api/simulation/briguna-purna/api.get.briguna-purna.type';
import { API_GetSimulationBrigunaPurna } from '@/api/simulation/briguna-purna/api.get.briguna-purna';
import { T_SimulationDepositoRequest } from '@/api/simulation/deposito/api.get.deposito.type';
import { API_GetSimulationDeposito } from '@/api/simulation/deposito/api.get.deposito';
import { T_SimulationDepositoBusinessRequest } from '@/api/simulation/deposito-business/api.get.deposito-business.type';
import { API_GetSimulationDepositoBusiness } from '@/api/simulation/deposito-business/api.get.deposito-business';
import { T_SimulationDepositoValasRequest } from '@/api/simulation/deposito-valas/api.get.deposito-valas.type';
import { API_GetSimulationDepositoValas } from '@/api/simulation/deposito-valas/api.get.deposito-valas';
import { T_SimulationInvestmentRequest } from '@/api/simulation/investment/api.get.investment.type';
import { API_GetSimulationInvestment } from '@/api/simulation/investment/api.get.investment';
import { T_SimulationInitialInvestmentRequest } from '@/api/simulation/initial-investment/api.get.initial-investment.type';
import { API_GetSimulationInitialInvestment } from '@/api/simulation/initial-investment/api.get.initial-investment';

export async function ACT_GetSimulationKPR(request: T_SimulationKPRRequest) {
  const response = await API_GetSimulationKPR(request);
  return response;
}
export async function ACT_GetSimulationVehicleInstallment(request: T_SimulationVehicleInstallmentRequest) {
  const response = await API_GetSimulationVehicleInstallment(request);
  return response;
}
export async function ACT_GetSimulationBriguna(request: T_SimulationBrigunaRequest) {
  const response = await API_GetSimulationBriguna(request);
  return response;
}
export async function ACT_GetSimulationBrigunaKarya(request: T_SimulationBrigunaKaryaRequest) {
  const response = await API_GetSimulationBrigunaKarya(request);
  return response;
}
export async function ACT_GetSimulationBrigunaPurna(request: T_SimulationBrigunaPurnaRequest) {
  const response = await API_GetSimulationBrigunaPurna(request);
  return response;
}
export async function ACT_GetSimulationKPRS(request: T_SimulationKPRSRequest) {
  const response = await API_GetSimulationKPRS(request);
  return response;
}
export async function ACT_GetSimulationBritamaRencana(request: T_SimulationBritamaRencanaRequest) {
  const response = await API_GetSimulationBritamaRencana(request);
  return response;
}
export async function ACT_GetSimulationDeposito(request: T_SimulationDepositoRequest) {
  const response = await API_GetSimulationDeposito(request);
  return response;
}
export async function ACT_GetSimulationDepositoBusiness(request: T_SimulationDepositoBusinessRequest) {
  const response = await API_GetSimulationDepositoBusiness(request);
  return response;
}
export async function ACT_GetSimulationDepositoValas(request: T_SimulationDepositoValasRequest) {
  const response = await API_GetSimulationDepositoValas(request);
  return response;
}
export async function ACT_GetSimulationInvestment(request: T_SimulationInvestmentRequest) {
  const response = await API_GetSimulationInvestment(request);
  return response;
}
export async function ACT_GetSimulationInitialInvestment(request: T_SimulationInitialInvestmentRequest) {
  const response = await API_GetSimulationInitialInvestment(request);
  return response;
}
