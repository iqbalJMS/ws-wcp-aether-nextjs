import ProfileCard from '@/app/(views)/$element/card/client.card.profile';
import CardSabrina from '@/app/(views)/$element/card/client.card.sabrina';
import AboutSection from '@/app/(views)/$element/client.about.section';
import {
  VideoPlayerVariant1,
  VideoPlayerVariant2,
} from '@/app/(views)/$element/client.video.player';
import Accordion, { T_AccordionProps } from '@/lib/element/global/accordion';
import Image from '@/lib/element/global/image';
import ImageViewer from '@/lib/element/global/image.viewer';
import { Tabs } from '@/lib/element/global/tabs';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { T_ComponentMapWidget, T_Widget } from './types';
import { T_DataBreadCrumb } from './types/widget/breadcrumb';
import { T_DropdownAction } from './types/widget/dropdown-action';
import { T_Header } from './types/widget/header';
import { T_Image } from './types/widget/image';
import { T_InfoSaham } from './types/widget/info-saham';
import { T_Kurs } from './types/widget/kurs';
import { T_MultiTab } from './types/widget/multi-tab';
import { T_PromoWidget } from './types/widget/promo';
import { T_Section } from './types/widget/section';
import { T_Slider } from './types/widget/slider';
import { T_StaircaseCards } from './types/widget/staircase-cards';
import { T_Subscription } from './types/widget/subscription';
import { WIDGET_VARIANT } from './variables';
import { T_News } from './types/widget/content_type';

const CE_SimulationMain = dynamic(
  () => import('@/app/(views)/$element/simulation/client.simulation.main')
);
const CE_SimulationDropdown = dynamic(
  () => import('@/app/(views)/$element/simulation/client.simulation.dropdown')
);

const ContactSection = dynamic(
  () => import('@/app/(views)/$element/card/client.content.info')
);

const CE_CarouselVariant06 = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.variant06')
);

const CE_PortletVarian05 = dynamic(
  () => import('@/app/(views)/$element/portlet/client.portlet.varian05')
);

const CE_CardVariant09 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant09')
);

const CE_CardVariant05 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant05')
);

const CE_CardVariant13 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant13')
);

const CE_CardVariant01 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant01')
);

const CE_PortletVarian04 = dynamic(
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

const CE_CarouselVariant09 = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.variant09')
);

const CE_CarouselVariant08 = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.variant08')
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

const CE_SectionPromoVariant01 = dynamic(
  () => import('@/app/(views)/$element/promo/client.section-promo.variant01')
);

const CE_SectionPromoVariant02 = dynamic(
  () => import('@/app/(views)/$element/promo/client.section-promo.variant02')
);

const SE_WysiwygMain = dynamic(
  () => import('@/app/(views)/$element/wysiwyg/server.wysiwyg.main')
);

const CE_CardVariant08 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant08')
);

const CE_CardVariant19 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant19')
);

const CE_CardVariant16 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant16')
);

const CE_CardVariant18 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant18')
);
const CE_LocationMain = dynamic(
  () => import('@/app/(views)/$element/location/client.location.main')
);

const CE_FormQlola = dynamic(
  () => import('@/app/(views)/$element/form/client.form.qlola')
);

const SE_Sitemap = dynamic(
  () => import('@/app/(views)/$element/server.sitemap')
);

