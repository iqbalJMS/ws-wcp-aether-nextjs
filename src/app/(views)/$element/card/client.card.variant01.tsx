'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant01Props = {
  data: {
    title?: string;
    image?: string;
    description?: string;
    buttons: {
      title: string;
      link: string;
      extern: boolean;
    }[];
  }[];
};

export default function CE_CardVariant01({ data }: T_CardVariant01Props) {
  return (
    <>
      <div className=" py-10">
        <div className="flex mdmax:flex-wrap">
          {data?.map((item, index) => {
            return (
              <div key={index} className="w-1/2 mdmax:w-full flex-none">
                <div className="h-[40rem] mdmax:h-[20rem] relative z-0">
                  <div className="absolute top-0 left-0 bg-black bg-opacity-20 z-10 w-full h-full"></div>
                  <div className="absolute bottom-[40%] left-0  z-20 w-full ">
                    <div className="px-[5rem] mdmax:px-[1rem]">
                      {item?.title && (
                        <div className="text-white text-3xl font-medium mb-5">
                          {item?.title}
                        </div>
                      )}
                      {item?.description && (
                        <div className="text-white text-base font-normal mb-6">
                          {parseHTMLToReact(item?.description)}
                        </div>
                      )}
                      <div className="flex gap-2 flex-wrap">
                        {item?.buttons?.map((buttonItem, buttonIndex) => (
                          <div key={buttonIndex}>
                            <Link
                              href={buttonItem?.link}
                              extern={buttonItem?.extern}
                              target={buttonItem?.extern ? '_blank' : ''}
                            >
                              <ButtonSecondary
                                className="bg-orange-01"
                                rounded="full"
                                color="orange-01"
                              >
                                {buttonItem?.title}
                              </ButtonSecondary>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {item?.image && (
                    <div className="w-full h-full relative z-0">
                      <Image
                        extern={false}
                        src={item?.image}
                        alt="image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                      />
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
