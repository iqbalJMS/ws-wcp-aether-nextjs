'use server';

import React from 'react';
import Image from './image';
import Link from './link';
import { T_ResponseGetMainFooterMenu } from '@/api/footer/main-footer/api.get-main-footer.type';
import { T_ResponseGetBottomFooterMenu } from '@/api/footer/bottom-footer/api.get-bottom-footer.type';
import MobileFooter from './accordion.footer';
import { BASE_URL } from '@/app/(views)/$constant';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { handleurl } from '@/lib/functions/client/handle-url';

type T_FooterProps = {
  main_footer: T_ResponseGetMainFooterMenu;
  bottom_footer: T_ResponseGetBottomFooterMenu;
};

type T_RowElementProps = {
  label: string;
  socialMedia?: Array<{ name: string; icon: string; url: string }>;
  description: Array<{
    className?: string;
    name: string;
    icon?: string;
    url?: string;
    extern?: boolean;
  }>;
};

const RowElement = ({ description, label, socialMedia }: T_RowElementProps) => {
  return (
    <>
      <h1 className="text-blue-01 lg:mb-5 mb-2 font-semibold lg:text-xl text-lg">
        {label}
      </h1>
      {description?.map(({ className, name, icon, url, extern }) => (
        <Link
          extern={extern}
          href={handleurl(url) ?? '/'}
          key={name}
          className={`px-0 flex items-center gap-2 lg:mb-3 mb-2 lg:text-sm text-sm justify-start font-normal ${className} `}
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
      {socialMedia?.length !== 0 && (
        <div className="flex justify-start items-center gap-6">
          {socialMedia?.map(({ url, icon }, index) => (
            <Link
              extern={false}
              href={url ?? '/'}
              key={index}
              className="text-blue-02 flex items-center gap-2 lg:mb-3 mb-2 lg:text-sm text-sm justify-center lg:justify-start font-normal"
            >
              {icon && (
                <Image
                  src={`${BASE_URL}/api/files/?path=${icon}`}
                  width={18}
                  extern={true}
                  height={18}
                  alt={`icon-${icon}`}
                />
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

type T_PropsTermsAllReservedElement = {
  list: Array<{
    value: string;
    url: string;
    extern: boolean;
  }>;
};

function TermsAllReservedElement({ list }: T_PropsTermsAllReservedElement) {
  return (
    <div className="bg-blue-01 lg:py-[1.375rem] py-4">
      <div className="text-center flex items-center lg:flex-row flex-col lg:container justify-between lg:px-0 px-4 lg:items-center lg:justify-between">
        <div className="items-center mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-center items-center">
            {list?.map(({ extern, url, value }, index) => (
              <div key={index}>
                <Link
                  href={handleurl(url)}
                  extern={extern}
                  className="text-sm lg:font-normal font-light text-white"
                >
                  {value}
                </Link>
                {index + 1 !== list.length && (
                  <span className="text-white mx-2">&#x2022;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function GlobalFooter({
  main_footer,
  bottom_footer,
}: T_FooterProps) {
  return (
    <footer className="pt-6 lg:pt-11 shadow-[0_-4px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="container text-left lg:mb-6 lg:flex hidden">
        <div className="grid lg:grid-cols-9 grid-cols-1 lg:space-x-6 lg:mt-6 mt-3">
          {main_footer?.data?.map((list_item, index) => (
            <div className="lg:col-span-2 col-span-1 lg:mb-0 mb-4" key={index}>
              <RowElement
                label={String(list_item?.title ?? '')}
                socialMedia={list_item?.social_media ?? []}
                description={list_item?.list ?? []}
              />
            </div>
          ))}
        </div>
      </div>

      <MobileFooter data={main_footer} />

      <TermsAllReservedElement list={bottom_footer?.data} />
    </footer>
  );
}
