'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { handleurl } from '@/lib/functions/client/handle-url';
import { useEnv } from '@/lib/hook/useEnv';

type T_CardVariant16Props = {
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

export default function CE_CardVariant16({
  title,
  data,
}: T_CardVariant16Props) {
  const { baseUrl } = useEnv();
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
            return (
              <div
                key={index}
                className="w-1/4 mdmax:w-full flex-none px-5 mb-10 mdmax:!mt-0"
                style={{ marginTop: `${index * 5}rem` }}
              >
                <div>
                  {item?.image && (
                    <div className="h-[20rem] mb-5">
                      <Image
                        extern={false}
                        src={`${baseUrl}/api/files/?path=${item.image}`}
                        alt="image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {item.title && (
                    <div className="text-lg font-semibold mb-2 ">
                      {parseHTMLToReact(item.title)}
                    </div>
                  )}
                  {item.description && (
                    <div className="text-base text-black text-opacity-30 mb-10 ">
                      {parseHTMLToReact(item.description)}
                    </div>
                  )}

                  <div className="">
                    <Link
                      href={handleurl(item?.button?.link)}
                      extern={item?.button?.extern}
                      target={!item?.button?.extern ? '_self' : ''}
                    >
                      <div className="inline-block uppercase text-blue-01 text-xs">
                        {item?.button?.title} &#10095;
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
