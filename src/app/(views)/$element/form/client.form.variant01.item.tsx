'use client';
import { T_InputSelectItem } from '@/lib/types/input';

type T_FormVariant01ItemProps = {
  open: boolean;
  list: T_InputSelectItem[] | undefined;
  setOpen: (_active: boolean) => void;
  onChange: (_item: T_InputSelectItem) => void;
};

export default function CE_FormVariant01Item({
  open,
  list,
  setOpen,
  onChange,
}: T_FormVariant01ItemProps) {
  const handleChoose = (item: T_InputSelectItem) => {
    onChange?.(item);
    setOpen(false);
  };

  if (open) {
    return (
      <div className="w-full bg-white absolute max-h-96 overflow-y-auto -z-[1] pt-10 px-5 -mt-8 rounded-b-3xl shadow-lg">
        {list?.map((item, index) => (
          <div key={index}>
            <button
              className="w-full py-4 hover:bg-gray-100 md:text-left text-center md:px-20 md:text-lg text-md"
              onClick={() => handleChoose(item)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
