'use client';

import { T_IconList } from '@/app/(views)/$constant/types';
import Link from '@/lib/element/global/link';
import Modal from '@/lib/element/global/modal';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type T_IconMainProps = {
  maxListShow?: number;
  list: T_IconList[];
  cookiesName: string;
};

type T_IconMenuProps = {
  image: string;
  title?: string;
  variant?: 'config' | 'main';
  hover?: 'selected' | 'main';
};

function CE_IconMenu({
  image,
  title,
  variant = 'main',
  hover = 'main',
}: T_IconMenuProps) {
  return (
    <div
      className={[
        'text-center cursor-pointer relative group h-full',
        `${
          hover === 'selected'
            ? 'border-[.2rem] border-dashed hover:border-solid p-5 rounded-xl'
            : 'px-5 pb-5'
        }`,
      ].join(' ')}
    >
      <div
        className={[
          'w-14 h-14 mdmax:w-10 mdmax:h-10 mb-4',
          `${
            variant === 'main'
              ? 'inline-block'
              : 'rounded-full shadow-md inline-flex items-center justify-center'
          }`,
        ].join(' ')}
      >
        <Image
          src={image}
          alt="image"
          width={200}
          height={200}
          className={[
            `${variant === 'main' ? 'w-full h-full' : 'w-[60%] h-[60%]'}`,
            'object-contain',
          ].join(' ')}
        />
      </div>
      {variant === 'main' && (
        <>
          <div className="uppercase text-base line-clamp-2 font-semibold mdmax:text-xs">
            {title}
          </div>
          {hover === 'main' && (
            <div className="absolute bottom-0 left-0 w-full h-2 px-5">
              <div className="bg-red-01 w-full h-2 rounded-full transition-all ease-in-out duration-300 group-hover:opacity-100 opacity-0"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function CE_IconMain({
  maxListShow = 1,
  list: initialList,
  cookiesName,
}: T_IconMainProps) {
  const [iconStorage, setIconStorage] = useState<string | null>(null);
  const [list, setList] = useState<T_IconList[]>(initialList);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem(cookiesName);
      setIconStorage(storedData);
    }
  }, [cookiesName]);

  useEffect(() => {
    if (iconStorage) {
      const dataIcons: T_IconList[] = iconStorage
        ? JSON.parse(iconStorage)
        : [];
      const updatedList = initialList.map((iconItem) => {
        const iconCookie = dataIcons.find(
          (item) => item.title === iconItem.title
        );
        return {
          ...iconItem,
          active: iconCookie?.active ?? iconItem.active,
        };
      });
      setList(updatedList);
    } else {
      setList(initialList);
    }
    setIsLoading(false);
  }, [iconStorage, initialList]);

  const [showModal, setShowModal] = useState(false);
  const isMaxActiveList = useMemo(() => {
    return list.filter((item) => item.active === true).length === maxListShow;
  }, [maxListShow, list]);

  function extractMatch(url: string): string | null {
    const regex = /\/\.(\w+-\w+)/;
    const match = url.match(regex);

    return match ? match[1] : null;
  }

  const handleChooseMenu = async (index: number) => {
    if (isMaxActiveList && list.at(index)?.active === false) {
      return false;
    }
    const returnList = list.map((item, itemIndex) => {
      return {
        ...item,
        active: itemIndex === index ? !item.active : item.active,
      };
    });
    setList(returnList);
    sessionStorage.setItem(cookiesName, JSON.stringify(returnList));
  };

  if (isLoading) {
    return (
      <section className="overflow-x-scroll py-10 container">
        <div className="border-b-2 border-black border-opacity-50">
          <div className="flex justify-center">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 animate-pulse px-5 pb-5"
                >
                  <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                  <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 container">
      <div className="overflow-x-auto border-b-2 border-black border-opacity-50 ">
        <div className="flex md:justify-center justify-start items-center">
          {list.map((listItem, listIndex) => {
            return (
              listItem.active && (
                <div
                  key={listIndex}
                  className="w-1/5 mdmax:w-1/3 mdmax:flex-none"
                >
                  <Link
                    href={
                      extractMatch(listItem.link)
                        ? '#' + extractMatch(listItem.link)
                        : listItem.link
                    }
                    extern={listItem.externalLink}
                    target={extractMatch(listItem.link) ? '' : '_blank'}
                  >
                    <CE_IconMenu
                      key={listIndex}
                      image={`${listItem.image}`}
                      title={listItem.title}
                    />
                  </Link>
                </div>
              )
            );
          })}
          {list.length > maxListShow && (
            <div className="w-1/5" onClick={() => setShowModal(true)}>
              <CE_IconMenu
                image="/web/guest/images/icon-menu/config.png"
                variant="config"
              />
            </div>
          )}
        </div>
      </div>
      <Modal open={showModal} setOpen={setShowModal}>
        <div>
          <div className="text-center font-semibold text-xl mdmax:text-lg mb-2">
            Personalisasi Link Cepat
          </div>
          <div className="text-center mdmax:text-xs mb-4">
            Silakan dan pilih hingga {maxListShow} link cepat rutin perbankan
            favorit Anda.
          </div>
          <div className="flex justify-center flex-wrap max-h-[450px] overflow-y-auto p-4">
            {list.map((listItem, listIndex) => {
              return (
                <div
                  key={listIndex}
                  className={`w-1/4 mdmax:w-1/2 px-2 mb-4 h-full ${listItem.isFixed === '1' ? 'hidden' : 'block'}`}
                >
                  <div
                    onClick={() => handleChooseMenu(listIndex)}
                    className="relative"
                  >
                    <div className="absolute -top-3 -right-2 z-10">
                      {listItem.active ? (
                        <svg
                          className="text-red-01"
                          width="32"
                          height="32"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 112H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16"
                          />
                        </svg>
                      ) : (
                        <svg
                          className={[
                            isMaxActiveList ? 'text-gray-200' : 'text-blue-01',
                          ].join(' ')}
                          width="32"
                          height="32"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="relative z-0">
                      <CE_IconMenu
                        key={listIndex}
                        image={`${listItem.image}`}
                        title={listItem.title}
                        hover="selected"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </section>
  );
}
