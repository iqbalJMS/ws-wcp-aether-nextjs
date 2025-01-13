'use client';

import { useEffect, useState, useTransition } from 'react';
import { T_PromoProps } from '@/app/(views)/$element/types/promo';
import CE_CardCategoryPromo from './client.card-category';
import Link from '@/lib/element/global/link';
import CE_CardPromoVariant01 from './client.card-promo.variant01';
import {
  CFN_GetPromo,
  CFN_MapToPromoPayload,
  CFN_ValidateGetPromoFields,
} from '@/app/(views)/$function/cfn.get.promo';
import { T_PromoRequest } from '@/api/promo/api.get-promo.type';
import useForm from '@/lib/hook/useForm';
import { useParams, useSearchParams } from 'next/navigation';
import LoaderVariant01 from '@/lib/element/global/loader';

export default function CE_SectionPromoVariant01({
  title,
  buttonLink,
  buttonText,
  categoryData,
  promoData = [],
}: T_PromoProps) {
  const [isPending, startTransition] = useTransition();
  const [promo, setPromo] = useState(promoData);

  const { slug } = useParams();
  const alias = slug?.[0];
  const currentLanguage = useSearchParams().get('lang');

  const { form, validateForm, onFieldChange } = useForm<
    T_PromoRequest,
    T_PromoRequest
  >(
    CFN_MapToPromoPayload({
      category_id: undefined,
    }),
    CFN_ValidateGetPromoFields
  );

  const handlePromoList = () => {
    if (isPending) return;

    const isValid = validateForm();
    if (isValid) {
      CFN_GetPromo(
        startTransition,
        form,
        alias,
        currentLanguage || 'id',
        (data) => {
          if (!data?.field_components) {
            // eslint-disable-next-line no-console
            console.error('Invalid data from API:', data);
            setPromo([]);
            return;
          }

          const dataPromoWidget = data.field_components.filter(
            (item: any) => item?.entity_bundle?.[0]?.value === 'promo_widget'
          );

          if (!dataPromoWidget?.[0]?.promo_data?.items) {
            // eslint-disable-next-line no-console
            console.error('Promo data missing:', dataPromoWidget);
            setPromo([]);
            return;
          }

          const mappedPromo = dataPromoWidget?.[0]?.promo_data?.items?.map(
            (item: any) => ({
              title: item?.title?.[0]?.value,
              image:
                item?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
              nid: item?.nid?.[0]?.value,
              startDate: item?.field_promo_start_date?.[0]?.value,
              endDate: item?.field_promo_end_date?.[0]?.value,
            })
          );

          setPromo(mappedPromo || []);
        }
      );
    }
  };

  useEffect(() => {
    handlePromoList();
  }, [form.category_id]);

  return (
    <section>
      {/* Kategori */}
      <div className="container pt-20 pb-10">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          {categoryData?.map((item, index) => (
            <CE_CardCategoryPromo
              key={index}
              label={item?.text}
              nid={item?.nid}
              isSelect={form.category_id === item?.nid?.toString()}
              image={item?.image}
              onChangeCategory={(nid) => {
                onFieldChange('category_id', nid?.toString() || '');
              }}
            />
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <div className="container py-10">
        <div className="flex md:flex-row flex-col justify-between items-center mb-12 mdmax:gap-2">
          {title && <h1 className="text-3xl font-semibold">{title}</h1>}
          {buttonText && (
            <Link href={buttonLink || '#'}>
              <button
                className={`font-normal text-sm text-white rounded-full md:py-4 py-2 px-6 w-full 
                              bg-orange-400 hover:bg-orange-500`}
              >
                {buttonText?.toUpperCase()}
              </button>
            </Link>
          )}
        </div>

        {/* Promo Cards */}
        <div className="flex flex-wrap items-center gap-3 mdmax:justify-center">
          {promo && promo?.length > 0 ? (
            promo.map((promoItem, index) => (
              <CE_CardPromoVariant01
                key={index}
                title={promoItem?.title}
                image={promoItem?.image}
                startDate={promoItem?.startDate}
                endDate={promoItem?.endDate}
              />
            ))
          ) : isPending ? (
            <div className="w-full">
              <LoaderVariant01 />
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No promotions available for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
