'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant11Props = {
  title?: string;
  column?: string;
  data?: {
    title?: string;
    description?: string;
    image?: string;
    href?: string;
    button?: {
      link?: string;
      href?: string;
    };
  }[];
};

export default function CE_CardVariant11({
  title,
  data,
  column = '2',
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
        <div className="overflow-x-auto lg:overflow-x-hidden whitespace-nowrap">
          <div className="flex w-full h-full lg:justify-center items-end">
            {data?.map((item, index) => {
              return (
                <Link
                  href={item?.button?.link ?? 'javascript:void(0)'}
                  key={index}
                  className={`${column === '1' ? 'flex-1' : `flex-none w-1/${String(column)}`} w-full h-full flex-shrink-${index} px-5 lg:px-0`}
                >
                  <div className="lg:w-60 xl:w-80 h-52 flex flex-col items-center justify-center hover:-translate-y-4 hover:shadow-md duration-200 p-5 rounded-xl">
                    {item?.image && (
                      <div className="w-20 lg:w-full flex justify-center items-center">
                        <Image
                          extern={false}
                          src={item?.image ?? ''}
                          alt="image"
                          width={500}
                          height={500}
                          className="w-full h-full lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-cover"
                        />
                      </div>
                    )}
                    {item?.title && (
                      <div className="text-sm xl:text-base text-blue-01 font-semibold pt-5">
                        {parseHTMLToReact(item?.title)}
                      </div>
                    )}
                    {item?.description && (
                      <div className="w-full lg:w-52 text-sm text-black text-opacity-50 line-clamp-1">
                        {parseHTMLToReact(item?.description)}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
