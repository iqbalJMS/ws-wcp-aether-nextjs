import dynamic from 'next/dynamic';
import { T_Slider } from './types/widget/slider';
import { T_ComponentMapWidget, T_Widget } from './types';
import { T_DropdownAction } from './types/widget/dropdown-action';
import { T_Section } from './types/widget/section';
import { T_Subscription } from './types/widget/subscription';
import { T_MultiTab } from './types/widget/multi-tab';
import { T_Kurs } from './types/widget/kurs';
import { T_Header } from './types/widget/header';
import { T_InfoSaham } from './types/widget/info-saham';
import { T_DataBreadCrumb } from './types/widget/breadcrumb';
import { WIDGET_VARIANT } from './variables';
import { T_StaircaseCards } from './types/widget/staircase-cards';
import { Tabs } from '@/lib/element/global/tabs';

const CE_PromoCard = dynamic(
  () => import('@/app/aether/$element/portlet/client.portlet.variant04')
);

const Breadcrumb = dynamic(() => import('@/lib/element/global/breadcrumb'));

const SE_SubscriberContent = dynamic(
  () => import('@/app/$element/server.subscriber.content')
);

const SE_PortletMain = dynamic(
  () => import('@/app/aether/$element/portlet/server.portlet.main')
);

const SE_IconMain = dynamic(
  () => import('@/app/aether/$element/icon-menu/server.icon.main')
);

const CE_InfoSahamMain = dynamic(
  () => import('@/app/$element/client.info-saham.main')
);

const CE_ImageSliderMain = dynamic(
  () => import('@/app/aether/$element/image-slider/client.image-slider.main')
);

const SE_FormMain = dynamic(
  () => import('@/app/aether/$element/form/server.form.main')
);

const CE_KursMain = dynamic(
  () => import('@/app/aether/$element/kurs/client.kurs.main')
);

const CE_BannerMain = dynamic(
  () => import('@/app/aether/$element/banner/client.banner.main')
);
const CE_CardVariant02 = dynamic(
  () => import('@/app/aether/$element/card/client.card.variant02')
);

const CE_SectionPromo = dynamic(
  () => import('@/app/aether/$element/promo/client.section-promo')
);

// const CE_ContentMain = dynamic(
//   () => import(''@/app/web/guest/$element/content/client.content.main')
// );
// const CE_CarouselMain = dynamic(
//   () => import(''@/app/web/guest/$element/carousel/client.carousel.main')
// );
// const CE_CardVariant01 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant01')
// );
// const CE_CardVariant03 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant03')
// );
// const CE_CardVariant04 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant04')
// );
// const CE_CardVariant05 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant05')
// );
// const CE_CardVariant06 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant06')
// );
// const CE_CardVariant07 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant07')
// );
// const CE_CardVariant08 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant08')
// );
// const CE_CardVariant09 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant09')
// );
// const CE_CardVariant10 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant10')
// );
// const CE_CardVariant11 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant11')
// );
// const CE_CardVariant12 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant12')
// );
// const CE_CardVariant13 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant13')
// );
// const CE_CardVariant14 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant14')
// );
// const CE_CardVariant15 = dynamic(
//   () => import(''@/app/web/guest/$element/card/client.card.variant15')
// );

