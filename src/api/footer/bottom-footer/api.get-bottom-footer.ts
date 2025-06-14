'use server';
import { get } from '@/api/common/fetch';
import { T_ResponseAPIItemMainFooterMenu } from '@/api/footer/main-footer/api.get-main-footer.type';
import { T_ResponseGetBottomFooterMenu } from './api.get-bottom-footer.type';

export async function API_GetBottomFooterMenu({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetBottomFooterMenu> {
  const isEnglish = !lang || lang === 'id' ? '/id' : '';
  try {
    const response: T_ResponseAPIItemMainFooterMenu = await get(
      `${isEnglish}/bricc-api/menu-items/footer-secondary?_format=json_recursive`
    );

    return {
      data: response.map((res) => ({
        value: res.title,
        url: res.relative,
        extern: res.options?.external || false,
      })),
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Bottom Footer Menu:', error);
    return { data: [] };
  }
}
