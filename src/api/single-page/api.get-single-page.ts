'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';

export async function API_GetSinglePage({
  lang,
  alias = 'home',
}: {
  lang: string;
  alias: string | string[] | undefined;
}): Promise<any> {
  let redirectPath: string | null = null;

  try {
    const isEnglish = !lang || lang === 'id' ? '/id' : '';
    const aliasLink = Array.isArray(alias) ? alias.join('/') : alias;
    const response = await get<any>(
      `${isEnglish}/${aliasLink}?_format=json_recursive`
    )

    if (!response) {
      redirectPath = '/404';
      return;
    }

    const entityBundle = response?.entity_bundle?.[0]?.value;
    const nid = response?.nid?.[0]?.value;
    const site = response?.field_site_id?.[0]?.name?.[0]?.value;

    if (!entityBundle || !nid) {
      redirectPath = '/404';
      return;
    }

    if (entityBundle === 'page' && site === "Main Website") {
      return response;
    }

    if (entityBundle !== 'page' && site === "Main Website") {
      redirectPath = `/${entityBundle}-detail/${nid}?lang=${lang}`;
      return;
    }

    redirectPath = '/404';
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('An error occurred during Get Single Page:', error);
    redirectPath = '/404';
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}