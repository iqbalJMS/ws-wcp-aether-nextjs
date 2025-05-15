'use client';

import { useState } from 'react';
import Image from './image';
import Link from './link';

import SE_PortletVariant07 from '@/app/(views)/$element/portlet/server.portlet.variant07';
import CE_PortletVariant08 from '@/app/(views)/$element/portlet/client.portlet.variant08';
import CE_CardVariant02 from '@/app/(views)/$element/card/client.card.variant02';
import CE_CardVariant09 from '@/app/(views)/$element/card/client.card.variant09';
import CE_CardVariant12 from '@/app/(views)/$element/card/client.card.variant12';
import CE_CarouselVariant06 from '@/app/(views)/$element/carousel/client.carousel.variant06';
import CE_Paragraphs from '@/app/(views)/$element/paragrahps';
import Tooltip from './tooltip';
import Accordion from './accordion';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { handleurl } from '@/lib/functions/client/handle-url';

import { WIDGET_VARIANT } from '@/app/(views)/$constant/variables';
import { useEnv } from '@/lib/hook/useEnv';

type TChildren = {
  richText: string;
  button?: {
    link?: string;
    image?: string;
    title?: string;
  };
  title?: string;
  image?: string;
  description?: string;
  filename?: string;
  iconDownload?: string;
  downloadFile: string;
  field_title?: Array<{ value: string }>;
  field_content?: Array<{ value: string }>;
};

type ButtonProps = {
  link?: string;
  title?: string;
};

type FieldValue = {
  value: string;
};

type DownloadItemChild = {
  description?: string;
  filename?: string;
  iconDownload?: string;
  downloadFile: string;
};

type ListColumnChild = {
  button?: ButtonProps;
  title?: string;
  image?: string;
  description?: string;
  children?: DownloadItemChild[];
  field_title?: FieldValue[];
  field_content?: FieldValue[];
};

type TabChildrenItem = {
  listColumn?: {
    children?: ListColumnChild[];
    title?: string;
    field_title?: FieldValue[];
    field_content?: FieldValue[];
    field_primary_cta?: { title: string; full_url: string }[];
    field_image?: {
      field_media_image: {
        uri: {
          url: string;
        }[];
      }[];
    }[];
  }[];
  description1?: string;
  title?: string;
  image?: string;
  description?: string;
  position?: string;
  description2?: string;
  imageUrl1?: string;
  imageUrl2?: string;
  titleColumn?: string;
  countColumn?: string;
  button?: ButtonProps;
  textLink?: string;
  urlLink?: string;
  variantChildren?: string;
  widgetType?: string;
};

type TabItem = {
  title?: string;
  subTitle?: string;
  information?: string;
  slug?: string;
  linkShowMore?: string;
  textShowMore?: string;
  description?: string;
  children?: TabChildrenItem[];
  notes?: string;
};

type TabsProps = {
  list: TabItem[];
  value?: string;
  style?: string;
  title?: string;
  variantContent?: string;
  margin?: string;
  onChange?: (_value: string) => void;
  variant?: 'full' | 'border-arrow' | 'border';
  variantColor?: 'red' | 'default';
  defaultSelected?: number;
};

type TRenderElemment = {
  children?: Array<TChildren>;
  type: string;
};

