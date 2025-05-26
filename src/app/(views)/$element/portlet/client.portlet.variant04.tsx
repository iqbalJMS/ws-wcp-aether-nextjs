'use client';

import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { WIDGET_VARIANT } from '@/app/(views)/$constant/variables';
import { useEnv } from '@/lib/hook/useEnv';

type T_PromoCardProps = {
  description1?: string;
  description2?: string;
  imageUrl1?: string;
  imageUrl2?: string;
  variantTwoColumn?: string;
};

const CE_PromoCard = ({
  description1,
  description2,
  imageUrl1,
  imageUrl2,
  variantTwoColumn,
}: T_PromoCardProps) => {
  const { baseUrl } = useEnv();
  const variantTwoColumnClass =
    variantTwoColumn === WIDGET_VARIANT.variant58
      ? 'table-blue-header'
      : 'body';

  const isCenter = variantTwoColumn === WIDGET_VARIANT.variant04;
  const isNoMargin = variantTwoColumn === WIDGET_VARIANT.variant63;

  return (
    <>
      <div
        className={`w-full relative hidden lg:flex ${isNoMargin ? '' : 'container mt-10 lg:mt-20 mb-10 lg:mb-20 '}`}
      >
        {description1 && (
          <div
            className={`flex flex-col items-center z-10 w-1/2 
              ${isCenter ? 'justify-center items-center' : ''}
              ${isNoMargin ? 'justify-center items-center pl-[14.5rem]' : ''}`}
          >
            <div className="w-full flex">
              <div
                className={`mb-2 text-center md:text-left w-full ${variantTwoColumnClass}`}
              >
                {parseHTMLToReact(description1)}
              </div>
            </div>
          </div>
        )}

        {imageUrl1 && (
          <div className="relative h-[450px] w-1/2">
            <div className="relative h-[450px] w-full">
              <Image
                src={`${baseUrl}/api/files/?path=${imageUrl1}`}
                alt={description1 ?? ''}
                fill
                className={`w-full h-full ${isNoMargin ? 'object-cover' : 'object-contain'}`}
              />
            </div>
          </div>
        )}

        {imageUrl2 && (
          <div className="relative h-[450px] w-1/2">
            <div className="relative h-[450px] w-full">
              <Image
                src={`${baseUrl}/api/files/?path=${imageUrl2}`}
                alt={description2 ?? ''}
                fill
                className={`w-full h-full ${isNoMargin ? 'object-cover' : 'object-contain '}`}
              />
            </div>
          </div>
        )}

        {description2 && (
          <div
            className={`flex flex-col md:pl-6 pl-0 z-10 bg-white w-1/2 
              ${isCenter ? 'justify-center items-center' : ''} 
              ${isNoMargin ? 'justify-center items-center pr-[14.5rem]' : ''}`}
          >
            <div className="w-full flex">
              <div
                className={`mb-2 text-center md:text-left w-full ${variantTwoColumnClass}`}
              >
                {parseHTMLToReact(description2)}
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`relative flex flex-col lg:hidden my-10 ${isNoMargin ? '' : 'container'}`}
      >
        {description1 && (
          <div className="flex flex-col justify-center items-center z-10 order-1 my-4">
            <div className="w-full flex">
              <div
                className={`mb-2 w-full px-4 md:px-0 justify-center leading-relaxed 
                  ${variantTwoColumnClass}
                  ${isNoMargin ? 'text-center' : 'text-left '}`}
              >
                {parseHTMLToReact(description1)}
              </div>
            </div>
          </div>
        )}

        {imageUrl1 && (
          <div className="relative h-[250px] w-full">
            <div className="relative h-[250px] w-full">
              <Image
                src={`${baseUrl}/api/files/?path=${imageUrl1}`}
                alt={description1 ?? ''}
                fill
                className={`w-full h-full ${isNoMargin ? 'object-cover' : 'object-contain '}`}
              />
            </div>
          </div>
        )}
        {imageUrl2 && (
          <div className="relative h-[250px] w-full">
            <div className="relative h-[250px] w-full">
              <Image
                src={`${baseUrl}/api/files/?path=${imageUrl2}`}
                alt={description2 ?? ''}
                fill
                className={`w-full h-full ${isNoMargin ? 'object-cover' : 'object-contain '}`}
              />
            </div>
          </div>
        )}

        {description2 && (
          <div className="flex flex-col justify-center items-center z-10 bg-white order-2 my-4">
            <div className="w-full flex">
              <div
                className={`mb-2 w-full px-4 md:px-0 justify-center leading-relaxed  
                  ${variantTwoColumnClass}
                  ${isNoMargin ? 'text-center' : 'text-left '}`}
              >
                {parseHTMLToReact(description2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CE_PromoCard;
