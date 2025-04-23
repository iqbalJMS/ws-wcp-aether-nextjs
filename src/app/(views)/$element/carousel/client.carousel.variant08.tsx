'use client';

import { T_CarouselMainProps } from '@/app/(views)/$constant/types';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useState } from 'react';

export default function CE_CarouselVariant08({
  title,
  button,
  data,
}: Omit<T_CarouselMainProps, 'variant'>) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 3 : 2;
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
              <div className="text-[42px] font-semibold mb-4">
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
              <Link href={button?.link} target="_self">
                <div className="inline-flex gap-2 items-center text-blue-01 mt-4">
                  {parseHTMLToReact(button?.name || '')}{' '}
                  <span className="text-xs">&#10095;</span>
                </div>
              </Link>
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
                <div key={index} className="w-1/3 mdmax:w-1/2 flex-none px-2">
                  <Link href={dataItem?.button?.link || ''} target="_self">
                    <div className="p-4 mdmax:p-2 rounded-br-[4rem] bg-[#f1f1f1] px-5">
                      {dataItem?.image && (
                        <div className="w-full flex justify-center mb-4">
                          <Image
                            extern={false}
                            src={dataItem?.image ?? '/'}
                            alt="image"
                            width={1920}
                            height={152}
                            className="w-full h-[152px] object-contain"
                          />
                        </div>
                      )}
                      <div>
                        {dataItem?.title && (
                          <div className=" font-semibold mb-2 text-[#a0a0a0] text-center">
                            {parseHTMLToReact(dataItem?.title)}
                          </div>
                        )}
                        {dataItem?.desc && (
                          <div className="text-base line-clamp-3 mb-[68px] text-[#a0a0a0] text-center">
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
