import Image from '@/lib/element/global/image';
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
  };
  secondColumn: {
    description?: string;
    image?: string;
  };
}) {
  return (
    <div className="container mx-auto grid md:grid-cols-2 my-8 py-6">
      <div className="flex items-center col-span-1 md:order-1 order-2">
        <div>
          {firstColumn?.title && (
            <div className="text-2xl">
              {parseHTMLToReact(firstColumn?.title)}
            </div>
          )}
          {firstColumn?.description && (
            <div className="mt-6 text-gray-700 text-base">
              {parseHTMLToReact(firstColumn?.description)}
            </div>
          )}
          {firstColumn?.button?.title && (
            <Link href={firstColumn?.button?.link ?? ''}>
              <button className="bg-[#f59a22] rounded-full mt-8 text-white py-4 px-8">
                {firstColumn?.button?.title}
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="col-span-1 mt-4 lg:mt-0 md:order-2 order-1">
        {secondColumn?.description && (
          <div className="mt-6 text-gray-400 text-base">
            {parseHTMLToReact(secondColumn?.description)}
          </div>
        )}
        {secondColumn?.image && (
          <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
            <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
              <Image
                src={secondColumn?.image ?? ''}
                alt={secondColumn.image}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
