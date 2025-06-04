'use client';

import { useState, useTransition, useEffect } from 'react';
import { CE_CardVariant07 } from '@/app/(views)/$element/card/client.card.variant07';
import useForm from '@/lib/hook/useForm';
import { T_ContentTypeRequest } from '@/api/content-type/api.get-content-type.type';
import {
  CFN_GetContentType,
  CFN_MapToContentTypePayload,
  CFN_ValidateGetContentTypeFields,
} from '@/app/(views)/$function/cfn.get-content-type';
import slugify from 'slugify';

interface I_ArticleItem {
  nid: number;
  title: string;
  date: string;
  image: string;
  site: Array<{ value: string }>;
  category: Array<{ value: string }>;
}

interface I_Article {
  contents: I_ArticleItem[];
}

export default function CE_SectionArticle({
  articleData,
  siteData,
  categoryData,
  isLoadMore,
}: {
  siteData: Array<{ value: string }>;
  categoryData: Array<{ value: string }>;
  isLoadMore: boolean;
  articleData: I_Article;
}) {
  const [isPending, transiting] = useTransition();
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [additionalArticles, setAdditionalArticles] = useState<I_ArticleItem[]>([]);

  // Filter function to apply site and category filters
  const filterArticleItems = (items: I_ArticleItem[]) => {
    return items?.filter(
      (item) =>
        item.site?.some(({ value }) => {
          const slugifiedValue = slugify(value, {
            lower: true,
            replacement: '_',
          });
          return siteData.some((site) => site.value === slugifiedValue);
        }) &&
        item.category?.some(({ value }) => {
          const slugifiedValue = slugify(value, {
            lower: true,
            replacement: '_',
          });
          return categoryData.some(
            (category) => category.value === slugifiedValue
          );
        })
    );
  };

  // Reset additional articles when props change
  useEffect(() => {
    setAdditionalArticles([]);
    setIsFirst(true);
    setIsLastPage(false);
  }, [articleData, siteData, categoryData]);

  // Combine original filtered articles with additional loaded articles
  const allArticleItems = [
    ...filterArticleItems(articleData?.contents || []),
    ...additionalArticles
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

  const handleArticleList = () => {
    if (isPending) return;

    const isValid = validateForm();
    if (isValid) {
      CFN_GetContentType(transiting, form, 'article', (resp: any) => {
        const _component = resp?.field_components?.find(
          (item: any) => item?.entity_bundle?.[0]?.value === 'content_type'
        );

        const dataContentType: I_Article = {
          contents: _component?.field_content_type?.map((item: any) => {
            return {
              title: item?.title?.[0]?.value,
              nid: item?.nid?.[0]?.value,
              image: item?.field_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
              date: item?.created?.[0]?.value,
              site: item?.field_site_id,
              category: item?.field_article_category,
            };
          }),
        };

        const listDataContentType = filterArticleItems(dataContentType.contents || []);

        if (!dataContentType.contents?.length) {
          setIsLastPage(true);
          return;
        }

        setAdditionalArticles((prev) => [...prev, ...listDataContentType]);
        
        if (dataContentType.contents.length < Number(form.limit)) {
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
    
    handleArticleList();
  };

  return (
    <section className="container py-10">
      {allArticleItems?.map((item) => (
        <CE_CardVariant07
          key={item.nid}
          title={item.title}
          nid={item.nid}
          subTitle={formatDate(item.date)}
          image={item.image}
          typeContent="article"
        />
      ))}
      {!isLastPage && isLoadMore ? (
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
