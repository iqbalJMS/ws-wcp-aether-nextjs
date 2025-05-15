'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEnv } from '@/lib/hook/useEnv';
import { useMemo } from 'react';
type T_CardVariant07Props = {
  title?: string;
  subTitle?: string;
  description?: string;
  image?: string;
  nid?: number;
  typeContent?: 'promo' | 'news' | 'alert_mode';
};
export function CE_CardVariant07({
  title,
  subTitle,
  description,
  image,
  nid,
  typeContent = 'promo',
}: T_CardVariant07Props) {
  const { baseUrl } = useEnv();
  const urlLink = useMemo(() => {
    switch (typeContent) {
      case 'promo':
        return `/promo-detail/${nid}`;
      case 'news':
        return `/news-detail/${nid}`;
      case 'alert_mode':
        return `/waspada-modus-detail/${nid}`;
      default:
        return '';
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeContent]);
  return (
    <>
      <div className="container overflow-hidden">
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none px-5 mb-10">
            <div className="flex mdmax:flex-wrap bg-white shadow-xl">
              <div className="w-[40%] mdmax:w-full flex-none">
                <div className="w-full h-[17rem] rounded-br-[5rem] overflow-hidden">
                  <Image
                    extern={image ? false : true}
                    src={
                      image
                        ? `${baseUrl}/api/files/?path=${image}`
                        : '/web/guest/images/no-image.png'
                    }
                    alt="image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="p-10 mdmax:p-5">
                  {title && (
                    <div className="text-2xl font-semibold line-clamp-1 mb-2">
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
                    <Link href={nid ? urlLink : '#'}>
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
