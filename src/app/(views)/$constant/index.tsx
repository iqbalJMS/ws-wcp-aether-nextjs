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
import { T_Image } from './types/widget/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

const CE_PromoCard = dynamic(
  () => import('@/app/(views)/$element/portlet/client.portlet.variant04')
);
const CE_CardVariant11 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant11')
);

const Breadcrumb = dynamic(() => import('@/lib/element/global/breadcrumb'));

const SE_SubscriberContent = dynamic(
  () => import('@/app/(views)/$element/server.subscriber.content')
);

const CE_CarouselMain = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.main')
);

const SE_PortletMain = dynamic(
  () => import('@/app/(views)/$element/portlet/server.portlet.main')
);

const SE_IconMain = dynamic(
  () => import('@/app/(views)/$element/icon-menu/server.icon.main')
);

const CE_InfoSahamMain = dynamic(
  () => import('@/app/(views)/$element/client.info-saham.main')
);

const CE_ImageSliderMain = dynamic(
  () => import('@/app/(views)/$element/image-slider/client.image-slider.main')
);

const SE_FormMain = dynamic(
  () => import('@/app/(views)/$element/form/server.form.main')
);

const CE_KursMain = dynamic(
  () => import('@/app/(views)/$element/kurs/client.kurs.main')
);

const CE_BannerMain = dynamic(
  () => import('@/app/(views)/$element/banner/client.banner.main')
);
const CE_CardVariant02 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant02')
);

const CE_SectionPromo = dynamic(
  () => import('@/app/(views)/$element/promo/client.section-promo')
);

const SE_WysiwygMain = dynamic(
  () => import('@/app/(views)/$element/wysiwyg/server.wysiwyg.main')
);

const CE_CardVariant08 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant08')
);

