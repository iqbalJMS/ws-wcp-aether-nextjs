'use server';

import { post } from '@/api/common/fetch';
import { T_Kurs, T_KursRequest } from './api.get.kurs.type';

export async function API_GetPersonalizeMenu(
  request: T_KursRequest
): Promise<T_Kurs | undefined> {
  try {
    const initialUrl = {
      buy: '/api/brimw/kurs/postBuyRateCounterCalculator',
      sell: '/api/brimw/kurs/postBuyRateCounterCalculator',
      buyRate: '/api/brimw/kurs/postBuyRateCounterCalculator',
      sellRate: '/api/brimw/kurs/postBuyRateCounterCalculator',
    };
    const url = initialUrl[request.type];
    if (url) {
      const response = await post<T_Kurs>(url, request);
      return response;
    }
    return undefined
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Personlize Menu:', error);
    return undefined;
  }
}
