import { CheckIcon } from '@/lib/element/global/icons/check-icon';
import { ChevronDownIcon } from '@/lib/element/global/icons/chevron-down-icon';
import { ChevronUpIcon } from '@/lib/element/global/icons/chevron-up-icon';
import { useCallback, useEffect, useState } from 'react';

interface I_ListData {
  label: string;
  value: number;
  count?: number;
  below?: I_ListData[];
}

interface I_SidebarPromoProps {
  title: string;

  listData: I_ListData[];
  /* eslint-disable-next-line no-unused-vars */
  onSelectionChange?: (selectedItems: string[]) => void;
}

export function CE_SidebarPromo({
  title,
  listData,
  onSelectionChange,
}: I_SidebarPromoProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          className="text-blue-02 flex-none cursor-pointer"
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
                <SidebarPromoItem
                  key={index}
                  list={list}
                  selectedItems={selectedItems}
                  toggleSelection={toggleSelection}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SidebarPromoItem({
  list,
  level = 0,
  selectedItems,
  toggleSelection,
}: {
  list: I_ListData;
  level?: number;
  selectedItems: string[];
  /* eslint-disable-next-line no-unused-vars */
  toggleSelection: (value: string) => void;
}) {
  const paddingLeft = level * 20;

  return (
    <>
      <button
        onClick={() => toggleSelection(list.value.toString())}
        disabled={list.below && list.below.length > 0}
      >
        <div
          className={`flex items-center gap-2 mb-1`}
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          <div
            className={`${selectedItems.includes(list.value.toString()) ? '' : 'invisible'}`}
          >
            <CheckIcon className="text-blue-02" />
          </div>
          <div
            className={`md:text-md text-sm ${list.below && list.below.length > 0 ? 'text-gray-500' : ''} flex items-center`}
          >
            {list.label}
            <span className="ml-2">
              {list.count && list.count > 0 && `(${list.count})`}
            </span>
          </div>
        </div>
      </button>

      {list.below && list.below.length > 0 && (
        <>
          {list.below.map((subItem, index) => (
            <SidebarPromoItem
              key={index}
              list={subItem}
              selectedItems={selectedItems}
              toggleSelection={toggleSelection}
              level={level + 1}
            />
          ))}
        </>
      )}
    </>
  );
}
