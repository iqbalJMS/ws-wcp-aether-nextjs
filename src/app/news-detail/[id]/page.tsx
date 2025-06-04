'use server';
import React from 'react';

import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import GlobalFooter from '@/lib/element/global/global.footer';

import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail-page';
import Breadcrumb from '@/lib/element/global/breadcrumb';
import GlobalHeader from '@/lib/element/global/global.header';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/action.get.main-footer';
import { ACT_GetBottomMenuFooter } from '@/app/(views)/$action/action.get.bottom-footer';
import SE_PortletVariant02 from '@/app/(views)/$element/portlet/server.portlet.variant02';
import SE_WysiwygMain from '@/app/(views)/$element/wysiwyg/server.wysiwyg.main';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-items-navbar';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/action.get-header-logo';
import { ACT_GetRelatedContentType } from '@/app/(views)/$action/action.get-related-content-type';
import SE_RelatedContent from '@/app/(views)/$element/content-type/server.related-content-type';
import { T_Response_Content_Type } from '@/api/content-type/api.get-content-type.type';
import { Locale } from '@/i18n-config';

export default async function page({
  params,
  searchParams: { lang },
}: {
  params: {
    id: string;
  };
  searchParams: {
    lang: Locale;
  };
}) {
  const getOurstoryData = await ACT_GetDetailPage({
    lang: lang ?? 'id',
    alias: 'node',
    nid: +params.id,
  });

  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: lang ?? 'id' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({
    lang: lang ?? 'id',
  });
  const listMainFooter = await ACT_GetMainMenuFooter({ lang: lang ?? 'id' });
  const listBottomFooter = await ACT_GetBottomMenuFooter({
    lang: lang ?? 'id',
  });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: lang ?? 'id' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });
  const dataRelatedContent = await ACT_GetRelatedContentType({
    nid: +params.id,
    type: 'news',
  });

  const titleNews = getOurstoryData?.title?.[0]?.value;
  const bodyNews = getOurstoryData?.body?.[0]?.value;
  const dateNews = getOurstoryData?.created?.[0]?.value;
  const imageArticle =
    getOurstoryData?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;

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

  return (
    <>
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
          <SE_PortletVariant02
            bgImage="/web/guest/images/dummy/banner02.jpeg"
            bgExtern={true}
            variantLayout="rounded_corneer"
          />
          <Breadcrumb
            paths={[
              {
                name: 'News',
                href: '/news',
              },
              {
                name: 'Detail News',
                href: '',
              },
            ]}
          />
          <section className="container py-20 w-full">
            <SE_WysiwygMain
              variant="02"
              title={titleNews}
              createdAt={dateNews}
              imageContent={imageArticle}
              content={bodyNews}
            />
            {dataRelatedContent && (
              <SE_RelatedContent
                type="news"
                dataContent={mapResponseToDataContent(dataRelatedContent)}
              />
            )}
          </section>
        </main>
        <GlobalFooter
          main_footer={listMainFooter}
          bottom_footer={listBottomFooter}
        />
      </div>
    </>
  );
}
