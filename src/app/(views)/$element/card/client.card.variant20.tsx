'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { handleurl } from '@/lib/functions/client/handle-url';

type T_CardVariant20Props = {
  title: string;
  data: {
    title: string;
    description: string;
    image: string;
    button: {
      title: string;
      link: string;
      extern: boolean;
    };
  }[];
};

export default function CE_CardVariant20({
  title,
  data,
}: T_CardVariant20Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        {title && (
          <div className="text-center mb-10">
            <div className="text-3xl font-semibold ">{title}</div>
          </div>
        )}

        <div className="flex flex-wrap justify-center -mx-5">
          {data?.map((item, index) => {
            const total = data.length;
            let widthClass = 'basis-full max-w-full';
            let imageHeight = 'h-[30rem]';

            if (total <= 2) {
              widthClass = 'w-[35%]';
            } else if (total === 3) {
              widthClass = 'w-1/3';
              imageHeight = 'h-[25rem]';
            } else if (total === 4) {
              widthClass = 'basis-[23%] max-w-[23%] flex-shrink-0';
              imageHeight = 'h-[18rem]';
            }

            return (
              <div
                key={index}
                className={`${widthClass} mdmax:w-full flex-none px-5 mb-10`}
                style={{ marginTop: `${index * 3}rem` }}
              >
                <div>
                  {item?.image && (
                    <div className={`${imageHeight} mb-5`}>
                      <Image
                        extern={false}
                        src={item?.image}
                        alt="image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {item.title && (
                    <div className="text-lg font-semibold mb-2 pl-7">
                      {parseHTMLToReact(item.title)}
                    </div>
                  )}
                  {item.description && (
                    <div className="text-base text-black text-opacity-30 mb-10 pl-7">
                      {parseHTMLToReact(item.description)}
                    </div>
                  )}
                  <div className="pl-7">
                    <Link
                      href={handleurl(item?.button?.link)}
                      extern={item?.button?.extern}
                      target={!item?.button?.extern ? '_self' : ''}
                    >
                      <div className="inline-block bg-orange-400 text-white font-bold py-4 px-10 rounded-full uppercase text-sm">
                        {item?.button?.title}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
