'use client';

import { T_CarouselMainProps } from '@/app/(views)/$constant/types';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { useState } from 'react';
import { handleurl } from '@/app/(views)/$function/cfn.handle-url';

export function CE_CarouselVariant03({
  title,
  description,
  button,
  data,
}: Omit<T_CarouselMainProps, 'variant'>) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = screenWidth > 768 ? 3 : 1;
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide < data.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const truncateText = (text: string, maxWords: number): { truncated: string; remaining: string } => {
    const words = text.split(' ');
    if (words.length <= maxWords) return { truncated: text, remaining: '' };
    
    const truncatedPart = words.slice(0, maxWords).join(' ');
    const remainingPart = words.slice(maxWords).join(' ');
    
    return { truncated: truncatedPart, remaining: remainingPart };
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };
  return (
    <>
      <div className="py-24 container">
        <div className="flex items-center mdmax:flex-wrap">
          <div className="w-[25%] mdmax:w-full flex-none">
            {title && (
              <div className="text-2xl font-semibold mb-4">{title}</div>
            )}
            {description && <div className=" mb-4">{description}</div>}
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
                  currentSlide < data.length - slidesToShow
                    ? 'cursor-pointer '
                    : 'bg-opacity-10 cursor-default',
                ].join(' ')}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </div>
            {button && (
              <Link href={handleurl(button?.link)} target="_self">
                <div className="inline-flex gap-2 items-center text-blue-01 mt-10">
                  {parseHTMLToReact(button?.name || '')}{' '}
                  <span className="text-xs">&#10095;</span>
                </div>
              </Link>
            )}
          </div>
          <div className="overflow-hidden p-5 mdmax:p-2">
            <div
              className="flex  -mx-2 transition-all ease-in-out duration-300"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {data.map((dataItem, index) => (
                <div key={index} className="w-1/3 mdmax:w-full flex-none px-2">
                  <Link href={handleurl(dataItem.button?.link)} target="_self">
                    <div className="shadow-lg relative rounded-md overflow-hidden group">
                      <div className="w-full h-[28rem] ">
                        {dataItem.image && (
                          <Image
                            extern={false}
                            src={dataItem.image}
                            alt="image"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="absolute z-10 top-0 left-0 bg-blue-950 bg-opacity-20 group-hover:bg-opacity-90 w-full h-full"></div>
                      <div className="absolute z-20 bottom-0 left-0 p-6">
                        {dataItem.title && (
                          <div className="text-white text-2xl font-semibold line-clamp-2">
                            {parseHTMLToReact(dataItem.title)}
                          </div>
                        )}
                        {dataItem.desc && (
                          <div className="text-white hidden group-hover:block mt-6 mb-4">
                            <span>
                              {parseHTMLToReact(truncateText(dataItem.desc, 17).truncated)}
                              {truncateText(dataItem.desc, 17).remaining && (
                                <span className="underline cursor-pointer relative inline-block">
                                  {' '}
                                  <span className="hover:text-blue-200 peer">...Selengkapnya</span>
                                  <span className="absolute w-64 bg-black text-white text-sm p-2 rounded shadow-lg left-0 bottom-full mb-0 hidden peer-hover:block z-50">
                                    {parseHTMLToReact(dataItem.desc)}
                                  </span>
                                </span>
                             )}
                            </span>
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
