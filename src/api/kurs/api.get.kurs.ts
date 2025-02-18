'use server';

import { post } from '@/api/common/fetch';
import { T_Kurs, T_KursRequest } from './api.get.kurs.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export async function API_GetKurs(request: T_KursRequest) {
  try {
    const initialUrl = {
      buy: '/api/brimw/kurs/calcBuyCounter',
      sell: '/api/brimw/kurs/calcSellCounter',
      buyRate: '/api/brimw/kurs/calcBuyeRate',
      sellRate: '/api/brimw/kurs/calcSelleRate',
    };

    const url = initialUrl[request.type];
    if (!url) return undefined;

    // eslint-disable-next-line no-unused-vars
    const { type, ...newRequest } = request;

    const formData = new FormData();

    Object.entries(newRequest).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    const response = await post<T_PostResponse<T_Kurs>>(url, formData);

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Kurs:', error);
    return undefined;
  }
}
