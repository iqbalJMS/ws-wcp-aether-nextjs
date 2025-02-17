'use server';

import { API_GetPromo } from '@/api/promo/api.get-promo';
import { T_PromoRequest } from '@/api/promo/api.get-promo.type';

export async function ACT_GetPromo({
  request,
  alias = 'promo',
  lang,
}: {
  request: T_PromoRequest;
  alias: string;
  lang: string;
}) {
  const response = await API_GetPromo({ request, alias, lang });
  return response;
}
