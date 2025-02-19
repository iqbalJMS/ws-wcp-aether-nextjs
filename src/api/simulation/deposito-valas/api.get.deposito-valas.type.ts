export type T_SimulationDepositoValas = {
  totalInterest: number;
  totalDeposit: number;
  totalDepositWithInterest: number;
  rate: number;
};

export type T_SimulationDepositoValasRequest = {
  depositAmount: number;
  termInMonths: number;
  currency: string;
};
