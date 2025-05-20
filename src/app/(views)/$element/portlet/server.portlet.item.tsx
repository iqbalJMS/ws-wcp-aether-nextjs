'use server';
import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { T_PortletItemProps } from '@/app/(views)/$element/types/portlet';

export default async function SE_PortletItem({
  list_item,
}: T_PortletItemProps) {
  return (
    <div className="flex gap-4">
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
        <div className="text-[#627d92]">{list_item?.text && parseHTMLToReact(list_item?.text ?? '')}</div>
      </div>
    </div>
  );
}
