'use server';
import { get } from '@/api/common/fetch';
import { T_ResponGetHeaderLogo } from './api.get-header-logo.type';

export async function API_GetHeaderLogo({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetHeaderLogo | null> {
  try {
    const response: T_ResponGetHeaderLogo = await get(
      '/config_pages/header?_format=json_recursive',
      {
        Authorization: `Basic ${btoa(`${process.env.DRUPAL_AUTH}:${process.env.DRUPAL_PASSWORD}`)}`,
      }
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Footer Menu:', error);
    return null;
  }
}
