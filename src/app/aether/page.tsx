'use server';

import React from 'react';
import { COMPONENT_MAP_WIDGET } from './$constant';
import { ACT_GetSinglePage } from './$action/action.get.single-page';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import { T_Widget } from './$constant/types';
import { Locale } from '@/i18n-config';
import ScrollToTop from '@/lib/element/global/scroll.top';
import { CE_CarouselMain } from '@/app/$element/client.carousel.main';
import { T_CarouselMainProps } from '@/app/$action/constants';
import { CE_ContentMain } from '@/app/$element/client.content.main';
// import { CE_BannerMain } from "@/app/$element/client.banner.main";
// import { CE_KursMain } from "@/app/$element/client.kurs.main";
import React from 'react';
import { COMPONENT_MAP_WIDGET } from './$constant';
import { ACT_GetSinglePage } from './$action/action.get.single-page';
import { T_FieldComponent } from '@/api/single-page/api.get-single-page.type';
import { T_Widget } from './$constant/types';
import { Locale } from '@/i18n-config';
import ScrollToTop from '@/lib/element/global/scroll.top';

export default async function PageAether({
  searchParams,
}: {
  searchParams: { lang: Locale };
}) {
  const data = await ACT_GetSinglePage({ lang: searchParams?.lang });
  const dataDummy: T_CarouselMainProps['data'] = [
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
      button: {
        name: 'asd',
        link: 'https://bri.co.id',
      },
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
  ];
  const data = await ACT_GetSinglePage({
    lang: searchParams?.lang,
    node: '15',
  });

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
      {components?.map(({ Component, props }, key) => (
        <React.Fragment key={key}>
          <Component {...props} />
        </React.Fragment>
      ))}
      {/* <CE_KursMain /> */}
      {/* <CE_BannerMain variant="04" 
        data={[
            {
              image: "/sites/default/files/images/1073-860x640.jpg",
              title: "Banner slider 1",
              desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
              button: ""
            }
          ]} /> */}
      <CE_CarouselMain variant="01" data={dataDummy} title="Keuntungan" />

      <CE_CarouselMain
        variant="02"
        data={dataDummy}
        title="Promosi Baru KPR BRI"
        button={{
          link: 'https://bri.co.id',
          name: 'Temukan Promosi Lainnya',
        }}
      />
      <CE_CarouselMain variant="03" data={dataDummy} title="Keuntungan" />
      <CE_CarouselMain
        variant="04"
        data={dataDummy}
        title="Keuntungan"
        description="Keuntungan Description"
        button={{
          link: 'https://bri.co.id',
          name: 'Lainnya',
        }}
      />
      <CE_CarouselMain
        variant="05"
        data={dataDummy}
        title="Keuntungan"
        description="Keuntungan Description"
        button={{
          link: 'https://bri.co.id',
          name: 'Lainnya',
        }}
      />
      <CE_ContentMain variant="01" data={dataDummy} title="Title" />
      <CE_ContentMain variant="02" data={dataDummy} />
      <CE_ContentMain variant="03" data={dataDummy} />
      <ScrollToTop />
    </React.Fragment>
  );
}
