import Image from '@/lib/element/global/image';
import { handleurl } from '@/lib/functions/client/handle-url';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';
import React from 'react';

export default function CE_PortletVarian05({
  firstColumn,
  secondColumn,
}: {
  firstColumn: {
    title?: string;
    description: string;
    button?: {
      title?: string;
      link?: string;
      extern?: boolean;
    };
    document?: string;
    documentTitle?: string;
  };
  secondColumn: {
    description?: string;
    image?: string;
  };
}) {
  const hasVisibleButton = firstColumn?.button?.title && firstColumn?.button?.link;
  const hasVisibleDocument = !firstColumn?.documentTitle && !firstColumn?.document;
  
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
            <div className="mt-6 text-black">
              {parseHTMLToReact(firstColumn?.description)}
            </div>
          )}
          {(hasVisibleButton || hasVisibleDocument) && (
            <div className="flex gap-4 mt-8 flex-wrap">
              {hasVisibleButton && (
                <Link href={handleurl(firstColumn.button!.link!)}>
                  <button className="bg-[#f59a22] rounded-full text-white py-4 px-8">
                    {firstColumn.button!.title}
                  </button>
                </Link>
              )}
              {hasVisibleDocument && (
                <a
                  href={handleurl(firstColumn.document)}
                  download
                  target="_self"
                >
                  <button className="bg-[#f59a22] rounded-full text-white py-4 px-8">
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
          <div className="mt-6 text-gray-400 text-base">
            {parseHTMLToReact(secondColumn?.description,true)}
          </div>
        )}
        {secondColumn?.image && (
          <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
            <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
              <Image
                src={secondColumn?.image ?? ''}
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
