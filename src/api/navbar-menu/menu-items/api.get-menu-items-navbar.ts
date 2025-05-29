'use server';

import { get } from '@/api/common/fetch';
import { T_ResponseGetMenuItemNavbar } from './api.get-menu-items-navbar.type';

export async function API_GetMenuItemNavbar({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMenuItemNavbar> {
  const isEnglish = !lang || lang === 'id' ? '/id' : '';
  try {
    const response: T_ResponseGetMenuItemNavbar = await get(
      `${isEnglish}/bricc-api/menu-items/login-dropdown?_format=json`
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Top Menu Navbar:', error);
    return [];
  }
}
