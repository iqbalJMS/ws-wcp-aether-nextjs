export type T_Kurs = {
  calcBuyCounter?: number
  calcSellCounter?: number
  calcBuyeRate?: number
  calcSelleRate?: number
};

export type T_KursRequest = {
  amount: number
  type: 'buy' | 'sell' | 'buyRate' | 'sellRate'
  calcType: 'Beli' | 'Jual'
  fromCurrency: string
  toCurrency: string
}
