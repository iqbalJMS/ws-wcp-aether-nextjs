'use client';

import { useEffect, useRef, useState } from 'react';

type Option = {
  value: string;
};

interface DropDownOptions {
  options: Option[];
  placeholder?: string;
  selected: Option | null;
  variant?: string;
  // eslint-disable-next-line no-unused-vars
  onSelectedChanges: (option: Option) => void;
}

const DropDown = ({
  options,
  selected,
  onSelectedChanges,
  placeholder,
}: DropDownOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const onBodyClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        // eslint-disable-next-line no-useless-return
        return;
      }
      setIsOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="w-full">
        <div className="relative w-full">
          <div
            onClick={toggleDropdown}
            className={`w-full border-black border-opacity-10 border-[1px] py-2 px-5 rounded-md focus:border-blue-01 focus:outline-none`}
          >
            <div className="flex justify-between w-full">
              {selected ? (
                <div className="flex gap-x-2">
                  <span className={`font-normal block truncate text-black`}>
                    {selected.value}
                  </span>
                </div>
              ) : (
                <span className={`font-medium block truncate text-black`}>
                  {placeholder}
                </span>
              )}
            </div>
          </div>
          {isOpen && (
            <ul className="absolute z-10 mt-1 w-96 h-40 bg-white shadow-lg rounded-md py-1 ring-black ring-1 overflow-auto focus:outline-none text-sm ">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => {
                    onSelectedChanges(option);
                    setIsOpen(false);
                  }}
                  className={`group hover:bg-blue-700 transition-all flex justify-between cursor-pointer text-gray-900 select-none relative py-2 px-3`}
                >
                  <div className="flex items-center gap-x-2">
                    <span className="group-hover:text-white font-normal block truncate">
                      {option.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
