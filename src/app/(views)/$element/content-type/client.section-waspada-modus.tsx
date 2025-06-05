'use client';

import { useState, useTransition, useEffect } from 'react';
import { CE_CardVariant07 } from '@/app/(views)/$element/card/client.card.variant07';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetContentType,
  CFN_MapToContentTypePayload,
  CFN_ValidateGetContentTypeFields,
} from '@/app/(views)/$function/cfn.get-content-type';
import { T_ContentTypeRequest } from '@/api/content-type/api.get-content-type.type';

interface WaspadaModusItem {
  nid: number;
  title: string;
  date: string;
  image: string;
}

interface WaspadaModusData {
  contents: WaspadaModusItem[];
}

export default function CE_WaspadaModus({
  waspadaModusData,
}: {
  waspadaModusData: WaspadaModusData;
}) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isPending, transiting] = useTransition();
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [additionalItems, setAdditionalItems] = useState<WaspadaModusItem[]>(
    []
  );

  // Reset state when props change
  useEffect(() => {
    setAdditionalItems([]);
    setIsFirst(true);
    setIsLastPage(false);
  }, [waspadaModusData]);

  // Combine original data with additional loaded items
  const allItems = [...(waspadaModusData?.contents || []), ...additionalItems];

  // Filter items based on search value if needed
  const filteredItems =
    searchValue.trim() !== ''
      ? allItems.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : allItems;

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

  const handleNewsList = () => {
    if (isPending) return;

    const isValid = validateForm();
    if (isValid) {
      CFN_GetContentType(transiting, form, 'waspada-modus', (resp: any) => {
        const _component = resp?.field_components?.find(
          (item: any) => item?.entity_bundle?.[0]?.value === 'content_type'
        );

        const newItems =
          _component?.field_content_type?.map((item: any) => {
            const imageV2 = item?.field_components?.find(
              (item: any) => item?.entity_bundle?.[0]?.value === 'image'
            );

            return {
              title: item?.title?.[0]?.value,
              nid: item?.nid?.[0]?.value,
              image:
                item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url ||
                imageV2?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
              date: item?.created?.[0]?.value,
            };
          }) || [];

        if (!newItems.length) {
          setIsLastPage(true);
          return;
        }

        setAdditionalItems((prev) => [...prev, ...newItems]);

        if (newItems.length < Number(form.limit)) {
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

    handleNewsList();
  };

  const handleSearch = () => {
    // The search is now handled through the filteredItems variable
    // which filters the combined list based on the search value
  };

  return (
    <section className="container py-10">
      <div className="flex justify-end">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="border border-black rounded-lg inline-flex items-center overflow-hidden md:w-[378px] w-full h-16 px-5">
            <input
              type="text"
              className="focus:outline-none w-full h-full"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Cari Promo"
              value={searchValue}
            />
            <button type="submit" disabled={isPending}>
              {!isPending ? (
                <svg
                  className="w-7 h-7"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 animate-spin"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 4A8.5 8.5 0 0 0 3 12.5H2A9.5 9.5 0 0 1 11.5 3z"
                  />
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
      {filteredItems.map((item) => (
        <CE_CardVariant07
          key={item.nid}
          title={item.title}
          nid={item.nid}
          subTitle={formatDate(item.date)}
          image={item.image}
          typeContent="alert_mode"
        />
      ))}
      {!isLastPage && filteredItems.length === allItems.length ? (
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
