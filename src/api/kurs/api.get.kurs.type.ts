export type T_Kurs = {
  postBuyRateCounterCalculator?: number
};


export type T_KursRequest = {
  amount: number
  type: 'buy' | 'sell' | 'buyRate' | 'sellRate'
  calcType: 'Beli' | 'Jual'
  fromCurrency: string
  toCurrency: string

}
