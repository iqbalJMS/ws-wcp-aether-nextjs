'use client';

import Pagination from '@/lib/element/global/pagination';
import { CE_CardVariant07 } from './card/client.card.variant07';

export default function CE_SectionNews({
  newsData,
}: {
  newsData: {
    contents: Array<{
      nid: number;
      title: string;
      date: string;
      image: string;
    }>;
    paginationData?: {
      total: number;
      limit: number;
      page: number;
      total_page: number;
    };
  };
}) {
  const formatDate = (dateTimeStamp: number): string => {
    const now = new Date(dateTimeStamp * 1000);
    const formattedDate = now.toLocaleString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedDate;
  };

  return (
    <section className="container py-10">
      {newsData?.contents?.map((item) => (
        <CE_CardVariant07
          key={item.nid}
          title={item.title}
          nid={item.nid}
          subTitle={formatDate(Number(item.date))}
          image={item.image}
          typeContent="news"
        />
      ))}
      <div className="flex md:justify-end justify-center">
        <Pagination
          currentPage={1}
          totalPages={0}
          variant="simple"
          onPageChange={() => {}}
        />
      </div>
    </section>
  );
}
