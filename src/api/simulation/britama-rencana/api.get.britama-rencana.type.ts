export type T_SimulationBritamaRencana = {
  interestEarnings: number;
  balanceWithoutInterest: number;
  interest: number;
  totalBritamaPlanInvestment: number;
  interestRate: number;
  insurancePremium: number;
};

export type T_SimulationBritamaRencanaRequest = {
  durationInMonths: number;
  monthlyDeposit: number;
  insurancePremium: 'SIX_PERCENT' | 'ZERO_PERCENT';
};