const CE_CardVariant16 = dynamic(
  () => import('@/app/aether/$element/card/client.card.variant16')
);

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  kurs: {
    component: CE_KursMain,
    props: (_component: T_Kurs) => {
      return {
        listTable: _component?.data,
        listCurrency: _component?.field_currency,
        availableCurrency: _component?.available_currency,
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
        title: _component?.field_title?.[0]?.value,
        listItems: _component?.field_menu_list?.[0]?.field_links?.map(
          (item) => {
            return {
              title: item?.title,
              value: item?.uri,
            };
          }
        ),
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
    component: (...props) => {
      const findVariantStyle = props?.[0]?.variant;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant01:
          return (
            <CE_ImageSliderMain
              data={props?.[0]?.data}
              title={props?.[0]?.title}
            />
          );
        case WIDGET_VARIANT.variant02:
          return (
            <SE_PortletMain
              title={props?.[0]?.title}
              subtitle={props?.[0]?.subtitle}
              listItems={props?.[0]?.listItems}
              navigationLink={props?.[0]?.navigationLink}
              bgImage={props?.[0]?.bgImage}
              variant="01"
            />
          );
        case WIDGET_VARIANT.variant03:
          return <CE_CardVariant02 data={props?.[0]?.data} />;
        default:
          return null;
      }
    },
    // @ts-expect-error
    // fixme later
    props: (_component: T_Section) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0].field_key?.[0]?.value;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant02:
          return {
            title: _component?.field_formatted_title?.[0]?.value,
            subtitle: _component?.field_content?.[0]?.value,
            listItems: _component?.field_column?.map((item) => {
              return {
                image:
                  item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
                text: item?.field_content?.[0]?.value,
              };
            }),
            textLink: _component?.field_primary_cta?.[0]?.title,
            navigationLink: _component?.field_primary_cta?.[0]?.uri,
            bgImage:
              _component?.field_image?.[0]?.field_media_image[0]?.uri[0]?.url,
            variant:
              _component?.field_web_variant_styles?.[0].field_key?.[0]?.value,
          };
        case WIDGET_VARIANT.variant01:
          return {
            variant:
              _component?.field_web_variant_styles?.[0].field_key?.[0]?.value,
            title: _component?.field_column?.[0].field_title?.[0]?.value,
            data: _component?.field_column?.[0]?.field_image_slider_items?.map(
              (item) => {
                return {
                  link: item?.field_primary_cta?.[0]?.uri,
                  image:
                    item?.field_image?.[0].field_media_image?.[0]?.uri[0]?.url,
                };
              }
            ),
          };
        case WIDGET_VARIANT.variant03:
          return {
            variant:
              _component?.field_web_variant_styles?.[0].field_key?.[0]?.value,
            data: _component?.field_column?.map((item) => {
              return {
                image:
                  item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
                title: item?.field_title?.[0]?.value,
                description: item?.field_content?.[0]?.value,
                button: {
                  // TODO waiting data from drupal
                  link: 'https://bri.co.id',
                  title: 'Selengkapnya',
                  extern: true,
                },
              };
            }),
          };

        default:
          return null;
      }
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
  header: {
    component: SE_PortletMain,
    props: (_component: T_Header) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;

      return {
        title: _component?.field_title?.[0]?.value,
        subtitle: _component?.field_content?.[0]?.value,
        buttonItems: _component?.field_primary_cta?.map((item) => {
          return {
            buttonText: item?.title,
            buttonLink: item?.uri,
          };
        }),

        bgImage:
          _component?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
        variant: '02',
        variantWidget: findVariantStyle,
      };
    },
  },
  multi_tab: {
    component: (...props) => {
      switch (props?.[0]?.variant) {
        case WIDGET_VARIANT.variant05:
          return (
            <div className="container mb-16">
              {props?.[0]?.title && (
                <h1 className="text-4xl mb-16 font-semibold">
                  {props?.[0]?.title}
                </h1>
              )}
              <Tabs value="TABUNGAN" list={props?.[0]?.list} />
            </div>
          );
        case WIDGET_VARIANT.variant03:
          return (
            <CE_SectionPromo
              title={props?.[0]?.title}
              listTab={props?.[0]?.listTab}
            />
          );

        default:
          return null;
      }
    },
    // @ts-expect-error
    // fixme later
    props: (_component: T_MultiTab) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant05:
          return {
            title: _component?.field_title_custom?.[0]?.value,
            variant: findVariantStyle,
            list: _component?.field_tab?.map((item) => {
              return {
                title: item?.field_title?.[0]?.value,
                slug: item?.field_title?.[0]?.value,
                children: item?.field_paragraphs?.[0]?.field_column,
              };
            }),
          };
        case WIDGET_VARIANT.variant06:
          return {
            title: _component?.field_title_custom?.[0]?.value,
            listTab: _component?.field_tab?.map((item) => {
              return {
                group: {
                  title: item?.field_title?.[0]?.value,
                  informationText:
                    item?.field_paragraphs?.[0]?.field_title_custom?.[0]?.value,
                  showMore: {
                    title: item?.field_primary_cta?.[0]?.title,
                    url: item?.field_primary_cta?.[0]?.full_url,
                  },
                },
                contents:
                  item?.field_paragraphs?.[0]?.field_carousel_items?.map(
                    (items) => {
                      return {
                        img: items?.field_image?.[0]?.field_media_image?.[0]
                          ?.uri?.[0]?.url,
                        title: items?.field_title?.[0]?.value,
                        date: items?.field_simple_text?.[0]?.value,
                        href: items?.field_primary_cta?.[0]?.full_url,
                        description: items?.field_content?.[0]?.value,
                      };
                    }
                  ),
              };
            }),
            variant: findVariantStyle,
          };

        default:
          return null;
      }
    },
  },
  breadcrumb: {
    component: Breadcrumb,
    props: (_component: T_DataBreadCrumb) => {
      return {
        paths: _component?.data?.map((item) => {
          return {
            name: item?.title,
            href: item?.url,
          };
        }),
      };
    },
  },
  staircase_cards: {
    component: CE_CardVariant16,
    props: (_component: T_StaircaseCards) => {
      return {
        data: _component?.field_cards?.map(
          (item: {
            field_title: { value: string }[];
            field_content: { value: string }[];
            field_image: { field_media_image: { uri: { url: string }[] }[] }[];
            field_primary_cta: { title: string; full_url: string }[];
          }) => {
            return {
              title: item.field_title[0]?.value,
              description: item.field_content[0]?.value,
              image: item.field_image[0]?.field_media_image[0]?.uri[0]?.url,
              button: {
                link: item.field_primary_cta[0]?.full_url,
                title: item.field_primary_cta[0]?.title,
                extern: false,
              },
            };
          }
        ),
      };
    },
  },
  bbri_stock_market: {
    component: CE_InfoSahamMain,
    props: (_component: T_InfoSaham) => {
      return {
        data: _component?.data,
      };
    },
  },
  two_column: {
    component: CE_PromoCard,
    props: (_component) => {
      const hasImageFirstColumn =
        !!_component.field_first_column?.[0]?.field_image;
      const hasImageSecondColumn =
        !!_component.field_second_column?.[0]?.field_image;
      const imageUrl = hasImageFirstColumn
        ? _component.field_first_column[0]?.field_image?.[0]
            .field_media_image?.[0]?.uri?.[0]?.url
        : hasImageSecondColumn
          ? _component.field_second_column[0]?.field_image?.[0]
              .field_media_image?.[0]?.uri?.[0]?.url
          : '';
      const hasFirstContent =
        !!_component.field_first_column?.[0]?.field_content;
      const hasSecondContent =
        !!_component.field_second_column?.[0]?.field_content;
      const contentLeft = hasFirstContent
        ? _component.field_first_column[0].field_content?.[0]?.value
        : hasSecondContent
          ? _component.field_second_column[0].field_content?.[0]?.value
          : '';

      return {
        description: contentLeft,
        reverse: hasImageFirstColumn,
        imageUrl: imageUrl,
      };
    },
  },
};
