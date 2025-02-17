'use client';

import { Call } from '@strix/client';
import { ACT_GetSearchMenu } from '@/app/(views)/$action/action.get.search-menu';
import { T_ApiGetSearchMenu } from '@/api/search/api.get-search-menu.type';

export function CFN_GetSearchMenu(
  transit: Call,
  onSuccess?: (_: T_ApiGetSearchMenu[] | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_GetSearchMenu();
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}
