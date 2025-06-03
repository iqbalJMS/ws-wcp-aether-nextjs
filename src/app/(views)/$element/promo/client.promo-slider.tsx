'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import useScreenWidth from '@/lib/hook/useScreenWidth';
import { handleurl } from '@/lib/functions/client/handle-url';
import { useEnv } from '@/lib/hook/useEnv';

const getSlideToShow = (screenWidth: number) => {
  if (!screenWidth) return 4;

  if (screenWidth >= 1536) {
    // 2xl breakpoint
    return 4;
  } else if (screenWidth >= 768 && screenWidth < 1536) {
    // md to xl
    return 2;
  } else {
    return 1; // mobile
  }
};

export default function CE_PromoSlider({
  title,
  subtitle,
  data,
  linkPromo,
}: {
  title: string;
  subtitle: string;
  data: Array<{
    image: string;
    nid: number;
    title: string;
    startDate: string;
    endDate: string;
    label: string;
  }>;
  linkPromo: string;
}) {
  const { baseUrl } = useEnv();
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);
  const slidesToScroll = 1;

  const maxSlide = Math.max(0, data.length - slidesToShow);

  const nextSlide = () => {
    if (currentSlide < maxSlide) {
      setCurrentSlide(Math.min(currentSlide + slidesToScroll, maxSlide));
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(Math.max(currentSlide - slidesToScroll, 0));
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getTransformPercentage = () => {
    if (screenWidth >= 1536) {
      return currentSlide * 25;
    } else if (screenWidth >= 768) {
      return currentSlide * 50;
    } else {
      return currentSlide * 100;
    }
  };

  const NavigationButton = ({ direction, onClick, disabled }: { 
    direction: 'prev' | 'next';
    onClick: () => void;
    disabled: boolean;
  }) => (
    <button
      className={[
        'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
        disabled ? 'text-opacity-10 cursor-default' : 'cursor-pointer',
      ].join(' ')}
      onClick={onClick}
    >
      {direction === 'prev' ? '‹' : '›'}
    </button>
  );

  const SlideItem = ({ item, index, className }: { 
    item: any; 
    index: number; 
    className: string;
  }) => (
    <Link
      href={handleurl(`promo-detail/${item?.nid ?? ''}`)}
      key={index}
      className={`group relative overflow-hidden ${className} flex-none flex flex-col justify-center items-center bg-center cursor-pointer`}
    >
      <div className={`w-full ${screenWidth < 768 ? 'h-[400px]' : screenWidth >= 1536 ? 'h-[350px]' : 'h-[280px]'} flex-none flex flex-col justify-end items-center relative overflow-hidden`}>
        <div
          className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100 mb-2"
          style={{
            backgroundImage: `url(${baseUrl}/api/files/?path=${item?.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className={`w-full ${screenWidth >= 1536 ? 'bg-white h-36 mt-3' : 'h-full mt-10'} relative overflow-hidden ${screenWidth < 768 ? 'px-2' : ''}`}>
          <div className={screenWidth < 768 ? 'w-11/12' : ''}>
            <h1 className="text-base text-[#C70740] line-clamp-2 leading-tight break-words hyphens-auto">
              {item?.title}
            </h1>
          </div>
          <div className={screenWidth >= 1536 ? 'pt-2' : ''}>
            <h1 className="text-sm font-light leading-tight break-words">
              {formatDate(item?.startDate ?? '')} -{' '}
              {formatDate(item?.endDate ?? '')}
            </h1>
            <h1 className="text-black text-base font-light leading-tight break-words line-clamp-2">
              {item?.label}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );

  const getContainerClasses = () => {
    if (screenWidth >= 1536) {
      return {
        container: "w-full h-[45vh] flex flex-row justify-center",
        wrapper: "overflow-hidden basis-9/12 flex justify-center",
        slides: "w-full py-10 flex justify-start items-center space-x-2 transition-all ease-in-out duration-300",
        itemWidth: "w-[24.5%]"
      };
    } else if (screenWidth >= 768) {
      return {
        container: "w-full h-[40vh] flex flex-row justify-center",
        wrapper: "overflow-hidden basis-full flex justify-center",
        slides: "w-full flex justify-start items-center space-x-5 transition-all ease-in-out duration-300",
        itemWidth: "w-[48%]"
      };
    } else {
      return {
        container: "w-full h-[45vh] flex flex-row justify-center",
        wrapper: "overflow-hidden basis-full flex justify-center",
        slides: "w-full flex justify-start transition-all ease-in-out duration-300",
        itemWidth: "w-full"
      };
    }
  };

  const classes = getContainerClasses();

  return (
    <>
      <div>
        <div className="text-center mb-8 px-5">
          <h2 className="text-3xl font-bold text-[#C70740] mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="w-full flex justify-center px-5 my-10">
          <div className={classes.container}>
            <div className="basis-20 flex justify-center items-center">
              <NavigationButton
                direction="prev"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              />
            </div>

            <div className={classes.wrapper}>
              <div
                className={classes.slides}
                style={{
                  transform: `translateX(-${getTransformPercentage()}%)`,
                }}
              >
                {data?.map((item, index) => (
                  <SlideItem
                    key={index}
                    item={item}
                    index={index}
                    className={classes.itemWidth}
                  />
                ))}
              </div>
            </div>

            <div className="basis-20 flex justify-center items-center">
              <NavigationButton
                direction="next"
                onClick={nextSlide}
                disabled={currentSlide >= maxSlide}
              />
            </div>
          </div>
        </div>

        <Link
          href={`${handleurl(linkPromo ?? '')}`}
          className="uppercase w-full h-fit flex justify-center items-center text-[#79B0DF] hover:underline "
        >
          temukan promosi lainnya <span>›</span>
        </Link>
      </div>
    </>
  );
}