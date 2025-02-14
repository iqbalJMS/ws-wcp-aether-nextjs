export type T_SimulationVehicleInstallment = {
  vehiclePrice: number;
  downPaymentAmount: number;
  principalDebt: number;
  interestRate: number;
  provisionFee?: number;
  principalInstallment: number;
  interestInstallmentPerMonth: number;
  totalInstallmentPerMonth: number;
  administrationFee: number;
  totalPayment: number;
};

export type T_SimulationVehicleInstallmentRequest = {
  vehiclePrice: number;
  vehicleStatus: 'NEW' | 'USED';
  installmentTerm: number;
};
