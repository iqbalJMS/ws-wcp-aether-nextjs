import { ArrowDownIcon } from '@/lib/element/global/icons/arrow-down-icon';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import CE_FormVariant01Item from './client.form.variant01.item';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import { T_InputSelectItem } from '@/lib/types/input';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_FormVariant01Props = {
  className?: string;
  title?: string;
  imageAtTitle?: string;
  placeholder?: string;
  dropdownType?: 'input-text';
  buttonText?: string;
  listItems: T_InputSelectItem[] | undefined;
  buttonAction?: (_?: string) => void;
};

export default function CE_FormVariant01({
  title,
  imageAtTitle,
  placeholder,
  dropdownType,
  buttonText,
  listItems,
  className,
  buttonAction,
}: T_FormVariant01Props) {
  const [selectedItem, setSelectedItem] = React.useState(listItems?.at(0));
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  let [search, setSearch] = useState('');

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    setSearch(selectedItem?.title || '');
  }, [selectedItem]);

  let searchListItem = useMemo(() => {
    if (dropdownType !== 'input-text') {
      return listItems;
    }
    return listItems?.filter((listItem) => {
      return listItem.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, listItems, dropdownType]);

  let hasButtonAction = useMemo(() => {
    return buttonAction ? true : false;
  }, [buttonAction]);

  return (
    <section className={['container w-[90%]', className].join(' ')}>
      <div className="relative z-10 -mt-24 md:px-20 px-5" ref={dropdownRef}>
        <div className="py-5 px-8 rounded-3xl shadow-lg bg-white flex justify-between md:items-center md:flex-row flex-col gap-4">
          <div className="z-10 flex items-center xsmax:flex-wrap w-full gap-4">
            {imageAtTitle && title ? (
              <div className="flex flex-none items-center gap-2">
                <Image
                  width={30}
                  height={30}
                  alt="Icon Menu"
                  src={imageAtTitle}
                  extern
                />{' '}
                <h2 className="font-bold md:text-xl text-[1rem] text-red-500 flex-none w-fit">
                  {title.toUpperCase()}:
                </h2>
              </div>
            ) : imageAtTitle ? (
              <Image
                width={30}
                height={30}
                alt="Icon Menu"
                src={imageAtTitle}
                extern
              />
            ) : (
              title && (
                <h2 className="font-bold md:text-xl text-[1rem] text-red-500 flex-none w-fit">
                  {title.toUpperCase()}:
                </h2>
              )
            )}
            <div
              ref={dropdownRef}
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center cursor-pointer w-full border-b-2 pb-1"
            >
              {dropdownType === 'input-text' ? (
                <div className="md:text-xl text-md w-full font-normal">
                  <input
                    type="text"
                    className="border-none focus:outline-none w-full"
                    value={search}
                    placeholder={placeholder ?? ''}
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </div>
              ) : (
                <div className="md:text-xl text-md w-full font-normal line-clamp-1">
                  {selectedItem ? selectedItem?.title : ''}
                </div>
              )}
              <div>
                <ArrowDownIcon
                  className={`transition-all duration-300 ease-out ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <Link
              href={!hasButtonAction ? selectedItem?.value || '' : 'lokasi'}
            >
              <button
                disabled={isOpen}
                className={`font-semibold text-sm text-white rounded-full md:py-4 py-2 px-6 w-full whitespace-nowrap ${
                  isOpen ? 'bg-gray-400' : 'bg-orange-400 hover:bg-orange-500'
                }`}
                onClick={() =>
                  buttonAction ? buttonAction(selectedItem?.value) : false
                }
              >
                {parseHTMLToReact(buttonText?.toUpperCase() ?? 'BANTUAN') ?? 'BANTUAN'}
              </button>
            </Link>
          </div>
        </div>
        <CE_FormVariant01Item
          list={searchListItem}
          open={isOpen}
          onChange={setSelectedItem}
          setOpen={setIsOpen}
        />
      </div>
    </section>
  );
}
