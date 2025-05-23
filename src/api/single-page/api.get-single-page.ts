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
    );

    if (!response) {
      redirectPath = '/404';
    }

    const entityBundle = response?.entity_bundle?.[0]?.value;
    const nid = response?.nid?.[0]?.value;

    if (!entityBundle || !nid) {
      redirectPath = '/404';
    }

    if (entityBundle === 'page') {
      return response;
    }

    // Handle non-page content types with proper return
    redirectPath = `/${entityBundle}-detail/${nid}?lang=${lang}`;
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('An error occurred during Get Single Page:', error);
    return redirect('/404');
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}
