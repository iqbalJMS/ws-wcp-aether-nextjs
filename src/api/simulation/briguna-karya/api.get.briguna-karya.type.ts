export type T_SimulationBrigunaKarya = {
  monthlyInstallment: number;
  interestRate: number;
};

export type T_SimulationBrigunaKaryaRequest = {
  interestRate: number;
  salary: number;
  installmentTerm: number;
  type?: 'KARYA';
};
