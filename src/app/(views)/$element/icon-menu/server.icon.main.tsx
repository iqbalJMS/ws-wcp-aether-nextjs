'use server';

import { ACT_GetPersonalizeMenu } from '@/app/(views)/$action/action.get.personalize-menu';
import { T_IconList } from '@/app/(views)/$constant/types';
import { CE_IconMain } from './client.icon.main';
import { BASE_URL } from '@/app/(views)/$constant';

type T_IconMainProps = {
  maxListShow?: number;
  cookiesName: string;
};

export default async function SE_IconMain({
  maxListShow = 6,
  cookiesName = '__persolized-menu',
}: T_IconMainProps) {
  const initialIcon = await ACT_GetPersonalizeMenu();
  const icons: T_IconList[] = initialIcon.map((iconItem, index) => {
    return {
      title: iconItem.title,
      link: iconItem.relative,
      externalLink: Array.isArray(iconItem.options)
        ? false
        : iconItem.options.external,
      image: `${BASE_URL}/api/files/?path=${iconItem.icon}`,
      active: index < maxListShow ? true : false,
      isFixed: iconItem.field_is_fixed?.[0]?.value || '0',
    };
  });

  return (
    <CE_IconMain
      list={icons}
      maxListShow={maxListShow}
      cookiesName={cookiesName}
    />
  );
}
