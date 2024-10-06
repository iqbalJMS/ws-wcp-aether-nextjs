'use server';

import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';
import { T_PortletProps } from '@/app/aether/$element/types/portlet';
import { WIDGET_VARIANT } from '@/app/aether/$constant/variables';

export default async function SE_PortletVariant02({
  title,
  subtitle,
  buttonItems,
  bgImage,
  variantWidget,
  variantLayout,
}: Omit<T_PortletProps, 'variant'>) {
  const background = bgImage
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/${bgImage}`
    : '';

  const hasCenterWidget = variantWidget === WIDGET_VARIANT.variant04;

  return (
    <section
      className={`relative h-[25.75rem] w-full bg-cover bg-no-repeat ${variantLayout === 'rounded-corners' ? 'rounded-br-[14rem] mdmax:rounded-br-[7rem]' : ''}`}
      style={{
        backgroundImage: `url(${background ?? '/images/no-image.png'})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-[#014a94] opacity-40"></div>
      <div
        className={`${hasCenterWidget ? 'justify-center' : ''} container mx-auto flex flex-col items-center justify-start`}
      >
        <div className="mb-3 max-w-[34.125rem]">
          {title && (
            <div className="text-white text-[1.75rem] font-semibold mb-3">
              {parseHTMLToReact(title)}
            </div>
          )}
          {subtitle && (
            <div className="text-white font-normal text-xl leading-9">
              {parseHTMLToReact(subtitle)}
            </div>
          )}
        </div>
        {buttonItems && (
          <div
            className={`flex ${hasCenterWidget ? 'justify-center' : ''} items-center gap-4 justify-start`}
          >
            {buttonItems.map(({ buttonText, buttonLink }, index) => (
              <Link href={buttonLink ?? ''} extern key={index}>
                <button className="font-normal text-sm text-white rounded-full md:py-4 py-2 px-6 w-fit bg-orange-400 hover:bg-orange-500">
                  {buttonText}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
