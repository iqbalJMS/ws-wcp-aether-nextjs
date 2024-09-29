'use server';

import { T_PortletProps } from '@/app/aether/$element/types/portlet';
import SE_PortletVariant01 from './server.portlet.variant01';
import SE_PortletVariant02 from './server.portlet.variant02';

export default async function SE_PortletMain({
  title,
  subtitle,
  textLink,
  listItems,
  bgImage,
  navigationLink,
  buttonItems,
  variant = '01',
}: T_PortletProps) {
  return (
    <>
      {variant === '01' && (
        <SE_PortletVariant01
          title={title}
          subtitle={subtitle}
          textLink={textLink}
          listItems={listItems}
          bgImage={bgImage}
          navigationLink={navigationLink}
        />
      )}
      {variant === '02' && (
        <SE_PortletVariant02
          title={title}
          subtitle={subtitle}
          bgImage={bgImage}
          buttonItems={buttonItems}
        />
      )}
    </>
  );
}
