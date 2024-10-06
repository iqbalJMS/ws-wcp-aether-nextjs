'use server';

import React from 'react';
import { T_PortletProps } from '@/app/aether/$element/types/portlet';
import SE_PortletVariant01 from './server.portlet.variant01';
import SE_PortletVariant02 from './server.portlet.variant02';
import SE_PortletVariant03 from './server.portlet.variant03';

export default async function SE_PortletMain({
  title,
  subtitle,
  headerAlignment,
  imageContentAlignment,
  imageAtTitle,
  imageAtContent,
  textLink,
  navigationLink,
  buttonItems,
  bgImage,
  variantWidget,
  variantLayout,
  variant = '01',
  listItems,
}: T_PortletProps) {
  return (
    <>
      {variant === '01' && (
        <SE_PortletVariant01
          title={title}
          subtitle={subtitle}
          textLink={textLink}
          navigationLink={navigationLink}
          bgImage={bgImage}
          listItems={listItems}
        />
      )}
      {variant === '02' && (
        <SE_PortletVariant02
          title={title}
          variantWidget={variantWidget}
          variantLayout={variantLayout}
          subtitle={subtitle}
          buttonItems={buttonItems}
          bgImage={bgImage}
        />
      )}
      {variant === '03' && (
        <SE_PortletVariant03
          title={title}
          subtitle={subtitle}
          imageAtTitle={imageAtTitle}
          imageAtContent={imageAtContent}
          bgImage={bgImage}
          headerAlignment={headerAlignment}
          imageContentAlignment={imageContentAlignment}
          listItems={listItems}
        />
      )}
    </>
  );
}
