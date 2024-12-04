'use client';

import { Tooltip } from './tooltip';
import { useState } from 'react';
import { WIDGET_VARIANT } from '@/app/(views)/$constant/variables';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { CE_CardVariant12 } from '@/app/(views)/$element/card/client.card.variant12';
import CE_CardVariant02 from '@/app/(views)/$element/card/client.card.variant02';
import CE_Paragraphs from '@/app/(views)/$element/paragrahps';
import CE_PromoCard from '@/app/(views)/$element/portlet/client.portlet.variant04';
import Image from './image';
import Link from './link';
import Accordion from './accordion';
import CE_CardVariant09 from '@/app/(views)/$element/card/client.card.variant09';
import CE_CarouselVariant06 from '@/app/(views)/$element/carousel/client.carousel.variant06';

type TChildren = {
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
  }[];
  description1?: string;
  title?: string;
  image?: string;
  description?: string;
  description2?: string;
  imageUrl1?: string;
  imageUrl2?: string;
  titleColumn?: string;
  button?: ButtonProps;
  textLink?: string;
  urlLink?: string;
};

type TabItem = {
  title?: string;
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
  title?: string;
  variantContent?: string;
  onChange?: (_value: string) => void;
  variant?: 'full' | 'border-arrow' | 'border';
};

type TRenderElemment = {
  children: Array<TChildren>;
  type: string;
};

export function Tabs({
  list,
  value,
  onChange,
  title,
  variant = 'border',
  variantContent,
}: TabsProps) {
  const [menuActive, setMenuActive] = useState(0);

  const renderElement = ({ children, type }: TRenderElemment) => {
    switch (type) {
      case 'download':
        return (
          <CE_CardVariant09
            data={children?.map((childItem) => {
              return {
                title: childItem?.filename?.replaceAll('_', ' '),
                description: childItem?.description?.replaceAll('_', ' '),
                button: {
                  image: '/',
                  link: childItem?.downloadFile,
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
          <div className="flex">
            {children?.map((item, index) => {
              return (
                <div key={index} className="w-1/4 mdmax:w-1/2 flex-none px-2">
                  <Link href={'/'} target="_blank">
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
          <CE_Paragraphs
            key={description}
            description={description}
            notes={notes}
          />
        );
      case WIDGET_VARIANT.variant13:
        return list?.[menuActive]?.children?.map((item, index) => (
          <CE_PromoCard
            key={index}
            description1={item?.description1}
            description2={item?.description2}
            imageUrl1={item?.imageUrl1}
            imageUrl2={item?.imageUrl2}
          />
        ));
      case WIDGET_VARIANT.variant15:
        return list?.[menuActive]?.children?.map((item, index) => (
          <div key={index}>
            <h4 className="text-center font-semibold mt-10 text-4xl">
              {parseHTMLToReact(item?.titleColumn ?? '')}
            </h4>
            <div className="grid grid-cols-4 mt-10 gap-6">
              {item?.listColumn?.map((childItem, idx: number) => {
                const title = childItem?.field_title?.[0]?.value ?? '';
                const description = childItem?.field_content?.[0]?.value ?? '';
                return (
                  <div className="col-span-1" key={idx}>
                    {title && (
                      <div className="mb-2 font-semibold text-lg text-[#00539c]">
                        {parseHTMLToReact(title)}
                      </div>
                    )}
                    {description && (
                      <div className="text-gray-500 text-base">
                        {parseHTMLToReact(description)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center mt-12">
              <Link
                href={list?.[menuActive]?.linkShowMore ?? ''}
                className="bg-orange-400 text-white px-8 py-3 rounded-full"
              >
                {list?.[menuActive]?.textShowMore}
              </Link>
            </div>
          </div>
        ));
      case WIDGET_VARIANT.variant29:
        return (
          <CE_CardVariant12
            data={list?.[menuActive]?.children?.map((item) => {
              return {
                image: item?.image,
                title: item?.title,
                description: item?.description,
                button: {
                  link: item?.button?.link,
                  title: item?.button?.title,
                  extern: true,
                },
              };
            })}
          />
        );
      case WIDGET_VARIANT.variant31:
        return list?.[menuActive]?.children?.map((item, index) => (
          <div
            className="border border-gray-200 rounded-lg flex items-center my-6 overflow-hidden"
            key={index}
          >
            {item?.image && (
              <div className="relative max-h-[16rem] aspect-video w-[30rem] rounded-lg object-contain">
                <Image alt="image card" src={item?.image} extern={false} fill />
              </div>
            )}
            <div className="ml-6">
              {item.title && (
                <div className="text-lg text-[#13539c] font-semibold mb-2">
                  {parseHTMLToReact(item.title)}
                </div>
              )}
              {item?.description && (
                <div className="text-gray-400 mb-6">
                  {parseHTMLToReact(item?.description)}
                </div>
              )}

              {item?.textLink && (
                <Link
                  href={item?.urlLink ?? ''}
                  extern={false}
                  className="text-[#13539c] flex items-center gap-2"
                >
                  {item?.textLink}
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
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ));
      case WIDGET_VARIANT.variant38:
        return list?.[menuActive]?.children?.map((item, index) => {
          return item?.listColumn?.map((listItem) => (
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
            />
          ));
        });
      default:
        return null;
    }
  })();

  return (
    <div className="container mt-12 mb-16">
      {title && (
        <h1 className="text-4xl mb-16 font-semibold">
          {parseHTMLToReact(title)}
        </h1>
      )}
      <div className="flex mb-12">
        {list?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setMenuActive(index);
                onChange?.(item?.slug ?? '');
              }}
              className={[
                `flex-1 border-b cursor-pointer relative group/tab text-center`,
                variant === 'full' ? 'py-3 ' : 'pb-3 ',
                item?.slug === value
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
                    item?.slug === value
                      ? variant === 'full'
                        ? 'text-white'
                        : 'text-blue-01'
                      : 'text-gray-500 group-hover/tab:text-blue-01'
                  }`,
                ].join(' ')}
              >
                {item?.title && (
                  <div
                    className={`mr-2 mdmax:text-sm uppercase ${
                      menuActive === index
                        ? variant === 'full'
                          ? 'text-white'
                          : 'text-blue-01'
                        : ''
                    }`}
                  >
                    {item?.title}
                  </div>
                )}
                {item?.information && (
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
                )}
              </div>
              {variant === 'border-arrow' && (
                <div
                  className={[
                    'absolute bottom-0 left-0',
                    'w-full h-[.2rem] bg-blue-01',
                    item?.slug === value ? 'visible' : 'invisible',
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
                    'w-full h-[.2rem] bg-blue-01',
                    item?.slug === value || menuActive === index
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
