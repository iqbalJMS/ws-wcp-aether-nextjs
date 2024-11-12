'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant08Props = {
  title: string;
  data: {
    title: string;
    description: string;
    image: string;
    button: {
      title: string;
      link: string;
      extern: boolean;
    };
  }[];
};

export default function CE_CardVariant08({
  title,
  data,
}: T_CardVariant08Props) {
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
                className="w-1/4 mdmax:w-full flex-none px-5 mb-10"
              >
                <div className="px-10">
                  <div className="h-[18rem] mb-5">
                    <Image
                      extern={false}
                      src={item?.image}
                      alt="image"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {item?.title && (
                    <div className="text-lg font-semibold mb-2 ">
                      {parseHTMLToReact(item?.title)}
                    </div>
                  )}
                  {item?.description && (
                    <div className="text-base mb-10 ">
                      {parseHTMLToReact(item?.description)}
                    </div>
                  )}

                  {item?.button?.title && (
                    <div className="text-center">
                      <Link
                        href={item?.button?.link}
                        extern={item?.button?.extern}
                        target={item?.button?.extern ? '_blank' : ''}
                      >
                        <div className="inline-block text-blue-01 text-base">
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
