'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { handleurl } from '@/lib/functions/client/handle-url';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEnv } from '@/lib/hook/useEnv';

type T_CardVariant21Props = {
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

export default function CE_CardVariant21({
  title,
  data,
}: T_CardVariant21Props) {
  const { baseUrl } = useEnv();
  const getLayoutConfig = () => {
    const itemCount = data?.length || 0;

    if (itemCount === 1) {
      // Single card centered
      return {
        containerClass: 'flex justify-center w-full',
        itemClass: 'flex-none mx-auto',
        cardClass: 'w-1/2',
        spacing: 'px-0',
      };
    } else if (itemCount === 2) {
      // Two cards with 50/50 split
      return {
        containerClass: 'justify-center',
        itemClass: 'w-1/2',
        cardClass: 'lg:w-72 xl:w-88',
        spacing: 'px-3',
      };
    } else if (itemCount === 3) {
      // Three cards layout
      return {
        containerClass: 'justify-center',
        itemClass: 'w-1/3',
        cardClass: 'lg:w-64 xl:w-80',
        spacing: 'px-2',
      };
    } else {
      // Four or more cards
      return {
        containerClass: 'justify-between',
        itemClass: 'w-1/4',
        cardClass: 'lg:w-56 xl:w-72',
        spacing: 'px-1',
      };
    }
  };

  const { itemClass } = getLayoutConfig();

  return (
    <>
      <div className="py-10 container mx-auto overflow-hidden">
        {title && (
          <div className="mb-10">
            <div className="text-3xl font-semibold ">
              {parseHTMLToReact(title)}
            </div>
          </div>
        )}
        <div className="overflow-x-auto lg:overflow-visible">
          <div className="w-full ${containerClass} flex justify-center items-center">
            {data?.map((item, index) => {
              const isSingleCard = data.length === 1;
              if (isSingleCard) {
                return (
                  <div key={index} className="w-full group flex justify-center">
                    <Link
                      href={handleurl(item?.button?.link)}
                      className="w-full flex justify-center"
                    >
                      <div className="w-1/2 h-72 flex flex-col items-center justify-center duration-300 px-16 py-8 rounded-xl mx-auto cursor-pointer bg-white hover:-translate-y-4 group-hover:bg-blue-700">
                        {item?.image && (
                          <div className="w-24 h-24 flex justify-center items-center mb-4">
                            <Image
                              extern={false}
                              src={`${baseUrl}/api/files/?path=${item.image}`}
                              alt="image"
                              width={500}
                              height={500}
                              className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain filter group-hover:brightness-0 group-hover:invert group-hover:contrast-200 transition-all duration-300"
                            />
                          </div>
                        )}
                        {item?.title && (
                          <div className="text-sm xl:text-base text-blue-01 font-semibold pt-2 text-center group-hover:text-white transition-colors">
                            {parseHTMLToReact(item?.title)}
                          </div>
                        )}
                        {item?.description && (
                          <div className="w-full text-sm lg:text-base text-black text-opacity-50 mt-3 text-center whitespace-normal break-words group-hover:text-white transition-colors">
                            {parseHTMLToReact(item?.description)}
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                );
              }
              return (
                <Link
                  href={handleurl(item?.button?.link)}
                  key={index}
                  className={`${itemClass} group ${isSingleCard ? 'flex justify-center w-full' : ''}`}
                >
                  <div className="${cardClass} h-72 flex flex-col items-center justify-center transition-all duration-300 px-16 py-8 rounded-xl mx-auto cursor-pointer bg-white hover:-translate-y-4 group-hover:bg-blue-700">
                    {item?.image && (
                      <div className="w-24 h-24 flex justify-center items-center mb-4">
                        <Image
                          extern={false}
                          src={`${baseUrl}/api/files/?path=${item.image}`}
                          alt="image"
                          width={500}
                          height={500}
                          className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain filter group-hover:brightness-0 group-hover:invert group-hover:contrast-200 transition-all duration-300"
                        />
                      </div>
                    )}
                    {item?.title && (
                      <div className="text-sm xl:text-base font-semibold pt-2 text-center text-black group-hover:text-white transition-colors">
                        {parseHTMLToReact(item?.title)}
                      </div>
                    )}
                    {item?.description && (
                      <div className="w-full text-sm lg:text-base text-black text-opacity-50 mt-3 text-center whitespace-normal break-words group-hover:text-white transition-colors">
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
