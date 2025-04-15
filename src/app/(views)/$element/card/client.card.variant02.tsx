'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { handleurl } from '@/app/(views)/$function/cfn.handle-url';

type T_CardVariant02Props = {
  title?: string;
  data: Array<{
    imagePosition?: 'left' | string;
    title?: string;
    image?: string;
    description?: string;
    button?: {
      title?: string;
      link?: string;
      extern?: boolean;
    };
  }>;
};

export default function CE_CardVariant02({
  data,
  title,
}: T_CardVariant02Props) {
  return (
    <>
      <div className="py-10 container">
        {title && (
          <div className="!font-semibold text-[2.5rem]">
            {parseHTMLToReact(title)}
          </div>
        )}
        <div className="flex flex-wrap -mx-5">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/3 mdmax:w-full flex-none px-5 mb-10"
              >
                <div className="bg-white px-10 pb-10 pt-20 shadow-lg rounded-br-[5rem]">
                  <div
                    className={`mb-10 overflow-hidden ${item?.imagePosition?.includes('left') ? 'w-[6.25rem] h-[6.25rem]' : item?.imagePosition?.includes('center') ? 'w-auto object-contain h-[100] max-w-[167px]' : 'w-full object-contain max-h-[7.5rem]'}`}
                  >
                    <Image
                      extern={false}
                      src={item?.image ?? ''}
                      alt="image"
                      width={1920}
                      height={1080}
                      className={`${item?.imagePosition?.includes('left') ? 'object-contain' : 'object-cover'}`}
                    />
                  </div>
                  <div>
                    {item?.title && (
                      <div className="text-xl font-medium text-blue-02 mb-4">
                        {parseHTMLToReact(item?.title)}
                      </div>
                    )}
                    {item?.description && (
                      <div className="mb-5 text-base text-[#65afdf] h-[6rem] overflow-auto overflow-custom">
                        {parseHTMLToReact(item?.description)}
                      </div>
                    )}
                    <div className="text-right">
                      <Link
                        href={handleurl(item?.button?.link)}
                        extern={item?.button?.extern}
                        target={item?.button?.extern ? '_blank' : ''}
                      >
                        <div className="w-10 h-10 rounded-full hover:text-white hover:bg-[#65afdf]  border border-[#65afdf] border-opacity-80 inline-flex items-center justify-center text-[#65afdf]">
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