export default function Tabs({
  list,
  value,
  onChange,
  title,
  variantContent,
  margin,
  style = 'center',
  variant = 'border',
  variantColor = 'default',
  defaultSelected = 0,
}: TabsProps) {
  const { baseUrl } = useEnv();
  const [menuActive, setMenuActive] = useState(defaultSelected);

  const renderElement = ({ children, type }: TRenderElemment) => {
    switch (type) {
      case 'download':
        return (
          <CE_CardVariant09
            data={children?.map((childItem) => ({
              title: childItem?.filename?.replaceAll('_', ' '),
              description: childItem?.description?.replaceAll('_', ' '),
              button: {
                image: '/',
                link: childItem?.downloadFile,
                title: 'Download',
                extern: true,
              },
            }))}
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
      case 'rich-text':
        return (
          <div>
            {children?.map((item, key) => {
              return (
                <div className="w-7/12 p-4" key={key}>
                  {parseHTMLToReact(item?.richText ?? '')}
                </div>
              );
            })}
          </div>
        );
      case 'card-section':

      default:
        return (
          <div className="flex">
            {children?.map((item, index) => {
              return (
                <div key={index} className="w-1/4 mdmax:w-1/2 flex-none px-2">
                  <Link href={'/'} target="_self">
                    <div className="p-4 mdmax:p-2 shadow-lg">
                      {item?.image && (
                        <div className="w-full h-[12rem] mb-2">
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
                        <div className=" text-red-01 font-semibold mb-2">
                          {parseHTMLToReact(item?.title ?? '')}
                        </div>

                        <div className="text-base flex gap-3 items-center hover:underline h-[4rem] overflow-auto text-[#014A94]">
                          {parseHTMLToReact(item?.button?.title ?? '')}
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

  const switchChildrenVariant = (() => {
    switch (variantContent) {
      case WIDGET_VARIANT.variant05:
        return <CE_CardVariant02 data={list?.[menuActive]?.children ?? []} />;
      case WIDGET_VARIANT.variant10:
        const description = list?.[menuActive]?.description ?? '';
        const notes = list?.[menuActive]?.notes ?? '';
        return (
          <div className="container">
            <CE_Paragraphs
              key={description}
              description={description}
              notes={notes}
            />
          </div>
        );
      case WIDGET_VARIANT.variant13:
        return list?.[menuActive]?.children?.map((item, index) => {
          switch (item.widgetType) {
            case 'rich_text':
              return (
                <div className="container mx-auto my-6 py-6 body">
                  {parseHTMLToReact(item?.description ?? '')}
                </div>
              );
            case 'section':
              return (
                <SE_PortletVariant07
                  key={index}
                  title={item.title}
                  description={item.description}
                  cardContent={item.listColumn?.map((childItem) => {
                    const title = childItem?.field_title?.[0]?.value ?? '';
                    const description =
                      childItem?.field_content?.[0]?.value ?? '';
                    const textLink =
                      childItem?.field_primary_cta?.[0]?.title ?? '';
                    const urlLink =
                      childItem?.field_primary_cta?.[0]?.full_url ?? '';
                    return {
                      title: title,
                      textContent: description,
                      textLink: textLink,
                      urlTextLink: urlLink,
                    };
                  })}
                />
              );
            case 'two_column':
              return (
                <div className="container">
                  <CE_PortletVariant08
                    key={index}
                    description1={item?.description1}
                    description2={item?.description2}
                    imageUrl1={item?.imageUrl1}
                    imageUrl2={item?.imageUrl2}
                    variantTwoColumn={item?.variantChildren}
                  />
                </div>
              );
            default:
              return <></>;
          }
        });
      case WIDGET_VARIANT.variant15:
        return list?.[menuActive]?.children?.map((item, index) => (
          <div key={index} className="container">
            {item?.titleColumn && (
              <h4 className="text-center font-medium mt-10 text-4xl">
                {parseHTMLToReact(item.titleColumn)}
              </h4>
            )}
            {item?.description && (
              <p className="text-center mt-6 text-lg text-gray-500">
                {parseHTMLToReact(item.description)}
              </p>
            )}
            <div
              className={`grid md:grid-cols-${item?.countColumn} grid-cols-1 mt-16 gap-6`}
            >
              {item?.listColumn?.map((childItem, idx: number) => {
                const title = childItem?.field_title?.[0]?.value ?? '';
                const description = childItem?.field_content?.[0]?.value ?? '';
                const iconImage = childItem?.field_image?.[0]
                  ?.field_media_image?.[0]?.uri?.[0]?.url
                  ? baseUrl +
                    '/api/files/?path=' +
                    childItem?.field_image?.[0]?.field_media_image?.[0]
                      ?.uri?.[0]?.url
                  : '';
                return (
                  <div className="col-span-1" key={idx}>
                    <div className="flex gap-x-8">
                      <div className="w-14 shrink-0 grow-0 basis-auto">
                        {iconImage && (
                          <Image
                            width={100}
                            height={100}
                            src={iconImage}
                            alt="icon"
                            className="w-full max-w-full"
                            extern={false}
                          />
                        )}
                      </div>
                      <div>
                        {title && (
                          <div className="mb-2 font-bold text-lg text-[#00539c]">
                            {parseHTMLToReact(title)}
                          </div>
                        )}
                        {description && (
                          <div className="text-gray-500 text-base">
                            {parseHTMLToReact(description)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {list?.[menuActive]?.textShowMore && (
              <div className="flex justify-center mt-12">
                <Link
                  href={handleurl(list?.[menuActive]?.linkShowMore)}
                  className="bg-orange-400 text-white px-8 py-3 rounded-full"
                >
                  {list?.[menuActive]?.textShowMore}
                </Link>
              </div>
            )}
          </div>
        ));
      case WIDGET_VARIANT.variant29:
        return (
          <CE_CardVariant12
            data={
              list?.[menuActive]?.children?.map((item) => {
                return {
                  image: item?.image,
                  title: item?.title,
                  description: item?.description,
                  position: item?.position,
                };
              }) ?? []
            }
          />
        );
      case WIDGET_VARIANT.variant31:
        return (
          <div className="container mx-auto px-4">
            {list?.[menuActive]?.children?.map((item, index) => (
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden my-6 w-full"
                key={index}
              >
                <div className="pt-10">
                  <div className="flex flex-col md:flex-row">
                    {item?.image && (
                      <div className="relative w-full md:w-[26rem] h-[10rem] md:h-[10rem]">
                        <Image
                          alt="image card"
                          src={`${baseUrl}/api/files/?path=${item.image}`}
                          extern={false}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      {item.title && (
                        <div className="text-lg text-[#13539c] font-semibold mb-2">
                          {parseHTMLToReact(item.title)}
                        </div>
                      )}
                      {item?.description && (
                        <div className="text-gray-600 mb-6">
                          {parseHTMLToReact(item?.description)}
                        </div>
                      )}
                      {item?.textLink && (
                        <Link
                          href={handleurl(item.urlLink)}
                          extern={false}
                          className="text-[#13539c] flex items-center gap-2 font-medium"
                        >
                          {item?.textLink}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case WIDGET_VARIANT.variant38:
        return list?.[menuActive]?.children?.map((item, index) => {
          return (
            <div key={index} className="container">
              {item?.listColumn?.map((listItem, index) => (
                <Accordion
                  key={index}
                  renderTitle={
                    listItem?.title && (
                      <p className="text-left font-normal text-2xl">
                        {listItem?.title}
                      </p>
                    )
                  }
                  isOpen={index === 0}
                  renderContent={renderElement({
                    type: 'download',
                    children: listItem?.children as Array<TChildren>,
                  })}
                  content={''}
                />
              ))}
              ;
            </div>
          );
        });
      case WIDGET_VARIANT.variant40:
        return list?.[menuActive]?.children?.map((item, index) => {
          return (
            <div key={index} className="container">
              {item?.listColumn?.map((listItem) => (
                <Accordion
                  key={index}
                  renderTitle={
                    listItem?.title && (
                      <p className="text-left font-normal text-2xl">
                        {listItem?.title}
                      </p>
                    )
                  }
                  isOpen={index === 0}
                  renderContent={renderElement({
                    type: 'rich-text',
                    // @ts-expect-error
                    children: listItem.children,
                  })}
                  content={''}
                />
              ))}
            </div>
          );
        });
      default:
        return null;
    }
  })();

  return (
    <div className={`${margin ? margin : 'mt-12 mb-16'}`}>
      {title && (
        <div
          className={`${style === 'center' && 'text-center'} text-4xl mb-16`}
        >
          {parseHTMLToReact(title)}
        </div>
      )}
      <div className="flex mb-12 container">
        {list?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={
                list?.length > 1
                  ? () => {
                      setMenuActive(index);
                      onChange?.(item?.slug ?? '');
                    }
                  : () => ({})
              }
              className={[
                `flex-1 border-b cursor-pointer relative group/tab text-center`,
                variant === 'full' ? 'py-3 ' : 'pb-3 ',

                list?.length > 1 && item?.slug === value
                  ? variant === 'full'
                    ? 'bg-blue-01'
                    : ''
                  : '',
              ].join(' ')}
            >
              <div
                className={[
                  'text-xl font-medium  inline-flex items-center',
                  `${
                    list?.length > 1 && item?.slug === value
                      ? variant === 'full'
                        ? 'text-white'
                        : variantColor === 'red'
                          ? 'text-red-01'
                          : 'text-blue-01'
                      : variantColor === 'red'
                        ? 'text-gray-500 group-hover/tab:text-red-01'
                        : 'text-gray-500 group-hover/tab:text-blue-01'
                  }`,
                ].join(' ')}
              >
                {item?.title && (
                  <div
                    className={`mdmax:text-sm uppercase font-semibold ${
                      menuActive === index && list?.length > 1
                        ? variant === 'full'
                          ? 'text-white'
                          : variantColor === 'red'
                            ? 'text-red-01'
                            : 'text-blue-01'
                        : ''
                    }`}
                  >
                    {item?.title}
                  </div>
                )}

                {item?.information && (
                  <div className="ml-2 ">
                    <Tooltip
                      description={item?.information}
                      position="top"
                      variant="simple"
                    >
                      <svg
                        className="w-5 h-5"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"
                        />
                      </svg>
                    </Tooltip>
                  </div>
                )}
              </div>
              {item.subTitle && (
                <div
                  className={[
                    'text-sm font-medium mdmax:text-xs',
                    `${
                      item?.slug === value
                        ? variant === 'full'
                          ? 'text-white'
                          : variantColor === 'red'
                            ? 'text-red-01'
                            : 'text-blue-01'
                        : variantColor === 'red'
                          ? 'text-gray-500 group-hover/tab:text-red-01'
                          : 'text-gray-500 group-hover/tab:text-blue-01'
                    }`,
                  ].join(' ')}
                >
                  {item.subTitle}
                </div>
              )}

              {variant === 'border-arrow' && (
                <div
                  className={[
                    'absolute bottom-0 left-0',
                    'w-full h-[.2rem] bg-blue-01',
                    (item?.slug === value || menuActive === index) &&
                    list?.length > 1
                      ? 'visible'
                      : 'invisible',
                    'group-hover/tab:visible',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'absolute top-[100%] left-1/2 transform -translate-x-1/2 ',
                      'border-l-[0.5rem] border-r-[0.5rem] border-t-[0.5rem] ',
                      'border-l-transparent border-r-transparent border-blue-01',
                      'h-1 w-1',
                    ].join(' ')}
                  ></div>
                </div>
              )}
              {variant === 'border' && (
                <div
                  className={[
                    'absolute bottom-0 left-0',
                    'w-full h-[.2rem] ',
                    variantColor === 'red' ? 'bg-red-01' : 'bg-blue-01',
                    (item?.slug === value || menuActive === index) &&
                    list?.length > 1
                      ? 'visible'
                      : 'invisible',
                    'group-hover/tab:visible',
                  ].join(' ')}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      {(list?.[menuActive]?.children || list?.[menuActive]) &&
        switchChildrenVariant}
    </div>
  );
}
