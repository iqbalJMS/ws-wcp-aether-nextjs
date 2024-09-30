'use server';

import React from 'react';
import { T_InputSelectItem } from '@/lib/element/client/input';
import CE_FormVariant01 from './client.form.variant01';

type T_FormMainProps = {
  listItems: T_InputSelectItem[];
  title?: string;
  dropdownType?: 'input-text';
  variant?: '01' | '02';
  placeholder?: string;
};
export default async function SE_FormMain({
  title,
  dropdownType,
  placeholder,
  variant,
  listItems,
}: T_FormMainProps) {
  return (
    <>
      {variant === '01' && (
        <CE_FormVariant01
          title={title}
          dropdownType={dropdownType}
          placeholder={placeholder}
          listItems={listItems}
        />
      )}
    </>
  );
}
