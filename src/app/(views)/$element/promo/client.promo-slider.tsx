'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import useScreenWidth from '@/lib/hook/useScreenWidth';
import { handleurl } from '@/lib/functions/client/handle-url';
import { useEnv } from '@/lib/hook/useEnv';

const getSlideToShow = (screenWidth: number) => {
  if (!screenWidth) return 3;

  if (screenWidth > 1200) {
    return 2;
  } else if (screenWidth <= 1200 && screenWidth >= 768) {
    return 2;
  } else {
    return 2;
  }
};

export default function CE_PromoSlider({
  data,
  linkPromo,
}: {
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
  const { drupalUrl } = useEnv();
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide < data.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToScroll);
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
  return (
    <>
      <div>
        <div className="w-full flex justify-center px-5 my-10">
          {/* WEB section */}
          <div className="w-full h-[50vh] hidden 2xl:flex flex-row justify-center">
            <div className="basis-20 flex justify-center items-center">
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                  currentSlide === 0
                    ? 'text-opacity-10 cursor-default'
                    : 'cursor-pointer',
                ].join(' ')}
                onClick={prevSlide}
              >
                &#10094;
              </button>
            </div>
            <div className="overflow-hidden basis-9/12 flex justify-center">
              <div
                className="w-full py-10 flex justify-start items-center space-x-5 transition-all ease-in-out duration-300 "
                style={{
                  transform: `translateX(-${currentSlide * (53 / slidesToShow)}%)`,
                }}
              >
                {data?.map((item, index) => (
                  <Link
                    href={handleurl(`promo-detail/${item?.nid ?? ''}`)}
                    key={index}
                    className="group relative overflow-hidden w-[25%] h-[400px] flex-none flex flex-col justify-center items-center bg-center cursor-pointer"
                  >
                    <div className="min-w-80 h-[450px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                      <div
                        className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                        style={{
                          backgroundImage: `url(${drupalUrl}${item?.image ?? ''})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-full bg-white h-52 mt-3 relative overflow-hidden">
                        <div className="">
                          <h1 className="text-lg text-[#C70740] line-clamp-2 ">
                            {item?.title}
                          </h1>
                        </div>
                        <div className="pt-2">
                          <h1 className={` text-black text-base font-light`}>
                            {formatDate(item?.startDate ?? '')} -{' '}
                            {formatDate(item?.endDate ?? '')}
                          </h1>
                          <h1 className={` text-black text-base font-light`}>
                            {item?.label}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="basis-20 flex justify-center items-center">
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                  currentSlide >= data?.length - 1 - slidesToShow
                    ? 'cursor-default text-opacity-10 '
                    : ' cursor-pointer',
                ].join(' ')}
                onClick={nextSlide}
              >
                &#10095;
              </button>
            </div>
          </div>

          {/* TAB section */}
          <div className="w-full hidden md:flex 2xl:hidden justify-center px-5">
            <div className="w-full h-[50vh] flex flex-row justify-center">
              <div className="basis-20 flex justify-center items-center">
                <button
                  className={[
                    'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                    currentSlide === 0
                      ? 'text-opacity-10 cursor-default'
                      : 'cursor-pointer',
                  ].join(' ')}
                  onClick={prevSlide}
                >
                  &#10094;
                </button>
              </div>
              <div className="overflow-hidden basis-full flex justify-center ">
                <div
                  className="w-full flex justify-start items-center space-x-5 transition-all ease-in-out duration-300 "
                  style={{
                    transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                  }}
                >
                  {data?.map((item, index) => (
                    <Link
                      href={handleurl(`promo-detail/${item?.nid ?? ''}`)}
                      key={index}
                      className="group relative overflow-hidden w-[48%] h-[500px] flex-none flex flex-col justify-center items-center bg-center cursor-pointer"
                    >
                      <div className="min-w-80 h-[350px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                        <div
                          className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100 mb-2"
                          style={{
                            backgroundImage: `url(${drupalUrl}${item?.image ?? ''})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                        <div className="w-full h-full mt-10 relative overflow-hidden">
                          <div className="">
                            <h1 className="text-base text-[#C70740] line-clamp-1 ">
                              {item?.title}
                            </h1>
                          </div>
                          <div className="">
                            <h1 className={` text-black text-base font-light`}>
                              {formatDate(item?.startDate ?? '')} -{' '}
                              {formatDate(item?.endDate ?? '')}
                            </h1>
                            <h1 className={` text-black text-base font-light`}>
                              {item?.label}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="basis-20 flex justify-center items-center">
                <button
                  className={[
                    'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                    currentSlide >= data?.length - 1 - slidesToShow
                      ? 'cursor-default text-opacity-10 '
                      : ' cursor-pointer',
                  ].join(' ')}
                  onClick={nextSlide}
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>

          {/* Mobile section */}
          <div className="w-full flex md:hidden justify-center px-5">
            <div className="w-full h-[50vh] flex flex-row justify-center">
              <div className="basis-20 flex justify-center items-center">
                <button
                  className={[
                    'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                    currentSlide === 0
                      ? 'text-opacity-10 cursor-default'
                      : 'cursor-pointer',
                  ].join(' ')}
                  onClick={prevSlide}
                >
                  &#10094;
                </button>
              </div>
              <div className="overflow-hidden basis-full flex justify-center ">
                <div
                  className="w-full flex justify-start transition-all ease-in-out duration-300 "
                  style={{
                    transform: `translateX(-${currentSlide * (200 / slidesToShow)}%)`,
                  }}
                >
                  {data?.map((item, index) => (
                    <Link
                      href={handleurl(`promo-detail/${item?.nid ?? ''}`)}
                      key={index}
                      className="group relative overflow-hidden w-full h-[500px] flex-none flex flex-col justify-center bg-center cursor-pointer "
                    >
                      <div className="min-w-80 h-[500px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                        <div
                          className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100 mb-2"
                          style={{
                            backgroundImage: `url(${drupalUrl}${item?.image ?? ''})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                        <div className="w-full h-full mt-10 relative overflow-hidden px-2">
                          <div className="w-11/12">
                            <h1 className="text-base text-[#C70740] line-clamp-1">
                              {item?.title}
                            </h1>
                          </div>
                          <div className="">
                            <h1 className={` text-black text-base font-light`}>
                              {formatDate(item?.startDate ?? '')} -{' '}
                              {formatDate(item?.endDate ?? '')}
                            </h1>
                            <h1 className={` text-black text-base font-light`}>
                              {item?.label}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="basis-20 flex justify-center items-center">
                <button
                  className={[
                    'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                    currentSlide >= data?.length - 1 - slidesToShow
                      ? 'cursor-default text-opacity-10 '
                      : ' cursor-pointer',
                  ].join(' ')}
                  onClick={nextSlide}
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link
          href={`${handleurl(linkPromo ?? '')}`}
          className="uppercase w-full h-fit flex justify-center items-center text-[#79B0DF] hover:underline "
        >
          temukan promosi lainnya <span>&#10095;</span>
        </Link>
      </div>
    </>
  );
}
