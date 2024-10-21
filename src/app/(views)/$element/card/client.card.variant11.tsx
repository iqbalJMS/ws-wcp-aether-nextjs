'use client';

import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant11Props = {
  title?: string;
  column?: string;
  data: {
    title: string;
    description: string;
    image: string;
  }[];
};

export default function CE_CardVariant11({
  title,
  data,
  column,
}: T_CardVariant11Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        {title && (
          <div className="mb-10">
            <div className="text-3xl font-semibold ">
              {parseHTMLToReact(title)}
            </div>
          </div>
        )}
        <div className="flex flex-wrap justify-center -mx-5">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-1/${column} mdmax:w-full flex-none px-5 mb-10`}
              >
                <div className="px-10 text-center hover:shadow-md p-5 rounded-xl">
                  {item?.image && (
                    <div className="w-[5rem] mb-5 inline-block">
                      <Image
                        extern={false}
                        src={item?.image ?? ''}
                        alt="image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {item?.title && (
                    <div className="text-lg text-blue-01 font-semibold text-center">
                      {parseHTMLToReact(item?.title)}
                    </div>
                  )}
                  {item?.description && (
                    <div className="text-sm text-black text-opacity-50 text-center">
                      {parseHTMLToReact(item?.description)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
