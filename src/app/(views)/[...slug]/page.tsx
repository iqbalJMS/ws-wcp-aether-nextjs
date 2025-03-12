'use server';

import React from 'react';
import { ACT_GetSinglePage } from '@/app/(views)/$action/action.get.single-page';
import { Locale } from '@/i18n-config';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import ScrollToTop from '@/lib/element/global/scroll.top';
import { T_Widget } from '@/app/(views)/$constant/types';
import { COMPONENT_MAP_WIDGET } from '@/app/(views)/$constant';

import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/action.get.main-footer';
import { ACT_GetBottomMenuFooter } from '@/app/(views)/$action/action.get.bottom-footer';
import GlobalHeader from '@/lib/element/global/global.header';
import GlobalFooter from '@/lib/element/global/global.footer';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-items-navbar';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/action.get-header-logo';

export default async function PageAetherDetail({
  params: { slug },
  searchParams: { lang },
}: {
  params: {
    slug: Array<string>;
  };
  searchParams: {
    lang: Locale;
  };
}) {
  const getNodeId = slug?.[0];
  const data = await ACT_GetSinglePage({
    lang: lang ?? 'id',
    alias: getNodeId ?? 'home',
  });

  const theme = data?.field_main_menu?.[0]?.target_id;
  const isLoginDropdown = data?.field_login_dropdown?.[0]?.value;
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en', theme });
  const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
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
        variant="no-transparent"
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
        isLoginDropdown={isLoginDropdown}
        itemLogin={itemMenuLogin}
        headerLogo={itemHeaderLogo || undefined}
      />
      <main className="pt-32 w-full">
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
