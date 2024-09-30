'use server';

import React from 'react';
import SE_WysiwygVariant01 from './server.wysiwyg.variant01';
import { T_WysiwygProps } from '@/app/aether/$element/types/wysiwyg';

export default async function SE_WysiwygMain({
  title,
  createdAt,
  buttonText,
  imageContent,
  content,
  variant = '01',
}: T_WysiwygProps) {
  return (
    <>
      {variant === '01' && (
        <SE_WysiwygVariant01
          title={title}
          createdAt={createdAt}
          buttonText={buttonText}
          imageContent={imageContent}
          content={content}
        />
      )}
    </>
  );
}
