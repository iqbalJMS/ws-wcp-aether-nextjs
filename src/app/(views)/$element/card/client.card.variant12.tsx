'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

type T_CardVariant12Props = {
  data: {
    title: string;
    image: string;
    description: string;
    button: {
      title: string;
      link: string;
      extern: boolean;
    };
  }[];
};

export function CE_CardVariant12({ data }: T_CardVariant12Props) {
  return (
    <>
      <div className=" py-10 container">
        <div className="flex flex-wrap -mx-5">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/3 mdmax:w-full flex-none px-5 mb-10"
              >
                <div className="bg-white  shadow-lg rounded-br-[5rem] overflow-hidden relative group">
                  <div className="absolute z-10 top-0 left-0 bg-blue-02 hidden group-hover:flex opacity-95 w-full h-full  items-center justify-center">
                    <div className="text-white text-center px-10">
                      <div className="text-xl font-medium text-center  mb-2">
                        {item.title}
                      </div>
                      <div className="mb-5 text-base  text-center">
                        {item.description}
                      </div>
                      <div>
                        <Link
                          href={item.button.link}
                          extern={item.button.extern}
                          target={item.button.extern ? '_blank' : ''}
                        >
                          <div className="text-white text-base underline inline-block ">
                            {item.button.title}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[20rem] ">
                    <Image
                      extern={false}
                      src={item.image}
                      alt="image"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 px-10 relative overflow-hidden bg-white">
                    <div className="w-[15rem] h-[10rem] group-hover:invisible bg-blue-01 absolute -bottom-[6rem] -right-[4rem] transform rotate-[-30deg] z-0"></div>
                    <div className="text-xl font-medium text-center  mb-2">
                      {item.title}
                    </div>
                    <div className="mb-20 text-base  text-center">
                      {item.description}
                    </div>
                    <div className="text-right relative z-10 group-hover:invisible">
                      <Link
                        href={item.button.link}
                        extern={item.button.extern}
                        target={item.button.extern ? '_blank' : ''}
                      >
                        <div className="text-white text-xs inline-block transform rotate-[-30deg] pl-5">
                          {item.button.title}
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
