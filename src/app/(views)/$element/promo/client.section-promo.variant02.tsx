'use client';

import { T_PromoProps } from '@/app/(views)/$element/types/promo';
import { CE_CardVariant07 } from '@/app/(views)/$element/card/client.card.variant07';
import Pagination from '@/lib/element/global/pagination';
import { CE_SidebarPromo } from './client.sidebar';
import { useEffect, useState, useTransition } from 'react';
import {
  CFN_GetPromo,
  CFN_MapToPromoPayload,
  CFN_ValidateGetPromoFields,
} from '@/app/(views)/$function/cfn.get.promo';
import useForm from '@/lib/hook/useForm';
import { T_PromoRequest } from '@/api/promo/api.get-promo.type';
import { useParams, useSearchParams } from 'next/navigation';
import LoaderVariant01 from '@/lib/element/global/loader';

export default function CE_SectionPromoVariant01({
  promoData,
  sidebarData,
  paginationData,
}: T_PromoProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  // Store only additional loaded items, not duplicating props
  const [additionalPromoItems, setAdditionalPromoItems] = useState<
    T_PromoProps['promoData']
  >([]);
  const [currentPagination, setCurrentPagination] = useState<
    T_PromoProps['paginationData'] | undefined
  >(undefined);

  const { slug } = useParams();
  const alias = slug?.[0];
  const currentLanguage = useSearchParams().get('lang');

  const { form, setForm, validateForm, onFieldChange } = useForm<
    T_PromoRequest,
    T_PromoRequest
  >(
    CFN_MapToPromoPayload({
      search: '',
      limit: '10',
      page: '1',
      category_id: undefined,
      location_id: undefined,
      product_id: undefined,
    }),
    CFN_ValidateGetPromoFields
  );

  // Reset state when props change
  useEffect(() => {
    setAdditionalPromoItems(promoData);
    setCurrentPagination(paginationData);
  }, [promoData, paginationData]);

  const handlePageChange = (page: number) => {
    setForm((prevForm) => ({
      ...prevForm,
      page: page.toString(),
    }));
  };

  const handleSearch = () => {
    setForm((prevForm) => ({
      ...prevForm,
      page: '1',
      search: searchValue,
    }));
  };

  const handleFilter = (type: keyof T_PromoRequest, value?: string[]) => {
    if (value && value.length > 0) {
      onFieldChange(type, value.join(','));
    } else {
      if (type === 'category_id') {
        setForm((prevForm) => ({
          ...prevForm,
          category_id: undefined,
        }));
      } else if (type === 'product_id') {
        setForm((prevForm) => ({
          ...prevForm,
          product_id: undefined,
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          location_id: undefined,
        }));
      }
    }
  };

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
            if (form.page === '1') {
              setAdditionalPromoItems([]);
            }
            return;
          }

          const dataPromoWidget = data.field_components.filter(
            (item: any) => item?.entity_bundle?.[0]?.value === 'promo_widget'
          );

          if (!dataPromoWidget?.[0]?.promo_data?.items) {
            // eslint-disable-next-line no-console
            console.error('Promo data missing:', dataPromoWidget);
            if (form.page === '1') {
              setAdditionalPromoItems([]);
            }
            return;
          }

          const mappedPromo =
            dataPromoWidget?.[0]?.promo_data?.items?.map((item: any) => ({
              title: item?.title?.[0]?.value,
              image:
                item?.field_promo_image?.[0]?.thumbnail?.[0]?.uri?.[0]?.url,
              nid: item?.nid?.[0]?.value,
              startDate: item?.field_promo_start_date?.[0]?.value,
              endDate: item?.field_promo_end_date?.[0]?.value,
            })) || [];

          const mappedPagination = dataPromoWidget?.[0]?.promo_data?.pager;

          setAdditionalPromoItems(mappedPromo);
          setCurrentPagination(mappedPagination);
        }
      );
    }
  };

  useEffect(() => {
    handlePromoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    form.category_id,
    form.page,
    form.search,
    form.location_id,
    form.product_id,
    form.category_id,
  ]);

  const formatDate = (date: string) => {
    const now = new Date(date);
    const formattedDate = now.toLocaleString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
    return formattedDate;
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-10 flex justify-end gap-4 mdmax:px-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <div className="border border-black rounded-3xl inline-flex items-center overflow-hidden md:w-[378px] w-full h-16 px-5">
              <input
                type="text"
                className="focus:outline-none w-full h-full"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Cari Promo"
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
          {sidebarData && (
            <div
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="items-center gap-2 text-blue-01 md:hidden flex cursor-pointer"
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M16 112h336v32H16zm144 128h336v32H160zM16 368h336v32H16z"
                />
              </svg>
              <p>Category</p>
            </div>
          )}
        </div>

        <div className="flex items-start md:justify-between gap-4">
          {sidebarData && (
            <div className="w-1/4 flex-none flex-col gap-6 md:flex hidden">
              {sidebarData.categoryData && (
                <CE_SidebarPromo
                  title="Kategori"
                  listData={sidebarData.categoryData}
                  onSelectionChange={(e) => handleFilter('category_id', e)}
                />
              )}
              {sidebarData.productData && (
                <CE_SidebarPromo
                  title="Product"
                  listData={sidebarData.productData}
                  onSelectionChange={(e) => handleFilter('product_id', e)}
                />
              )}
              {sidebarData.locationData && (
                <CE_SidebarPromo
                  title="Lokasi"
                  listData={sidebarData.locationData}
                  onSelectionChange={(e) => handleFilter('location_id', e)}
                />
              )}
            </div>
          )}

          {additionalPromoItems && additionalPromoItems.length > 0 ? (
            <div className="w-full">
              {additionalPromoItems.map((promoItem, index) => (
                <CE_CardVariant07
                  key={promoItem.nid || index}
                  title={promoItem?.title}
                  image={promoItem?.image}
                  subTitle={`${formatDate(promoItem?.startDate)} - ${formatDate(promoItem?.endDate)}`}
                  nid={promoItem.nid}
                />
              ))}
            </div>
          ) : isPending ? (
            <div className="w-full">
              <LoaderVariant01 />
            </div>
          ) : (
            <div className="w-full">
              <p className="text-center text-gray-500">
                No promotions available for this category.
              </p>
            </div>
          )}
        </div>

        <div className="flex md:justify-end justify-center">
          <Pagination
            currentPage={currentPagination?.page || 1}
            totalPages={currentPagination?.total_page || 0}
            variant="simple"
            onPageChange={(e) => {
              handlePageChange(e);
            }}
          />
        </div>

        <div
          className={[
            'fixed w-full h-screen top-0 left-0 z-50 ease-in-out transition-all duration-300 md:hidden block',
            isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
          ].join(' ')}
        >
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-screen"
          ></div>
          {sidebarData && (
            <div className="bg-gray-100 max-w-[280px] z-20 flex relative flex-col h-full rounded-e-3xl py-2 overflow-y-auto">
              {sidebarData.categoryData && (
                <CE_SidebarPromo
                  title="Kategori"
                  listData={sidebarData.categoryData}
                  onSelectionChange={(e) => handleFilter('category_id', e)}
                />
              )}
              {sidebarData.productData && (
                <CE_SidebarPromo
                  title="Product"
                  listData={sidebarData.productData}
                  onSelectionChange={(e) => handleFilter('product_id', e)}
                />
              )}
              {sidebarData.locationData && (
                <CE_SidebarPromo
                  title="Lokasi"
                  listData={sidebarData.locationData}
                  onSelectionChange={(e) => handleFilter('location_id', e)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
