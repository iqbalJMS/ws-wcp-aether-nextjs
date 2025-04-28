'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { handleurl } from '@/lib/functions/client/handle-url';

type T_CardVariant02Props = {
  title?: string;
  data: Array<{
    imagePosition?: 'left' | string;
    title?: string;
    image?: string;
    description?: string;
    button?: {
      title?: string;
      link?: string;
      extern?: boolean;
    };
  }>;
};


export default function CE_CardVariant02({
  data,
  title,
}: T_CardVariant02Props) {
  return (
    <>
      <div className="py-10 container">
        {title && (
          <div className="!font-semibold text-[2.5rem]">
            {parseHTMLToReact(title)}
          </div>
        )}
        <div className="flex flex-wrap -mx-5">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/3 mdmax:w-full flex-none px-5 mb-10"
              >
                <Link
                  href={handleurl(item?.button?.link)}
                  extern={item?.button?.extern}
                  target={item?.button?.extern ? '_self' : ''}
                  className="block"
                >
                  <div className="bg-white px-10 pb-10 pt-20 shadow-lg rounded-br-[5rem] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="mb-10">
                      {item?.imagePosition === 'left' ? (
                          <div className="w-[9rem] h-[9rem] overflow-hidden">
                            <Image
                              extern={false}
                              src={item?.image ?? ''}
                              alt="image"
                              width={1920}
                              height={1080}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ) : item?.imagePosition === 'square' ? (
                          <div className="w-[6.5rem] h-[6.5rem] overflow-hidden">
                            <Image
                              extern={false}
                              src={item?.image ?? ''}
                              alt="image"
                              width={1920}
                              height={1080}
                              className="object-contain w-full h-full"
                            />
                          </div>
                        ) : (
                        <div className="max-w-[10rem] max-h-[7.5rem] overflow-hidden">
                          <Image
                            extern={false}
                            src={item?.image ?? ''}
                            alt="image"
                            width={1920}
                            height={1080}
                            className="object-cover w-full"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      {item?.title && (
                        <div className="text-xl font-medium text-blue-02 mb-4">
                          {parseHTMLToReact(item?.title)}
                        </div>
                      )}
                      {item?.description && (
                        <div className="mb-5 text-base text-[#65afdf] h-[6rem] overflow-auto overflow-custom">
                          {parseHTMLToReact(item?.description)}
                        </div>
                      )}
                      <div className="text-right">
                        <div className="w-10 h-10 rounded-full border border-[#65afdf] border-opacity-80 inline-flex items-center justify-center text-[#65afdf] group-hover:bg-[#65afdf] group-hover:text-white transition-all duration-300">
                          &#10095;
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
