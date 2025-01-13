export type T_SimulationBriguna = {
  monthlyInstallment: number;
  interestRate: number;
  type: 'PURNA' | 'KARYA';
};

export type T_SimulationBrigunaRequest = {
  salary: number;
  installmentTerm: number;
  interestRate: number;
  type: 'PURNA' | 'KARYA';
};
