'use server';

import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';
import { T_PortletProps } from '@/app/(views)/$element/types/portlet';

export default async function SE_PortletVariant02({
  title,
  subtitle,
  buttonItems,
  bgImage,
  variantLayout,
  bgExtern,
  headerAlignment,
}: Omit<T_PortletProps, 'variant'>) {

  return (
    <section className="relative mb-6">
      <div
        className={`relative w-full bg-cover bg-no-repeat ${
          variantLayout === 'rounded_corneer'
            ? 'rounded-br-[20rem] mdmax:rounded-br-[7rem] overflow-hidden'
            : ''
        } ${variantLayout === 'large' ? 'md:h-[40rem] h-[20rem]' : 'h-[20rem]'}`}
        style={{
          backgroundImage: bgExtern
            ? `url(${bgImage})`
            : `url(${bgImage ?? '/web/guest/images/why-us/bg-image.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className={`absolute left-0 top-0 w-full h-full bg-gradient-to-b ${
            variantLayout === 'rounded_corneer'
              ? 'from-black to-[#94183d]'
              : 'from-black to-[#014a94]'
          } opacity-40`}
        ></div>

        <div className="container flex flex-col justify-center h-full relative z-10">
          <div
            className={`
              w-full flex flex-col gap-4
              ${headerAlignment === 'center' ? 'items-center text-center' : ''}
              ${headerAlignment === 'right' ? 'items-end text-right' : ''}
              ${headerAlignment === 'justify' ? 'items-stretch text-justify' : ''}
              ${headerAlignment === 'left' ? 'items-start text-left' : ''}
            `}
          >
            {title && (
              <div className="text-white font-semibold text-4xl lg:w-1/2 w-full">
                {parseHTMLToReact(title)}
              </div>
            )}

            {subtitle && (
              <div className="text-white font-normal text-xl leading-9">
                {parseHTMLToReact(subtitle)}
              </div>
            )}

            {buttonItems && (
              <div
                className={`
                  flex flex-wrap gap-4
                  ${headerAlignment === 'center' ? 'justify-center' : ''}
                  ${headerAlignment === 'right' ? 'justify-end' : ''}
                  ${headerAlignment === 'left' || headerAlignment === 'justify' ? 'justify-start' : ''}
                `}
              >
                {buttonItems.map(({ buttonText, buttonCta }, index) => (
                  <Link
                    href={buttonCta ?? 'javascript:void(0)'}
                    extern
                    key={index}
                  >
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

      {variantLayout === 'rounded_corneer' && (
        <div className="absolute left-0 top-0 w-full h-full bg-gray-300 mt-4 -z-10 rounded-br-[20rem] mdmax:rounded-br-[7rem]" />
      )}
    </section>
  );
}
