'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant05Props = {
  title: string;
  data: Array<{
    title?: string;
    description?: string;
  }>;
};

export default function CE_CardVariant05({ data, title,}: T_CardVariant05Props) {
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
                  {item.description && (
                    <div className="line-clamp-3 text-sm">
                      {parseHTMLToReact(item.description)}
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
