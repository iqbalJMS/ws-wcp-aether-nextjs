'use client';

import { T_CarouselMainProps } from '@/app/(views)/$constant/types';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useScreenWidth from '@/lib/hook/useScreenWidth';
import { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';
import { handleurl } from '@/lib/functions/client/handle-url';
import { useEnv } from '@/lib/hook/useEnv';

export function CE_CarouselVariant01({
  title,
  button,
  data,
}: Omit<T_CarouselMainProps, 'variant'>) {
  const { baseUrl } = useEnv();
  const screenWidth = useScreenWidth();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = screenWidth > 768 ? 3 : 2;
  const slidesToScroll = 1;

  // Enhanced drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [dragSpeed, setDragSpeed] = useState(0);
  const [lastDragTime, setLastDragTime] = useState(0);
  const [lastDragX, setLastDragX] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(300);

  // Calculate drag threshold based on screen width
  const dragThreshold = Math.max(35, screenWidth * 0.05); // 5% of screen width or minimum 35px

  // Navigation functions
  const nextSlide = () => {
    if (data && currentSlide < data.length - slidesToShow) {
      setTransitionDuration(300);
      setCurrentSlide(currentSlide + slidesToScroll);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setTransitionDuration(300);
      setCurrentSlide(currentSlide - slidesToScroll);
    }
  };

  // Reset transition duration after slide change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDragging) {
        setTranslateX(0);
      }
    }, transitionDuration);

    return () => clearTimeout(timer);
  }, [currentSlide, isDragging, transitionDuration]);

  // Handle drag events for mouse
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setLastDragX(e.clientX);
    setLastDragTime(Date.now());
    setTranslateX(0);
    setTransitionDuration(0); // Remove transition during drag
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const deltaX = currentX - startX;
    const currentTime = Date.now();
    const timeDiff = currentTime - lastDragTime;

    // Calculate drag speed (pixels per millisecond)
    if (timeDiff > 0) {
      const instantSpeed = Math.abs(currentX - lastDragX) / timeDiff;
      setDragSpeed(instantSpeed);
    }

    setLastDragX(currentX);
    setLastDragTime(currentTime);

    // Apply resistance at edges
    if (
      (currentSlide === 0 && deltaX > 0) ||
      (data && currentSlide >= data.length - slidesToShow && deltaX < 0)
    ) {
      setTranslateX(deltaX * 0.3); // Add resistance
    } else {
      setTranslateX(deltaX);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Calculate appropriate transition duration based on drag speed
    const speedFactor = Math.min(Math.max(dragSpeed * 500, 150), 400);
    setTransitionDuration(speedFactor);

    // Apply momentum effect
    const momentum = dragSpeed * 120; // Amplify the effect of speed
    const effectiveTranslateX =
      translateX + (translateX > 0 ? momentum : -momentum);

    if (effectiveTranslateX > dragThreshold) {
      prevSlide();
    } else if (effectiveTranslateX < -dragThreshold) {
      nextSlide();
    } else {
      // Snap back to current position
      setTranslateX(0);
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setLastDragX(e.touches[0].clientX);
    setLastDragTime(Date.now());
    setTranslateX(0);
    setTransitionDuration(0); // Remove transition during drag
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const currentTime = Date.now();
    const timeDiff = currentTime - lastDragTime;

    // Calculate drag speed (pixels per millisecond)
    if (timeDiff > 0) {
      const instantSpeed = Math.abs(currentX - lastDragX) / timeDiff;
      setDragSpeed(instantSpeed);
    }

    setLastDragX(currentX);
    setLastDragTime(currentTime);

    // Apply resistance at edges
    if (
      (currentSlide === 0 && deltaX > 0) ||
      (data && currentSlide >= data.length - slidesToShow && deltaX < 0)
    ) {
      setTranslateX(deltaX * 0.3); // Add resistance
    } else {
      setTranslateX(deltaX);
    }

    // Prevent page scrolling when dragging carousel
    if (Math.abs(deltaX) > 10) {
      e.preventDefault();
    }
  };

  return (
    <section className="container flex flex-col lg:flex-row gap-7 items-center lg:py-12 py-8">
      <div className="basis-auto lg:max-w-[300px] w-full flex flex-col lg:items-start items-center">
        {title && (
          <div className="text-[42px] font-semibold leading-[3rem] lg:mb-5 mb-3">
            {parseHTMLToReact(title)}
          </div>
        )}
        <div className="items-center gap-5 mdmax:gap-1  lg:flex hidden">
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

      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        ref={sliderRef}
        className={`overflow-hidden w-full p-5 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
      >
        <div
          ref={carouselRef}
          className="w-full flex -mx-2"
          style={{
            transform: `translateX(calc(-${currentSlide * (100 / slidesToShow)}% + ${translateX}px))`,
            transition: `transform ${isDragging ? 0 : transitionDuration}ms cubic-bezier(0.25, 1, 0.5, 1)`,
            willChange: 'transform',
          }}
        >
          {data?.map((dataItem, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[17rem] min-w-[275px] mx-2"
              draggable={false}
            >
              <Link
                href={handleurl(dataItem?.button?.link)}
                target="_self"
                draggable={false}
              >
                <div className="p-4 shadow-lg py-10 px-5 h-full flex flex-col">
                  {dataItem?.image && (
                    <div className="w-full h-[15rem] mb-4">
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
                  <div className="flex flex-col flex-grow justify-between">
                    {dataItem?.title && (
                      <div className="text-red-01 font-semibold mb-5">
                        {parseHTMLToReact(dataItem?.title)}
                      </div>
                    )}
                    {dataItem?.desc && (
                      <div className="text-sm font-regular font-poppins h-[4rem] overflow-auto">
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

      {/* Mobile pagination dots */}
      <div className="lg:hidden flex items-center gap-[0.625rem] justify-center">
        {data &&
          Array.from({ length: data.length }).map((_, idx) => (
            <button
              key={idx}
              id={`${idx}`}
              className="size-[0.9375rem] border-[0.125rem] rounded-full border-gray-400"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentSlide === idx ? 'true' : 'false'}
            >
              {currentSlide === idx && (
                <span className="size-full bg-red-700 block rounded-full pointer-events-none" />
              )}
            </button>
          ))}
      </div>
    </section>
  );
}
