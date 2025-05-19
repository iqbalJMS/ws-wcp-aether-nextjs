'use server';

import React from 'react';
import Link from '@/lib/element/global/link';

import { T_PortletProps } from '@/app/(views)/$element/types/portlet';

import { handleurl } from '@/lib/functions/client/handle-url';
import { BASE_URL } from '@/app/(views)/$constant';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type Alignment = 'left' | 'center' | 'right' | 'justify';

export default async function SE_PortletVariant02({
  title,
  subtitle,
  buttonItems,
  bgImage,
  variantLayout,
  bgExtern,
  headerAlignment,
}: Omit<T_PortletProps, 'variant'> & { headerAlignment?: Alignment }) {
  const background =
    bgImage && !bgExtern
      ? `${BASE_URL}/api/files/?path=${bgImage}`
      : `${bgImage}`;

  const hasVisibleButtons = buttonItems?.some(
    (item) => item.buttonText && item.buttonCta
  );

  return (
    <section className="relative mb-6">
      <div
        className={`relative w-full bg-cover bg-no-repeat ${
          variantLayout === 'rounded_corneer'
            ? 'rounded-br-[20rem] mdmax:rounded-br-[7rem] overflow-hidden'
            : ''
        } ${variantLayout === 'large' ? 'md:h-[40rem] h-[20rem]' : 'h-[20rem]'}`}
        style={{
          backgroundImage: `${background ? `url('${background}')` : '/web/guest/images/why-us/bg-image.jpg'}`,
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
          {headerAlignment === 'right' ? (
            <div className="w-full max-w-[700px] ml-auto mr-0">
              <div className="flex flex-col gap-4 items-start text-left">
                {title && (
                  <div className="text-white font-semibold text-3xl">
                    {parseHTMLToReact(title)}
                  </div>
                )}
                {subtitle && (
                  <div className="text-white font-normal text-xl leading-9">
                    {parseHTMLToReact(subtitle)}
                  </div>
                )}
                {hasVisibleButtons && (
                  <div className="flex flex-wrap gap-4 justify-start">
                    {buttonItems?.map(({ buttonText, buttonCta }, index) =>
                      buttonText && buttonCta ? (
                        <Link href={handleurl(buttonCta)} extern key={index}>
                          <button className="font-normal text-sm text-white rounded-full md:py-4 py-2 px-6 w-fit bg-orange-400 hover:bg-orange-500">
                            {buttonText}
                          </button>
                        </Link>
                      ) : null
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className={`
                w-full flex flex-col gap-4
                ${headerAlignment === 'center' ? 'items-center text-center' : ''}
                ${headerAlignment === 'left' ? 'items-start text-left' : ''}
                ${headerAlignment === 'justify' ? 'items-stretch text-justify' : ''}
              `}
            >
              {title && (
                <div className={`text-white font-semibold text-3xl ${headerAlignment === 'left' ? 'max-w-[55%] break-words' : 'lg:w-1/2 w-full'}`}>
                  {parseHTMLToReact(title)}
                </div>
              )}
              {subtitle && (
               <div className={`text-white font-normal text-xl leading-9 ${headerAlignment === 'left' ? 'max-w-[55%] break-words' : ''}`}>
                  {parseHTMLToReact(subtitle)}
                </div>
              )}
              {hasVisibleButtons && (
                <div
                  className={`flex flex-wrap gap-4
                    ${headerAlignment === 'center' ? 'justify-center' : ''}
                    ${headerAlignment === 'left' || headerAlignment === 'justify' ? 'justify-start' : ''}
                  `}
                >
                  {buttonItems?.map(({ buttonText, buttonCta }, index) =>
                    buttonText && buttonCta ? (
                      <Link href={handleurl(buttonCta)} extern key={index}>
                        <button className="font-normal text-sm text-white rounded-full md:py-4 py-2 px-6 w-fit bg-orange-400 hover:bg-orange-500">
                          {buttonText}
                        </button>
                      </Link>
                    ) : null
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {variantLayout === 'rounded_corneer' && (
        <div className="absolute left-0 top-0 w-full h-full bg-gray-300 mt-4 -z-10 rounded-br-[20rem] mdmax:rounded-br-[7rem]" />
      )}
    </section>
  );
}
