'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_CardVariant13Props = {
  title: string;
  data: Array<{
    title?: string;
    subTitle?: string;
    description?: string;
    address?: string;
    contactInformation?: {
      telephone?: string;
      fax?: string;
      website?: string;
    };
    image?: string;
  }>;
};

export default function CE_CardVariant13({
  title,
  data,
}: T_CardVariant13Props) {
  return (
    <>
      <div className="py-10 container overflow-hidden">
        {title && (
          <div className="mb-10">
            <div className="text-3xl font-semibold ">
              {parseHTMLToReact(title)}
            </div>
          </div>
        )}
        <div className="flex flex-wrap justify-center -mx-5">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/2 mdmax:w-full flex-none px-5 mb-10"
              >
                <div className="">
                  {item.image && (
                    <div className="w-full h-[20rem] rounded-xl overflow-hidden mb-5 inline-block">
                      <Image
                        extern={false}
                        src={item.image}
                        alt="image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    {item.subTitle && (
                      <div className="text-xs tracking-widest text-black text-opacity-30 font-semibold mb-2">
                        {parseHTMLToReact(item.subTitle)}
                      </div>
                    )}
                    {item.title && (
                      <div className="text-lg font-semibold mb-2">
                        {parseHTMLToReact(item.title)}
                      </div>
                    )}

                    {item.description && (
                      <div className="text-sm text-black  mb-5 body">
                        {parseHTMLToReact(item.description)}
                      </div>
                    )}

                    <div className="mb-10">
                      {item.address && (
                        <>
                          <div className="text-sm mb-1">Alamat</div>
                          <div className="text-sm text-black">
                            {parseHTMLToReact(item.address)}
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                      {item?.contactInformation?.telephone && (
                        <>
                          <div className="text-sm mb-1">Kotak Informasi</div>
                          <div className="flex items-center text-sm">
                            <div className="w-[20%] flex-none text-black text-opacity-50">
                              Telepon
                            </div>
                            <div className="text-sm  text-center">
                              {parseHTMLToReact(
                                item.contactInformation.telephone
                              )}
                            </div>
                          </div>
                        </>
                      )}
                      <div className="flex items-center text-sm">
                        {item?.contactInformation?.fax && (
                          <>
                            <div className="w-[20%] flex-none text-black text-opacity-50">
                              Fax
                            </div>
                            <div className="text-sm  text-center">
                              {parseHTMLToReact(item.contactInformation.fax)}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex items-center text-sm">
                        {item?.contactInformation?.website && (
                          <>
                            <div className="w-[20%] flex-none text-black text-opacity-50">
                              Website
                            </div>
                            <div className="text-sm text-blue-01 underline text-center">
                              <Link
                                href={item.contactInformation.website}
                                target="_blank"
                              >
                                {parseHTMLToReact(
                                  item.contactInformation.website
                                )}
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
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
