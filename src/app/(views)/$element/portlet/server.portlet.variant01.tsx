'use server';

import SE_PortletItem from './server.portlet.item';
import { ArrowDownIcon } from '@/lib/element/global/icons/arrow-down-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { T_PortletProps } from '@/app/(views)/$element/types/portlet';
import Link from '@/lib/element/global/link';
import { BASE_URL } from '@/app/(views)/$constant';
import { handleurl } from '@/lib/functions/client/handle-url';

export default async function SE_PortletVariant01({
  title,
  subtitle,
  textLink,
  navigationLink,
  bgImage,
  listItems,
  marginLeft,
  column,
}: Omit<T_PortletProps, 'variant'>) {
  const backgroundImg = bgImage
    ? `${BASE_URL}/api/files/?path=${bgImage}`
    : `${bgImage}`;

  let parsedListItems: any[] = [];
  if (typeof listItems === 'string') {
    try {
      parsedListItems = JSON.parse(listItems);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Gagal mem-parsing JSON dari listItems:', e);
      parsedListItems = [];
    }
  } else if (Array.isArray(listItems)) {
    parsedListItems = listItems;
  }

  const gridClass =
    column === '3' ? 'md:grid-cols-4' : column ? `md:grid-cols-${column}` : '';
  const gapClass = column === '1' ? 'gap-6' : 'gap-8';
  const widthClass =
    column === '3' || column === '4' ? 'w-full' : 'md:w-[1100px] w-full';

  let itemsToRender: (any | null)[] = parsedListItems;
  if (column === '3' && Array.isArray(parsedListItems)) {
    itemsToRender = parsedListItems.reduce(
      (acc: (any | null)[], item: any, index: number) => {
        acc.push(item);
        if ((index + 1) % 3 === 0) {
          acc.push(null);
        }
        return acc;
      },
      [] as (any | null)[]
    );
  }

  const hasListItems = Array.isArray(itemsToRender) && itemsToRender.length > 0;

  return (
    <section
      className="component-portlet-01 w-full bg-no-repeat pt-0.5 pb-0.5 my-0"
      style={{
        backgroundImage: `${backgroundImg ? `url('${backgroundImg}')` : '/web/guest/images/why-us/bg-image.jpg'}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container pt-8 pb-8">
        {title && (
          <div className="font-medium md:text-4xl text-3xl mdmax:text-center mb-4">
            {parseHTMLToReact(title)}
          </div>
        )}
        {subtitle && (
          <div
            className={`md:max-w-4xl space-y-5 max-w-[55%] break-words text-[18.2px] ${
              hasListItems ? 'mb-0' : 'mb-4'
            }`}
            style={{ color: '#627d92', lineHeight: '1.75', fontSize: '20px' }}
          >
            {parseHTMLToReact(subtitle)}
          </div>
        )}

        {hasListItems && (
          <div
            className={`${widthClass} grid grid-cols-1 ${gridClass} ${gapClass} py-12 ${
              marginLeft?.includes('medium') ? 'lg:ml-12' : ''
            }`}
          >
            {itemsToRender.map((item: any | null, index: number) => {
              if (item === null) {
                return (
                  <div key={`placeholder-${index}`} aria-hidden="true"></div>
                );
              }
              return (
                <SE_PortletItem
                  key={item.id || index}
                  list_item={item}
                  column={column}
                />
              );
            })}
          </div>
        )}

        {textLink && (
          <div className={`w-full ${hasListItems ? 'pb-12' : 'pt-4'}`}>
            <Link
              className="text-blue-02 mdmax:text-sm font-bold flex items-center"
              href={handleurl(navigationLink)}
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
