'use client';

import { useState, useTransition } from 'react';
import { CE_CardVariant07 } from '@/app/(views)/$element/card/client.card.variant07';
import useForm from '@/lib/hook/useForm';
import { T_ContentTypeRequest } from '@/api/content-type/api.get-content-type.type';
import {
  CFN_GetContentType,
  CFN_MapToContentTypePayload,
  CFN_ValidateGetContentTypeFields,
} from '@/app/(views)/$function/cfn.get-content-type';

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
  };
}) {
  const [isPending, transiting] = useTransition();
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [newsList, setNewsList] = useState(newsData);

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

  const handleNewsList = () => {
    if (isPending) return;

    const isValid = validateForm();
    if (isValid) {
      CFN_GetContentType(transiting, form, 'news', (resp: any) => {
        const _component = resp?.field_components?.find(
          (item: any) => item?.entity_bundle?.[0]?.value === 'content_type'
        );

        const dataContentType = {
          contents: _component?.field_content_type?.map((item: any) => {
            return {
              title: item?.title?.[0]?.value,
              nid: item?.nid?.[0]?.value,
              image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
              date: formatDate(item?.created?.[0]?.value),
            };
          }),
        };

        if (!dataContentType.contents?.length) {
          setIsLastPage(true);
          return;
        }

        if (form.page === '0') {
          setNewsList(dataContentType);
        } else {
          setNewsList((prev) => ({
            contents: [...prev.contents, ...dataContentType.contents],
          }));

          if (dataContentType.contents.length < Number(form.limit)) {
            setIsLastPage(true);
          }
        }
      });
    }
  };

  const handleLoadMore = () => {
    if (isFirst) {
      setForm({
        ...form,
        page: String(Number(form.page) + 1),
      });
      setIsFirst(false);
      handleNewsList();
    } else {
      setForm({
        ...form,
        page: String(Number(form.page) + 1),
      });
      handleNewsList();
    }
  };

  return (
    <section className="container py-10">
      {newsList?.contents?.map((item) => (
        <CE_CardVariant07
          key={item.nid}
          title={item.title}
          nid={item.nid}
          subTitle={formatDate(Number(item.date))}
          image={item.image}
          typeContent="news"
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
