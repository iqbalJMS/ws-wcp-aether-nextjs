'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { handleurl } from '@/lib/functions/client/handle-url';
import { useState } from 'react';
import { useEnv } from '@/lib/hook/useEnv';

type T_CardVariant02Props = {
  title?: string;
  data: Array<{
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
  const { baseUrl } = useEnv();
  const [imageDimensions, setImageDimensions] = useState<
    Record<number, { width: number; height: number; loaded: boolean }>
  >({});

  const getImageContainerClass = (index: number) => {
    if (!imageDimensions[index]?.loaded) {
      return 'w-full max-h-[7.5rem] overflow-hidden';
    }

    const { width, height } = imageDimensions[index];
    const aspectRatio = width / height;

    if (aspectRatio >= 0.9 && aspectRatio <= 1.1) {
      return 'w-[6.25rem] h-[6.25rem] overflow-hidden';
    } else {
      return 'w-[12rem] h-[8.25rem] overflow-hidden';
    }
  };

  const handleImageLoad = (
    index: number,
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const img = event.currentTarget;
    setImageDimensions((prev) => ({
      ...prev,
      [index]: {
        width: img.naturalWidth,
        height: img.naturalHeight,
        loaded: true,
      },
    }));
  };

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
                  <div className="bg-white px-10 pb-10 pt-10 shadow-lg rounded-br-[5rem] hover:shadow-xl transition-all duration-300 group cursor-pointer min-h-[28rem] flex flex-col justify-between">
                    <div
                      className={`mb-10 ${getImageContainerClass(index)} flex items-center justify-center`}
                    >
                      {item?.image && (
                        <Image
                          extern={false}
                          src={`${baseUrl}/api/files/?path=${item.image}`}
                          alt="image"
                          width={1920}
                          height={1080}
                          onLoad={(e) => handleImageLoad(index, e)}
                          className="object-contain w-full h-full"
                        />
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
