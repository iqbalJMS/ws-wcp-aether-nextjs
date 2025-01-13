'use client';

import { T_InputSelectItem } from '@/lib/element/client/input';
import CE_FormVariant01 from '@/app/(views)/$element/form/client.form.variant01';

type T_Props = {
  dropdown: {
    uri: string;
    title: string;
    options: any[];
    url: string;
  }[];
};

const CE_SimulationDropdown = ({ dropdown }: T_Props) => {
  let listItems: T_InputSelectItem[] = dropdown.map((dropdownItem) => {
    return {
      title: dropdownItem.title,
      value: dropdownItem.url.replace('/id', ''),
    };
  });
  return (
    <div className="relative z-50 -mt-[7rem]">
      <div>
        <CE_FormVariant01
          className="mt-20"
          listItems={listItems}
          buttonText="OK"
          title='Simulation'
        />
      </div>
    </div>
  );
};

export default CE_SimulationDropdown;
