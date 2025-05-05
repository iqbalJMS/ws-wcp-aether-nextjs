'use client';

import { useState } from 'react';

import Image from 'next/image';
import ArrowRightIcon from '@/lib/element/global/icons/arrow-right-icon';
import CE_ModalProfile from '@/lib/element/global/modal.profile';

export default function CE_CardVariant12({
  data,
}: {
  data: Array<{
    title?: string;
    position?: string;
    description?: string;
    image?: string;
  }>;
}) {
  const [dataProfile, setDataProfile] = useState({});
  const [openModalProfile, setOpenModalProfile] = useState<boolean>(false);

  return (
    <div className="py-10 container">
      <div className="flex flex-wrap justify-center -mx-5">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setOpenModalProfile(true);
                setDataProfile(item);
              }}
              className="w-1/3 mdmax:w-full flex-none px-5 mb-10 cursor-pointer"
            >
              <div className="bg-white shadow-lg rounded-br-[5rem] overflow-hidden relative group">
                <div className="absolute top-full group-hover:top-0 transition-all ease-in-out duration-300 left-0 w-full h-full bg-blue-02 z-10 flex items-center justify-center">
                  <div>
                    {item?.title && (
                      <div className="text-2xl font-bold text-center text-white mb-2">
                        {item?.title}
                      </div>
                    )}
                    {item?.position && (
                      <div className="mb-10 text-white text-base text-center line-clamp-2">
                        {item?.position}
                      </div>
                    )}

                    <div className="text-center relative z-10">
                      <div className="text-white text-sm uppercase flex items-center justify-center gap-x-2">
                        see profile
                        <ArrowRightIcon
                          className="stroke-white"
                          width={30}
                          height={30}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-0 h-full">
                  {item?.image && (
                    <div className="w-full h-[30rem] ">
                      <Image
                        src={item?.image}
                        alt="image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 px-10 relative overflow-hidden">
                    <div className="w-[15rem] h-[10rem] bg-blue-02 absolute -bottom-[6rem] -right-[4rem] transform rotate-[-30deg] z-0"></div>
                    {item?.title && (
                      <div className="text-xl font-medium text-center  mb-2">
                        {item?.title}
                      </div>
                    )}
                    {item?.position && (
                      <div className="mb-10 min-h-11 text-base text-center text-gray-500">
                        {item?.position}
                      </div>
                    )}
                    <div className="text-right relative z-10">
                      <div>
                        <div className="text-white text-xs inline-block transform rotate-[-30deg] pl-5 underline">
                          Lihat CV
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CE_ModalProfile
        isOpen={openModalProfile}
        onClose={() => setOpenModalProfile(false)}
        user={dataProfile}
        hasButtonClose
      />
    </div>
  );
}
