'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useState } from 'react';
import { handleurl } from '@/lib/functions/client/handle-url';
import { useEnv } from '@/lib/hook/useEnv';

type T_CardVariant01Props = {
  data: {
    title?: string;
    image?: string;
    description?: string;
    document?: string;
    documentTitle?: string;
    buttons: {
      title: string;
      link: string;
      extern: boolean;
    }[];
  }[];
};

export default function CE_CardVariant01({ data }: T_CardVariant01Props) {
  const { baseUrl } = useEnv();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <div className=" py-10">
        <div className="flex mdmax:flex-wrap">
          {data?.map((item, index) => {
            const hasVisibleButtons = item?.buttons?.some((btn) => btn?.link);
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="w-1/2 mdmax:w-full flex-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-[40rem] mdmax:h-[20rem] relative z-0 overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 z-10 w-full h-full transition-all duration-300 ease-in-out ${
                      isHovered
                        ? 'bg-blue-800 bg-opacity-70'
                        : 'bg-black bg-opacity-20'
                    }`}
                  ></div>
                  <div className="absolute bottom-[40%] left-0  z-20 w-full ">
                    <div className="px-[5rem] mdmax:px-[1rem]">
                      {item?.title && (
                        <div className="text-white text-3xl font-medium mb-5">
                          {item?.title}
                        </div>
                      )}
                      {item?.description && (
                        <div className="text-white text-base font-normal mb-6 body">
                          {parseHTMLToReact(item?.description)}
                        </div>
                      )}
                      <div className="flex gap-2 flex-wrap">
                        {hasVisibleButtons &&
                          item?.buttons?.map((buttonItem, buttonIndex) => (
                            <div key={buttonIndex}>
                              {buttonItem?.link ? (
                                <Link
                                  href={handleurl(buttonItem?.link)}
                                  extern={buttonItem?.extern}
                                  target={buttonItem?.extern ? '_self' : ''}
                                >
                                  <ButtonSecondary
                                    className="bg-orange-01"
                                    rounded="full"
                                    color="orange-01"
                                  >
                                    {buttonItem?.title}
                                  </ButtonSecondary>
                                </Link>
                              ) : null}
                            </div>
                          ))}

                        {item?.document && (
                          <div>
                            <Link
                              href={`${baseUrl}/api/files/?path=${item.document}`}
                              extern={true}
                              target="_self"
                              download
                            >
                              <ButtonSecondary
                                className="bg-orange-01"
                                rounded="full"
                                color="orange-01"
                              >
                                {item.documentTitle || 'Download PDF'}
                              </ButtonSecondary>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {item?.image && (
                    <div className="w-full h-full relative z-0">
                      <Image
                        extern={false}
                        src={`${baseUrl}/api/files/?path=${item.image}`}
                        alt="image"
                        width={1920}
                        height={1080}
                        className={`w-full h-full object-cover ${
                          isHovered
                            ? 'scale-125 transition-transform duration-1000 ease-in-out'
                            : 'scale-100 transition-transform duration-300 ease-in-out'
                        }`}
                      />
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
