'use client';

import { T_CarouselMainProps } from '@/app/(views)/$constant/types';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useState } from 'react';
import { handleurl } from '@/lib/functions/client/handle-url';
import { useEnv } from '@/lib/hook/useEnv';

export function CE_CarouselVariant01({
  title,
  button,
  data,
}: Omit<T_CarouselMainProps, 'variant'>) {
  const { baseUrl } = useEnv();
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 4 : 2;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide < data?.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };

  return (
    <>
      <div className="py-20 container">
        <div className="flex mdmax:flex-wrap items-center">
          <div className="w-[20%] mdmax:w-full flex-none">
            {title && (
              <div className="text-2xl font-semibold mb-4">
                {parseHTMLToReact(title)}
              </div>
            )}
            <div className="flex items-center gap-5 mdmax:gap-1">
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 bg-red-01 text-white',
                  currentSlide === 0
                    ? 'bg-opacity-10 cursor-default'
                    : 'cursor-pointer',
                ].join(' ')}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 bg-red-01 text-white',
                  currentSlide < data?.length - slidesToShow
                    ? 'cursor-pointer '
                    : 'bg-opacity-10 cursor-default',
                ].join(' ')}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </div>
            {button && (
              <>
                {handleurl(button?.link) === 'javascript:void(0)' ? (
                  <div className="inline-flex gap-2 items-center text-blue-01 mt-4 cursor-pointer">
                    {parseHTMLToReact(button?.name || '')}
                  </div>
                ) : (
                  <Link href={handleurl(button?.link)} target="_self">
                    <div className="inline-flex gap-2 items-center text-blue-01 mt-4">
                      {parseHTMLToReact(button?.name || '')}
                      <span className="text-xs">&#10095;</span>
                    </div>
                  </Link>
                )}
              </>
            )}
          </div>
          <div className="overflow-hidden flex-1 mdmax:w-full mdmax:flex-none p-5 mdmax:p-1">
            <div
              className="flex -mx-2 transition-all ease-in-out duration-300"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {data?.map((dataItem, index) => (
                <div key={index} className="w-1/4 mdmax:w-1/2 flex-none px-2">
                  <Link href={handleurl(dataItem?.button?.link)} target="_self">
                    <div className="p-4 mdmax:p-2 shadow-lg py-10 px-5 h-[29rem] mdmax:h-[29rem] flex flex-col">
                      {dataItem?.image && (
                        <div className="w-full h-[15rem] mb-4 flex-shrink-0">
                          <Image
                            extern={false}
                            src={
                              dataItem?.image
                                ? `${baseUrl}/api/files/?path=${dataItem.image}`
                                : '/'
                            }
                            alt="image"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col flex-grow">
                        {dataItem?.title && (
                          <div className=" text-red-01 font-semibold mb-6 mt-2">
                            {parseHTMLToReact(dataItem?.title)}
                          </div>
                        )}
                        {dataItem?.desc && (
                          <div className="text-xs h-[4rem] overflow-auto">
                            {parseHTMLToReact(dataItem?.desc)}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
