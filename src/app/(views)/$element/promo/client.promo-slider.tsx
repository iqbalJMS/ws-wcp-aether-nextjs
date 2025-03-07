'use client';
import React, { useState } from 'react';
import dummyImage from '@/../../public/images/dummy/banner.jpg';
import Link from 'next/link';
import useScreenWidth from '@/lib/hook/useScreenWidth';
// import ArrowRightIcon from '@/lib/element/global/arrow-right-icon';
// import ArrowLeftIcon from '@/lib/element/global/arrow-left-icon';

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
}: {
  data: Array<{
    image: string;
    nid: number;
    title: string;
    startDate: string;
    endDate: string;
    label: string;
  }>;
}) {
  const LIST_DATA = [
    {
      image: dummyImage,
      link: '#',
      title: 'card1',
      period: '21 Februari - 31 Maret',
      label: 'kpr',
    },
    {
      image: dummyImage,
      link: '#',
      title: 'card2',
      period: '21 Februari - 31 Maret',
      label: 'kpr',
    },
    {
      image: dummyImage,
      link: '#',
      title: 'card3',
      period: '21 Februari - 31 Maret',
      label: 'kpr',
    },
    {
      image: dummyImage,
      link: '#',
      title: 'card4',
      period: '21 Februari - 31 Maret',
      label: 'kpr',
    },
    {
      image: dummyImage,
      link: '#',
      title: 'card5',
      period: '21 Februari - 31 Maret',
      label: 'kpr',
    },
    {
      image: dummyImage,
      link: '#',
      title: 'card6',
      period: '21 Februari - 31 Maret',
      label: 'kpr',
    },
    {
      image: dummyImage,
      link: '#',
      title: 'card7',
      period: '21 Februari - 31 Maret',
      label: 'kpr',
    },
    {
      image: dummyImage,
      link: '#',
      title: 'card8',
      period: '21 Februari - 31 Maret',
      label: 'kpr',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();
  const slidesToShow = getSlideToShow(screenWidth);
  const slidesToScroll = 1;

  const nextSlide = () => {
    if (currentSlide < LIST_DATA.length - slidesToShow) {
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
      <div className="w-full flex justify-center px-5 my-10">
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
              {/* <ArrowLeftIcon
                width={40}
                height={40}
                stroke={'#B9AB7D'}
                className={
                  currentSlide === 0 ? 'opacity-50' : 'text-black text-red'
                }
              /> */}
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
                  href={`${item?.nid}`}
                  target="_blank"
                  key={index}
                  className="group relative overflow-hidden w-[25%] h-[400px] flex-none flex flex-col justify-center items-center bg-center cursor-pointer"
                >
                  <div className="min-w-80 h-[450px] flex-none flex flex-col justify-end items-center relative overflow-hidden">
                    <div
                      className="w-full h-full hover:scale-150 duration-300 bg-center transition-all ease-in-out transform-gpu delay-100"
                      style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? ''})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div className="w-full bg-white h-52 mt-3 relative overflow-hidden">
                      <div className="">
                        <h1 className="text-lg text-[#C70740] ">
                          {item?.title}
                        </h1>
                      </div>
                      <div className="pt-2">
                        <h1 className={` text-black text-base font-light`}>
                          {formatDate(item?.startDate)} -{' '}
                          {formatDate(item?.endDate)}
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
                currentSlide >= LIST_DATA?.length - 1 - slidesToShow
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
    </>
  );
}
