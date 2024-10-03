'use server';

import { post } from '@/api/common/fetch';
import { T_Kurs, T_KursRequest } from './api.get.kurs.type';

export async function API_GetKurs(request: T_KursRequest) {
  try {
    const initialUrl = {
      buy: '/api/brimw/kurs/postBuyRateCounterCalculator',
      sell: '/api/brimw/kurs/postSellRateCounterCalculator',
      buyRate: '/api/brimw/kurs/postSellRateeRateCalculator',
      sellRate: '/api/brimw/kurs/postSellRateeRateCalculator',
    };

    const url = initialUrl[request.type];
    if (!url) return undefined;
    // eslint-disable-next-line no-unused-vars
    const { type, ...newRequest } = request;
    const response = await post<T_Kurs>(url, newRequest);
    
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Kurs:', error);
    return undefined;
  }
}
