'use client';

import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { WIDGET_VARIANT } from '@/app/(views)/$constant/variables';

type T_PromoCardProps = {
  description1?: string;
  description2?: string;
  imageUrl1?: string;
  imageUrl2?: string;
  variantTwoColumn?: string;
};

const CE_PortletVariant08 = ({
  description1,
  description2,
  imageUrl1,
  imageUrl2,
  variantTwoColumn,
}: T_PromoCardProps) => {
  const variantTwoColumnClass =
    variantTwoColumn === WIDGET_VARIANT.variant58
      ? 'table-blue-header'
      : 'body';

  return (
    <>
      <div className="w-full relative hidden lg:flex mt-10 lg:mt-20 mb-10 lg:mb-20">
        {description1 && (
          <div className="flex flex-col items-center justify-center z-10 w-1/2">
            <div className="w-full flex justify-start">
              <div
                className={`mb-2 flex text-center md:text-left w-full md:max-w-[650px] ${variantTwoColumnClass ? `${variantTwoColumnClass}` : 'pl-[200px]'}`}
              >
                {parseHTMLToReact(description1)}
              </div>
            </div>
          </div>
        )}

        {imageUrl1 && (
          <div className="relative h-[600px] w-1/2">
            <div className="relative h-[600px] w-full">
              <Image
                src={imageUrl1}
                alt={description1 ?? ''}
                fill
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        )}

        {imageUrl2 && (
          <div className="relative h-[600px] w-1/2">
            <div className="relative h-[600px] w-full">
              <Image
                src={imageUrl2}
                alt={description2 ?? ''}
                fill
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        )}

        {description2 && (
          <div className="flex flex-col justify-center pl-6 items-center z-10 bg-white w-1/2">
            <div className="w-full flex justify-start">
              <div
                className={`mb-2 flex text-center md:text-left w-full md:max-w-[650px] ${variantTwoColumnClass}`}
              >
                {parseHTMLToReact(description2)}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative flex flex-col lg:hidden my-10">
        {description1 && (
          <div className="flex-1 flex flex-col justify-center pl-6 items-center z-10 order-1">
            <div className="w-full flex justify-start">
              <div
                className={`mb-2 w-full flex px-4 md:px-0 justify-center text-left leading-relaxed md:max-w-[650px] ${variantTwoColumnClass}`}
              >
                {parseHTMLToReact(description1)}
              </div>
            </div>
          </div>
        )}

        {imageUrl1 && (
          <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
            <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full justify-start">
              <Image
                src={imageUrl1}
                alt={description1 ?? ''}
                fill
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        )}

        {imageUrl2 && (
          <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
            <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full justify-end">
              <Image
                src={imageUrl2}
                alt={description2 ?? ''}
                fill
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        )}

        {description2 && (
          <div className="flex-1 flex flex-col justify-center pl-6 items-center z-10 bg-white order-2">
            <div className="w-full flex justify-end">
              <div
                className={`mb-2 w-full flex px-4 md:px-0 justify-center text-left leading-relaxed md:max-w-[650px] ${variantTwoColumnClass}`}
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

export default CE_PortletVariant08;
