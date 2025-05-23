import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import React from 'react';
import { T_PortletProps } from '@/app/(views)/$element/types/portlet';
import { handleurl } from '@/lib/functions/client/handle-url';
import { BASE_URL } from '@/app/(views)/$constant';

type ButtonItem = {
  buttonText?: string;
  buttonLink?: string;
  buttonCta?: string;
};

export default async function SE_sectionheaderalignment({
  title,
  subtitle,
  buttonItems,
  headerButtonItems,
  bgImage,
  variantLayout,
  bgExtern,
  headerAlignment,
}: Omit<T_PortletProps, 'variant'> & {
  headerButtonItems?: ButtonItem[];
  buttonItems?: ButtonItem[];
}) {
  const visibleButtonItems =
    buttonItems?.filter((item) => item?.buttonText && item?.buttonCta) ?? [];
  const visibleHeaderButtonItems =
    headerButtonItems?.filter((item) => item?.buttonText && item?.buttonCta) ??
    [];

  const shouldCombine =
    visibleButtonItems.length > 0 && visibleHeaderButtonItems.length > 0;
  const combinedButtons = [...visibleHeaderButtonItems, ...visibleButtonItems];

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
            : `url(${bgImage ? `${BASE_URL}/api/files/?path=${bgImage}` : '/web/guest/images/why-us/bg-image.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-30"></div>
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
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-start">
                  {(shouldCombine
                    ? combinedButtons
                    : [...visibleHeaderButtonItems, ...visibleButtonItems]
                  ).map(({ buttonText, buttonCta }, index) => (
                    <Link
                      key={`right-button-${index}`}
                      href={handleurl(buttonCta!)}
                      extern
                    >
                      <button className="font-normal text-sm text-white rounded-full md:py-4 py-2 px-6 w-fit bg-orange-400 hover:bg-orange-500">
                        {buttonText}
                      </button>
                    </Link>
                  ))}
                </div>
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
                <div
                  className={`text-white font-semibold text-3xl ${headerAlignment === 'left' ? 'max-w-[55%] break-words' : 'lg:w-1/2 w-full'}`}
                >
                  {parseHTMLToReact(title)}
                </div>
              )}
              {subtitle && (
                <div
                  className={`text-white font-normal text-xl leading-9 ${headerAlignment === 'left' ? 'max-w-[55%] break-words' : ''}`}
                >
                  {parseHTMLToReact(subtitle)}
                </div>
              )}
              <div
                className={`flex flex-col sm:flex-row flex-wrap gap-4
                ${headerAlignment === 'center' ? 'justify-center' : ''}
                ${headerAlignment === 'left' || headerAlignment === 'justify' ? 'justify-start' : ''}
              `}
              >
                {(shouldCombine
                  ? combinedButtons
                  : [...visibleHeaderButtonItems, ...visibleButtonItems]
                ).map(({ buttonText, buttonCta }, index) => (
                  <Link
                    key={`button-${index}`}
                    href={handleurl(buttonCta!)}
                    extern
                  >
                    <button className="font-normal text-sm text-white rounded-full md:py-4 py-2 px-6 w-fit bg-orange-400 hover:bg-orange-500">
                      {buttonText}
                    </button>
                  </Link>
                ))}
              </div>
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
