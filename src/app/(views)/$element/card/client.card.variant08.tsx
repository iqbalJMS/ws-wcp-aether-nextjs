'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { handleurl } from '@/lib/functions/client/handle-url';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEnv } from '@/lib/hook/useEnv';

type T_CardVariant08Props = {
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

export default function CE_CardVariant08({
  title,
  data,
}: T_CardVariant08Props) {
  const { baseUrl } = useEnv();
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
                <div className="px-10 h-full flex flex-col group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 bg-white rounded-lg hover:shadow-xl">
                  <div className="h-[18rem] mb-5 overflow-hidden">
                    {item?.image && (
                      <Image
                        extern={false}
                        src={`${baseUrl}/api/files/?path=${item.image}`}
                        alt="image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  {item?.title && (
                    <div className="text-lg font-semibold mb-2 text-center">
                      {parseHTMLToReact(item?.title)}
                    </div>
                  )}
                  
                  <div className="flex-grow mb-10">
                    {item?.description && (
                      <div className="text-base text-center">
                        {parseHTMLToReact(item?.description)}
                      </div>
                    )}
                  </div>

                  {item?.button?.title && (
                    <div className="text-center mt- pb-10">
                      <Link
                        href={handleurl(item?.button?.link)}
                        extern={item?.button?.extern}
                        target={item?.button?.extern ? '_self' : ''}
                      >
                        <div className="inline-block text-semibold text-blue-01 text-base group-hover:text-blue-600 transition-colors duration-300 hover:underline">
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