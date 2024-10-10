'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { Tabs } from '@/lib/element/global/tabs';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useMemo, useState } from 'react';

type T_CardVariant17Props = {
  data: {
    title: string;
    field_column: {
      title: string;
      image: string;
      description: string;
      button: {
        title: string;
        link: string;
        extern: boolean;
      };
    }[];
  }[];
};

export default function CE_CardVariant17({ data }: T_CardVariant17Props) {
  const [tab, setTab] = useState(data.at(0)?.title);
  const list = useMemo(() => {
    return data.find((item) => item.title === tab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);
  return (
    <>
      <div className=" py-10 container">
        <div className="mb-5">
          <Tabs
            list={data?.map((item) => {
              return {
                title: item.title,
                slug: item.title,
              };
            })}
            value={tab}
            onChange={(value) => setTab(value)}
          />
        </div>
        <div className="flex flex-wrap -mx-5">
          {list?.field_column.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/3 mdmax:w-full flex-none px-5 mb-10"
              >
                <div className="bg-white px-10 pb-10 pt-20 shadow-lg rounded-br-[5rem]">
                  <div className="w-full h-[7.5rem] mb-10">
                    <Image
                      extern={false}
                      src={item.image}
                      alt="image"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    {item.title && (
                      <div className="text-xl font-medium text-blue-02 mb-2">
                        {parseHTMLToReact(item.title)}
                      </div>
                    )}
                    {item.description && (
                      <div className="mb-5 text-base text-blue-01 h-[4.5rem] overflow-auto overflow-custom">
                        {parseHTMLToReact(item.description)}
                      </div>
                    )}
                    <div className="text-right">
                      <Link
                        href={item.button.link}
                        extern={item.button.extern}
                        target={item.button.extern ? '_blank' : ''}
                      >
                        <div className="w-10 h-10 rounded-full border border-blue-01 border-opacity-80 inline-flex items-center justify-center text-blue-01">
                          &#10095;
                        </div>
                      </Link>
                    </div>
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
