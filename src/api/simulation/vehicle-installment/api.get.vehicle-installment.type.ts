export type T_SimulationVehicleInstallment = {
  vehiclePrice: number;
  downPaymentAmount: number;
  principalDebt: number;
  interestRate: number;
  principalInstallment: number;
  interestInstallmentPerMonth: number;
  totalInstallmentPerMonth: number;
  administrationFee: number;
  totalPayment: number;
};

export type T_SimulationVehicleInstallmentRequest = {
  vehiclePrice: number;
  installmentTerm: number;
  vehicleStatus: 'NEW' | 'USED';
};
