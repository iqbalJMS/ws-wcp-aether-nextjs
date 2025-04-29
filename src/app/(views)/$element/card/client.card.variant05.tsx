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
                    <div className="text-lg font-semibold mb-1">
                      {parseHTMLToReact(item.title)}
                    </div>
                  )}
                  {item.description && (() => {
                    const words = item.description.trim().split(/\s+/);
                    const isLong = words.length > 17;
                    const firstPart = words.slice(0, 17).join(' ');

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
                          <div className="group inline-block relative ml-1">
                            <span className="text-base text-black-600 underline cursor-pointer">
                              ...selengkapnya
                            </span>
                            <div
                              className="absolute bottom-full left-0 z-50 bg-white border border-gray-200 rounded shadow-lg p-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-150"
                              style={{ 
                                width: '350px',
                                minHeight: '100px',
                                maxHeight: '250px', 
                                overflowY: 'auto',
                                marginBottom: '8px',
                                whiteSpace: 'normal',
                                wordBreak: 'break-word'
                              }}
                            >
                              <div
                                className="text-base text-black w-full"
                                dangerouslySetInnerHTML={{ __html: stripPTags(item.description) }}
                              />
                            </div>
                          </div>
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
