'use client';

import Image from '@/lib/element/global/image';
import { handleurl } from '@/lib/functions/client/handle-url';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEnv } from '@/lib/hook/useEnv';
import Link from 'next/link';
import React from 'react';

export default function CE_PortletVarian05({
  firstColumn,
  secondColumn,
}: {
  firstColumn: {
    title?: string;
    description?: string;
    document?: string;
    documentTitle?: string;
    buttontitle?: string;
    buttonlink?: string;
  };
  secondColumn: {
    description?: string;
    image?: string;
  };
}) {
  const { baseUrl } = useEnv();

  const hasVisibleButton =
    firstColumn?.buttontitle &&
    firstColumn?.buttonlink &&
    firstColumn?.buttontitle !== undefined &&
    firstColumn?.buttonlink !== undefined;

  const hasVisibleDocument =
    firstColumn?.documentTitle &&
    firstColumn?.document &&
    firstColumn?.documentTitle !== undefined &&
    firstColumn?.document !== undefined;

  return (
    <div className="container mx-auto grid md:grid-cols-2 my-8 py-6">
      <div className="flex items-center col-span-1 md:order-1 order-2">
        <div className="section-portlet-first-column">
          {firstColumn?.title && (
            <div className="text-2xl">
              {parseHTMLToReact(firstColumn?.title)}
            </div>
          )}
          {firstColumn?.description && (
            <div className="mt-6 text-black body">
              {parseHTMLToReact(firstColumn?.description)}
            </div>
          )}
          {(hasVisibleButton || hasVisibleDocument) && (
            <div className="flex gap-4 mt-8 flex-wrap">
              {hasVisibleButton && (
                <Link href={handleurl(firstColumn.buttonlink!)}>
                  <button className="bg-[#f59a22] rounded-full text-white py-1 px-3 text-xs">
                    {firstColumn.buttontitle}
                  </button>
                </Link>
              )}
              {hasVisibleDocument && (
                <a
                  href={handleurl(
                    `${baseUrl}/api/files/?path=${firstColumn.document}`
                  )}
                  download
                  target="_self"
                >
                  <button className="bg-[#f59a22] rounded-full text-white py-1 px-3 text-xs">
                    {firstColumn.documentTitle}
                  </button>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 mt-4 lg:mt-0 md:order-2 order-1">
        {secondColumn?.description && (
          <div className="mt-6 text-gray-400 text-base body">
            {parseHTMLToReact(secondColumn?.description, true)}
          </div>
        )}
        {secondColumn?.image && (
          <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
            <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
              <Image
                src={`${baseUrl}/api/files/?path=${secondColumn.image}`}
                alt={secondColumn.image}
                fill
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
