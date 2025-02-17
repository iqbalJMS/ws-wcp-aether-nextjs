export type T_SimulationInvestment = {
  oneTimeInvestmentResult: number;
  periodicInvestmentResult: number;
};

export type T_SimulationInvestmentRequest = {
  investmentAmount: number;
  interestRate: number;
  duration: number;
};
