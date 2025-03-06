'use server';

import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';
import { T_PortletProps } from '@/app/(views)/$element/types/portlet';
import { WIDGET_VARIANT } from '@/app/(views)/$constant/variables';
import { API_BASE_URL } from '@/app/(views)/$constant/variables';

export default async function SE_PortletVariant02({
  title,
  subtitle,
  buttonItems,
  bgImage,
  variantWidget,
  variantLayout,
  bgExtern,
}: Omit<T_PortletProps, 'variant'>) {
  const background =
    bgImage && !bgExtern ? `${API_BASE_URL}/${bgImage}` : `${bgImage}`;

  const hasCenterWidget = variantWidget === WIDGET_VARIANT.variant04;
  const hasLeftWidget = variantWidget === 'div_more_left';

  return (
    <section className="relative mb-6">
      <div
        className={`relative w-full bg-cover bg-no-repeat ${variantLayout === 'rounded_corneer' ? 'rounded-br-[20rem] mdmax:rounded-br-[7rem] overflow-hidden' : ''} ${variantLayout === 'large' ? 'md:h-[40rem] h-[20rem]' : 'h-[20rem]'}`}
        style={{
          backgroundImage: `url(${background ?? '/web/guest/images/no-image.png'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className={`absolute left-0 top-0 w-full h-full bg-gradient-to-b ${variantLayout === 'rounded_corneer' ? 'from-black to-[#94183d]' : 'from-black to-[#014a94]'} opacity-40`}
        ></div>
        <div
          className={`container flex flex-col justify-center h-full relative z-10 ${hasCenterWidget ? 'items-center' : ''}`}
        >
          <div
            className={`${hasLeftWidget ? 'ml-auto md:pr-[200px] pr-0' : ''} ${hasCenterWidget ? 'ml:0 xl:ml-96 flex flex-col items-start' : ''}`}
          >
            <div
              className={`${hasCenterWidget ? 'text-nowrap' : ''} ${hasLeftWidget ? 'mdmax:text-center' : ''} mb-3`}
            >
              {title && (
                <div
                  className={`text-white font-semibold lg:w-1/2 w-full mb-3 ${hasCenterWidget ? 'text-2xl' : 'text-4xl '}`}
                >
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
                className={`flex ${hasCenterWidget ? 'justify-center' : ''} ${hasLeftWidget ? 'mdmax:justify-center' : ''} items-center gap-4`}
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
        </div>
      </div>
      {variantLayout == 'rounded_corneer' && (
        <div
          className={`absolute left-0 top-0 w-full h-full bg-gray-300 mt-4 -z-10 ${variantLayout === 'rounded_corneer' ? 'rounded-br-[20rem] mdmax:rounded-br-[7rem]' : ''}`}
        ></div>
      )}
    </section>
  );
}
