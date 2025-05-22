'use server';

import SE_PortletItem from './server.portlet.item';
import { ArrowDownIcon } from '@/lib/element/global/icons/arrow-down-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { T_PortletProps } from '@/app/(views)/$element/types/portlet';
import Link from '@/lib/element/global/link';
import { BASE_URL } from '@/app/(views)/$constant';
import { handleurl } from '@/lib/functions/client/handle-url';
import Image from '@/lib/element/global/image';

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

  const gridClass = column ? `md:grid-cols-${column}` : '';

  const widthClass = 'md:w-[1100px] w-full';

  return (
    <section
      className="component-portlet-01 w-full bg-no-repeat pt-0.5 pb-0.5 my-0"
      style={{
        backgroundImage: `${backgroundImg ? `url('${backgroundImg}')` : '/web/guest/images/why-us/bg-image.jpg'}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {backgroundImg && (
        <Image
          src={backgroundImg}
          alt="Background"
          width={1920}
          height={1080}
          priority={true}
          className="hidden"
        />
      )}
      <div className="container py-20">
        {title && (
          <div className="font-medium md:text-4xl text-3xl mdmax:text-center mb-4">
            {parseHTMLToReact(title)}
          </div>
        )}
        {subtitle && (
          <div
            className="md:max-w-4xl space-y-5 max-w-[55%] break-words text-[18.2px]"
            style={{ color: '#627d92', lineHeight: '1.75', fontSize: '20px' }}
          >
            {parseHTMLToReact(subtitle)}
          </div>
        )}
        <div
          className={`${widthClass} grid grid-cols-1 ${gridClass} gap-8 py-12 ${
            marginLeft?.includes('medium') ? 'lg:ml-12' : ''
          }`}
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