'use server';

import React from 'react';
import { T_InputSelectItem } from '@/lib/element/client/input';
import CE_FormVariant01 from './client.form.variant01';

type T_FormMainProps = {
  title?: string;
  imageTitle?: string;
  placeholder?: string;
  dropdownType?: 'input-text';
  listItems: T_InputSelectItem[];
  variant?: '01' | '02';
};
export default async function SE_FormMain({
  title,
  imageTitle,
  placeholder,
  dropdownType,
  listItems,
  variant,
}: T_FormMainProps) {
  return (
    <>
      {variant === '01' && (
        <CE_FormVariant01
          title={title}
          imageTitle={imageTitle}
          placeholder={placeholder}
          dropdownType={dropdownType}
          listItems={listItems}
        />
      )}
    </>
  );
}
