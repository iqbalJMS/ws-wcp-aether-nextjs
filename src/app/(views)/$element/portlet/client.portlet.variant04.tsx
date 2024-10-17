'use client';

import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_PromoCardProps = {
  description1: string;
  description2: string;
  imageUrl1?: string;
  imageUrl2?: string;
};

const CE_PromoCard = ({
  description1,
  description2,
  imageUrl1,
  imageUrl2,
}: T_PromoCardProps) => {
  return (
    <div className="relative flex mb-10">
      {description1 && (
        <div className="flex-1 flex flex-col justify-center p-6 items-center z-10 bg-white">
          <div className="w-full flex justify-end">
            <div
              className={`mb-4 flex justify-center text-center md:text-left w-full md:max-w-[650px]`}
            >
              {parseHTMLToReact(description1)}
            </div>
          </div>
        </div>
      )}

      {imageUrl1 && (
        <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
          <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
            <Image
              src={imageUrl1}
              alt={description1}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
      {imageUrl2 && (
        <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
          <div className="md:flex-1 relative md:h-[450px] h-[250px] w-full">
            <Image
              src={imageUrl2}
              alt={description2}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}

      {description2 && (
        <div className="flex-1 flex flex-col justify-center p-6 items-center z-10 bg-white">
          <div className="w-full flex justify-start">
            <div
              className={`mb-4 flex justify-center text-center md:text-left w-full md:max-w-[650px]`}
            >
              {parseHTMLToReact(description2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_PromoCard;
