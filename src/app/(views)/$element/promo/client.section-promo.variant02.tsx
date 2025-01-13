'use client';

import { T_PromoProps } from '@/app/(views)/$element/types/promo';
import { CE_CardVariant07 } from '@/app/(views)/$element/card/client.card.variant07';
import Pagination from '@/lib/element/global/pagination';
import { CE_SidebarPromo } from './client.sidebar';
import { useState } from 'react';

export default function CE_SectionPromoVariant01({
  promoData,
  sidebarData,
}: T_PromoProps) {
  // const [categoryValue, setCategoryValue] = useState<string[]>([]);
  // const [productValue, setProductValue] = useState<string[]>([]);
  // const [locationValue, setLocationValue] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

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
          <div className="border border-black rounded-3xl inline-flex items-center overflow-hidden md:w-[378px] w-full h-16 px-5">
            <input
              type="text"
              className="focus:outline-none w-full h-full"
              onChange={() => {}}
              placeholder="Cari Promo"
            />
            <div onClick={() => {}}>
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
            </div>
          </div>
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
        </div>

        <div className="flex items-start md:justify-between gap-4">
          {sidebarData && (
            <div className="w-1/4 flex-none flex-col gap-6 md:flex hidden">
              {sidebarData.categoryData && (
                <CE_SidebarPromo
                  title="Kategori"
                  listData={sidebarData.categoryData}
                  onSelectionChange={() => {}}
                />
              )}
              {sidebarData.productData && (
                <CE_SidebarPromo
                  title="Product"
                  listData={sidebarData.productData}
                  onSelectionChange={() => {}}
                />
              )}
              {sidebarData.locationData && (
                <CE_SidebarPromo
                  title="Lokasi"
                  listData={sidebarData.locationData}
                  onSelectionChange={() => {}}
                />
              )}
            </div>
          )}

          {promoData && (
            <div className="w-full">
              {promoData.map((promoItem, index) => (
                <CE_CardVariant07
                  key={index}
                  title={promoItem?.title}
                  image={promoItem?.image}
                  subTitle={`${formatDate(promoItem?.startDate)} - ${formatDate(promoItem?.endDate)}`}
                  nid={promoItem.nid}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex md:justify-end justify-center">
          <Pagination
            currentPage={1}
            totalPages={0}
            variant="simple"
            onPageChange={() => {}}
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
                  onSelectionChange={() => {}}
                />
              )}
              {sidebarData.productData && (
                <CE_SidebarPromo
                  title="Product"
                  listData={sidebarData.productData}
                  onSelectionChange={() => {}}
                />
              )}
              {sidebarData.locationData && (
                <CE_SidebarPromo
                  title="Lokasi"
                  listData={sidebarData.locationData}
                  onSelectionChange={() => {}}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
