'use client';

import { useState, useTransition, useEffect } from 'react';
import useForm from '@/lib/hook/useForm';
import { T_ContentTypeRequest } from '@/api/content-type/api.get-content-type.type';
import {
  CFN_GetContentType,
  CFN_MapToContentTypePayload,
  CFN_ValidateGetContentTypeFields,
} from '@/app/(views)/$function/cfn.get-content-type';
import CE_CardVariant09 from '@/app/(views)/$element/card/client.card.variant09';
import { useSearchParams } from 'next/navigation';
import { useDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

interface AuctionItem {
  nid: number;
  title: string;
  date: string;
  image: string;
  downloadFile?: string;
}

interface AuctionsData {
  contents: AuctionItem[];
}

export default function CE_SectionAuctions({
  auctionsData,
}: {
  auctionsData: AuctionsData;
}) {
  const [isPending, transiting] = useTransition();
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [additionalAuctions, setAdditionalAuctions] = useState<AuctionItem[]>(
    []
  );
  const searchParams = useSearchParams();
  const dictionary = useDictionary(
    (searchParams?.get('lang') as Locale) ?? 'id'
  );

  // Reset state when props change
  useEffect(() => {
    setAdditionalAuctions([]);
    setIsFirst(true);
    setIsLastPage(false);
  }, [auctionsData]);

  // Combine original data with additional loaded items
  const allAuctionItems = [
    ...(auctionsData?.contents || []),
    ...additionalAuctions,
  ];

  const { form, validateForm, setForm } = useForm<
    T_ContentTypeRequest,
    T_ContentTypeRequest
  >(
    CFN_MapToContentTypePayload({
      limit: '8',
      page: '0',
    }),
    CFN_ValidateGetContentTypeFields
  );

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

  const handleAuctionsList = () => {
    if (isPending) return;

    const isValid = validateForm();
    if (isValid) {
      CFN_GetContentType(transiting, form, 'auctions', (resp: any) => {
        const _component = resp?.field_components?.find(
          (item: any) => item?.entity_bundle?.[0]?.value === 'content_type'
        );

        const newAuctions =
          _component?.field_content_type?.map((item: any) => {
            return {
              title: item?.title?.[0]?.value,
              nid: item?.nid?.[0]?.value,
              image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
              date: item?.created?.[0]?.value,
            };
          }) || [];

        if (!newAuctions.length) {
          setIsLastPage(true);
          return;
        }

        setAdditionalAuctions((prev) => [...prev, ...newAuctions]);

        if (newAuctions.length < Number(form.limit)) {
          setIsLastPage(true);
        }
      });
    }
  };

  const handleLoadMore = () => {
    setForm({
      ...form,
      page: String(Number(form.page) + 1),
    });

    if (isFirst) {
      setIsFirst(false);
    }

    handleAuctionsList();
  };

  return (
    <section className="container py-10">
      {allAuctionItems.map((item) => (
        <CE_CardVariant09
          key={item.nid}
          data={[
            {
              title: item.title,
              description: formatDate(item.date),
              button: {
                link: item?.downloadFile || '#',
                title: dictionary?.content_type?.buttonDownloadText || 'Unduh',
                extern: true,
              },
              isDescDate: true,
            },
          ]}
        />
      ))}
      {!isLastPage ? (
        <section className="hidden xl:inline-flex items-center justify-center w-full pt-5">
          <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />

          <button
            onClick={() => handleLoadMore()}
            className={`bg-red-01 text-white hover:bg-gray-600 duration-300 text-$ hover:text-white py-3 px-5 rounded-full uppercase font-semibold border border-black hover:border-none`}
          >
            Muat Lebih Banyak
          </button>

          <hr className="w-20 md:w-40 h-px mx-5 my-8 bg-black border-0 dark:bg-black" />
        </section>
      ) : null}
    </section>
  );
}
