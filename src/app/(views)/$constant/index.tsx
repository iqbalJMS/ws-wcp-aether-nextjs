import dynamic from 'next/dynamic';
import Link from 'next/link';

import ProfileCard from '@/app/(views)/$element/card/client.card.profile';
import CardSabrina from '@/app/(views)/$element/card/client.card.sabrina';
import AboutSection from '@/app/(views)/$element/client.about.section';
import {
  VideoPlayerVariant1,
  VideoPlayerVariant2,
} from '@/app/(views)/$element/client.video.player';
import Accordion from '@/lib/element/global/accordion';
import Image from '@/lib/element/global/image';
import ImageViewer from '@/lib/element/global/image.viewer';
import Tabs from '@/lib/element/global/tabs';

import { handleurl } from '@/lib/functions/client/handle-url';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

import { T_ComponentMapWidget, T_Widget } from './types';
import { T_DataBreadCrumb } from './types/widget/breadcrumb';
import { T_News } from './types/widget/content_type';
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
import { T_AccordionProps } from '@/lib/element/global/accordion';
import { WIDGET_VARIANT } from './variables';


/* Portlet Component */
const SE_PortletMain = dynamic(
  () => import('@/app/(views)/$element/portlet/server.portlet.main')
);
const CE_PortletVarian04 = dynamic(
  () => import('@/app/(views)/$element/portlet/client.portlet.variant04')
);
const CE_PortletVarian05 = dynamic(
  () => import('@/app/(views)/$element/portlet/client.portlet.varian05')
);
const SE_PortletVarian07 = dynamic(
  () => import('@/app/(views)/$element/portlet/server.portlet.variant07')
);
const SE_PortletSectionHeaderAlign = dynamic(
  () =>
    import(
      '@/app/(views)/$element/portlet/server.portlet.sectionheaderalignment'
    )
);
const CE_CardLaporan = dynamic(
  () => import('@/app/(views)/$element/card/client.card.laporan')
);

/* Carousel Component */
const CE_CarouselMain = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.main')
);
const CE_CarouselVariant06 = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.variant06'),
  { ssr: false }
); /* server-side rendering */

const CE_CarouselVariant08 = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.variant08')
);
const CE_CarouselVariant09 = dynamic(
  () => import('@/app/(views)/$element/carousel/client.carousel.variant09')
);

/* Card Component */
const CE_CardVariant01 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant01')
);
const CE_CardVariant02 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant02')
);
const CE_CardVariant05 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant05')
);
const CE_CardVariant08 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant08')
);
const CE_CardVariant09 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant09')
);
const CE_CardVariant11 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant11')
);
const CE_CardVariant21 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant21')
);
const CE_CardVariant13 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant13')
);
const CE_CardVariant16 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant16')
);
const CE_CardVariant20 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant20')
);
const CE_CardVariant18 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant18')
);
const CE_CardVariant19 = dynamic(
  () => import('@/app/(views)/$element/card/client.card.variant19')
);

/* Wysiwyg Component */
const SE_WysiwygMain = dynamic(
  () => import('@/app/(views)/$element/wysiwyg/server.wysiwyg.main')
);

/* Content Type Component */
const CE_SectionPromo = dynamic(
  () => import('@/app/(views)/$element/promo/client.section-promo')
);
const CE_SectionPromoVariant01 = dynamic(
  () => import('@/app/(views)/$element/promo/client.section-promo.variant01')
);
const CE_SectionPromoVariant02 = dynamic(
  () => import('@/app/(views)/$element/promo/client.section-promo.variant02')
);
const CE_LocationMain = dynamic(
  () => import('@/app/(views)/$element/location/client.location.main')
);
const CE_SectionNews = dynamic(
  () => import('@/app/(views)/$element/content-type/client.section-news')
);
const CE_SectionWaspadaModus = dynamic(
  () =>
    import('@/app/(views)/$element/content-type/client.section-waspada-modus')
);
const CE_SectionAnnouncement = dynamic(
  () =>
    import('@/app/(views)/$element/content-type/client.section-announcement')
);
const CE_SectionAuctions = dynamic(
  () => import('@/app/(views)/$element/content-type/client.section-auctions')
);

/* Other */
const Breadcrumb = dynamic(() => import('@/lib/element/global/breadcrumb'));
const CE_BannerMain = dynamic(
  () => import('@/app/(views)/$element/banner/client.banner.main')
);
const SE_IconMain = dynamic(
  () => import('@/app/(views)/$element/icon-menu/server.icon.main')
);
const CE_PromoSlider = dynamic(
  () => import('@/app/(views)/$element/promo/client.promo-slider')
);
const CE_SimulationMain = dynamic(
  () => import('@/app/(views)/$element/simulation/client.simulation.main')
);
const CE_SimulationDropdown = dynamic(
  () => import('@/app/(views)/$element/simulation/client.simulation.dropdown')
);
const CE_InfoSahamMain = dynamic(
  () => import('@/app/(views)/$element/client.info-saham.main')
);
const CE_KursMain = dynamic(
  () => import('@/app/(views)/$element/kurs/client.kurs.main')
);
const SE_SubscriberContent = dynamic(
  () => import('@/app/(views)/$element/server.subscriber.content')
);
const ContactSection = dynamic(
  () => import('@/app/(views)/$element/card/client.content.info')
);
const CE_ImageSliderMain = dynamic(
  () => import('@/app/(views)/$element/image-slider/client.image-slider.main')
);
const CE_FlipCard = dynamic(
  () => import('@/app/(views)/$element/flip-card/client.flip-card')
);
const SE_FormMain = dynamic(
  () => import('@/app/(views)/$element/form/client.form.main')
);
const SE_Sitemap = dynamic(
  () => import('@/app/(views)/$element/server.sitemap')
);
const CE_Form = dynamic(
  () => import('@/app/(views)/$element/form/client.form')
);
const AccordionClient = dynamic(
  () => import('@/lib/element/global/accordion'),
  { ssr: false }
);

