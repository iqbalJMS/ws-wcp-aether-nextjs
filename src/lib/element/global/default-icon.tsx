'use client';
import React from 'react';
import icon1 from '@/../../public/images/icon-menu/icon1.webp';
import icon2 from '@/../../public/images/icon-menu/icon2.webp';
import icon3 from '@/../../public/images/icon-menu/icon3.webp';
import icon4 from '@/../../public/images/icon-menu/icon4.webp';
import icon5 from '@/../../public/images/icon-menu/icon5.webp';
import icon6 from '@/../../public/images/icon-menu/icon6.webp';
import Image from 'next/image';

export default function CE_DefaultIcon({
  className,
  width,
  height,
}: {
  className: string;
  width: number;
  height: number;
}) {
  const LIST_DEFAULT_ICONS = [
    {
      icon: icon1,
    },
    {
      icon: icon2,
    },
    {
      icon: icon3,
    },
    {
      icon: icon4,
    },
    {
      icon: icon5,
    },
    {
      icon: icon6,
    },
  ];
  return (
    <>
      {LIST_DEFAULT_ICONS?.map((icon, index) => {
        return (
          <div key={index}>
            <Image
              src={icon?.icon}
              width={width}
              height={height}
              alt={`icon-`}
              className={className}
            />
          </div>
        );
      })}
    </>
  );
}