const CE_SectionNews = dynamic(
  () => import('@/app/(views)/$element/client.section-news')
);

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  location: {
    component: CE_LocationMain,
    props: (_component: any) => {
      return {
        types: _component?.location_type_details.map(
          (locationTypeItem: any) => {
            return {
              id: locationTypeItem.id,
            };
          }
        ),
      };
    },
  },
  dropdown_simulation: {
    component: CE_SimulationDropdown,
    props: (_component: any) => {
      return {
        dropdown: _component.simulation_url,
      };
    },
  },
  kurs: {
    component: CE_KursMain,
    props: (_component: T_Kurs) => {
      return {
        listTable: _component?.data,
        listCurrency: _component?.field_currency,
        availableCurrency: _component?.available_currency,
        note: _component?.note,
      };
    },
  },
  slider: {
    component: (props) => {
      const findVariantStyle = props?.variant;
      const data = props?.data;

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
        const button = item?.field_primary_cta?.[0]?.title;
        const buttonLink = item?.field_primary_cta?.[0]?.full_url;

        return {
          image: image,
          title: title,
          desc: description,
          button: button,
          buttonLink: buttonLink,
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
            value: (item?.full_url || item?.uri || '')?.replace('/id', ''),
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
    component: (props) => {
      const findVariantStyle = props?.variant;
      const tentangBRI = {
        bigTitle: props?.bigTitle,
        title: props?.title,
        description: props?.description,
        textLink: props?.textLink,
        hrefLink: props?.hrefLink,
        image: props?.image,
      };
      const title = props?.title;
      const subtitle = props?.subtitle;
      const navigationLink = (props?.navigationLink || '').replace('/id', '');
      const navigationText = props?.navigationText;
      const backgroundImage = props?.backgroundImage;
      const listItems = (
        (props?.data as Array<{
          image?: string;
          title?: string;
          link?: string;
          filename?: string;
          description?: string;
          downloadFile?: string;
          subtitle?: string;
          icon?: string;
          button?: {
            link?: string;
            extern?: boolean;
            title?: string;
          };
          nid?: number;
        }>) || []
      ).map((item) => ({
        ...item,
        button: {
          ...item.button,
          ...((item.button?.link || '').includes('/id/') && {
            link: `${item.button?.link}`.replace('/id', ''),
          }),
        },
      }));
      const accordion = props?.accordion as Array<{
        children?: string;
        title?: string;
      }>;
      const column = String(props?.column);
      const buttonSiapaSabrina = {
        text: props?.btnSiapaSabrinaText,
        url: props?.btnSiapaSabrinaUrl,
      };
      const dataV2 = props?.data;
      const linkText = props?.linkText;
      const linkUrl = props?.linkUrl;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant01:
          return <CE_ImageSliderMain data={listItems} title={title} />;
        case WIDGET_VARIANT.variant02:
          return (
            <SE_PortletMain
              title={title}
              subtitle={subtitle}
              listItems={listItems}
              textLink={navigationText}
              navigationLink={navigationLink}
              bgImage={backgroundImage}
              variant="01"
            />
          );
        case WIDGET_VARIANT.variant03:
          return <CE_CardVariant02 title={title} data={listItems} />;
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
        case WIDGET_VARIANT.variant47:
          return (
            <CE_CarouselMain
              variant="05"
              data={listItems}
              title={title}
              description={subtitle}
            />
          );
        case WIDGET_VARIANT.variant12:
          return (
            <CE_CardVariant11 column={column} title={title} data={listItems} />
          );
        case WIDGET_VARIANT.variant16:
        case WIDGET_VARIANT.variant17:
          return <CE_CardVariant08 title={title} data={listItems} />;
        case WIDGET_VARIANT.variant18:
          return (
            <CE_CardVariant11 title={title} column={column} data={listItems} />
          );
        case WIDGET_VARIANT.variant23:
          return (
            <CE_CarouselMain variant="03" data={listItems} title={title} />
          );
        case WIDGET_VARIANT.variant24:
          return <CE_CardVariant05 data={listItems} />;
        case WIDGET_VARIANT.variant27:
          return (
            <div className="container mx-auto my-6">
              {title && (
                <div className="text-3xl">{parseHTMLToReact(title)}</div>
              )}
              <CE_CardVariant09
                data={listItems?.map((item) => {
                  return {
                    title: item?.filename,
                    button: {
                      title: 'Download',
                      link: item?.downloadFile,
                    },
                  };
                })}
              />
            </div>
          );
        case WIDGET_VARIANT.variant28:
          return (
            <div className="container mx-auto bg-white overflow-hidden h-[1200px] py-2 w-full">
              {listItems?.map((item, index: number) => (
                <ImageViewer image={item?.image} key={index} />
              ))}
            </div>
          );
        case WIDGET_VARIANT.variant32:
          return (
            <div className="container my-8">
              <div className="flex flex-wrap -mx-5">
                {listItems?.map((item, index: number) => {
                  return (
                    <div
                      key={index}
                      className="w-1/4 mdmax:w-full flex-none px-5 mb-10 mdmax:!mt-0"
                      style={{ marginTop: `${index * 5}rem` }}
                    >
                      <div>
                        <div className="h-[20rem] mb-5">
                          <Image
                            extern={false}
                            src={item?.image ?? ''}
                            alt="image"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {item.title && (
                          <div className="text-lg font-semibold mb-2 ">
                            {parseHTMLToReact(item.title)}
                          </div>
                        )}
                        {item.description && (
                          <div className="text-base text-black text-opacity-30 mb-10 ">
                            {parseHTMLToReact(item.description)}
                          </div>
                        )}

                        <div className="">
                          <Link
                            href={item?.button?.link ?? '/'}
                            target={!item?.button?.extern ? '_blank' : ''}
                          >
                            <div className="inline-block uppercase text-blue-01 text-xs">
                              {item?.button?.title} &#10095;
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        case WIDGET_VARIANT.variant30:
          return (
            <CE_CardVariant13
              title={title}
              data={listItems?.map((item) => {
                return {
                  title: item?.title,
                  image: item?.image,
                  description: item?.description,
                  subTitle: item?.subtitle,
                  // TODO called it from item if data ready
                  address: '',
                  contactInformation: {
                    fax: '',
                    telephone: '',
                    website: '',
                  },
                };
              })}
            />
          );
        case WIDGET_VARIANT.variant34:
          return listItems?.map((item, key) => {
            return (
              <SE_PortletMain
                title={item?.title}
                key={key}
                imageAtContent={item?.image}
                bgImage={backgroundImage}
                imageAtTitle={item?.icon}
                imageContentAlignment="right"
                variant="03"
                listItems={item?.description}
              />
            );
          });
        case WIDGET_VARIANT.variant35:
          return listItems?.map((item, key) => {
            return (
              <SE_PortletMain
                title={item?.title}
                key={key}
                imageAtContent={item?.image}
                bgImage={backgroundImage}
                imageAtTitle={item?.icon}
                imageContentAlignment="left"
                variant="03"
                listItems={item?.description}
              />
            );
          });
        case WIDGET_VARIANT.variant36:
          return (
            <CE_CardVariant18
              title={title}
              data={listItems}
              showMore={{
                title: navigationText,
                link: navigationLink,
              }}
            />
          );
        case WIDGET_VARIANT.variant37:
          return (
            <div className="lg:container lg:mx-auto">
              <div className="flex flex-col md:flex-row items-start md:space-x-10 px-2 md:px-10 py-6">
                <div className="md:w-1/3 w-full mb-4 md:mb-0">
                  {title && (
                    <div className="text-xl font-semibold lg:mb-2 mb-4">
                      {parseHTMLToReact(title)}
                    </div>
                  )}
                  {subtitle && (
                    <div className="text-gray-500">
                      {parseHTMLToReact(subtitle)}
                    </div>
                  )}
                </div>

                <div className="md:w-2/3 w-full space-y-4 pt-6">
                  {accordion?.map((item, key) => {
                    return (
                      <Accordion
                        key={key}
                        renderTitle={
                          <p className="text-lg font-normal text-left">
                            {item?.title}
                          </p>
                        }
                        variant="full-border"
                        isOpen
                        renderContent={
                          <div className="py-6 text-gray-500">
                            {parseHTMLToReact(item?.children ?? '')}
                          </div>
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        case WIDGET_VARIANT.variant39:
          return (
            <div>
              <ProfileCard
                name={listItems?.[0].title as string}
                description={listItems?.[0].description as string}
                imageUrl={listItems?.[0]?.image as string}
                backgroundUrl={backgroundImage as string}
              />
            </div>
          );
        case WIDGET_VARIANT.variant41:
          return (
            <div>
              <CardSabrina
                name={listItems?.[0].title as string}
                description={listItems?.[0].description as string}
                imageUrl={listItems?.[0]?.image as string}
                backgroundUrl={backgroundImage as string}
                buttonChatSabrina={{
                  text: listItems?.[0]?.button?.title ?? '',
                  url: listItems?.[0]?.button?.link ?? '',
                }}
                buttonSiapaSabrina={buttonSiapaSabrina}
              />
            </div>
          );
        case WIDGET_VARIANT.variant42:
          return (
            <div className="container py-6 mt-8">
              <div className="text-center lg:text-4xl text-2xl font-normal">
                {parseHTMLToReact(title)}
              </div>
              <div className="grid lg:grid-cols-4 lg:gap-12 gap-6 mt-12">
                {dataV2?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="col-span-1 rounded-[3.5rem] hover:bg-[#1553a3] text-center group shadow-md transition transform ease-in-out p-6 py-12 cursor-pointer"
                  >
                    <div className="flex w-full justify-center group-hover:filter group-hover:brightness-0 group-hover:invert">
                      <div className="relative h-24 w-24">
                        <Image
                          fill
                          src={item?.image}
                          extern={false}
                          alt="image"
                        />
                      </div>
                    </div>
                    <p className="text-base mt-6 font-semibold group-hover:text-white text-[#1553a3]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        case WIDGET_VARIANT.variant43:
          return <AboutSection {...tentangBRI} />;
        case WIDGET_VARIANT.variant44:
          return <CE_CardVariant19 title={title} data={listItems} />;
        case WIDGET_VARIANT.variant45:
          return <CE_CarouselVariant08 data={listItems} title={title} />;
        case WIDGET_VARIANT.variant48:
          return (
            <CE_CarouselVariant09
              button={{
                link: linkUrl,
                name: linkText,
              }}
              data={listItems}
              title={title}
            />
          );
        case WIDGET_VARIANT.variant50:
          return <SE_Sitemap />;
        default:
          return null;
      }
    },
    // @ts-expect-error
    props: (_component: T_Section) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
      const subtitle = _component?.field_content?.[0]?.value;
      const subtitleNews =
        _component?.field_column?.[0]?.field_title?.[0]?.value;
      const navigationLink =
        _component?.field_primary_cta?.[0]?.full_url ||
        _component?.field_primary_cta?.[0]?.uri;
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
            image:
              item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
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
        const buttonLink =
          item?.field_primary_cta?.[0]?.full_url ||
          item?.field_primary_cta?.[0]?.uri;
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
      const dataNews = _component?.field_column?.[0]?.field_content_type?.map(
        (item) => {
          const title = item?.title?.[0]?.value;
          const nid = item?.nid?.[0]?.value;
          const date = item?.created?.[0].value;
          const image = item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url;

          return {
            image: image,
            title: title,
            nid: nid,
            date: date,
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
      const dataV16 = _component?.field_column?.map((item) => {
        return {
          title: item?.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
          image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
          button: {
            link: item?.field_primary_cta?.[0]?.uri,
            title: item?.field_primary_cta?.[0]?.title,
            extern: true,
          },
        };
      });
      const dataV18 = _component?.field_column?.map((item) => {
        return {
          title: item?.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
          image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
          button: {
            title: item?.field_primary_cta?.[0]?.title,
            link: item?.field_primary_cta?.[0]?.full_url ?? '',
            extern: false,
          },
        };
      });
      const dataV24 = _component?.field_column?.map((item) => {
        return {
          title: item?.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
        };
      });
      const dataV27 = _component?.field_column?.map((item) => {
        const downloadFile =
          item?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]?.url;
        const description =
          item?.field_document?.[0]?.field_media_file?.[0]?.filename?.[0]
            ?.value;
        const filename = item?.field_document?.[0]?.name?.[0]?.value;
        const iconDownload = item?.field_media_image;
        return {
          filename: filename,
          description: description,
          downloadFile: downloadFile,
          iconDownload: iconDownload,
        };
      });
      const dataV28 = _component?.field_column?.map((item) => {
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
        return { image: image };
      });
      const dataV30 = _component?.field_column?.map((item) => {
        const title = item?.field_title?.[0]?.value;
        const subtitle = item?.field_subtitle?.[0]?.value;
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;

        const content = item?.field_content?.[0]?.value;

        return {
          title: title,
          image: image,
          description: content,
          subtitle: subtitle,
        };
      });
      const dataV32 = _component?.field_column?.map((item) => {
        return {
          image: item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
          title: item?.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
          button: {
            title: item?.field_primary_cta?.[0]?.title,
            link: item?.field_primary_cta?.[0]?.full_url,
          },
        };
      });
      const dataV34 = _component?.field_column?.map((item) => {
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
        const secondImage =
          item?.field_second_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
        const title = item?.field_title?.[0]?.value;
        const description = item?.field_content?.[0]?.value;

        return {
          image: image,
          title: title,
          icon: secondImage,
          description: description,
          button: {
            title: item?.field_primary_cta?.[0]?.title,
            link: item?.field_primary_cta?.[0]?.full_url,
          },
        };
      });
      const dataV37 = _component?.field_column?.[0]?.field_accordion_items?.map(
        (item) => {
          return {
            title: item?.field_title?.[0]?.value,
            children: item?.field_paragraphs?.[0]?.field_content?.[0]?.value,
          };
        }
      );
      const dataV41 = _component?.field_column?.map((item) => {
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
      const dataV42 = _component?.field_column?.map((item) => {
        const title = item?.field_title?.[0]?.value;
        const buttonLink = item?.field_primary_cta?.[0]?.uri;
        const buttonTitle = item?.field_primary_cta?.[0]?.title;
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;

        return {
          image: image,
          title: title,
          button: {
            link: buttonLink,
            title: buttonTitle,
            extern: true,
          },
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
            navigationText: textLink,
            navigationLink: navigationLink,
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
        case WIDGET_VARIANT.variant47:
          return {
            variant: findVariantStyle,
            title: title,
            subtitle: subtitleNews,
            data: dataNews,
          };
        case WIDGET_VARIANT.variant12:
          return {
            title: _component?.field_formatted_title?.[0]?.value,
            variant: findVariantStyle,
            column: 1,
            data: dataV12,
          };
        case WIDGET_VARIANT.variant16:
          return {
            title: _component?.field_formatted_title?.[0]?.value,
            variant: findVariantStyle,
            column: 3,
            data: dataV16,
          };
        case WIDGET_VARIANT.variant17:
          return {
            title: _component?.field_formatted_title?.[0]?.value,
            variant: findVariantStyle,
            column: 3,
            data: dataV16,
          };
        case WIDGET_VARIANT.variant18:
          return {
            title: _component?.field_formatted_title?.[0]?.value,
            variant: findVariantStyle,
            column: column,
            data: dataV18,
          };
        case WIDGET_VARIANT.variant23:
          return {
            variant: findVariantStyle,
            title: titleV02,
            data: dataV11,
          };
        case WIDGET_VARIANT.variant24:
          return {
            variant: findVariantStyle,
            title: titleV02,
            data: dataV24,
          };
        case WIDGET_VARIANT.variant27:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV27,
          };
        case WIDGET_VARIANT.variant28:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV28,
          };
        case WIDGET_VARIANT.variant32:
          return {
            variant: findVariantStyle,
            data: dataV32,
          };
        case WIDGET_VARIANT.variant30:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV30,
          };
        case WIDGET_VARIANT.variant34:
          return {
            variant: findVariantStyle,
            data: dataV34,
            backgroundImage: backgroundImage,
          };
        case WIDGET_VARIANT.variant35:
          return {
            variant: findVariantStyle,
            data: dataV34,
            backgroundImage: backgroundImage,
          };
        case WIDGET_VARIANT.variant36:
          return {
            title: _component?.field_formatted_title?.[0]?.value,
            variant: findVariantStyle,
            column: 3,
            navigationText: textLink,
            navigationLink: navigationLink,
            data: dataV16,
          };
        case WIDGET_VARIANT.variant37:
          return {
            title: title,
            subtitle: subtitle,
            variant: findVariantStyle,
            accordion: dataV37,
          };
        case WIDGET_VARIANT.variant39:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV03,
            backgroundImage: backgroundImage,
          };
        case WIDGET_VARIANT.variant41:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV41,
            btnSiapaSabrinaText: _component?.field_primary_cta?.[0]?.title,
            btnSiapaSabrinaUrl: _component?.field_primary_cta?.[0]?.full_url,
            backgroundImage: backgroundImage,
          };
        case WIDGET_VARIANT.variant42:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV42,
          };
        case WIDGET_VARIANT.variant43:
          return {
            variant: findVariantStyle,
            bigTitle: title,
            title: _component?.field_column?.[0]?.field_title?.[0]?.value,
            description:
              _component?.field_column?.[0]?.field_content?.[0]?.value,
            textLink:
              _component?.field_column?.[0].field_primary_cta?.[0]?.title,
            hrefLink:
              _component?.field_column?.[0].field_primary_cta?.[0]?.full_url,
            image:
              _component?.field_column?.[0]?.field_image?.[0]
                .field_media_image?.[0]?.uri?.[0].url,
          };
        case WIDGET_VARIANT.variant44:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV09,
          };
        case WIDGET_VARIANT.variant45:
          return {
            variant: findVariantStyle,
            title: titleV02,
            data: dataV11,
          };
        case WIDGET_VARIANT.variant48:
          return {
            variant: findVariantStyle,
            title: titleV02,
            data: dataV11,
            linkText: _component?.field_primary_cta?.[0]?.title,
            linkUrl: _component?.field_primary_cta?.[0]?.title,
          };
        case WIDGET_VARIANT.variant50:
          return {
            variant: findVariantStyle,
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
      const variantLayout = _component?.field_header_style?.[0]?.value;
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
    component: (props) => {
      const title = props?.title;
      const list = props?.list;
      const variant = props?.variant;
      const style = props?.style;
      const listTab = props?.listTab;

      switch (variant) {
        case WIDGET_VARIANT.variant49:
          return <CE_SectionPromo title={title} listTab={listTab} />;
        case WIDGET_VARIANT.variant05:
        case WIDGET_VARIANT.variant10:
        case WIDGET_VARIANT.variant13:
        case WIDGET_VARIANT.variant15:
        case WIDGET_VARIANT.variant29:
        case WIDGET_VARIANT.variant31:
        case WIDGET_VARIANT.variant38:
        default:
          return (
            <Tabs
              title={title}
              list={list}
              style={style}
              variantContent={variant}
              drupalBase={process.env['NEXT_PUBLIC_DRUPAL_ENDPOINT']}
            />
          );
      }
    },
    props: (_component: T_MultiTab) => {
      const title = _component?.field_title_custom?.[0]?.value;
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
      const listTabV06 = _component?.field_tab?.map((item) => {
        const title = item?.field_title?.[0]?.value;
        const informationText =
          item?.field_paragraphs?.[0]?.field_title_custom?.[0]?.value;
        const showTitle =
          item?.field_paragraphs?.[0]?.field_primary_cta?.[0]?.title;
        const showUrl =
          item?.field_paragraphs?.[0]?.field_primary_cta?.[0]?.full_url;
        return {
          group: {
            title: title,
            informationText: informationText,
            showMore: {
              title: showTitle,
              url: showUrl,
            },
          },
          contents:
            item?.field_paragraphs?.[0]?.field_carousel_items?.[0]?.field_content_type?.map(
              (items) => {
                const id = items?.nid?.[0]?.value;
                const type = items?.type?.[0]?.type;
                const title = items?.title?.[0]?.value;
                const start_date = items?.field_promo_start_date?.[0]?.value;
                const end_date = items?.field_promo_end_date?.[0]?.value;
                const date = items?.created?.[0]?.value;
                const description =
                  items?.body?.[0]?.value ||
                  items?.field_plain_description?.[0]?.value;
                const image =
                  items?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                    ?.url ||
                  items?.field_promo_image?.[0]?.field_media_image?.[0]
                    ?.uri?.[0]?.url;

                return {
                  id: id,
                  type: type,
                  img: image,
                  title: title,
                  description: description,
                  startDate: start_date,
                  endDate: end_date,
                  date: date,
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
            const description = item?.field_content?.[0]?.value;
            const buttonTitle = item?.field_primary_cta?.[0]?.title;
            const buttonLink = item?.field_primary_cta?.[0]?.url;
            const buttonExtern = false;
            const image =
              item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
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
        case WIDGET_VARIANT.variant49:
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
        case WIDGET_VARIANT.variant13:
          return {
            variant: findVariantStyle,
            list: _component?.field_tab?.map((item) => {
              const rootSlug = item?.field_title?.[0]?.value;

              return {
                title: item?.field_title?.[0]?.value,
                slug: rootSlug,
                children: item?.field_paragraphs?.map((item) => {
                  const description1 =
                    item?.field_first_column?.[0]?.field_content?.[0]?.value;
                  const description2 =
                    item?.field_second_column?.[0]?.field_content?.[0]?.value;
                  const imageUrl1 =
                    item.field_first_column?.[0]?.field_image?.[0]
                      .field_media_image?.[0]?.uri?.[0]?.url;
                  const imageUrl2 =
                    item.field_second_column?.[0]?.field_image?.[0]
                      .field_media_image?.[0]?.uri?.[0]?.url;

                  return {
                    description1: description1,
                    description2: description2,
                    imageUrl1: imageUrl1,
                    imageUrl2: imageUrl2,
                  };
                }),
              };
            }),
          };
        case WIDGET_VARIANT.variant15:
          return {
            variant: findVariantStyle,
            list: _component?.field_tab?.map((item) => {
              return {
                title: item?.field_title?.[0]?.value,
                slug: item?.field_title?.[0]?.value,
                textShowMore: item?.field_primary_cta?.[0]?.title,
                linkShowMore: item?.field_primary_cta?.[0]?.full_url,
                children: item.field_paragraphs?.map((paragraph) => {
                  return {
                    titleColumn: paragraph?.field_formatted_title?.[0]?.value,
                    countColumn: paragraph?.column_count ?? 3,
                    listColumn: paragraph?.field_column ?? [],
                  };
                }),
              };
            }),
          };
        case WIDGET_VARIANT.variant29:
          return {
            variant: findVariantStyle,
            list: _component?.field_tab?.map((item) => {
              return {
                title: item?.field_title?.[0]?.value,
                slug: item?.field_title?.[0]?.value,
                textShowMore: item?.field_primary_cta?.[0]?.title,
                linkShowMore: item?.field_primary_cta?.[0]?.full_url,
                children: item.field_paragraphs?.map((paragraph) => {
                  return {
                    image:
                      paragraph?.field_image?.[0]?.field_media_image?.[0]
                        ?.uri?.[0]?.url,
                    title: paragraph?.field_title?.[0]?.value,
                    description: paragraph?.field_content?.[0]?.value,
                    button: {
                      title: paragraph?.field_primary_cta?.[0]?.title,
                      link: paragraph?.field_primary_cta?.[0]?.full_url,
                    },
                  };
                }),
              };
            }),
          };
        case WIDGET_VARIANT.variant31:
          return {
            variant: findVariantStyle,
            list: _component.field_tab?.map((item) => {
              return {
                title: item?.field_title?.[0]?.value,
                slug: item?.field_title?.[0]?.value,
                children: item?.field_paragraphs?.map((child) => {
                  return {
                    image:
                      child?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                        ?.url,
                    title: child?.field_title?.[0]?.value,
                    description: child?.field_content?.[0]?.value,
                    textLink: child?.field_primary_cta?.[0]?.title,
                    urlLink: child?.field_primary_cta?.[0]?.full_url,
                  };
                }),
              };
            }),
          };
        case WIDGET_VARIANT.variant38:
          return {
            variant: findVariantStyle,
            list: _component?.field_tab?.map((item) => {
              return {
                title: item?.field_title?.[0]?.value,
                slug: item?.field_title?.[0]?.value,
                textShowMore: item?.field_primary_cta?.[0]?.title,
                linkShowMore: item?.field_primary_cta?.[0]?.full_url,
                children: item.field_paragraphs?.map((item) => {
                  return {
                    listColumn: item?.field_accordion_items?.map(
                      (item: {
                        field_title: Array<{ value: string }>;
                        field_paragraphs: Array<{
                          field_document: Array<{
                            field_media_file: Array<{
                              filename: Array<{ value: string }>;
                              uri: Array<{ url: string }>;
                            }>;
                            name: Array<{ value: string }>;
                          }>;
                        }>;
                      }) => {
                        return {
                          title: item?.field_title?.[0]?.value,
                          children: item?.field_paragraphs?.map((childItem) => {
                            const downloadFile =
                              childItem?.field_document?.[0]
                                ?.field_media_file?.[0]?.uri?.[0]?.url;
                            const description =
                              childItem?.field_document?.[0]
                                ?.field_media_file?.[0]?.filename?.[0]?.value;
                            const filename =
                              childItem?.field_document?.[0]?.name?.[0]?.value;

                            return {
                              downloadFile: downloadFile,
                              description: description,
                              filename: filename,
                            };
                          }),
                        };
                      }
                    ),
                  };
                }),
              };
            }),
          };

        case WIDGET_VARIANT.variant40:
          return {
            variant: findVariantStyle,
            title: title,
            style: 'center',
            list: _component?.field_tab?.map((item) => {
              return {
                title: item?.field_title?.[0]?.value,
                slug: item?.field_title?.[0]?.value,
                textShowMore: item?.field_primary_cta?.[0]?.title,
                linkShowMore: item?.field_primary_cta?.[0]?.full_url,
                children: item.field_paragraphs?.map((item) => {
                  return {
                    listColumn: item?.field_accordion_items?.map(
                      (item: {
                        field_title: Array<{ value: string }>;
                        field_paragraphs: Array<{
                          field_content: Array<{ value: string }>;
                          field_document: Array<{
                            field_media_file: Array<{
                              filename: Array<{ value: string }>;
                              uri: Array<{ url: string }>;
                            }>;
                            name: Array<{ value: string }>;
                          }>;
                        }>;
                      }) => {
                        return {
                          title: item?.field_title?.[0]?.value,
                          children: item?.field_paragraphs?.map((childItem) => {
                            return {
                              richText: childItem?.field_content?.[0]?.value,
                            };
                          }),
                        };
                      }
                    ),
                  };
                }),
              };
            }),
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
    component: (props) => {
      const findVariantStyle = props?.variant ?? '';
      const firstColumn = props?.firstColumn;
      const secondColumn = props?.secondColumn;
      const description1 = props?.firstColumn?.description ?? '';
      const description2 = props?.secondColumn?.description ?? '';
      const imageUrl1 = props?.firstColumn?.imageUrl1 ?? '';
      const imageUrl2 = props?.secondColumn?.imageUrl2 ?? '';

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant19:
          return (
            <CE_PortletVarian05
              firstColumn={firstColumn}
              secondColumn={secondColumn}
            />
          );
        case WIDGET_VARIANT.variant21:
          return (
            <CE_PortletVarian05
              firstColumn={firstColumn}
              secondColumn={secondColumn}
            />
          );
        case WIDGET_VARIANT.variant25:
          return (
            <CE_PortletVarian05
              firstColumn={firstColumn}
              secondColumn={secondColumn}
            />
          );
        case WIDGET_VARIANT.variant26:
          return (
            <VideoPlayerVariant2
              videoUrl={firstColumn?.video}
              description={secondColumn?.description}
            />
          );
        case WIDGET_VARIANT.variant33:
          return (
            <CE_CardVariant01
              data={[
                {
                  image: firstColumn?.image,
                  title: firstColumn?.title,
                  description: firstColumn?.description,
                  buttons: [
                    {
                      link: firstColumn?.button?.full_url,
                      title: firstColumn?.button?.title,
                      extern: true,
                    },
                  ],
                },
                {
                  image: secondColumn?.image,
                  title: secondColumn?.title,
                  description: secondColumn?.description,
                  buttons: [
                    {
                      link: secondColumn?.button?.full_url,
                      title: secondColumn?.button?.title,
                      extern: true,
                    },
                  ],
                },
              ]}
            />
          );
        default:
          return (
            <CE_PortletVarian04
              description1={description1}
              description2={description2}
              imageUrl1={imageUrl1}
              imageUrl2={imageUrl2}
            />
          );
      }
    },
    props: (_component) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant19:
          return {
            firstColumn: {
              title:
                _component?.field_first_column?.[0]?.field_title?.[0]?.value,
              description:
                _component?.field_first_column?.[0]?.field_content?.[0]?.value,
              button: {
                title:
                  _component?.field_first_column?.[0]?.field_primary_cta?.[0]
                    ?.title,
                link: _component?.field_first_column?.[0]
                  ?.field_primary_cta?.[0]?.full_url,
                extern: false,
              },
            },
            secondColumn: {
              image:
                _component?.field_second_column?.[0]?.field_image?.[0]
                  ?.field_media_image?.[0]?.uri?.[0]?.url,
            },
            variant: findVariantStyle,
          };
        case WIDGET_VARIANT.variant21:
          return {
            firstColumn: {
              title:
                _component?.field_first_column?.[0]?.field_paragraphs?.[0]
                  ?.field_title?.[0]?.value,
              description:
                _component?.field_first_column?.[0]?.field_paragraphs?.[0]
                  .field_content?.[0]?.value,
              button: {
                title:
                  _component.field_first_column?.[0]?.field_paragraphs?.[0]
                    ?.field_primary_cta?.[0]?.title,
                link: _component?.field_first_column?.[0]?.field_paragraphs?.[0]
                  ?.field_primary_cta?.[0]?.full_url,
                extern: false,
              },
            },
            secondColumn: {
              image:
                _component?.field_second_column?.[0]?.field_image?.[0]
                  ?.field_media_image?.[0]?.uri?.[0]?.url,
            },
            variant: findVariantStyle,
          };
        case WIDGET_VARIANT.variant25:
          return {
            firstColumn: {
              description:
                _component?.field_first_column?.[0]?.field_content?.[0]?.value,
            },
            secondColumn: {
              description:
                _component?.field_second_column?.[0]?.field_content?.[0]?.value,
            },
            variant: findVariantStyle,
          };
        case WIDGET_VARIANT.variant26:
          const video =
            _component?.field_first_column?.[0]?.field_video?.[0]
              ?.field_media_oembed_video?.[0]?.value;
          const videoId = video?.substring(video?.lastIndexOf('/') + 1);
          return {
            firstColumn: {
              video: videoId,
            },
            secondColumn: {
              description:
                _component?.field_second_column?.[0]?.field_content?.[0]?.value,
            },
            variant: findVariantStyle,
          };
        case WIDGET_VARIANT.variant33:
          return {
            firstColumn: {
              image:
                _component?.field_first_column?.[0]?.field_image?.[0]
                  ?.field_media_image?.[0]?.uri?.[0]?.url,
              title:
                _component?.field_first_column?.[0]?.field_title?.[0]?.value,
              description:
                _component?.field_first_column?.[0]?.field_content?.[0]?.value,
              button: {
                title:
                  _component.field_first_column?.[0]?.field_primary_cta?.[0]
                    ?.title,
                link: _component?.field_first_column?.[0]
                  ?.field_primary_cta?.[0]?.full_url,
                extern: false,
              },
            },
            secondColumn: {
              image:
                _component?.field_second_column?.[0]?.field_image?.[0]
                  ?.field_media_image?.[0]?.uri?.[0]?.url,
              title:
                _component?.field_second_column?.[0]?.field_title?.[0]?.value,
              description:
                _component?.field_second_column?.[0]?.field_content?.[0]?.value,
              button: {
                title:
                  _component.field_second_column?.[0]?.field_primary_cta?.[0]
                    ?.title,
                link: _component?.field_second_column?.[0]
                  ?.field_primary_cta?.[0]?.full_url,
                extern: false,
              },
            },
            variant: findVariantStyle,
          };
        default:
          const description1 =
            _component?.field_first_column?.[0]?.field_content?.[0]?.value;
          const description2 =
            _component?.field_second_column?.[0]?.field_content?.[0]?.value;
          const imageUrl1 =
            _component?.field_first_column?.[0]?.field_image?.[0]
              ?.field_media_image?.[0]?.uri?.[0]?.url;
          const imageUrl2 =
            _component?.field_second_column?.[0]?.field_image?.[0]
              ?.field_media_image?.[0]?.uri?.[0]?.url;

          return {
            firstColumn: {
              description: description1,
              image: imageUrl1,
            },

            secondColumn: {
              description: description2,
              image: imageUrl2,
            },
          };
      }
    },
  },
  image: {
    component: (props) => {
      const imageContent = props?.image;
      return <SE_WysiwygMain variant="01" imageContent={imageContent} />;
    },
    props: (_component: T_Image) => {
      const imageContent =
        _component?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
      return {
        image: imageContent,
      };
    },
  },
  rich_text: {
    component: ({ element }: { element: string }) => (
      <div className="container mx-auto my-6 py-6 container-rich-text">
        {parseHTMLToReact(element)}
      </div>
    ),
    props: (_component: { field_content?: Array<{ value: string }> }) => {
      return {
        element: _component?.field_content?.[0]?.value,
      };
    },
  },
  video: {
    component: (props: {
      video: string | undefined;
      title: string | undefined;
      background: string | undefined;
    }) => {
      return (
        <VideoPlayerVariant1
          videoId={props.video}
          title={props.title}
          backgroundImage={props.background}
        />
      );
    },
    props: (_component: {
      field_video: { field_media_oembed_video: { value: any }[] }[];
      field_image: { field_media_image: { uri: { url: any }[] }[] }[];
      field_title: { value: any }[];
    }) => {
      const video =
        _component?.field_video?.[0]?.field_media_oembed_video?.[0]?.value;
      const videoId = video?.substring(video?.lastIndexOf('/') + 1);
      const background =
        _component?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
      const title = _component?.field_title?.[0]?.value;
      return {
        background: background,
        title: title,
        video: videoId,
      };
    },
  },
  download: {
    component: (props: {
      filename: any;
      description: any;
      iconDownload: any;
      downloadFile: any;
    }) => {
      const filename = props?.filename;
      const description = props?.description;
      const iconDownload = props?.iconDownload;
      const downloadFile = `${process.env['NEXT_PUBLIC_DRUPAL_ENDPOINT']}${props?.downloadFile}`;

      return (
        <CE_CardVariant09
          data={[
            {
              title: filename,
              description: description,
              button: {
                image: iconDownload,
                link: downloadFile,
                title: 'Download',
                extern: true,
              },
            },
          ]}
        />
      );
    },
    props: (_component: {
      field_document: Array<{
        field_media_file: any;
        name: Array<{ value: string }>;
      }>;
      field_media_image: string;
    }) => {
      const downloadFile =
        _component?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]?.url;
      const description =
        _component?.field_document?.[0]?.field_media_file?.[0]?.filename?.[0]
          ?.value;
      const filename = _component?.field_document?.[0]?.name?.[0]?.value;
      const iconDownload = _component?.field_media_image;

      return {
        filename: filename,
        description: description,
        downloadFile: downloadFile,
        iconDownload: iconDownload,
      };
    },
  },
  accordion: {
    component: (props: {
      variant: String;
      listAccordion: any[];
      accordionStyle: String;
    }) => {
      const variant: String = props?.variant;
      const listAccordion: Array<any> = props?.listAccordion;
      const accordionStyle: String = props?.accordionStyle;
      const isCapsule: String = accordionStyle === 'capsule' ? 'rounded' : '';

      const renderElement = (children: Array<any>) => {
        switch (variant) {
          case 'download':
            return (
              <CE_CardVariant09
                data={children?.map((item) => {
                  return {
                    title: item?.filename?.replaceAll('_', ' '),
                    description: item?.description?.replaceAll('_', ' '),
                    button: {
                      image: item?.iconDownload,
                      link: item?.downloadFile,
                      title: 'Download',
                      extern: true,
                    },
                  };
                })}
              />
            );
          case 'image-slider':
            return (
              <CE_CarouselVariant06
                data={children?.map((item) => {
                  return {
                    description: item?.description,
                    image: item?.image,
                  };
                })}
              />
            );
          case 'card-section':
          default:
            return (
              <div className="flex flex-wrap my-4 lg:gap-0 gap-6">
                {children?.map((item, index) => {
                  return (
                    <div key={index} className="lg:w-1/4 w-full flex-none px-2">
                      <Link href={'/'} target="_blank">
                        <div className="lg:p-5 p-4 shadow-lg">
                          {item?.image && (
                            <div className="w-full h-[255px] mb-2">
                              <Image
                                extern={false}
                                src={item?.image}
                                alt="image"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}

                          <div>
                            <div className=" text-red-01 font-semibold text-sm mb-8">
                              {parseHTMLToReact(item?.title)}
                            </div>

                            <div className="text-base font-semibold flex gap-3 items-center hover:underline overflow-auto text-[#014A94]">
                              <div className="flex items-center gap-1 text-sm">
                                {parseHTMLToReact(item?.button?.title)} (ID)
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </div>
                            <div className="text-base flex gap-3 font-semibold items-center hover:underline overflow-auto text-[#014A94]">
                              <div className="flex items-center gap-1 text-sm">
                                {parseHTMLToReact(item?.button?.title)} (EN)
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
        }
      };

      return (
        <div className="container mx-auto my-8">
          {listAccordion?.map((item, key) => {
            return (
              <Accordion
                key={key}
                renderTitle={
                  <p
                    className={`${accordionStyle === 'capsule' ? 'lg:text-base text-sm font-semibold pl-4' : 'lg:text-2xl text-base'} text-left font-normal`}
                  >
                    {item?.title}
                  </p>
                }
                variant={isCapsule as T_AccordionProps['variant']}
                isOpen
                renderContent={renderElement(item?.children)}
              />
            );
          })}
        </div>
      );
    },
    props: (_component: {
      field_accordion_items: any[];
      field_accordion_style: { value: any }[];
    }) => {
      const title =
        _component?.field_accordion_items?.[0]?.field_title?.[0]?.value;
      const accordionStyle = _component?.field_accordion_style?.[0]?.value;

      const variantChildren =
        _component?.field_accordion_items?.[0]?.field_paragraphs?.[0]
          ?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;

      const listAccordionContent = _component?.field_accordion_items?.map(
        (item: {
          field_title: Array<{ value: string }>;
          field_paragraphs: Array<{
            field_column: Array<{
              field_title: Array<{ value: string }>;
              field_image: Array<{
                field_media_image: Array<{ uri: Array<{ url: string }> }>;
              }>;
              field_primary_cta: Array<{ title: string; full_url: string }>;
            }>;
          }>;
        }) => {
          return {
            title: item?.field_title?.[0]?.value,
            children: item?.field_paragraphs?.[0]?.field_column?.map(
              (childItem) => {
                const title = childItem?.field_title?.[0]?.value;
                const image =
                  childItem?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                    ?.url;

                return {
                  image: image,
                  title: title,
                  button: {
                    link: childItem?.field_primary_cta?.[0]?.full_url,
                    title: childItem?.field_primary_cta?.[0]?.title,
                    extern: true,
                  },
                };
              }
            ),
          };
        }
      );

      const listAccordionDownloaded = _component?.field_accordion_items?.map(
        (item: {
          field_title: Array<{ value: string }>;
          field_paragraphs: Array<{
            field_document: Array<{
              field_media_file: Array<{
                filename: Array<{ value: string }>;
                uri: Array<{ url: string }>;
              }>;
              name: Array<{ value: string }>;
            }>;
          }>;
        }) => {
          return {
            title: item?.field_title?.[0]?.value,
            children: item?.field_paragraphs?.map((childItem) => {
              const downloadFile =
                childItem?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]
                  ?.url;
              const description =
                childItem?.field_document?.[0]?.field_media_file?.[0]
                  ?.filename?.[0]?.value;
              const filename = childItem?.field_document?.[0]?.name?.[0]?.value;

              return {
                downloadFile: downloadFile,
                description: description,
                filename: filename,
              };
            }),
          };
        }
      );

      const listAccordionImageSlider = _component?.field_accordion_items?.map(
        (item: {
          field_title: Array<{ value: string }>;
          field_paragraphs: Array<{
            field_image: Array<{
              field_media_image: Array<{ uri: Array<{ url: string }> }>;
            }>;
            field_content: Array<{ value: string }>;
          }>;
        }) => {
          return {
            title: item?.field_title?.[0]?.value,
            children: item?.field_paragraphs?.map((childItem) => {
              const image =
                childItem?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                  ?.url;

              const description = childItem?.field_content?.[0]?.value;
              return {
                image: image,
                description: description,
              };
            }),
          };
        }
      );

      const hasAccordionDownloaded =
        !!listAccordionDownloaded?.[0]?.children?.[0]?.downloadFile;
      const hasAccordionImageSlider =
        !!listAccordionImageSlider?.[0]?.children?.[0]?.image;

      if (hasAccordionImageSlider) {
        return {
          listAccordion: listAccordionImageSlider,
          variant: 'image-slider',
          accordionStyle: accordionStyle,
        };
      } else if (hasAccordionDownloaded) {
        return {
          listAccordion: listAccordionDownloaded,
          variant: 'download',
          accordionStyle: accordionStyle,
        };
      } else {
        return {
          variantChildren: variantChildren,
          title: title,
          variant: 'card-section',
          listAccordion: listAccordionContent,
          accordionStyle: accordionStyle,
        };
      }
    },
  },
  form: {
    component: (props: { type_form: string }) => {
      const findTypeForm = props?.type_form ?? '';

      switch (findTypeForm) {
        case 'qlola':
          return <CE_FormQlola />;
        default:
          return null;
      }
    },
    props: (_component: any) => {
      return {
        type_form: _component?.field_form?.[0]?.target_id,
      };
    },
  },
  simulation: {
    component: (props: {
      tabs: Array<{
        title: string;
        image: string;
        tnc: string;
        variant: string;
      }>;
      button: {
        title: string;
        extern: boolean;
        link: string;
      };
      actionButton: {
        title: string;
        extern: boolean;
        link: string;
      };
    }) => {
      const button = {
        title: props?.button.title,
        extern: props?.button.extern,
        link: (props?.button.link || '').replace('/id', ''),
      };
      const actionButton = {
        title: props?.actionButton.title,
        extern: props?.actionButton.extern,
        link: (props?.actionButton.link || '').replace('/id', ''),
      };
      const tabs = props?.tabs;

      return (
        <CE_SimulationMain
          type={props.tabs.length === 1 ? 'page' : 'tab'}
          action={{
            button: {
              extern: actionButton?.extern,
              link: actionButton?.link,
              title: actionButton?.title,
            },
            description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
          }}
          button={{
            extern: button?.extern,
            link: button?.link,
            title: button?.title,
          }}
          variant={tabs.at(0)?.variant || 'kpr'}
          tabs={tabs}
        />
      );
    },
    props: (_component: {
      field_paragraphs: Array<{
        field_title: Array<{ value: string }>;
        field_simulation: Array<{ value: string }>;
        field_secondary_content: Array<{ value: string }>;
        field_primary_cta: { title: string; full_url: string }[];
        field_image?: {
          field_media_image?: {
            uri?: {
              url: string;
            }[];
          }[];
        }[];
      }>;
      field_primary_cta: { title: string; full_url: string }[];
    }) => {
      return {
        tabs: _component?.field_paragraphs?.map((item) => {
          return {
            title: item?.field_title?.[0]?.value,
            image: item.field_image?.at(0)?.field_media_image?.at(0)?.uri?.at(0)
              ?.url,
            tnc: item?.field_secondary_content?.[0]?.value,
            variant: item?.field_simulation?.[0]?.value.toLowerCase(),
          };
        }),
        button: {
          title: _component?.field_primary_cta?.[0]?.title,
          extern: true,
          link: _component?.field_primary_cta?.[0]?.full_url,
        },
        actionButton: {
          title:
            _component?.field_paragraphs?.[0]?.field_primary_cta?.[0]?.title,
          extern: true,
          link: _component?.field_paragraphs?.[0]?.field_primary_cta?.[0]
            ?.full_url,
        },
      };
    },
  },
  contact_info: {
    component: (props) => {
      const title = props?.title ?? '';
      const description = props?.description ?? '';
      const cardContent = props?.column ?? [];

      return (
        <ContactSection
          title={title}
          description={description}
          cards={cardContent}
        />
      );
    },
    props: (_component) => {
      return {
        title: _component?.field_title?.[0]?.value,
        description: _component?.field_script?.[0]?.value,
        column: _component?.field_paragraphs?.map(
          (item: {
            field_title: { value: string }[];
            field_paragraphs: {
              field_facebook: { value: string }[];
              field_twitter: { value: string }[];
              field_instagram: { value: string }[];
              field_youtube: { value: string }[];
              field_title: { value: string }[];
              field_content: { value: string }[];
              field_primary_cta: { title: string }[];
            }[];
          }) => {
            return {
              bigTitle: item?.field_title?.[0]?.value,
              details: item?.field_paragraphs?.map(
                (childItem: {
                  field_facebook: { value: string }[];
                  field_twitter: { value: string }[];
                  field_instagram: { value: string }[];
                  field_youtube: { value: string }[];
                  field_title: { value: string }[];
                  field_content: { value: string }[];
                  field_primary_cta: { title: string }[];
                }) => {
                  const icon = {
                    facebook: childItem?.field_facebook?.[0]?.value,
                    twitter: childItem?.field_twitter?.[0]?.value,
                    instagram: childItem?.field_instagram?.[0]?.value,
                    youtube: childItem?.field_youtube?.[0]?.value,
                  };

                  const hasIcons = Object.values(icon).some((value) => value);

                  return {
                    title: childItem?.field_title?.[0]?.value,
                    description: childItem?.field_content?.[0]?.value,
                    link: childItem?.field_primary_cta?.[0]?.title,
                    icon: hasIcons ? icon : null,
                  };
                }
              ),
            };
          }
        ),
      };
    },
  },
  promo_widget: {
    component: (...props) => {
      const titleProps = props?.[0]?.titleProps;
      const buttonTextProps = props?.[0]?.buttonTextProps;
      const buttonLinkProps = props?.[0]?.buttonLinkProps;
      const dataProps = props?.[0]?.dataProps;
      const categoryProps = props?.[0]?.categoryProps;
      const findVariantStyle = props?.[0]?.variant;
      const sidebarData = props?.[0]?.sidebarData;
      const paginationData = props?.[0]?.paginationData;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant46:
          return (
            <CE_SectionPromoVariant01
              title={titleProps}
              buttonLink={buttonLinkProps}
              buttonText={buttonTextProps}
              promoData={dataProps}
              categoryData={categoryProps}
            />
          );
        default:
          return (
            <CE_SectionPromoVariant02
              promoData={dataProps}
              sidebarData={sidebarData}
              paginationData={paginationData}
            />
          );
      }
    },
    props: (_component: T_PromoWidget) => {
      const labelCard = _component?.field_title?.[0]?.value;
      const textCta = _component?.field_primary_cta?.[0]?.title;
      const linkCta = _component?.field_primary_cta?.[0]?.full_url.replace(
        '/id',
        ''
      );
      const cardDataPromo = _component?.promo_data?.items?.map((item) => {
        return {
          title: item?.title?.[0]?.value,
          image: item?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
          nid: item?.nid?.[0]?.value,
          startDate: item?.field_promo_start_date?.[0]?.value,
          endDate: item?.field_promo_end_date?.[0]?.value,
        };
      });
      const categoryPromo = _component?.promo_data?.popular_category?.map(
        (item) => {
          return {
            text: item?.title?.[0]?.value,
            image: item?.field_icon?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            nid: item?.nid?.[0]?.value,
          };
        }
      );

      const sidebarCategoryPromo =
        _component?.promo_data?.sidebar?.category?.map((item) => {
          return {
            label: item?.title?.[0]?.value,
            value: item?.nid?.[0]?.value,
          };
        });

      const sidebarProductPromo = _component?.promo_data?.sidebar?.product?.map(
        (item) => {
          return {
            label: item?.name?.[0]?.value,
            value: item?.tid?.[0]?.value,
          };
        }
      );

      const sidebarLocationPromo =
        _component?.promo_data?.sidebar?.location?.map((item) => {
          return {
            label: item?.title?.[0]?.value,
            value: item?.nid?.[0]?.value,
          };
        });

      const sidebarData = _component.promo_data?.sidebar
        ? {
            categoryData: sidebarCategoryPromo || [],
            productData: sidebarProductPromo || [],
            locationData: sidebarLocationPromo || [],
          }
        : null;

      const paginationData = _component.promo_data?.pager;

      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant23:
        default:
          return {
            dataProps: cardDataPromo,
            categoryProps: categoryPromo,
            variant: findVariantStyle,
            titleProps: labelCard,
            buttonTextProps: textCta,
            buttonLinkProps: linkCta,
            sidebarData: sidebarData,
            paginationData: paginationData,
          };
      }
    },
  },
  content_type: {
    component: (...props: any) => {
      const findEntityBundle = props?.[0]?.entity;
      const data = props?.[0]?.data;

      switch (findEntityBundle) {
        case WIDGET_VARIANT.variant51:
          return <CE_SectionNews newsData={data} />;
        default:
          return <></>;
      }
    },
    props: (_component: T_News) => {
      const entityBundle = _component?.field_content_type?.[0]?.type?.[0]?.type;
      const dataNews = {
        contents: _component?.field_content_type?.map((item) => {
          return {
            title: item?.title?.[0]?.value,
            nid: item?.nid?.[0]?.value,
            image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            date: item?.created?.[0]?.value,
          };
        }),
      };

      switch (entityBundle) {
        case WIDGET_VARIANT.variant51:
          return { entity: entityBundle, data: dataNews };
        default:
          return {};
      }
    },
  },
};
