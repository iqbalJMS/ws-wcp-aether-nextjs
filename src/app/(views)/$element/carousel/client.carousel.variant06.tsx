'use client';

import Image from '@/lib/element/global/image';
import { useCallback, useEffect, useRef, useState } from 'react';

export type T_CarouselVariant06Props = {
  data: Array<{
    image: string;
    description: string;
  }>;
};

export function CE_CarouselVariant06({ data }: T_CarouselVariant06Props) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const interval = 3000;

  const nextSlide = useCallback(() => {
    setCurrent((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  }, [data.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  }, [data.length]);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      nextSlide();
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, interval]);

  const handleDotClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrent(index);
  };

  return (
    <section
      className="py-10 container"
      data-active-range="0"
      data-range-length={data.length}
      id="section"
    >
      <div className="overflow-hidden p-5 mdmax:p-2 relative">
        <button
          className={[
            'absolute top-1/2 left-0 transform -translate-y-1/2 z-10',
            'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white rounded-full',
            current === 0
              ? 'bg-red-100 cursor-default'
              : 'bg-blue-01 cursor-pointer',
          ].join(' ')}
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className={[
            'absolute top-1/2 right-0 transform -translate-y-1/2 z-10',
            'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white rounded-full',
            current < data.length - 1
              ? 'bg-blue-01 cursor-pointer'
              : 'bg-red-100 cursor-default',
          ].join(' ')}
          onClick={nextSlide}
        >
          &#10095;
        </button>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((dataItem, index) => (
            <div key={index} className="w-full flex-none px-2">
              <div className="md:w-1/4 w-full h-[600px] mb-8 mx-auto">
                <Image
                  extern={true}
                  src={dataItem.image}
                  alt="image"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <p>{dataItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-[0.625rem] justify-center">
        {Array.from({ length: data.length }).map((_, idx) => (
          <button
            key={idx}
            id={`${idx}`}
            className="size-[0.9375rem] border-[0.125rem] rounded-full border-gray-400"
            onClick={() => handleDotClick(idx)}
          >
            {current === idx && (
              <span className="size-full bg-red-700 block rounded-full pointer-events-none" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
