import dynamic from 'next/dynamic';
import { T_Slider } from './types/widget/slider';
import { T_ComponentMapWidget, T_Widget } from './types';
import { T_DropdownAction } from './types/widget/dropdown-action';
import { T_Section } from './types/widget/section';
import { T_Subscription } from './types/widget/subscription';
import { T_ImageSlider } from './types/widget/image-slider';
import { T_MultiTab } from './types/widget/multi_tab';
import { T_Kurs } from './types/widget/kurs';
import { T_Header } from './types/widget/header';
import { T_InfoSaham } from './types/widget/info-saham';

const SE_SubscriberContent = dynamic(
  () => import('@/app/$element/server.subscriber.content')
);

const SE_PortletMain = dynamic(
  () => import('@/app/aether/$element/portlet/server.portlet.main')
);

const SE_IconMain = dynamic(() => import('@/app/$element/server.icon.main'));

const CE_InfoSahamMain = dynamic(
  () => import('@/app/$element/client.info-saham.main')
);

const CE_ImageSliderMain = dynamic(
  () => import('@/app/$element/client.image-slider.main')
);

const CE_HelpContent = dynamic(
  () => import('@/app/$element/client.help.content')
);

const CE_KursMain = dynamic(() => import('@/app/$element/client.kurs.main'));

const CE_BannerMain = dynamic(
  () => import('@/app/$element/client.banner.main')
);

const CE_SectionPromo = dynamic(
  () => import('@/app/aether/$element/promo/client.section-promo')
);

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  bbri_stock_market: {
    component: CE_InfoSahamMain,
    props: (_component: T_InfoSaham) => {
      return {
        stockId: _component.data.stockId,
        lastUpdate: _component.data.lastUpdated,
        buyPrice: _component.data.buyPrice,
        cumulativeVol: _component.data.cumulativeVol,
        low: _component.data.low,
        high: _component.data.high,
        low52WKS: _component.data.low52WKS,
        high52WKS: _component.data.high52WKS,
        percentChange: _component.data.percentChange,
      };
    },
  },
  kurs: {
    component: CE_KursMain,
    props: (_component: T_Kurs) => {
      return {
        listTable: _component.data,
        listCurrency: _component.field_currency,
        availableCurrency: _component.available_currency,
      };
    },
  },
  slider: {
    component: CE_BannerMain,
    props: (_component: T_Slider) => {
      return {
        data: _component?.field_slider_items?.map((item) => {
          return {
            image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            title: item?.field_title?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
            button: item?.field_primary_cta[0]?.title,
          };
        }),
      };
    },
  },
  dropdown_action: {
    component: SE_FormMain,
    props: (_component: T_DropdownAction) => {
      return {
        title: _component?.field_title[0]?.value,
        listItems: _component?.field_menu_list[0]?.field_links.map((item) => {
          return {
            title: item?.title,
            value: item?.uri,
          };
        }),
        variant: '01',
      };
    },
  },
  personalized_shortcut: {
    component: SE_IconMain,
    props: (_component) => {
      return {};
    },
  },
  section: {
    component: SE_PortletMain,
    props: (_component: T_Section) => {
      return {
        title: _component?.field_formatted_title[0]?.value,
        subtitle: _component?.field_content[0]?.value,
        listItems: _component?.field_column?.map((item) => {
          return {
            image: item?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
            text: item?.field_content[0]?.value,
          };
        }),
        textLink: _component?.field_primary_cta[0]?.title,
        navigationLink: _component?.field_primary_cta[0]?.uri,
        bgImage: _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
        variant: '01',
      };
    },
  },
  subscription: {
    component: SE_SubscriberContent,
    props: (_component: T_Subscription) => {
      return {
        bgImage: _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
        description: _component?.field_content[0]?.value,
      };
    },
  },
  image_slider: {
    component: CE_ImageSliderMain,
    props: (_component: T_ImageSlider) => {
      return {
        title: _component?.field_title[0]?.value,
        data: _component.field_image_slider_items?.map((item) => {
          return {
            link: item?.field_primary_cta[0]?.uri,
            image: item?.field_image[0].field_media_image[0]?.uri[0]?.url,
          };
        }),
      };
    },
  },
  header: {
    component: SE_PortletMain,
    props: (_component: T_Header) => {
      return {
        title: _component?.field_title[0]?.value,
        subtitle: _component?.field_content[0]?.value,
        buttonItems: _component?.field_primary_cta?.map((item) => {
          return {
            buttonText: item?.title,
            buttonLink: item?.uri,
          };
        }),
        bgImage: _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
        variant: '02',
      };
    },
  },
  multi_tab: {
    component: CE_SectionPromo,
    props: (_component: T_MultiTab) => {
      return {
        title: _component?.field_title_custom[0]?.value,
        listTab: _component?.field_tab?.map((item) => {
          return {
            group: {
              title: item.field_title[0].value,
              informationText:
                item.field_paragraphs[0].field_title_custom[0].value,
              showMore: {
                title: item.field_primary_cta[0].title,
                url: item.field_primary_cta[0].full_url,
              },
            },
            contents: item.field_paragraphs[0]?.field_carousel_items?.map(
              (items) => {
                return {
                  img: items.field_image[0].field_media_image[0].uri[0].url,
                  title: items.field_title[0].value,
                  date: items.field_simple_text[0].value,
                  href: items.field_primary_cta[0].full_url,
                  description: items.field_content[0]?.value,
                };
              }
            ),
          };
        }),
      };
    },
  },
  two_column: {
    component: () => <></>,
    props: (_component) => {
      return {};
    },
  },
};
