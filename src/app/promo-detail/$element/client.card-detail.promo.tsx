'use client';

import React from 'react';
import Image from 'next/image';
import ShareIcon from '@/lib/element/global/share-icon';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';

export default function CE_CardDetailPromo({
  title,
  image,
  terms,
  startDate,
  endDate,
  merchant,
  lokasi,
  product,
}: {
  title: string;
  image: string;
  terms: string;
  startDate: string;
  endDate: string;
  merchant: string;
  lokasi: string;
  product: string;
}) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <section className="w-full lg:w-11/12 xl:w-9/12">
          <section className="w-full grid grid-cols-1 place-items-start space-y-5 pb-12">
            <div className="w-full flex justify-center md:flex-none lg:w-8/12">
              <Image
                src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${image}`}
                width={1000}
                height={1000}
                alt="image bri prioritas"
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-full flex flex-col space-y-5 lg:flex-row justify-between items-center ">
              <h1 className="font-semibold">{title}</h1>
              <Link
                href={'#'}
                className="w-52 flex items-center justify-center py-4 rounded-full uppercase font-bold text-sm text-white bg-orange-400 hover:bg-gray-600 duration-300"
              >
                <span className="pr-2">
                  <ShareIcon
                    className="text-white"
                    width={20}
                    height={20}
                    stroke=""
                  />
                </span>
                refer a friend
              </Link>
            </div>
          </section>

          <div className="w-full">
            <div className="sm:hidden">
              <h1 className="border-b border-[#D6D6D6] text-lg px-5 py-3 font-medium">
                Periode Promo
              </h1>
              <p className="text-gray-500 text-sm px-5 py-3">
                {formatDate(startDate)} - {formatDate(endDate)}
              </p>
            </div>
            <div className="hidden sm:flex border-b border-[#D6D6D6] py-4">
              <div className="w-[260px]">
                <h1 className="text-lg font-medium">Periode Promo</h1>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  {formatDate(startDate)} - {formatDate(endDate)}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <h1 className="px-5 py-3 border-y border-[#D6D6D6] text-lg font-medium">
              Promo menggunakan
            </h1>
            <p className="px-5 py-3 text-gray-500 text-sm">{product}</p>
          </div>
          <div className="hidden sm:flex border-y border-[#D6D6D6] py-4">
            <div className="w-[260px]">
              <h1 className="text-lg font-medium">Promo menggunakan</h1>
            </div>
            <p className="text-gray-500 text-sm">{product}</p>
          </div>

          <div className="sm:hidden">
            <h1 className="px-5 py-3 border-y border-[#D6D6D6] text-lg font-medium">
              Info Merchant
            </h1>
            <p className="px-5 py-3 text-gray-500 text-sm">{merchant}</p>
          </div>
          <div className="hidden sm:flex border-y border-[#D6D6D6] py-4">
            <div className="w-[260px]">
              <h1 className="text-lg font-medium">Info Merchant</h1>
            </div>
            <p className="text-gray-500 text-sm">{merchant}</p>
          </div>

          <div className="sm:hidden">
            <h1 className="px-5 py-3 border-y border-[#D6D6D6] text-lg font-medium">
              Lokasi
            </h1>
            <p className="px-5 py-3 text-gray-500 text-sm">{lokasi}</p>
          </div>
          <div className="hidden sm:flex border-y border-[#D6D6D6] py-4">
            <div className="w-[260px]">
              <h1 className="text-lg font-medium">Lokasi</h1>
            </div>
            <p className="text-gray-500 text-sm">{lokasi}</p>
          </div>

          <section className="grid grid-cols-1">
            <div className="md:py-4 mdmax:px-5 py-3">
              <h1 className="font-medium text-lg">Terms & Condition</h1>
            </div>
            <div className="md:py-4 mdmax:px-5 py-3">
              <div className="space-y-3 text-sm tracking-wide leading-6 text-gray-500">
                {parseHTMLToReact(terms)}
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
