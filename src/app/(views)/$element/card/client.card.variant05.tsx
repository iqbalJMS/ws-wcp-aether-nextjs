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

                    const stripPTags = (html: string) => html.replace(/<\/?p>/g, '');

                    return (
                      <div className="text-gray-700 text-base leading-relaxed">
                        <span
                          className="inline"
                          dangerouslySetInnerHTML={{
                            __html: isLong ? stripPTags(firstPart) : stripPTags(item.description),
                          }}
                        />
                        {isLong && (
                          <span className="inline-block relative group ml-1 text-base text-black-600 underline cursor-pointer whitespace-nowrap align-baseline">
                            ...selengkapnya
                            <div className="absolute left-0 top-full z-10 w-64 p-2 mt-2 text-sm text-black bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span
                                dangerouslySetInnerHTML={{ __html: stripPTags(restPart) }}
                              />
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
