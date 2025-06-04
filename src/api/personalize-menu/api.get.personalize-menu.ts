'use server';

import { get } from '@/api/common/fetch';
import { T_PersonalizeMenu } from './api.get.personalize-menu.type';

export async function API_GetPersonalizeMenu({
  lang,
}: {
  lang: string;
}): Promise<T_PersonalizeMenu[]> {
  try {
    const prefixLang = !lang || lang === 'id' ? '/id' : '';
    return await get<T_PersonalizeMenu[]>(
      `${prefixLang}/bricc-api/menu-items/personalized-menu?_format=json`
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Personlize Menu:', error);
    return [];
  }
}
