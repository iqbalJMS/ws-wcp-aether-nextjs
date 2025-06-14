'use client';

import { ChevronRightIcon } from '@/lib/element/global/icons/chevron-right-icon';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import React from 'react';
import { T_Data } from '@/app/(views)/$constant/types/widget/info-saham';
import { useSearchParams } from 'next/navigation';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';

type T_InfoSahamMainProps = {
  data: T_Data;
};

export default function CE_InfoSahamMain({ data }: T_InfoSahamMainProps) {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');

  const social_media = [
    {
      name: '',
      icon: 'facebook',
      url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbri.co.id%2Finformasi-investor',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'x',
      url: 'https://x.com/share?url=https%3A%2F%2Fbri.co.id%2Finformasi-investor&text=BBRI%20Stock%20Info',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'google',
      url: 'https://plus.google.com/share?url=https%3A%2F%2Fbri.co.id%2Finformasi-investor',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'whatsapp',
      url: 'whatsapp://send/?text=https%3A%2F%2Fbri.co.id%2Finformasi-investor%20BBRI%20Stock%20Info',
      className: 'text-blue-01 ',
    },
  ];
  const [isSosmedOpen, setIsSosmedOpen] = React.useState(false);
  return (
    <section className="container py-10">
      <div className="p-6 rounded-md shadow-md space-y-8">
        <div className="flex md:flex-row flex-col justify-between items-center mdmax:text-center gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-3">
              {dictionary?.info_saham?.title ?? 'Info Saham BRI'}
            </h2>
            <p className="text-m-medium text-gray-500">{`${dictionary?.info_saham?.descriptionDate ?? 'Terakhir diperbarui'} ${data.lastUpdated.substring(0, 4)}/${data.lastUpdated.substring(4, 6)}/${data.lastUpdated.substring(6, 8)} ${data.lastUpdated.substring(9)} ${dictionary?.info_saham?.descriptionTransaction} USD 2.500`}</p>
          </div>
          <Link
            className="flex items-center text-blue-01 font-medium text-sm"
            href={'http://ir-bri.com/'}
            extern
          >
            {dictionary?.info_saham?.textNavigateMore ??
              'Lebih Lanjut'.toUpperCase()}
            <ChevronRightIcon
              width={20}
              height={20}
              className="ml-2 stroke-blue-01"
            />
          </Link>
        </div>
        <div className="flex divide-y-2 md:flex-row md:divide-x-2 md:divide-y-0 divide-x-0 flex-col">
          <div className="flex md:flex-row flex-col justify-between md:w-1/2 w-full p-4">
            <div className="flex md:flex-col flex-row gap-2 mdmax:mb-3 md:items-start items-center">
              <div
                onClick={() => setIsSosmedOpen((prev) => !prev)}
                className="flex items-center text-xl cursor-pointer"
              >
                {data.stockId}
                <Image
                  className="ml-2 transition-opacity duration-200"
                  src={
                    isSosmedOpen
                      ? '/web/guest/images/footers/Share.svg'
                      : '/web/guest/images/icon-menu/share.svg'
                  }
                  width={20}
                  height={20}
                  extern={true}
                  alt="Share Stock BBRI"
                />
              </div>
              {isSosmedOpen && (
                <div className={`flex justify-start items-center gap-4`}>
                  {social_media?.map(({ url, icon }, index) => (
                    <Link
                      extern={true}
                      href={url ?? '/'}
                      key={index}
                      className="text-white flex items-center gap-2 lg:text-sm text-sm justify-center lg:justify-start font-normal"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(url, '_blank', 'width=600,height=400');
                      }}
                    >
                      {icon && (
                        <Image
                          src={`/web/guest/images/footers/${icon}.svg`}
                          width={28}
                          extern={true}
                          height={28}
                          alt={`icon-${icon}`}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="text-2xl text-blue-01 font-medium md:text-end text-start mb-2">
                {new Intl.NumberFormat('id-ID', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(Number(data.buyPrice))}
              </p>
              <div>
                {Number(data.percentChange) > 0 ? (
                  <div className="flex items-center gap-2">
                    <div
                      className={[
                        'border-l-[0.8rem] border-r-[0.8rem] border-b-[0.8rem] ',
                        'border-l-transparent border-r-transparent border-green-500',
                        'h-2 w-2 mr-2',
                      ].join(' ')}
                    ></div>
                    <p className="text-2xl text-blue-01 font-medium">
                      {`+${Number(data.high) - Number(data.buyPrice)}.00(+${Number(data.percentChange)}%)`}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div
                      className={[
                        'border-l-[0.8rem] border-r-[0.8rem] border-t-[0.8rem] ',
                        'border-l-transparent border-r-transparent border-red-01',
                        'h-2 w-2 mr-2',
                      ].join(' ')}
                    ></div>
                    <p className="text-2xl text-blue-01 font-medium">
                      {`-${Math.abs(Number(data.high) - Number(data.buyPrice))}.00(${Number(data.percentChange)}%)`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:w-1/2 w-full grid-cols-1 p-4 gap-3 text-xl">
            <p className="col-span-1">Volume</p>
            <p className="col-span-1 text-2xl text-blue-01 font-medium md:text-end">
              {new Intl.NumberFormat('id-ID', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(Number(data.cumulativeVol.replace(/,/g, '')))}
            </p>
            <p className="col-span-1 ">Day&apos;s Range</p>
            <p className="col-span-1 text-2xl text-blue-01 font-medium md:text-end">{`${new Intl.NumberFormat(
              'id-ID',
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            ).format(Number(data.low))} - ${new Intl.NumberFormat('id-ID', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(Number(data.high))}`}</p>
            <p className="col-span-1">52wk Range</p>
            <p className="col-span-1 text-2xl text-blue-01 font-medium md:text-end">{`${new Intl.NumberFormat(
              'id-ID',
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            ).format(Number(data.low52WKS))} - ${new Intl.NumberFormat(
              'id-ID',
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            ).format(Number(data.high52WKS))}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
