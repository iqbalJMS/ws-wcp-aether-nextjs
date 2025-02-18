export type T_SimulationBritamaRencana = {
  bungaSaldoBritamaRencana: number;
  saldoTanpaBunga: number;
  bunga: number;
  totalInvestasiBritamaRencana: number;
  interestRate: number;
  asurancePremium: number;
};

export type T_SimulationBritamaRencanaRequest = {
  month: number;
  amount: number;
  premiAsuransi: 'ENAMPERSEN' | 'NOLPERSEN';
};
