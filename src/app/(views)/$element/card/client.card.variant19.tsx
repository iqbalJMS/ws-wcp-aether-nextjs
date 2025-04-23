'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { handleurl } from '@/lib/functions/client/handle-url'; 

type T_CardVariant19Props = {
  title: string;
  data: Array<{
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

export default function CE_CardVariant19({
  title,
  data,
}: T_CardVariant19Props) {
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
                className="w-1/3 mdmax:w-full flex-none px-2 mb-10"
              >
                <div className="h-[750px] px-6 flex flex-col justify-between">
                  <div>
                    <div className="mb-5">
                      <Image
                        extern={false}
                        src={item?.image ?? ''}
                        alt="image"
                        width={1920}
                        height={1080}
                        className="w-full h-[450px] object-cover"
                      />
                    </div>

                    {item?.title && (
                      <div className="text-[25px] font-semibold lg:w-7/12 w-full mx-auto text-center">
                        {parseHTMLToReact(item?.title)}
                      </div>
                    )}
                    {item?.description && (
                      <div className="text-base text-center text-[#8a8a8a] mt-[26px]">
                        {parseHTMLToReact(item?.description)}
                      </div>
                    )}
                  </div>

                  {item?.button?.title && (
                    <div className="text-center">
                      <Link
                        href={handleurl(item?.button?.link)}
                        extern={item?.button?.extern}
                        target={item?.button?.extern ? '_self' : '_self'}
                      >
                        <div className="inline-block text-blue-01 uppercase text-base">
                          {item?.button?.title} &#10095;
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
