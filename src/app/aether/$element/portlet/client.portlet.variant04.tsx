'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';

type T_PromoCardProps = {
  description: string;
  imageUrl: string;
  reverse?: boolean;
};

const CE_PromoCard = ({
  description,
  imageUrl,
  reverse = false,
}: T_PromoCardProps) => {
  return (
    <div
      className={`relative flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} mb-10`}
    >
      <div className="flex-1 flex flex-col justify-center p-6 items-center z-10 bg-white">
        <div
          className={`w-full flex ${reverse ? 'justify-start' : 'justify-end'}`}
        >
          <div
            className={`mb-4 flex justify-center ${reverse ? 'max-w-[650px] ml-10' : 'mr-20 max-w-[650px]'}`}
          >
            {parseHTMLToReact(description)}
          </div>
        </div>
      </div>

      {imageUrl && (
        <div className="flex-1 relative h-[450px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/${imageUrl}`}
            alt={description}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default CE_PromoCard;
