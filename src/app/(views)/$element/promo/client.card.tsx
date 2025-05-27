'use client';

import { motion } from 'framer-motion';
import Image from '@/lib/element/global/image';
import { T_CardProps } from '@/app/(views)/$element/types/promo';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useMemo } from 'react';
import Link from '@/lib/element/global/link';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import { useEnv } from '@/lib/hook/useEnv';

export default function CE_Card(props: T_CardProps) {
  const { baseUrl } = useEnv();
  const { className, content, idx } = props;

  const formatDate = (date: string): string => {
    const now = new Date(date);
    const formattedDate = now.toLocaleString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedDate;
  };

  const urlLink = useMemo(() => {
    switch (content.type) {
      case 'promo':
        return content?.id ? `/promo-detail/${content.id}` : '#';
      case 'news':
        return content?.id ? `/news-detail/${content.id}` : '#';
      case 'alert_mode':
        return content?.id ? `/waspada-modus-detail/${content.id}` : '#';
      case 'info_lelang':
        return `${baseUrl}/api/files/?path=${content?.downloadFile}` || '#';
      case 'pengumuman':
        return `${baseUrl}/api/files/?path=${content?.downloadFile}` || '#';
      default:
        return '#';
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content.type]);

  return (
    <motion.figure
      data-index={idx}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={['p-5 shadow-md m-2 bg-white space-y-7', className].join(' ')}
    >
      <div draggable={false} className="space-y-7">
        <Link href={urlLink} draggable={false}>
          <div className="w-full aspect-square h-[14rem] relative isolate">
            <Image
              src={
                content?.img
                  ? `${baseUrl}/api/files/?path=${content.img}`
                  : '/web/guest/images/no-image.png'
              }
              extern={content?.img ? false : true}
              alt={content?.title}
              className="object-cover z-0"
              sizes="100%"
              fill
            />
          </div>
          <h3 className="line-clamp-2 mt-6 mb-8 text-red-700 font-semibold">
            {content?.title}
          </h3>
          <div className="space-y-[0.875rem]">
            {content?.startDate ? (
              <p className="line-clamp-1 text-sm">
                {content?.startDate} -{' '}
                {content?.endDate ?? 'Tidak ada kedaluwarsa'}
              </p>
            ) : (
              <p className="line-clamp-1 text-sm">
                {formatDate(content?.date)}
              </p>
            )}
            {content?.description && (
              <div className="line-clamp-2 text-xs text-gray-500">
                {parseHTMLToReact(content?.description)}
              </div>
            )}
            {content?.downloadFile && (
              <ButtonSecondary
                className="bg-orange-01 hover:bg-orange-03 transition-all duration-300"
                rounded="full"
                color="orange-01"
                size="md"
              >
                Unduh
              </ButtonSecondary>
            )}
          </div>
        </Link>
      </div>
    </motion.figure>
  );
}
