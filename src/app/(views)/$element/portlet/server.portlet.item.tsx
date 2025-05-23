'use server';
import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { T_PortletItemProps } from '@/app/(views)/$element/types/portlet';
import { BASE_URL } from '@/app/(views)/$constant';

export default async function SE_PortletItem({
  list_item,
  column,
}: T_PortletItemProps) {
  if (column === '1') {
    return (
      <div className={`flex items-start ${column === '1' ? 'mb-10' : ''}`}>
        {list_item?.image && (
          <div className="w-16 mr-10 flex-shrink-0">
            <Image
              extern={false}
              src={`${BASE_URL}/api/files/?path=${list_item?.image}`}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-16 h-auto"
            />
          </div>
        )}
        <div className="flex-1">
          {list_item?.title && (
            <div
              className="font-semibold mb-4"
              style={{ color: '#014a94', fontSize: '21px' }}
            >
              {parseHTMLToReact(list_item?.title ?? '')}
            </div>
          )}
          <div className="text-[#627d92] w-1/2">
            {list_item?.text && parseHTMLToReact(list_item?.text ?? '')}
          </div>
        </div>
      </div>
    );
  }

  // Default layout untuk column != '1'
  return (
    <div className="flex gap-2">
      {list_item?.image && (
        <div className="md:w-1/4">
          <Image
            extern={false}
            src={list_item?.image}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-16 h-auto"
          />
        </div>
      )}
      <div className="w-full flex-col">
        {list_item?.title && (
          <div
            className="font-semibold mb-4"
            style={{ color: '#014a94', fontSize: '21px' }}
          >
            {parseHTMLToReact(list_item?.title ?? '')}
          </div>
        )}
        <div className="text-[#627d92]">
          {list_item?.text && parseHTMLToReact(list_item?.text ?? '')}
        </div>
      </div>
    </div>
  );
}
