export type T_SimulationDepositoBusiness = {
  totalInterest: number;
  totalDeposit: number;
  totalDepositWithInterest: number;
  rate: number;
};

export type T_SimulationDepositoBusinessRequest = {
  depositAmount: number;
  termInMonths: number;
};
