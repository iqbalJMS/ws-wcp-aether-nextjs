'use server';


import { T_SimulationKPRRequest } from "@/api/simulation/kpr/api.get..simulation-kpr.type";
import { API_GetSimulationKPR } from "@/api/simulation/kpr/api.get.simulation-kpr";


export async function ACT_GetSimulationKPR(request: T_SimulationKPRRequest) {
  const response = await API_GetSimulationKPR(request);
  return response;
}
