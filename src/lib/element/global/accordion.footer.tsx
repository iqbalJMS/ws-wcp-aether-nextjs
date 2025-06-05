'use client';

import { useState } from 'react';
import React from 'react';
import Image from './image';
import Link from './link';
import { T_ResponseGetMainFooterMenu } from '@/api/footer/main-footer/api.get-main-footer.type';
import { ChevronRightIcon } from './icons/chevron-right-icon';
import { ChevronDownIcon } from './icons/chevron-down-icon';
import { useEnv } from '@/lib/hook/useEnv';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { BASE_URL } from '@/app/(views)/$constant';
import { handleurl } from '@/lib/functions/client/handle-url';

type T_RowElementProps = {
  description: Array<{
    className?: string;
    name: string;
    icon?: string;
    url?: string;
    extern?: boolean;
  }>;
};

export type T_AccordionProps = {
  renderContent: React.ReactNode;
  renderTitle: string;
};

type T_FooterProps = {
  data: T_ResponseGetMainFooterMenu;
};

const AccordionMobile = ({ renderContent, renderTitle }: T_AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <section className="p-4 lg:hidden flex-auto border-b border-gray-300 container">
      <div>
        <button
          className="flex items-center justify-between !text-[#014a94] w-full"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          <h1 className="text-blue-01 mb-2 font-semibold text-lg">
            {renderTitle}
          </h1>
          {accordionOpen ? (
            <ChevronDownIcon
              fill="#014a94"
              width={24}
              height={24}
              strokeWidth="2"
            />
          ) : (
            <ChevronRightIcon width={24} height={24} strokeWidth="2" />
          )}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all mt-1 duration-500 ease-in-out ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{renderContent}</div>
      </div>
    </section>
  );
};

const RowElement = ({ description }: T_RowElementProps) => (
  <>
    {description?.map(({ className, name, icon, url, extern }) => (
      <Link
        extern={extern}
        href={url ?? '/'}
        key={name}
        className={`px-0 flex items-center gap-2 mb-2 text-sm justify-start font-normal ${className}`}
      >
        {icon && (
          <Image
            src={`${BASE_URL}/api/files/?path=${icon}`}
            width={18}
            extern
            height={18}
            alt={`icon-${icon}`}
          />
        )}
        {parseHTMLToReact(name, true)}
      </Link>
    ))}
  </>
);

export default function MobileFooter({ data }: T_FooterProps) {
  const { baseUrl } = useEnv();
  
  return (
    <section className="lg:hidden">
      <AccordionMobile
        renderTitle={data?.data?.[0]?.title ?? "BRI Kantor Pusat"}
        renderContent={
          data?.data?.map((list_item, index) => (
            <div className="w-9/12" key={`kantor-pusat-${index}`}>
              <RowElement description={list_item?.list ?? []} />
            </div>
          ))?.[0]
        }
      />
      <AccordionMobile
        renderTitle={data?.data?.[1]?.title ?? "Hubungi Kami"}
        renderContent={
          data?.data?.map((list_item, index) => (
            <div className="" key={`hubungi-kami-${index}`}>
              <RowElement description={list_item?.list ?? []} />
            </div>
          ))?.[1]
        }
      />
      {data?.data?.map((item, index) => (
        <div
          key={`wrapper-${index}`}
          className="flex justify-start items-center gap-6 px-4 pt-4"
        >
          {item.social_media?.length &&
            item.social_media?.map(({ url, icon }, index) => (
              <Link
                extern={false}
                href={handleurl(url)}
                key={`link-${index}`}
                className="text-blue-02 text-sm justify-center font-normal"
              >
                {icon && (
                  <Image
                    src={`${baseUrl}/api/files/?path=${icon}`}
                    width={20}
                    extern={true}
                    height={20}
                    alt={`icon-${icon}`}
                  />
                )}
              </Link>
            ))}
        </div>
      ))}
      <hr />
      <AccordionMobile
        renderTitle={data?.data?.[2]?.title ?? "Tautan"}
        renderContent={
          data?.data?.map((list_item, index) => (
            <div className="" key={`tautan-${index}`}>
              <RowElement description={list_item?.list ?? []} />
            </div>
          ))?.[2]
        }
      />
    </section>
  );
}