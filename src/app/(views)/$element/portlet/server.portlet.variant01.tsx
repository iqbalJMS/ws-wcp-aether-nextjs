'use server';

import SE_PortletItem from './server.portlet.item';
import { ArrowDownIcon } from '@/lib/element/global/arrow-down-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { T_PortletProps } from '@/app/(views)/$element/types/portlet';
import Link from '@/lib/element/global/link';
import {
  API_BASE_URL,
  WIDGET_VARIANT,
} from '@/app/(views)/$constant/variables';

export default async function SE_PortletVariant01({
  title,
  subtitle,
  textLink,
  navigationLink,
  bgImage,
  listItems,
  marginLeft,
  column,
  variantWidget,
}: Omit<T_PortletProps, 'variant'>) {
  const backgroundImg = bgImage ? `${API_BASE_URL}${bgImage}` : '';

  const gridClass =
    variantWidget !== WIDGET_VARIANT.variant07 ? `md:grid-cols-${column}` : '';

  return (
    <section
      className="component-portlet-01 w-full bg-no-repeat pt-20 pb-12 my-8"
      style={{
        backgroundImage: `url(${
          bgImage
            ? (backgroundImg ?? '/web/guest/images/why-us/bg-image.jpg')
            : ''
        })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        {title && (
          <div className="font-medium md:text-4xl text-3xl mdmax:text-center mb-4">
            {parseHTMLToReact(title)}
          </div>
        )}
        {subtitle && (
          <div className="md:max-w-4xl space-y-5">
            {parseHTMLToReact(subtitle)}
          </div>
        )}
        <div
          className={`grid grid-cols-1 ${gridClass} gap-8 py-12 md:max-w-4xl ${marginLeft?.includes('medium') ? 'lg:ml-12' : ''}`}
        >
          {Array.isArray(listItems) &&
            listItems?.map((item, index) => (
              <SE_PortletItem key={index} list_item={item} />
            ))}
        </div>
        {textLink && (
          <div className="w-full">
            <Link
              className="text-blue-02 mdmax:text-sm font-bold flex items-center"
              href={navigationLink ?? '/'}
              extern={false}
            >
              {textLink}
              <ArrowDownIcon className="-rotate-90 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
