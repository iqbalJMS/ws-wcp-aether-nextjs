'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';
import { T_PromoRequest } from './api.get-promo.type';

function objectToQueryString(obj: Record<string, string>): string {
  const params = new URLSearchParams(obj);
  return params.toString();
}

export async function API_GetPromo({
  request,
  alias = 'promo',
  lang,
}: {
  request: T_PromoRequest;
  alias: string;
  lang: string;
}) {
  try {
    let queryString = objectToQueryString(request);
    const isEnglish = !lang || lang === 'id' ? '/id' : '';

    const url = `${isEnglish}/${alias}?_format=json_recursive&${queryString}`;

    if (!url) return undefined;
    const response = await get(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Promo:', error);
    redirect('/404');
  }
}
