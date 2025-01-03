'use server';

import { ACT_GetPersonalizeMenu } from '@/app/(views)/$action/action.get.personalize-menu';
import { CE_IconMain } from './client.icon.main';
import { SFN_SetPersonalizedMenu } from '@/app/(views)/$function/sfn.set.personalized-menu';
import { T_IconList } from '@/app/(views)/$constant/types';

type T_IconMainProps = {
  maxListShow?: number;
  cookiesName: string;
};

export default async function SE_IconMain({
  maxListShow = 6,
  cookiesName = '__persolized-menu',
}: T_IconMainProps) {
  const cookies = await SFN_SetPersonalizedMenu('get', cookiesName);
  const iconCookies: T_IconList[] = cookies ? JSON.parse(cookies) : [];
  const initialIcon = await ACT_GetPersonalizeMenu();
  const icons: T_IconList[] = initialIcon.map((iconItem, index) => {
    const iconCookie = iconCookies.find(
      (item) => item.title === iconItem.title
    );
    return {
      title: iconItem.title,
      link: iconItem.relative,
      externalLink: Array.isArray(iconItem.options)
        ? false
        : iconItem.options.external,
      image: iconItem.icon,
      active: iconCookie
        ? iconCookie.active
        : index < maxListShow
          ? true
          : false,
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
