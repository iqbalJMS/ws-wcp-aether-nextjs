'use server';

import { API_GetPersonalizeMenu } from '@/api/personalize-menu/api.get.personalize-menu';
import { T_PersonalizeMenu } from '@/api/personalize-menu/api.get.personalize-menu.type';

export async function ACT_GetPersonalizeMenu({
  lang,
}: {
  lang: string;
}): Promise<T_PersonalizeMenu[]> {
  return await API_GetPersonalizeMenu({ lang });
}
