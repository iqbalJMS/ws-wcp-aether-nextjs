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

  const getTransformPercentage = (screenWidth: number, currentSlide: number) => {
    if (screenWidth >= 1536) {
      return currentSlide * 25;
    } else if (screenWidth >= 768) {
      return currentSlide * 50;
    } else {
      return currentSlide * 100;
    }
  };

  return (
    <>
      <div>
        <div className="text-center mb-8 px-5">
          <h2 className="text-3xl font-bold text-[#C70740] mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        <div className="w-full flex justify-center px-5 my-10">
          {/* WEB section */}
          <div className="w-full h-[45vh] hidden 2xl:flex flex-row justify-center">
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
                className="w-full py-10 flex justify-start items-center space-x-2 transition-all ease-in-out duration-300 "
                style={{
                  transform: `translateX(-${getTransformPercentage(screenWidth, currentSlide)}%)`,
                }}
              >
                {data?.map((item, index) => (
                  <Link
                    href={handleurl(`promo-detail/${item?.nid ?? ''}`)}
                    key={index}
                    className="group relative overflow-hidden w-[24.5%] flex-none flex flex-col justify-center items-center bg-center cursor-pointer"
                  >
                    <div className="w-full h-[350px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                      <div
                        className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                        style={{
                          backgroundImage: `url(${baseUrl}/api/files/?path=${item?.image})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-full bg-white h-36 mt-3 relative overflow-hidden">
                        <div className="">
                          <h1 className="text-base text-[#C70740] line-clamp-2 leading-tight break-words hyphens-auto">
                            {item?.title}
                          </h1>
                        </div>
                        <div className="pt-2">
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
                ))}
              </div>
            </div>
            <div className="basis-20 flex justify-center items-center">
              <button
                className={[
                  'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                  currentSlide >= maxSlide
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
            <div className="w-full h-[40vh] flex flex-row justify-center">
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
                    transform: `translateX(-${getTransformPercentage(screenWidth, currentSlide)}%)`,
                  }}
                >
                  {data?.map((item, index) => (
                    <Link
                      href={handleurl(`promo-detail/${item?.nid ?? ''}`)}
                      key={index}
                      className="group relative overflow-hidden w-[48%] flex-none flex flex-col justify-center items-center bg-center cursor-pointer"
                    >
                      <div className="w-full h-[280px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                        <div
                          className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100 mb-2"
                          style={{
                            backgroundImage: `url(${baseUrl}/api/files/?path=${item?.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                        <div className="w-full h-full mt-10 relative overflow-hidden">
                          <div className="">
                            <h1 className="text-base text-[#C70740] line-clamp-2 leading-tight break-words hyphens-auto">
                              {item?.title}
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="text-black text-sm font-light leading-tight break-words">
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
                  ))}
                </div>
              </div>
              <div className="basis-20 flex justify-center items-center">
                <button
                  className={[
                    'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                    currentSlide >= maxSlide
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
            <div className="w-full h-[45vh] flex flex-row justify-center">
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
                    transform: `translateX(-${getTransformPercentage(screenWidth, currentSlide)}%)`,
                  }}
                >
                  {data?.map((item, index) => (
                    <Link
                      href={handleurl(`promo-detail/${item?.nid ?? ''}`)}
                      key={index}
                      className="group relative overflow-hidden w-full h-[400px] flex-none flex flex-col justify-center bg-center cursor-pointer "
                    >
                      <div className="w-full h-[400px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                        <div
                          className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100 mb-2"
                          style={{
                            backgroundImage: `url(${baseUrl}/api/files/?path=${item?.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                        <div className="w-full h-full mt-10 relative overflow-hidden px-2">
                          <div className="w-11/12">
                            <h1 className="text-base text-[#C70740] line-clamp-2 leading-tight break-words hyphens-auto">
                              {item?.title}
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="text-black text-sm font-light leading-tight break-words">
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
                  ))}
                </div>
              </div>
              <div className="basis-20 flex justify-center items-center">
                <button
                  className={[
                    'w-12 h-12 mdmax:w-8 mdmax:h-8 text-white bg-[#B8043A]',
                    currentSlide >= maxSlide
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