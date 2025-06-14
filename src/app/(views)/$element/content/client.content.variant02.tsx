'use client';

import { T_ContentMainProps } from '@/app/(views)/$constant/types';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

export function CE_ContentVariant02({
  data,
}: Omit<T_ContentMainProps, 'variant'>) {
  return (
    <>
      <div className=" py-10 border-t border-b border-black border-opacity-20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center -mx-2">
            {data?.map((dataItem, index) => (
              <div
                key={index}
                className="w-1/5 mdmax:w-1/3 flex-none px-2 mb-4"
              >
                <Link href={dataItem.button?.link || ''} target="_self">
                  <div className="text-center">
                    {dataItem.image && (
                      <div className="w-10 h-10 inline-block">
                        <Image
                          extern={false}
                          src={dataItem.image}
                          alt="image"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {dataItem.title && (
                      <div className="text-black text-opacity-30 font-semibold">
                        {dataItem.title}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
