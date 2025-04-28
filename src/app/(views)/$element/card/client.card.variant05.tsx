'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant05Props = {
  title: string;
  data: Array<{
    title?: string;
    description?: string;
  }>;
};

export default function CE_CardVariant05({
  data,
  title,
}: T_CardVariant05Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        {title && (
          <div className="mb-8 text-2xl font-bold">
            {parseHTMLToReact(title)}
          </div>
        )}
        <div className="flex flex-wrap -mx-5">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/4 mdmax:w-full flex-none px-5 mb-10"
              >
                <div>
                  <div className="text-[3rem] leading-[3rem] text-orange-01 font-semibold mb-4">
                    0{index + 1}
                  </div>
                  {item.title && (
                    <div className="text-lg  font-semibold mb-1">
                      {parseHTMLToReact(item.title)}
                    </div>
                  )}
                  {item.description && (() => {
                    const words = item.description.trim().split(/\s+/);
                    const isLong = words.length > 12;
                    const firstPart = words.slice(0, 12).join(' ');
                    const restPart = words.slice(12).join(' ');

                    return (
                      <div className="text-gray-700 relative inline">
                        {parseHTMLToReact(isLong ? firstPart : item.description)}
                        {isLong && (
                          <span className="text-black-600 underline cursor-pointer ml-1 group relative">
                            ...selengkapnya
                            <div className="absolute z-10 w-64 p-2 mt-2 text-sm text-black bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {parseHTMLToReact(restPart)}
                            </div>
                          </span>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
