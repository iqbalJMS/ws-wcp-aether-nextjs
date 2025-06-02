'use server';

import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import { Locale } from '@/i18n-config';
import GlobalFooter from '@/lib/element/global/global.footer';
import GlobalHeader from '@/lib/element/global/global.header';
import ScrollToTop from '@/lib/element/global/scroll.top';
import React from 'react';
import { ACT_GetHeaderLogo } from './(views)/$action/action.get-header-logo';
import { ACT_GetMenuItemNavbar } from './(views)/$action/action.get-menu-items-navbar';
import { ACT_GetBottomMenuFooter } from './(views)/$action/action.get.bottom-footer';
import { ACT_GetMainMenuFooter } from './(views)/$action/action.get.main-footer';
import { ACT_GetMainMenuNavbar } from './(views)/$action/action.get.main-menu-navbar';
import { ACT_GetSinglePage } from './(views)/$action/action.get.single-page';
import { ACT_GetTopMenuNavbar } from './(views)/$action/action.get.top-menu-navbar';
import { COMPONENT_MAP_WIDGET } from './(views)/$constant';
import { T_Widget } from './(views)/$constant/types';

export default async function PageAether({
  searchParams,
}: {
  searchParams: { lang: Locale };
}) {
  const data = await ACT_GetSinglePage({
    lang: searchParams?.lang,
    alias: 'homepage',
  });

  const theme = data?.field_main_menu?.[0]?.target_id;
  const currentLang = searchParams?.lang ?? 'id';
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({
    lang: searchParams?.lang ?? 'id',
    theme,
  });
  const listMainFooter = await ACT_GetMainMenuFooter({ lang: currentLang });
  const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });

  const components = data?.field_components
    ?.map((component: T_FieldComponent) => {
      const entityBundle = component?.entity_bundle?.[0]?.value as T_Widget;
      const componentConfig = COMPONENT_MAP_WIDGET[entityBundle];

      if (componentConfig) {
        const { component: Component, props } = componentConfig;

        return {
          Component,
          props: props(component),
        };
      }

      return null;
    })
    .filter(Boolean) as Array<{
    Component: React.ComponentType<any>;
    props: Record<string, any>;
  }>;

  return (
    <React.Fragment>
      <GlobalHeader
        variant="transparent"
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
        isLoginDropdown={
          itemMenuLogin && itemMenuLogin.length > 0 ? true : false
        }
        itemLogin={itemMenuLogin}
        headerLogo={itemHeaderLogo || undefined}
      />
      <main className="w-full">
        {components?.map(({ Component, props }, key) => (
          <React.Fragment key={key}>
            <Component {...props} />
          </React.Fragment>
        ))}
      </main>
      <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      />
      <ScrollToTop />
    </React.Fragment>
  );
}
