'use server';
import React from 'react';

import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import GlobalFooter from '@/lib/element/global/global.footer';

import { ACT_GetDetailPage } from '@/app/(views)/$action/action.get.detail-page';
import Breadcrumb from '@/lib/element/global/breadcrumb';
import CE_CardDetailPromo from '@/app/promo-detail/$element/client.card-detail.promo';
import GlobalHeader from '@/lib/element/global/global.header';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/action.get.main-footer';
import { ACT_GetBottomMenuFooter } from '@/app/(views)/$action/action.get.bottom-footer';
import SE_PortletVariant02 from '@/app/(views)/$element/portlet/server.portlet.variant02';
import { ACT_GetMenuItemNavbar } from '@/app/(views)/$action/action.get-menu-items-navbar';
import { ACT_GetHeaderLogo } from '@/app/(views)/$action/action.get-header-logo';
import { ACT_GetRelatedContentType } from '@/app/(views)/$action/action.get-related-content-type';
import SE_RelatedContent from '@/app/(views)/$element/content-type/server.related-content-type';
import { T_Response_Content_Type } from '@/api/content-type/api.get-content-type.type';

export default async function page({ params }: { params: { id: string } }) {
  const urlLink = `${process.env['BASE_URL'] || process.env.BASE_URL}`;
  const getOurstoryData = await ACT_GetDetailPage({
    lang: 'en',
    alias: 'node',
    nid: +params.id,
  });

  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({
    lang: 'en',
    theme: 'promo-main-navigation',
  });
  const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });
  const itemMenuLogin = await ACT_GetMenuItemNavbar({ lang: 'en' });
  const itemHeaderLogo = await ACT_GetHeaderLogo({ lang: 'en' });

  const dataRelatedContent = await ACT_GetRelatedContentType({
    nid: +params.id,
    type: 'promo',
  });

  const termsPromo = getOurstoryData?.field_term_and_condition?.[0]?.value;
  const merchantPromo = getOurstoryData?.field_promo_merchant?.[0]?.value;
  const imagePromo =
    getOurstoryData?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;
  const startPromo = getOurstoryData?.field_promo_start_date?.[0]?.value;
  const endPromo = getOurstoryData?.field_promo_end_date?.[0]?.value;
  const titlePromo = getOurstoryData?.title?.[0]?.value;
  const locationPromo =
    getOurstoryData?.field_promo_location?.[0]?.title?.[0]?.value;
  const productPromo = getOurstoryData?.field_promo_product_type
    ?.map((item: any) => item.name?.[0]?.value)
    .join(', ');

  const mapResponseToDataContent = (response: T_Response_Content_Type[]) => {
    return {
      contents: response.map((item) => ({
        nid: item?.nid?.[0]?.value,
        title: item?.title?.[0]?.value,
        dateString: `${item?.field_promo_start_date?.[0]?.value} to ${item?.field_promo_end_date?.[0]?.value || 'Tidak ada kedaluwarsa'}`,
        image:
          item?.field_promo_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
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
                name: 'Promo',
                href: '/promo-beranda',
              },
              {
                name: 'Promo List',
                href: '/promo-list',
              },
              {
                name: 'Detail Promo',
                href: '',
              },
            ]}
          />
          <section className="container py-20 w-full">
            <CE_CardDetailPromo
              title={titlePromo}
              image={imagePromo}
              terms={termsPromo}
              startDate={startPromo}
              endDate={endPromo}
              merchant={merchantPromo}
              lokasi={locationPromo}
              product={productPromo}
              urlLink={urlLink}
            />
            {dataRelatedContent && (
              <div>
                <h2 className="font-bold text-3xl mb-10">Promo Lainnya</h2>
                <SE_RelatedContent
                  type="news"
                  dataContent={mapResponseToDataContent(dataRelatedContent)}
                />
              </div>
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
