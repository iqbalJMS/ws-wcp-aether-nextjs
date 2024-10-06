'use server';

import React from 'react';
import { T_InputSelectItem } from '@/lib/element/client/input';
import CE_FormVariant01 from './client.form.variant01';

type T_FormMainProps = {
  title?: string;
  imageAtTitle?: string;
  placeholder?: string;
  dropdownType?: 'input-text';
  buttonText?: string;
  listItems: T_InputSelectItem[];
  variant?: '01' | '02';
};
export default async function SE_FormMain({
  title,
  imageAtTitle,
  placeholder,
  dropdownType,
  buttonText,
  listItems,
  variant = '01',
}: T_FormMainProps) {
  return (
    <>
      {variant === '01' && (
        <CE_FormVariant01
          title={title}
          imageAtTitle={imageAtTitle}
          placeholder={placeholder}
          dropdownType={dropdownType}
          buttonText={buttonText}
          listItems={listItems}
        />
      )}
    </>
  );
}
