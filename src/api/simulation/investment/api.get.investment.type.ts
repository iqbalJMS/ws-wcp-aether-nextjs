export type T_SimulationInvestment = {
  monthlyPrincipalInstallment: number;
  interest: number;
};

export type T_SimulationInvestmentRequest = {
  installment: number;
  installmentTerm: number;
  InterestRate: number;
};
