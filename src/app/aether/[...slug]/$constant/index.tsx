import { CE_BannerMain } from '@/app/$element/client.banner.main';
import { SE_IconMain } from '@/app/$element/server.icon.main';
import SE_PortletMain from '@/app/aether/$element/portlet/server.portlet.main';
import SE_SubscriberContent from '@/app/$element/server.subscriber.content';
import SE_FormMain from '@/app/aether/$element/form/server.form.main';
import { T_Slider } from './types/widget/slider';
import { T_ComponentMapWidget, T_Widget } from './types';
import { T_DropdownAction } from './types/widget/dropdown-action';
import { T_Section } from './types/widget/section';
import { T_Subscription } from './types/widget/subscription';
import { CE_ImageSliderMain } from '@/app/$element/client.image-slider.main';
import { T_ImageSlider } from './types/widget/image-slider';
import CE_SectionPromo from '@/app/aether/$element/promo/client.section-promo';
import { dateFormatter } from '@/lib/functions/global/date-formatter';
import { T_MultiTab } from './types/widget/multi_tab';
import { T_Header } from '@/app/aether/$constant/types/widget/header';

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
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
        list_items: _component?.field_menu_list[0]?.field_links.map((item) => {
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
                  date: `${dateFormatter(items?.field_datetime[0]?.value)} - ${dateFormatter(items?.field_datetime[0]?.end_value)}`,
                  href: '#',
                  description: items.field_content[0]?.value,
                };
              }
            ),
          };
        }),
      };
    },
  },
};