const CE_CardVariant16 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant16')
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
    component: (...props) => {
      const findVariantStyle = props?.[0]?.variant;
      const data = props?.[0]?.data;
      switch (findVariantStyle) {
        case 'header_curved':
        default:
          return <CE_BannerMain variant="01" data={data} />;
      }
    },
    props: (_component: T_Slider) => {
      const findVariantStyle = _component?.field_slider_variant?.[0]?.value;
      const data = _component?.field_slider_items?.map((item) => {
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url;
        const title = item?.field_title?.[0]?.value;
        const description = item?.field_content?.[0]?.value;
        const button = item?.field_primary_cta[0]?.title;

        return {
          image: image,
          title: title,
          desc: description,
          button: button,
        };
      });

      switch (findVariantStyle) {
        case 'header_curved':
        default:
          return {
            variant: findVariantStyle,
            data: data,
          };
      }
    },
  },
  dropdown_action: {
    component: SE_FormMain,
    props: (_component: T_DropdownAction) => {
      const title = _component?.field_title?.[0]?.value;
      const data = _component?.field_menu_list?.[0]?.field_links?.map(
        (item) => {
          return {
            title: item?.title,
            value: item?.uri,
          };
        }
      );
      return {
        title: title,
        listItems: data,
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

      const title = props?.[0]?.title;
      const subtitle = props?.[0]?.subtitle;
      const navigationLink = props?.[0]?.navigationLink;
      const backgroundImage = props?.[0]?.backgroundImage;
      const listItems = props?.[0]?.data;
      const column = String(props?.[0]?.column);

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant01:
          return <CE_ImageSliderMain data={listItems} title={title} />;
        case WIDGET_VARIANT.variant02:
          return (
            <SE_PortletMain
              title={title}
              subtitle={subtitle}
              listItems={listItems}
              navigationLink={navigationLink}
              bgImage={backgroundImage}
              variant="01"
            />
          );
        case WIDGET_VARIANT.variant03:
          return <CE_CardVariant02 data={listItems} />;
        case WIDGET_VARIANT.variant07:
          return (
            <SE_PortletMain
              title={title}
              subtitle={subtitle}
              listItems={listItems}
              marginLeft="medium"
              navigationLink={navigationLink}
              bgImage={backgroundImage}
              variant="01"
            />
          );
        case WIDGET_VARIANT.variant08:
          return (
            <SE_PortletMain
              title={title}
              subtitle={subtitle}
              navigationLink={navigationLink}
              listItems={listItems}
              bgImage={backgroundImage}
              variant="01"
              column={column}
            />
          );
        case WIDGET_VARIANT.variant09:
          return <CE_CardVariant08 title={title} data={listItems} />;
        case WIDGET_VARIANT.variant11:
          return (
            <CE_CarouselMain variant="01" data={listItems} title={title} />
          );
        case WIDGET_VARIANT.variant12:
          return (
            <CE_CardVariant11 column={column} title={title} data={listItems} />
          );
        default:
          return null;
      }
    },
    // @ts-expect-error
    props: (_component: T_Section) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
      const subtitle = _component?.field_content?.[0]?.value;
      const navigationLink = _component?.field_primary_cta?.[0]?.uri;
      const navigationLink01 = _component?.field_primary_cta?.[0]?.uri;
      const textLink = _component?.field_primary_cta?.[0]?.title;
      const column = _component?.column_count;
      const backgroundImage =
        _component?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url;
      const title = _component?.field_formatted_title?.[0]?.value;
      const titleV01 = _component?.field_column?.[0]?.field_title?.[0]?.value;
      const titleV02 =
        _component?.field_column?.[0]?.field_title_custom?.[0]?.value;
      const dataV01 =
        _component?.field_column?.[0]?.field_image_slider_items?.map((item) => {
          return {
            link: item?.field_primary_cta?.[0]?.uri,
            image: item?.field_image?.[0].field_media_image?.[0]?.uri[0]?.url,
          };
        });

      const dataV02 = _component?.field_column?.map((item) => {
        return {
          image: item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
          text: item?.field_content?.[0]?.value,
        };
      });
      const dataV07 = _component?.field_column?.map((item) => {
        const text = item?.field_content?.[0]?.value;
        return {
          text: text,
        };
      });
      const dataV03 = _component?.field_column?.map((item) => {
        const title = item?.field_title?.[0]?.value;
        const description = item?.field_content?.[0]?.value;
        const imagePosition = item?.field_alignment?.[0]?.value;
        const buttonLink = item?.field_primary_cta?.[0]?.uri;
        const buttonTitle = item?.field_primary_cta?.[0]?.title;
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
        return {
          image: image,
          title: title,
          description: description,
          imagePosition: imagePosition,
          button: {
            link: buttonLink,
            title: buttonTitle,
            extern: true,
          },
        };
      });
      const dataV08 = _component?.field_column?.map((item) => {
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
        const text = item?.field_content?.[0]?.value;
        const title = item?.field_title?.[0]?.value;
        return {
          image: image,
          text: text,
          title: title,
        };
      });
      const dataV09 = _component?.field_column?.map((item) => {
        return {
          title: item.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
          image: item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
          button: {
            link: item?.field_primary_cta?.[0]?.uri,
            title: item?.field_primary_cta?.[0]?.title,
            extern: true,
          },
        };
      });
      const dataV11 = _component?.field_column?.[0]?.field_carousel_items?.map(
        (item) => {
          const title = item?.field_title?.[0]?.value;
          const description = item?.field_content?.[0]?.value;
          const image =
            item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;

          return {
            image: image,
            title: title,
            desc: description,
          };
        }
      );
      const dataV12 = _component?.field_column?.map((item) => {
        return {
          title: item?.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
          image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
        };
      });

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant01:
          return {
            variant: findVariantStyle,
            title: titleV01,
            data: dataV01,
          };
        case WIDGET_VARIANT.variant02:
          return {
            title: title,
            subtitle: subtitle,
            data: dataV02,
            textLink: textLink,
            navigationLink: navigationLink01,
            backgroundImage: backgroundImage,
            variant: findVariantStyle,
          };
        case WIDGET_VARIANT.variant03:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV03,
          };
        case WIDGET_VARIANT.variant07:
          return {
            variant: findVariantStyle,
            title: title,
            subtitle: subtitle,
            navigationLink: navigationLink,
            data: dataV07,
            backgroundImage: backgroundImage,
          };
        case WIDGET_VARIANT.variant08:
          return {
            variant: findVariantStyle,
            title: title,
            subtitle: subtitle,
            navigationLink: navigationLink,
            data: dataV08,
            column: column,
            backgroundImage: backgroundImage,
          };
        case WIDGET_VARIANT.variant09:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV09,
          };
        case WIDGET_VARIANT.variant11:
          return {
            variant: findVariantStyle,
            title: titleV02,
            data: dataV11,
          };
        case WIDGET_VARIANT.variant12:
          return {
            title: _component?.field_formatted_title?.[0]?.value,
            variant: findVariantStyle,
            column: 1,
            data: dataV12,
          };
        default:
          return null;
      }
    },
  },
  subscription: {
    component: SE_SubscriberContent,
    props: (_component: T_Subscription) => {
      const backgroundImage =
        _component?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
      const description = _component?.field_content?.[0]?.value;
      return {
        bgImage: backgroundImage,
        description: description,
      };
    },
  },
  header: {
    component: SE_PortletMain,
    props: (_component: T_Header) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
      const title = _component?.field_title?.[0]?.value;
      const subtitle = _component?.field_content?.[0]?.value;
      const variantLayout = _component.field_header_style?.[0].value;
      const backgroundImage =
        _component?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url;
      const buttonItem = _component?.field_primary_cta?.map((item) => {
        return {
          buttonText: item?.title,
          buttonLink: item?.uri,
        };
      });
      return {
        title: title,
        subtitle: subtitle,
        buttonItems: buttonItem,
        bgImage: backgroundImage,
        variant: '02',
        variantLayout: variantLayout,
        variantWidget: findVariantStyle,
      };
    },
  },
  multi_tab: {
    component: (...props) => {
      const title = props?.[0]?.title;
      const list = props?.[0]?.list;
      const variant = props?.[0]?.variant;
      const listTab = props?.[0]?.listTab;

      switch (variant) {
        case WIDGET_VARIANT.variant03:
          return <CE_SectionPromo title={title} listTab={listTab} />;
        case WIDGET_VARIANT.variant05:
          return <Tabs title={title} list={list} variantContent={variant} />;
        case WIDGET_VARIANT.variant10:
          return <Tabs title={title} list={list} variantContent={variant} />;
        default:
          return null;
      }
    },

    // @ts-ignore
    props: (_component: T_MultiTab) => {
      const title = _component?.field_title_custom?.[0]?.value;
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
      const listTabV06 = _component?.field_tab?.map((item) => {
        const title = item?.field_title?.[0]?.value;
        const informationText =
          item?.field_paragraphs?.[0]?.field_title_custom?.[0]?.value;
        const showTitle = item?.field_primary_cta?.[0]?.title;
        const showUrl = item?.field_primary_cta?.[0]?.full_url;
        return {
          group: {
            title: title,
            informationText: informationText,
            showMore: {
              title: showTitle,
              url: showUrl,
            },
          },
          contents: item?.field_paragraphs?.[0]?.field_carousel_items?.map(
            (items) => {
              const title = items?.field_title?.[0]?.value;
              const date = items?.field_simple_text?.[0]?.value;
              const href = items?.field_primary_cta?.[0]?.full_url;
              const description = items?.field_content?.[0]?.value;
              const image =
                items?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
              return {
                img: image,
                title: title,
                date: date,
                href: href,
                description: description,
              };
            }
          ),
        };
      });
      const listTabV05 = _component?.field_tab?.map((item) => {
        const rootTitle = item?.field_title?.[0]?.value;
        const rootSlug = item?.field_title?.[0]?.value;
        const rootList = item?.field_paragraphs?.[0]?.field_column || [];
        return {
          title: rootTitle,
          slug: rootSlug,
          children: rootList?.map((item) => {
            const imagePosition = item?.field_alignment?.[0]?.value;
            const title = item?.field_title?.[0]?.value;
            const description = item?.field_content?.[0].value;
            const buttonTitle = item?.field_primary_cta?.[0]?.title;
            const buttonLink = item?.field_primary_cta?.[0]?.url;
            const buttonExtern = false;
            const image =
              item?.field_image?.[0]?.field_media_image?.[0].uri?.[0]?.url;
            return {
              imagePosition: imagePosition,
              title: title,
              description: description,
              image: image,
              button: {
                title: buttonTitle,
                link: buttonLink,
                extern: buttonExtern,
              },
            };
          }),
        };
      });
      const listTabV10 = _component.field_tab?.map((item) => {
        const title = item?.field_title?.[0]?.value;
        const rootSlug = item?.field_title?.[0]?.value;
        const description =
          item?.field_paragraphs?.[0]?.field_content?.[0]?.value;
        const notes = item?.field_paragraphs?.[0]?.field_note?.[0]?.value;

        return {
          title: title,
          slug: rootSlug,
          description: description,
          notes: notes,
        };
      });

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant06:
          return {
            title: title,
            listTab: listTabV06,
            variant: findVariantStyle,
          };
        case WIDGET_VARIANT.variant05:
          return {
            title: title,
            variant: findVariantStyle,
            list: listTabV05,
          };
        case WIDGET_VARIANT.variant10:
          return {
            variant: findVariantStyle,
            title: title,
            list: listTabV10,
          };
        default:
          return {
            variant: findVariantStyle,
          };
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
        data: _component?.field_cards?.map((item) => {
          const title = item?.field_title?.[0]?.value;
          const description = item?.field_content?.[0]?.value;
          const image =
            item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
          const buttonLink = item?.field_primary_cta?.[0]?.full_url;
          const buttonTitle = item?.field_primary_cta?.[0]?.title;
          const buttonExtern = false;
          return {
            title: title,
            description: description,
            image: image,
            button: {
              link: buttonLink,
              title: buttonTitle,
              extern: buttonExtern,
            },
          };
        }),
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
    component: (...props) => {
      const description1 = props?.[0]?.description1 ?? '';
      const description2 = props?.[0]?.description2 ?? '';
      const imageUrl1 = props?.[0]?.imageUrl1 ?? '';
      const imageUrl2 = props?.[0]?.imageUrl2 ?? '';

      return (
        <CE_PromoCard
          description1={description1}
          description2={description2}
          imageUrl1={imageUrl1}
          imageUrl2={imageUrl2}
        />
      );
    },
    props: (_component) => {
      const description1 =
        _component?.field_first_column?.[0]?.field_content?.[0]?.value;
      const description2 =
        _component?.field_second_column?.[0]?.field_content?.[0]?.value;
      const imageUrl1 =
        _component.field_first_column[0]?.field_image?.[0]
          .field_media_image?.[0]?.uri?.[0]?.url;
      const imageUrl2 =
        _component.field_second_column[0]?.field_image?.[0]
          .field_media_image?.[0]?.uri?.[0]?.url;
      return {
        description1: description1,
        description2: description2,
        imageUrl1: imageUrl1,
        imageUrl2: imageUrl2,
      };
    },
  },
  image: {
    component: (...props) => {
      const imageContent = props?.[0]?.image;
      return <SE_WysiwygMain variant="01" imageContent={imageContent} />;
    },
    props: (_component: T_Image) => {
      const imageContent =
        _component?.field_image?.[0]?.field_media_image?.[0].uri?.[0].url;
      return {
        image: imageContent,
      };
    },
  },
  rich_text: {
    component: ({ element }: { element: string }) => (
      <div className="container mx-auto my-6">{parseHTMLToReact(element)}</div>
    ),
    props: (_component: { field_content?: Array<{ value: string }> }) => {
      return {
        element: _component?.field_content?.[0]?.value,
      };
    },
  },
};
