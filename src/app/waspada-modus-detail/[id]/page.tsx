'use server';

import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import GlobalFooter from '@/lib/element/global/global.footer';
import GlobalHeader from '@/lib/element/global/global.header';
import ScrollToTop from '@/lib/element/global/scroll.top';
import React from 'react';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/action.get-header-logo';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-items-navbar';
import { ACT_GetBottomMenuFooter } from '@/app/(views)/$action/action.get.bottom-footer';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/action.get.main-footer';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail-page';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import { COMPONENT_MAP_WIDGET } from '@/app/(views)/$constant';
import { T_Widget } from '@/app/(views)/$constant/types';
import { ACT_GetRelatedContentType } from '@/app/(views)/$action/action.get-related-content-type';
import { T_Response_Content_Type } from '@/api/content-type/api.get-content-type.type';
import SE_RelatedContent from '@/app/(views)/$element/content-type/server.related-content-type';

export default async function PageAether({
  params,
}: {
  params: { id: string };
}) {
  const getOurstoryData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });

  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const dataRelatedContent = await ACT_GetRelatedContentType({
    nid: +params.id,
    type: 'alert_mode',
  });

  const mapResponseToDataContent = (response: T_Response_Content_Type[]) => {
    return {
      contents: response.map((item) => ({
        nid: item?.nid?.[0]?.value,
        title: item?.title?.[0]?.value,
        dateTimestamp: item?.created?.[0]?.value,
        image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
      })),
    };
  };

  const components = getOurstoryData?.field_components
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
      <div>
        <GlobalHeader
          variant="no-transparent"
          headerBottom={listHeaderBottom}
          headerTop={listHeaderTop}
          isLoginDropdown={false}
          itemLogin={itemMenuLogin}
          headerLogo={itemHeaderLogo || undefined}
        />
        <main className="pt-32">
          {components?.map(({ Component, props }, key) => (
            <React.Fragment key={key}>
              <Component {...props} />
            </React.Fragment>
          ))}
          <section className="container py-20 w-full">
            {dataRelatedContent && (
              <SE_RelatedContent
                type="alert_mode"
                dataContent={mapResponseToDataContent(dataRelatedContent)}
              />
            )}
          </section>
        </main>
        <GlobalFooter
          main_footer={listMainFooter}
          bottom_footer={listBottomFooter}
        />
        <ScrollToTop />
      </div>
    </React.Fragment>
  );
}