export const BASE_URL =
  process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || '';

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  location: {
    component: CE_LocationMain,
    props: (_component: any) => {
      return {
        types: _component?.location_type_details.map(
          (locationTypeItem: any) => {
            return {
              id: locationTypeItem.id,
              imageUrl: locationTypeItem.image_url,
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
      const sliderVariant = props?.sliderVariant;
      const sliderData = props?.sliderData;

      switch (sliderVariant) {
        case 'header_curved':
        default:
          return <CE_BannerMain variant="01" data={sliderData} />;
      }
    },
    props: (_component: T_Slider) => {
      const sliderVariant = _component?.field_slider_variant?.[0]?.value;
      const sliderData = _component?.field_slider_items?.map((item) => {
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

      switch (sliderVariant) {
        case 'header_curved':
        default:
          return {
            sliderVariant: sliderVariant,
            sliderData: sliderData,
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
      const componentForm = props?.componentForm;
      const richTextData = props?.richText;
      const tentangBRI = {
        bigTitle: props?.bigTitle,
        title: props?.title,
        description: props?.description,
        textLink: props?.textLink,
        hrefLink: props?.hrefLink,
        image: props?.image,
      };
      const propsData = props?.propsData;
      const title = props?.title;
      const subtitle = props?.subtitle;
      const accordiontitle = props?.accordiontitle;
      const navigationLink = (props?.navigationLink || '').replace('/id', '');
      const navigationText = props?.navigationText;
      const backgroundImage = props?.backgroundImage;
      const titleForm = props?.titleForm;
      const subTitleForm = props?.subTitleForm;
      const listItems = (
        (props?.data as Array<{
          image?: string;
          title?: string;
          position?: string;
          textLink?: string;
          link?: string;
          filename?: string;
          description?: string;
          downloadFile?: string;
          subtitle?: string;
          documents?: Array<{ path: string; title?: string }>
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
        content?: string;
      }>;
      const column = String(props?.column);
      const buttonSiapaSabrina = {
        text: props?.btnSiapaSabrinaText,
        url: props?.btnSiapaSabrinaUrl,
      };
      const dataV2 = props?.data;
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
              variantWidget={findVariantStyle}
              column={column}
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
        case WIDGET_VARIANT.variant57:
          return (
            <SE_PortletMain
              title={title}
              subtitle={subtitle}
              navigationLink={navigationLink}
              listItems={listItems}
              bgImage={backgroundImage}
              variant="01"
              column={column}
              variantWidget={findVariantStyle}
            />
          );
        case WIDGET_VARIANT.variant09:
          return <CE_CardVariant08 title={title} data={listItems} />;
        case WIDGET_VARIANT.variant11:
          return (
            <CE_CarouselMain
              variant="01"
              data={listItems}
              title={title}
              description={subtitle}
              button={props?.button}
            />
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
        case WIDGET_VARIANT.variant65:
          return (
            <CE_CardVariant21 column={column} title={title} data={listItems} />
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
            <CE_CarouselMain
              variant="03"
              data={listItems}
              title={title}
              description={subtitle}
              button={props?.button}
            />
          );
        case WIDGET_VARIANT.variant24:
          return <CE_CardVariant05 data={listItems} title={title} />;
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
                            href={handleurl(item?.button?.link)}
                            target={!item?.button?.extern ? '_self' : ''}
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
                        renderContent={parseHTMLToReact(item?.content || '')}
                        content={''}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        case WIDGET_VARIANT.variant60:
          return (
            <div
              className="w-full mb-10"
              style={{
                backgroundImage: `url(${backgroundImage ? `${BASE_URL}/api/files/?path=${backgroundImage}` : ''})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <div className="flex flex-col px-4 md:px-8 py-6 max-w-screen-2xl mx-auto">
                {/* Title and Subtitle Section */}
                <div className="w-full mb-8">
                  {title && (
                    <div className="text-xl font-semibold mb-2 mt-10">
                      {parseHTMLToReact(title)}
                    </div>
                  )}
                  {subtitle && (
                    <div className="text-blue-700 mb-4 mt-10 text-xl">
                      {parseHTMLToReact(subtitle)}
                    </div>
                  )}
                </div>
                {accordiontitle && (
                  <h1 className="text-2xl font-bold mb-6">{accordiontitle}</h1>
                )}
                <div className="w-full max-w-[950px] flex flex-col space-y-4">
                  {accordion?.map((item, key) => {
                    return (
                      <Accordion
                        key={key}
                        renderTitle={
                          <p className="text-lg font-semibold text-left text-blue-700">
                            {item?.title}
                          </p>
                        }
                        variant="none"
                        renderContent={parseHTMLToReact(
                          item?.content || '',
                          true
                        )}
                        content={''}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        case WIDGET_VARIANT.variant62:
          const accordionStyle = 'capsule';
          const isCapsule = accordionStyle === 'capsule' ? 'rounded' : '';

          const social_media = [
            {
              name: 'Facebook',
              icon: 'facebook',
              url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbri.co.id%2Finformasi-investor',
            },
            {
              name: 'Twitter',
              icon: 'x',
              url: 'https://x.com/share?url=https%3A%2F%2Fbri.co.id%2Finformasi-investor&text=BBRI%20Stock%20Info',
            },
            {
              name: 'Google',
              icon: 'google',
              url: 'https://plus.google.com/share?url=https%3A%2F%2Fbri.co.id%2Finformasi-investor',
            },
            {
              name: 'WhatsApp',
              icon: 'whatsapp',
              url: 'whatsapp://send/?text=https%3A%2F%2Fbri.co.id%2Finformasi-investor%20BBRI%20Stock%20Info',
            },
          ];

          const ShareIconClientComponent = dynamic(
            () =>
              import('@/lib/element/global/shareIconclient').then(
                (mod) => mod.default
              ),
            { ssr: false }
          );

          return (
            <div className="container mx-auto py-6">
              {title && (
                <div className="mb-4 text-4xl">
                  {parseHTMLToReact(title || '')}
                </div>
              )}

              {subtitle && (
                <div className="mb-6 flex items-center">
                  <div className="flex-grow">
                    {parseHTMLToReact(subtitle || '')}
                  </div>
                  <div className="relative share-icon-container">
                    <ShareIconClientComponent socialMedia={social_media} />
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {(accordion || []).map((item, key) => {
                  const itemTitle = item?.title || '';
                  const itemContent = item?.content || '';
                  const children = Array.isArray(item?.children)
                    ? item.children
                    : [];
                  const hasChildren = children.length > 0;

                  return (
                    <AccordionClient
                      key={key}
                      renderTitle={
                        <div className="flex items-center pl-6">
                          {backgroundImage && (
                            <Image
                              extern={false}
                              width={1920}
                              height={1080}
                              src={`${BASE_URL}/api/files/?path=${backgroundImage}`}
                              alt="Accordion Image"
                              className="w-10 h-10 mr-4"
                            />
                          )}
                          <p className="lg:text-base text-sm font-semibold pl-4 text-left">
                            {itemTitle}
                          </p>
                        </div>
                      }
                      variant={isCapsule as T_AccordionProps['variant']}
                      renderContent={
                        hasChildren ? (
                          <CE_CarouselVariant06
                            data={children.map((child: any) => ({
                              image: child?.image,
                              description: child?.title || '',
                            }))}
                          />
                        ) : (
                          parseHTMLToReact(itemContent, true)
                        )
                      }
                      content={itemContent}
                    />
                  );
                })}
              </div>
            </div>
          );
        case WIDGET_VARIANT.variant39:
          return (
            <div>
              <ProfileCard
                title={listItems?.[0].title}
                position={listItems?.[0].position}
                description={listItems?.[0].description}
                imageUrl={listItems?.[0]?.image}
                backgroundUrl={backgroundImage}
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
                  <Link
                    key={index}
                    href={handleurl(item?.button?.link)}
                    target="_self"
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
                  </Link>
                ))}
              </div>
            </div>
          );
        case WIDGET_VARIANT.variant43:
          return <AboutSection {...tentangBRI} />;
        case WIDGET_VARIANT.variant44:
          return <CE_CardVariant19 title={title} data={listItems} />;
        case WIDGET_VARIANT.variant45:
          return (
            <CE_CarouselVariant08
              data={listItems}
              title={title}
              description={subtitle}
              button={props?.button}
            />
          );
        case WIDGET_VARIANT.variant48:
          return (
            <CE_CarouselVariant09
              button={props?.button}
              data={listItems}
              description={subtitle}
              title={title}
            />
          );
        case WIDGET_VARIANT.variant50:
          return <SE_Sitemap />;
        case WIDGET_VARIANT.variant56:
          return (
            <CE_FlipCard data={propsData} backgroundImage={backgroundImage} />
          );
        case WIDGET_VARIANT.variant58:
          return (
            <div className="container mx-auto my-6 py-6 body table-blue-header">
              {richTextData ? parseHTMLToReact(richTextData, true) : ''}
            </div>
          );
        case WIDGET_VARIANT.variant59:
          return (
            <div className="container mx-auto my-6 py-6 body table-full-border">
              {richTextData ? parseHTMLToReact(richTextData, true) : ''}
            </div>
          );
        case WIDGET_VARIANT.variant64:
          return (
            <SE_PortletVarian07
              title={title}
              description={subtitle}
              cardContent={listItems?.map((childItem) => {
                const title = childItem?.title;
                const description = childItem?.subtitle;
                const textLink = childItem?.textLink;
                const urlLink = childItem?.link;
                return {
                  title: title,
                  textContent: description,
                  textLink: textLink,
                  urlTextLink: urlLink,
                };
              })}
            />
          );
        case WIDGET_VARIANT.variant66:
          return (
            <SE_PortletSectionHeaderAlign
              title={props?.title}
              subtitle={props?.subtitle}
              buttonItems={props?.buttonItems}
              headerButtonItems={props?.headerButtonItems}
              variantLayout={props?.variantLayout}
              bgImage={props?.backgroundImage}
              headerAlignment={props?.headerAlignment ?? 'left'}
            />
          );
        case WIDGET_VARIANT.variant67:
          return (
            <div className="container mx-auto py-6">
              {title && (
                <div className="mb-4 text-3xl font-semibold text-center">
                  {parseHTMLToReact(title)}
                </div>
              )}

              {subtitle && (
                <div className="mb-6 text-lg text-gray-600">
                  {parseHTMLToReact(subtitle)}
                </div>
              )}

              {Array.isArray(listItems) && listItems.length > 0 ? (
                <div className="flex flex-wrap my-4 lg:gap-0 gap-6">
                  {listItems.map((item, index) => (
                    <div key={index} className="lg:w-1/4 w-full flex-none px-2 mb-6">
                      <div className="h-full">
                        <div className="lg:p-5 p-4 shadow-lg h-full flex flex-col">
                          {item?.image && (
                            <div className="w-full h-[255px] mb-2">
                              <Image
                                extern={false}
                                src={item.image}
                                alt={item.title || "Laporan Tahunan"}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          )}
                          <div className="flex-1 mb-4">
                            {item?.title && (
                              <div className="text-red-01 font-semibold text-sm min-h-[40px] mt-6">
                                {parseHTMLToReact(item.title)}
                              </div>
                            )}
                            {item?.description && (
                              <div className="text-sm text-gray-700">
                                {parseHTMLToReact(item.description)}
                              </div>
                            )}
                          </div>

                          {Array.isArray(item?.documents) && item.documents.length > 0 && (
                            <div>
                              {item.documents.map((doc, idx) => (
                                doc?.path ? (
                                  <div key={idx} className="text-base font-semibold flex gap-3 items-center hover:underline overflow-auto text-[#014A94] mb-1">
                                    <Link
                                      href={handleurl(`${BASE_URL}/api/files/?path=${doc.path}`)}
                                      className="flex items-center gap-1 text-sm"
                                      download
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {doc.title || 'Download PDF'}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="m9 18 6-6-6-6" />
                                      </svg>
                                    </Link>
                                  </div>
                                ) : null
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  {parseHTMLToReact('No data available')}
                </div>
              )}
            </div>
          );
        case WIDGET_VARIANT.variant69:
          return (
            <CE_CardLaporan
              title={title}
              subtitle={subtitle}
              data={props.data}
            />
          );
        default:
          if (componentForm) {
            return (
              <CE_Form
                title={titleForm}
                subTitle={subTitleForm}
                fieldForm={componentForm}
              />
            );
          } else {
            return null;
          }
      }
    },
    props: (_component: T_Section) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
      const subtitle = _component?.field_content?.[0]?.value;
      const subtitleNews =
        _component?.field_column?.[0]?.field_title?.[0]?.value;
      const hrefLink =
        _component?.field_column?.[0]?.field_primary_cta?.[0]?.full_url;
      const hreftitle =
        _component?.field_column?.[0]?.field_primary_cta?.[0]?.title;
      const accordiontitle =
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
          const image =
            item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
          return {
            link: item?.field_primary_cta?.[0]?.uri,
            image: image,
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
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;

        return {
          title: item.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
          image: image,
          button: {
            link: item?.field_primary_cta?.[0]?.full_url,
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
        const isExternalLink =
          item?.field_primary_cta?.[0]?.options?.external || false;
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url;
        return {
          title: item?.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
          image: image,
          button: {
            link: isExternalLink
              ? item?.field_primary_cta?.[0]?.uri
              : item?.field_primary_cta?.[0]?.full_url,
          },
        };
      });
      const dataV16 = _component?.field_column?.map((item) => {
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url;
        return {
          title: item?.field_title?.[0]?.value,
          description: item?.field_content?.[0]?.value,
          image: image,
          button: {
            link: item?.field_primary_cta?.[0]?.full_url,
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
            link: item?.field_primary_cta?.[0]?.full_url || '#',
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
            content: item?.field_content?.[0]?.value,
            children: item?.field_paragraphs?.[0]?.field_content?.[0]?.value,
          };
        }
      );

      const dataV39 = _component?.field_column?.map((item) => {
        return {
          image:
            item?.field_content_list?.[0]?.field_pictures?.[0]
              ?.field_media_image?.[0]?.uri?.[0]?.url,

          title: item?.field_content_list?.[0]?.title?.[0]?.value,
          description: item?.field_content_list?.[0]?.body?.[0]?.value,
          position: item?.field_content_list?.[0]?.field_position?.[0]?.value,
        };
      });

      const dataV60 = _component?.field_column?.[0]?.field_accordion_items?.map(
        (item) => {
          return {
            title: item?.field_title?.[0]?.value,
            content: item?.field_content?.[0]?.value,
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
        const isExternalLink =
          item?.field_primary_cta?.[0]?.options?.external || false;
        const buttonLink = isExternalLink
          ? item?.field_primary_cta?.[0]?.uri
          : item?.field_primary_cta?.[0]?.full_url;
        const buttonTitle = item?.field_primary_cta?.[0]?.title;
        const image =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;

        return {
          image: image,
          title: title,
          button: {
            link: buttonLink,
            title: buttonTitle,
            extern: isExternalLink,
          },
        };
      });

      const backgroundFlipCard =
        _component?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;

      const flipCardData = _component?.field_column?.map((item) => {
        return {
          title: item?.field_title?.[0]?.value,
          subtitle: item?.field_subtitle?.[0]?.value,
          frontImage:
            item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
          backImage:
            item?.field_second_image?.[0]?.field_media_image?.[0]?.uri?.[0]
              ?.url,
        };
      });

      const dataRichText = _component?.field_column?.map((item) => {
        return {
          element: item?.field_content?.[0]?.processed,
        };
      });

      const fieldForm =
        _component?.field_column?.[0]?.field_form?.[0]?.target_id;

      const dataV62 = _component?.field_column?.[0]?.field_accordion_items?.map(
        (item: any) => {
          // Get all slider items from paragraphs (using any type to avoid TypeScript errors)
          const sliderItems = item?.field_paragraphs?.map((paragraph: any) => {
            // Since we're using 'any' type, we can safely access these properties
            return {
              title: paragraph?.field_content?.[0]?.value,
              image:
                paragraph?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                  ?.url,
            };
          });

          return {
            title: item?.field_title?.[0]?.value,
            content: item?.field_content?.[0]?.value || '',
            children: sliderItems || [],
          };
        }
      );

      const dataV64 = _component?.field_column?.map((item) => {
        return {
          title: item?.field_title?.[0]?.value ?? '',
          subtitle: item?.field_content?.[0]?.value ?? '',
          textLink: item?.field_primary_cta?.[0]?.title ?? '',
          link: item?.field_primary_cta?.[0]?.full_url ?? '',
        };
      });

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant01:
          return {
            variant: findVariantStyle,
            title: titleV01,
            data: dataV01,
          };
        case WIDGET_VARIANT.variant66:
          const backgroundImg =
            _component?.field_column?.[0]?.field_image?.[0]
              ?.field_media_image?.[0]?.uri?.[0]?.url ?? '';
          const variantLayout = _component?.field_column?.[0]?.field_header_style?.[0]?.value;
          return {
            variant: findVariantStyle,
            title: _component?.field_column?.[0]?.field_title?.[0]?.value ?? '',
            subtitle:
              _component?.field_column?.[0]?.field_content?.[0]?.value ?? '',
            backgroundImage: backgroundImg,
            headerAlignment:
              _component?.field_column?.[0]?.field_alignment_style?.[0]
                ?.value ?? 'left',
            headerButtonItems:
              _component?.field_column?.[0]?.field_primary_cta?.map((item) => ({
                buttonText: item?.title,
                buttonLink: item?.uri,
                buttonCta: item?.full_url,
              })) ?? [],
            buttonItems:
              _component?.field_primary_cta?.map((item) => ({
                buttonText: item?.title,
                buttonLink: item?.uri,
                buttonCta: item?.full_url,
              })) ?? [],
            variantLayout: variantLayout,
          };
        case WIDGET_VARIANT.variant67:
          return {
            variant: findVariantStyle,
            title: title,
            subtitle: subtitle,
            column: column,
            data: _component?.field_column?.map((item) => {
              const documents = item?.field_cta_document?.map(ctaDoc => {
                const pdfPath = ctaDoc?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]?.url;
                const pdfTitle = ctaDoc?.field_title?.[0]?.value;
                
                return {
                  path: pdfPath,
                  title: pdfTitle
                };
              });
              
              return {
                image: item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
                title: item?.field_title?.[0]?.value,
                description: item?.field_content?.[0]?.value,
                documents: documents
              };
            })
          };
        case WIDGET_VARIANT.variant69:
          return {
            variant: findVariantStyle,
            title: title,
            subtitle: subtitle,
            column: column,
            data: _component?.field_column?.map((subsection) => {
              const yearTitle = subsection?.field_formatted_title?.[0]?.value;

              const cards = subsection?.field_column?.map((card) => {
                const documents = card?.field_cta_document?.map(ctaDoc => {
                  const pdfPath = ctaDoc?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]?.url;
                  const pdfTitle = ctaDoc?.field_title?.[0]?.value;
                  return {
                    path: pdfPath,
                    title: pdfTitle
                  };
                });

                return {
                  image: card?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url,
                  title: card?.field_title?.[0]?.value,
                  description: card?.field_content?.[0]?.value,
                  documents
                };
              });

              return {
                yearTitle: yearTitle,
                cards: cards
              };
            })
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
            column: column,
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
        case WIDGET_VARIANT.variant57:
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
            subtitle: parseHTMLToReact(subtitle || ''),
            button: {
              name: hreftitle,
              link: hrefLink,
            },
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
        case WIDGET_VARIANT.variant65:
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
            title: titleV02 || parseHTMLToReact(title || ''),
            subtitle: parseHTMLToReact(subtitle || ''),
            button: {
              name: hreftitle,
              link: hrefLink,
            },
            data: dataV11,
          };
        case WIDGET_VARIANT.variant24:
          return {
            variant: findVariantStyle,
            title: _component?.field_formatted_title?.[0]?.value,
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
        case WIDGET_VARIANT.variant60:
          return {
            title: title,
            subtitle: subtitle,
            accordiontitle: accordiontitle,
            backgroundImage: backgroundImage,
            variant: findVariantStyle,
            accordion: dataV60,
          };
        case WIDGET_VARIANT.variant62:
          return {
            title: title,
            subtitle: subtitle,
            variant: findVariantStyle,
            backgroundImage: backgroundImage,
            accordion: dataV62,
          };
        case WIDGET_VARIANT.variant39:
          return {
            variant: findVariantStyle,
            title: title,
            data: dataV39,
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
            textLink: hreftitle,
            hrefLink: hrefLink,
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
            subtitle: parseHTMLToReact(subtitle || ''),
            button: {
              name: hreftitle,
              link: hrefLink,
            },
            data: dataV11,
          };
        case WIDGET_VARIANT.variant48:
          return {
            variant: findVariantStyle,
            title: titleV02,
            data: dataV11,
            button: {
              name: hreftitle,
              link: hrefLink,
            },
          };
        case WIDGET_VARIANT.variant50:
          return {
            variant: findVariantStyle,
          };
        case WIDGET_VARIANT.variant56:
          return {
            variant: findVariantStyle,
            propsData: flipCardData,
            backgroundImage: backgroundFlipCard,
          };
        case WIDGET_VARIANT.variant58:
          return {
            variant: findVariantStyle,
            richText: dataRichText?.[0]?.element,
          };
        case WIDGET_VARIANT.variant59:
          return {
            variant: findVariantStyle,
            richText: dataRichText?.[0]?.element,
          };
        case WIDGET_VARIANT.variant64:
          return {
            variant: findVariantStyle,
            title: title,
            subtitle: subtitle,
            data: dataV64,
          };
        default:
          if (!fieldForm) {
            return <></>;
          } else
            return {
              titleForm: title,
              componentForm: fieldForm,
              subTitleForm: subtitle,
            };
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
      const buttonItem = _component?.field_primary_cta?.map((item) => ({
        buttonText: item?.title,
        buttonLink: handleurl(
          item?.uri || _component?.field_primary_cta?.[0]?.uri
        ),
        buttonCta: handleurl(
          item?.full_url || _component?.field_primary_cta?.[0]?.full_url
        ),
      }));
      const headerAlignment = _component?.field_alignment_style?.[0]?.value;
      return {
        title: title,
        subtitle: subtitle,
        buttonItems: buttonItem,
        bgImage: backgroundImage,
        variant: '02',
        variantLayout: variantLayout,
        variantWidget: findVariantStyle,
        headerAlignment: headerAlignment,
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
        case WIDGET_VARIANT.variant10:
        case WIDGET_VARIANT.variant13:
          return (
            <Tabs
              title={title}
              list={list}
              style={style}
              variant="border-arrow"
              variantContent={variant}
              defaultSelected={
                ((list as any[]) || []).find(({ selected }) => selected > 0)
                  ?.selected || 0
              }
            />
          );
        case WIDGET_VARIANT.variant05:
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
              defaultSelected={
                ((list as any[]) || []).find(({ selected }) => selected > 0)
                  ?.selected || 0
              }
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
        const imageDefault =
          item?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]?.url;
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
                const downloadFile =
                  items?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]
                    ?.url;
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
                  img: imageDefault || image,
                  title: title,
                  description: description,
                  downloadFile: downloadFile,
                  startDate: start_date,
                  endDate: end_date,
                  date: date,
                };
              }
            ),
        };
      });
      const listTabV05 = _component?.field_tab?.map((item, at) => {
        const rootTitle = item?.field_title?.[0]?.value;
        const rootSlug = item?.field_title?.[0]?.value;
        const rootList = item?.field_paragraphs?.[0]?.field_column || [];

        return {
          title: rootTitle,
          slug: rootSlug,
          selected: item?.field_default_selected?.[0]?.value || false ? at : 0,
          children: rootList?.map((item) => {
            const imagePosition = item?.field_alignment?.[0]?.value;
            const title = item?.field_title?.[0]?.value;
            const description = item?.field_content?.[0]?.value;
            const buttonTitle = item?.field_primary_cta?.[0]?.title;
            const buttonLink = item?.field_primary_cta?.[0]?.full_url;
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
                  const title = item?.field_formatted_title?.[0]?.value;
                  const description = item?.field_content?.[0]?.value;
                  const description1 =
                    item?.field_first_column?.[0]?.field_content?.[0]?.value;
                  const description2 =
                    item?.field_second_column?.[0]?.field_content?.[0]?.value;
                  const imageUrl1 =
                    item.field_first_column?.[0]?.field_image?.[0]
                      ?.field_media_image?.[0]?.uri?.[0]?.url;
                  const imageUrl2 =
                    item.field_second_column?.[0]?.field_image?.[0]
                      ?.field_media_image?.[0]?.uri?.[0]?.url;
                  const listColumn = item?.field_column;

                  const variantChildren =
                    item?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;
                  const widgetType = item?.entity_bundle?.[0]?.value;
                  return {
                    listColumn: listColumn,
                    widgetType: widgetType,
                    title: title,
                    description: description,
                    description1: description1,
                    description2: description2,
                    imageUrl1: imageUrl1,
                    imageUrl2: imageUrl2,
                    variantChildren: variantChildren,
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
                    description: paragraph?.field_content?.[0]?.value,
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
                      paragraph?.field_content_list?.[0]?.field_pictures?.[0]
                        ?.field_media_image?.[0]?.uri?.[0]?.url,

                    title:
                      paragraph?.field_content_list?.[0]?.title?.[0]?.value,
                    description:
                      paragraph?.field_content_list?.[0]?.body?.[0]?.value,
                    position:
                      paragraph?.field_content_list?.[0]?.field_position?.[0]
                        ?.value,
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
      const paths = _component?.data?.map((item) => ({
        name: item?.title,
        href: item?.url?.replace('/id', ''),
      }));

      if (paths[paths.length - 1]?.href === '/simulasi-kpr') {
        paths.push({
          name: 'Kredit Pemilikan Rumah (KPR)',
          href: '/simulasi-kpr',
        });
      }

      return { paths };
    },
  },
  staircase_cards: {
    component: (...props) => {
      const findVariantStyle = props?.[0]?.variant;
      const cardsData = props?.[0]?.data ?? [];
      const title = props?.[0]?.title ?? '';

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant61:
          return <CE_CardVariant20 title={title} data={cardsData} />;
        default:
          return <CE_CardVariant16 title={title} data={cardsData} />;
      }
    },
    props: (_component: T_StaircaseCards) => {
      const findVariantStyle =
        _component?.field_web_variant_styles?.[0]?.field_key?.[0]?.value;

      const defaultCardData = _component?.field_cards?.map((item: any) => {
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
      });

      const variant61CardData = _component?.field_cards?.map((item: any) => {
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
      });

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant61:
          return {
            title: _component?.field_title?.[0]?.value,
            data: variant61CardData,
            variant: findVariantStyle,
          };
        default:
          return {
            title: _component?.field_title?.[0]?.value,
            data: defaultCardData,
            variant: findVariantStyle,
          };
      }
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
      const imageUrl1 = firstColumn?.image ?? '';
      const imageUrl2 = secondColumn?.image ?? '';
      const document1 = props?.firstColumn?.document ?? '';
      const document2 = props?.secondColumn?.document ?? '';
      const doctitle1 = props?.firstColumn?.documentTitle ?? '';
      const doctitle2 = props?.secondColumn?.documentTitle ?? '';

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
                  document: document1 || null,
                  documentTitle: doctitle1,
                  buttons: [
                    {
                      link: (firstColumn?.button?.link || '').replace(
                        '/id',
                        ''
                      ),
                      title: firstColumn?.button?.title,
                      extern: true,
                    },
                  ],
                },
                {
                  image: secondColumn?.image,
                  title: secondColumn?.title,
                  description: secondColumn?.description,
                  document: document2 || null,
                  documentTitle: doctitle2,
                  buttons: [
                    {
                      link: (secondColumn?.button?.link || '').replace(
                        '/id',
                        ''
                      ),
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
              variantTwoColumn={findVariantStyle}
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
              document: _component?.field_first_column?.[0]?.field_cta_document?.[0]
              ?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]?.url,
              documentTitle: _component?.field_first_column?.[0]?.field_cta_document?.[0]
              ?.field_title?.[0]?.value,
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
              image: _component?.field_second_column?.[0]?.field_image?.[0]
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
                link: handleurl(
                  _component?.field_first_column?.[0]?.field_paragraphs?.[0]
                    ?.field_primary_cta?.[0]?.full_url
                ),
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
          const image33f =
            _component?.field_first_column?.[0]?.field_image?.[0]
              ?.field_media_image?.[0]?.uri?.[0]?.url;
          const image33s =
            _component?.field_second_column?.[0]?.field_image?.[0]
              ?.field_media_image?.[0]?.uri?.[0]?.url;
          const document33f =
            _component?.field_first_column?.[0]?.field_cta_document?.[0]
              ?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]?.url;
          const document33s =
            _component?.field_second_column?.[0]?.field_cta_document?.[0]
              ?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]?.url;
          const documentTitle1 =
            _component?.field_first_column?.[0]?.field_cta_document?.[0]
              ?.field_title?.[0]?.value;
          const documentTitle2 =
            _component?.field_second_column?.[0]?.field_cta_document?.[0]
              ?.field_title?.[0]?.value;
          return {
            firstColumn: {
              image: image33f,
              title:
                _component?.field_first_column?.[0]?.field_title?.[0]?.value,
              description:
                _component?.field_first_column?.[0]?.field_content?.[0]?.value,
              document: document33f,
              documentTitle: documentTitle1,
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
              image: image33s,
              title:
                _component?.field_second_column?.[0]?.field_title?.[0]?.value,
              description:
                _component?.field_second_column?.[0]?.field_content?.[0]?.value,
              document: document33s,
              documentTitle: documentTitle2,
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
              ?.thumbnail?.[0]?.uri?.[0]?.url;
          const imageUrl2 =
            _component?.field_second_column?.[0]?.field_image?.[0]
              ?.thumbnail?.[0]?.uri?.[0]?.url;

          return {
            firstColumn: {
              description: description1,
              image: imageUrl1,
            },
            secondColumn: {
              description: description2,
              image: imageUrl2,
            },
            variant: findVariantStyle,
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
        {parseHTMLToReact(element, true)}
      </div>
    ),
    props: (_component: { field_content?: Array<{ value: string }> }) => {
      const content = _component?.field_content?.[0] as { value: string, processed?: string };
      
      return {
        element: content?.processed || content?.value,
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
      title: any;
    }) => {
      const filename = props?.filename;
      const description = props?.description;
      const iconDownload = props?.iconDownload;
      const downloadFile = props?.downloadFile;
      const title = props?.title;
      return (
        <CE_CardVariant09
          data={[
            {
              title: filename,
              description: description,
              button: {
                image: iconDownload,
                link: downloadFile,
                title: title,
                extern: true,
              },
            },
          ]}
        />
      );
    },
    props: (_component: {
      field_title: any;
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
      const title = _component?.field_title?.[0]?.value;
      return {
        filename: filename,
        description: description,
        downloadFile: downloadFile,
        iconDownload: iconDownload,
        title: title,
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
      // const titleCtaProps = props?.titleCtaProps;
      // const linkCtaProps = props?.linkCtaProps;
      const renderElement = (children: Array<any>) => {
        switch (variant) {
          case 'download':
            return (
              <CE_CardVariant09
                data={(children || [])?.map((item) => ({
                  title: item?.filename?.replaceAll('_', ' '),
                  description: item?.description?.replaceAll('_', ' '),
                  button: {
                    image: item?.iconDownload,
                    link: item?.downloadFile,
                    title: 'Download',
                    extern: true,
                  },
                }))}
              />
            );
          case 'image-slider':
            return (
              <CE_CarouselVariant06
                data={(children || [])?.map((item) => {
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
                {(children || [])?.map((item, index) => (
                  <div key={index} className="lg:w-1/4 w-full flex-none px-2">
                    <div className="h-full">
                      <Link href={handleurl(item?.button?.link)} target="_self" className="h-full">
                        <div className="lg:p-5 p-4 shadow-lg h-full flex flex-col">
                          {item?.image && (
                            <div className="w-full h-[255px] mb-2">
                              {Boolean(item?.image) && (
                                <div className="w-full h-[255px] mb-2">
                                  <Image
                                    extern={false}
                                    src={`${item?.image}`}
                                    alt="image"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                  />
                                </div>
                              )}
                            </div>
                          )}
                          <div className="flex-1 mb-4">
                            {item?.title && (
                              <div className="text-red-01 font-semibold text-sm min-h-[40px] mt-6">
                                {parseHTMLToReact(item?.title)}
                              </div>
                            )}
                            {item?.fieldContent && (
                              <div className="text-sm text-gray-700">
                                {parseHTMLToReact(item.fieldContent)}
                              </div>
                            )}
                          </div>
                          <div className="text-base font-semibold flex gap-3 items-center hover:underline overflow-auto text-[#014A94] mb-1">
                            {item?.button?.title && (
                              <div className="flex items-center gap-1 text-sm">
                                {parseHTMLToReact(item?.button?.title)}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </div>
                            )}
                          </div>

                          {[0, 1].map((i) => (
                            item?.cardPdf?.[i]?.cardPdfloop ? (
                              <div key={i} className="text-base font-semibold flex gap-3 items-center hover:underline overflow-auto text-[#014A94] mb-1">
                                <Link
                                  href={handleurl(`${BASE_URL}/api/files/?path=${item?.cardPdf?.[i]?.cardPdfloop}`)}
                                  className="flex items-center gap-1 text-sm"
                                  download
                                >
                                  {item?.cardPdf?.[i]?.titlePdfloop ?? ''}
                                </Link>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </div>
                            ) : null
                          ))}
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="w-full flex justify-center pt-8">
                  {listAccordion?.[0]?.linkCta && listAccordion?.[0]?.titleCta ? (
                    <Link
                      href={handleurl(listAccordion?.[0]?.linkCta)}
                      className="bg-[#F59823] px-5 py-3 rounded-full text-base text-white font-normal uppercase hover:bg-slate-200 focus:bg-slate-200 hover:text-black focus:text-black duration-200 hover:border-2 hover:border-slate-700"
                    >
                      {listAccordion?.[0]?.titleCta ?? ''}
                    </Link>
                  ) : null}
                </div>
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
                renderContent={renderElement(item?.children ?? null)}
                content={item?.content ?? null}
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
          field_content: Array<{ value: string }>;
          field_paragraphs: Array<{
            field_column: Array<{
              field_content: any;
              field_title: Array<{ value: string }>;
              field_image: Array<{
                field_media_image: Array<{ uri: Array<{ url: string }> }>;
              }>;
              field_primary_cta: Array<{ title: string; full_url: string }>;
              field_cta_document: Array<{
                field_title: Array<{ value: string }>;
                field_document: Array<{
                  field_media_file: Array<{ uri: Array<{ url: string }> }>;
                }>;
              }>;
            }>;
            field_primary_cta: Array<{ title: string; full_url: string }>;
          }>;
        }) => {
          return {
            title: item?.field_title?.[0]?.value,
            content: item?.field_content?.[0]?.value,
            children: item?.field_paragraphs?.[0]?.field_column?.map(
              (childItem) => {
                const title = childItem?.field_title?.[0]?.value;
                const image =
                  childItem?.field_image?.[0]?.field_media_image?.[0]?.uri?.[0]
                    ?.url;
                const pdf = childItem?.field_cta_document?.map((item) => {
                  return {
                    cardPdfloop:
                      item?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]
                        ?.url,
                    titlePdfloop: item?.field_title?.[0]?.value,
                  };
                });
                const fieldContent = childItem?.field_content?.[0]?.value;
                return {
                  image: image,
                  title: title,
                  button: {
                    link: childItem?.field_primary_cta?.[0]?.full_url,
                    title: childItem?.field_primary_cta?.[0]?.title,
                    extern: true,
                  },
                  cardPdf: pdf,
                  fieldContent: fieldContent,
                };
              }
            ),
            linkCta:
              item?.field_paragraphs?.[0]?.field_primary_cta?.[0]?.full_url,
            titleCta:
              item?.field_paragraphs?.[0]?.field_primary_cta?.[0]?.title,
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
      description: string;
      title: string;
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
      const description = props?.description;
      const title = props?.title;
      return (
        <CE_SimulationMain
          type={props.tabs.length === 1 ? 'page' : 'tab'}
          button={{
            extern: button?.extern,
            link: button?.link,
            title: button?.title,
          }}
          action={{
            button: {
              extern: actionButton?.extern,
              link: actionButton?.link,
              title: actionButton?.title,
            },
          }}
          variant={tabs.at(0)?.variant || 'kpr'}
          tabs={tabs}
          title={title}
          description={description}
        />
      );
    },
    props: (_component: {
      field_paragraphs: Array<{
        field_title: Array<{ value: string }>;
        field_simulation: Array<{ value: string }>;
        field_secondary_content: Array<{ value: string }>;
        field_primary_cta: { title: string; full_url: string }[];
        field_content?: Array<{ value: string }>;
        field_image?: {
          field_media_image?: {
            uri?: {
              url: string;
            }[];
          }[];
        }[];
      }>;
      field_primary_cta: { title: string; full_url: string }[];
      field_title?: Array<{ value: string }>;
    }) => {
      return {
        tabs: _component?.field_paragraphs?.map((item) => {
          const image = item.field_image
            ?.at(0)
            ?.field_media_image?.at(0)
            ?.uri?.at(0)?.url;
          return {
            title: item?.field_title?.[0]?.value,
            image: image,
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
        title: _component?.field_title?.[0]?.value,
        description:
          _component?.field_paragraphs?.[0]?.field_content?.[0]?.value,
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
        case WIDGET_VARIANT.variant55:
          return (
            <CE_PromoSlider data={dataProps} linkPromo={buttonLinkProps} />
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

      const promoSliderData = _component?.promo_data?.items.map((item) => {
        return {
          image: item?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
          title: item?.title?.[0]?.value,
          nid: item?.nid?.[0]?.value,
          startDate: item?.field_promo_start_date?.[0]?.value,
          endDate: item?.field_promo_end_date?.[0]?.value,
          label: item?.field_promo_category?.[0]?.title?.[0]?.value,
        };
      });

      const promoSliderLink = _component?.field_primary_cta?.[0]?.full_url;

      switch (findVariantStyle) {
        case WIDGET_VARIANT.variant55:
          return {
            dataProps: promoSliderData,
            variant: findVariantStyle,
            buttonLinkProps: promoSliderLink,
          };
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
        case WIDGET_VARIANT.variant52:
          return <CE_SectionWaspadaModus waspadaModusData={data} />;
        case WIDGET_VARIANT.variant53:
          return <CE_SectionAuctions auctionsData={data} />;
        case WIDGET_VARIANT.variant54:
          return <CE_SectionAnnouncement announcementData={data} />;
        default:
          return <></>;
      }
    },
    props: (_component: T_News) => {
      const entityBundle = _component?.field_content_type?.[0]?.type?.[0]?.type;
      const dataContentType = {
        contents: _component?.field_content_type?.map((item) => {
          const imageV2 = item?.field_components?.find(
            (item) => item?.entity_bundle?.[0]?.value === 'image'
          );
          return {
            title: item?.title?.[0]?.value,
            nid: item?.nid?.[0]?.value,
            image:
              item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ||
              imageV2?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
            downloadFile:
              item?.field_document?.[0]?.field_media_file?.[0]?.uri?.[0]?.url,
            date:
              item?.type?.[0]?.type === 'info_lelang'
                ? item?.body?.[0]?.value
                : item?.created?.[0]?.value,
          };
        }),
      };

      switch (entityBundle) {
        case WIDGET_VARIANT.variant51:
          return { entity: entityBundle, data: dataContentType };
        case WIDGET_VARIANT.variant52:
          return { entity: entityBundle, data: dataContentType };
        case WIDGET_VARIANT.variant53:
          return { entity: entityBundle, data: dataContentType };
        case WIDGET_VARIANT.variant54:
          return { entity: entityBundle, data: dataContentType };
        default:
          return {};
      }
    },
  },
};
