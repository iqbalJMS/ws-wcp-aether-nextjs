import { CheckIcon } from '@/lib/element/global/check-icon';
import { ChevronDownIcon } from '@/lib/element/global/chevron-down-icon';
import { ChevronUpIcon } from '@/lib/element/global/chevron-up-icon';
import { useCallback, useEffect, useState } from 'react';

interface CategoryListProps {
  listData: { label: string; value: number }[];
  // eslint-disable-next-line no-unused-vars
  onSelectionChange?: (selectedItems: string[]) => void;
  title: string;
}

export function CE_SidebarPromo({
  listData,
  onSelectionChange,
  title,
}: CategoryListProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  // State untuk menyimpan item yang dipilih, bertipe array string
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isSelectAll, setIsSelectAll] = useState<boolean>(false);

  const toggleSelection = (value: string): void => {
    let updatedSelections: string[];

    if (selectedItems.includes(value)) {
      updatedSelections = selectedItems.filter((item) => item !== value);
    } else {
      updatedSelections = [...selectedItems, value];
    }

    setSelectedItems(updatedSelections);

    if (onSelectionChange) {
      onSelectionChange(updatedSelections);
    }
  };

  const handleSelectAll = useCallback(() => {
    if (isSelectAll) {
      selectAll();
    } else {
      unselectAll();
    }
  }, [isSelectAll]);

  const selectAll = (): void => {
    const allLabels = listData.map((item) => item.value.toString());
    setSelectedItems(allLabels);
    if (onSelectionChange) {
      onSelectionChange(allLabels);
    }
  };

  const unselectAll = (): void => {
    setSelectedItems([]);
    if (onSelectionChange) {
      onSelectionChange([]);
    }
  };

  useEffect(() => {
    handleSelectAll();
  }, [handleSelectAll]);

  return (
    <div
      className={`md:shaodw-md md:rounded-3xl md:bg-gray-100 bg-transparent md:py-4 px-6 mdmax:w-full`}
    >
      <div
        className={`flex items-center justify-between ${!accordionOpen ? '' : 'border-b-2'}`}
      >
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className={`flex py-4 gap-2 items-center w-full `}
        >
          {accordionOpen ? (
            <ChevronUpIcon
              className={`stroke-gray-700`}
              width={28}
              height={28}
              strokeWidth="2"
            />
          ) : (
            <ChevronDownIcon
              className={`stroke-gray-700`}
              width={28}
              height={28}
              strokeWidth="2"
            />
          )}
          {title && <h1 className="font-bold md:text-xl text-lg">{title}</h1>}
        </button>
        <div
          className="text-blue-02 flex-none"
          onClick={() => setIsSelectAll(!isSelectAll)}
        >
          <p className="md:text-md text-sm">
            {isSelectAll ? 'clear all' : 'select all'}
          </p>
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100 py-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          {listData && listData.length > 0 && (
            <div className="grid grid-cols-1 gap-3">
              {listData.map((list, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => toggleSelection(list.value.toString())}
                >
                  <div
                    className={`${selectedItems.includes(list.value.toString()) ? '' : 'invisible'}`}
                  >
                    <CheckIcon className="text-blue-02" />
                  </div>
                  <div className="md:text-md text-sm">{list.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
