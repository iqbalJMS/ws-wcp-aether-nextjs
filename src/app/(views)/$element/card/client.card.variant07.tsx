'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant07Props = {
  title?: string;
  subTitle?: string;
  description?: string;
  image?: string;
  nid?: number;
};

export function CE_CardVariant07({
  title,
  subTitle,
  description,
  image,
  nid,
}: T_CardVariant07Props) {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none px-5 mb-10">
            <div className="flex mdmax:flex-wrap bg-white shadow-xl">
              {image && (
                <div className="w-[40%] mdmax:w-full flex-none">
                  <div className="w-full h-[17rem] rounded-br-[5rem] overflow-hidden">
                    <Image
                      extern={false}
                      src={image}
                      alt="image"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <div className="p-10 mdmax:p-5">
                  {title && (
                    <div className="text-2xl font-semibold text-line-1 mb-2">
                      {parseHTMLToReact(title)}
                    </div>
                  )}
                  {subTitle && (
                    <div className="text-black text-opacity-70 mb-2">
                      {parseHTMLToReact(subTitle)}
                    </div>
                  )}
                  {description && (
                    <div className="text-black text-opacity-70 mb-12">
                      {parseHTMLToReact(description)}
                    </div>
                  )}
                  <div className="text-right mt-10">
                    <Link href={nid ? `/promo-detail/${nid}` : '#'}>
                      <div className="inline-block text-blue-01 text-base hover:underline font-semibold">
                        Selengkapnya &#10095;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
