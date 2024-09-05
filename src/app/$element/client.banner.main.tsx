"use client";

import ButtonSecondary from "@/lib/element/global/button.secondary";
import Image from "@/lib/element/global/image";
import { MouseEvent, useEffect, useRef, useState } from "react";



export function CE_BannerMain() {
  const banners = [
    {
      image: 'banner.jpg',
      title: 'Title Dummy 01',
      desc: 'Desc Dummy 01',
      button: 'Open',
      link: 'https://bri.co.id'
    },
    {
      image: 'banner01.jpg',
      title: 'Title Dummy 02',
      desc: 'Desc Dummy 02',
      button: 'Open',
      link: 'https://bri.co.id'
    },
  ]

  const [index, setIndex] = useState(0)

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0); // Reset translate value when a new drag starts
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    setTranslateX(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If dragged enough, change the image
    if (translateX > 50) {
      goToPrevious();
    } else if (translateX < -50) {
      goToNext();
    }

    setTranslateX(0); // Reset translate after slide
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  return (
    <>
      <div className="overflow-hidden relative">
        <div 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
          className="overflow-hidden relative rounded-br-[14rem] h-[50rem] z-10">
          {banners.map((bannerItem, bannerIndex) => {
            return (
              <div 
                key={bannerIndex} 
                className={`
                  absolute w-full h-full top-0 left-0
                  transition-all ease-in-out duration-500
                  ${bannerIndex === index ? '' : 'opacity-0'}
                  `}>
                <div className=" overflow-hidden w-full h-full relative ">
                  <Image 
                    src={`/images/dummy/${bannerItem.image}`} 
                    alt="image" 
                    width={1920} 
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30">
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-30 left-[12rem]">
                    <div>
                      <div className="text-[5rem] font-bold text-white">{bannerItem.title}</div>
                      <div className="text-[3rem] font-bold text-white">{bannerItem.desc}</div>
                      {
                        bannerItem.button && (
                          <div>
                            <ButtonSecondary size="lg" color="red-01" rounded="full" className="px-20">{bannerItem.button}</ButtonSecondary>
                          </div>
                        )
                      }
                      
                    </div>
                  </div>
                </div>
                
              </div>
            )
          })}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 z-30 right-[12rem] ">
          <div className="-mt-10">
            {banners.map((_, bannerIndex) => (
              <div
                key={bannerIndex}
                className={`
                  w-5 h-5 rounded-full bg-red-01 mb-3 
                  ${bannerIndex === index ? '' : 'bg-opacity-50'}
                  cursor-pointer
                `}
                onClick={() => {
                  setIndex(bannerIndex)
                  
                }}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-full absolute top-4 left-4 bg-black rounded-br-[14rem] overflow-hidden bg-opacity-10 z-0"></div>
      </div>
    </>
  );
}
