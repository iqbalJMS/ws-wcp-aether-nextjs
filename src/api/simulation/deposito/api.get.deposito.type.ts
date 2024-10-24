export type T_SimulationDeposito = {
  totalInterest: number
  totalDeposit: number
  totalDepositWithInterest: number
  rate: number
};

export type T_SimulationDepositoRequest = {
  depositAmount: number
  termInMonths: number
}
