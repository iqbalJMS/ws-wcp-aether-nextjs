'use server';

import React from 'react';
import SE_WysiwygVariant01 from './server.wysiwyg.variant01';
import { T_WysiwygProps } from '@/app/(views)/$element/types/wysiwyg';
import SE_WysiwygVariant02 from './server.wysiwyg.variant02';

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
      {variant === '02' && (
        <SE_WysiwygVariant02
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
