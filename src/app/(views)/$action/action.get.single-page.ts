'use server';

import { API_GetSinglePage } from '@/api/single-page/api.get-single-page';

export async function ACT_GetSinglePage({
  lang,
  alias = 'home',
}: {
  alias: string | string[] | undefined;
  lang: string;
}): Promise<any> {
  const response = await API_GetSinglePage({ lang, alias });

  return response;
}
