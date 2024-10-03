export type T_Kurs = {
  postBuyRateeRateCalculator?: string
  postSellRateeRateCalculator?: string
  postBuyRateCounterCalculator?: string
  postSellRateCounterCalculator?: string
};


export type T_KursRequest = {
  amount: number
  type: 'buy' | 'sell' | 'buyRate' | 'sellRate'
  calcType: 'Beli' | 'Jual'
  fromCurrency: string
  toCurrency: string

}
