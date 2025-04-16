'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { handleurl } from '@/app/(views)/$function/cfn.handle-url';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant18Props = {
  title?: string;
  showMore?: {
    title?: string;
    link?: string;
  };
  data?: Array<{
    title?: string;
    description?: string;
    image?: string;
    button?: {
      title?: string;
      link?: string;
      extern?: boolean;
    };
  }>;
};

export default function CE_CardVariant18({
  title,
  showMore,
  data,
}: T_CardVariant18Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        {title && (
          <div className="text-center mb-10">
            <div className="text-3xl font-semibold ">
              {parseHTMLToReact(title)}
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center -mx-5">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/4 mdmax:w-full flex-none px-5 mb-10 mdmax:!mt-0"
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
                    <div className="text-lg font-semibold mb-6">
                      {parseHTMLToReact(item.title)}
                    </div>
                  )}
                  {item.description && (
                    <div className="text-sm text-black text-opacity-30 mb-10 ">
                      {parseHTMLToReact(item.description)}
                    </div>
                  )}

                  <div className="">
                    <Link
                      href={handleurl(item?.button?.link)}
                      extern={item?.button?.extern}
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

        {showMore?.title && (
          <div className="flex justify-center mt-4">
            <Link href={String(showMore?.link)}>
              <button className="bg-[#f09b2b] text-white rounded-full px-6 py-2">
                {showMore?.title}
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
