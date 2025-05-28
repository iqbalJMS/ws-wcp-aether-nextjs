'use server';

import { get } from '@/api/common/fetch';
import { T_ResponseGetMainMenuNavbar } from './api.get-main-menu-navbar.type';

export async function API_GetMainMenuNavbar({
  lang,
  theme,
}: {
  lang: string;
  theme?: string;
}): Promise<T_ResponseGetMainMenuNavbar> {
  const isEnglish = !lang || lang === 'id' ? '/id' : '';
  let url;

  if (theme) {
    url = `${isEnglish}/bricc-api/menu-items/${theme}?_format=json&theme=`;
  } else {
    url = `${isEnglish}/bricc-api/menu-items/main?_format=json`;
  }

  try {
    const response: T_ResponseGetMainMenuNavbar = await get(url);

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Menu Navbar:', error);
    return [];
  }
}
