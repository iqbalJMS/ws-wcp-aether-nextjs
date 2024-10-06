'use client';

import { ChevronRightIcon } from '@/lib/element/global/chevron-right-icon';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import React from 'react';
import { T_DataSaham } from '@/app/aether/$constant/types/widget/info-saham';

type T_InfoSahamMainProps = {
  title?: string;
  textLink?: string;
  navigationLink?: string;
  data: T_DataSaham;
};

export default function CE_InfoSahamMain({
  title,
  textLink,
  navigationLink,
  data,
}: T_InfoSahamMainProps) {
  const social_media = [
    {
      name: '',
      icon: 'facebook',
      url: 'https://www.facebook.com/BRIofficialpage',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'instagram',
      url: 'https://www.instagram.com/bankbri_id',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'twitter',
      url: 'https://x.com/kontakbri',
      className: 'text-blue-01 ',
    },
    {
      name: '',
      icon: 'youTube',
      url: 'https://www.youtube.com/channel/UCRHFE_ooDrkEiRRJbog3EjA',
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
              {title ?? 'Info Saham BRI'}
            </h2>
            <p className="text-m-medium text-gray-500">{`Pembaharuan terakhir ${data.lastUpdated.substring(0, 4)}/${data.lastUpdated.substring(4, 6)}/${data.lastUpdated.substring(6, 8)} ${data.lastUpdated.substring(9)} WIB Untuk transaksi kurang dari eq. USD 2.500`}</p>
          </div>
          <Link
            className="flex items-center text-blue-01 font-medium text-sm"
            href={navigationLink ?? ''}
          >
            {textLink ?? 'Lebih Lanjut'.toUpperCase()}
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
                  className="ml-2"
                  src="/images/icon-menu/config.png"
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
                    >
                      {icon && (
                        <Image
                          src={`images/footers/${icon}.svg`}
                          width={18}
                          extern={true}
                          height={18}
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
                        'absolute bottom-0 left-0',
                        'w-full h-[.2rem] bg-blue-01',
                      ].join(' ')}
                    >
                      <div
                        className={[
                          'border-l-[0.8rem] border-r-[0.8rem] border-b-[0.8rem] ',
                          'border-l-transparent border-r-transparent border-green-500',
                          'h-2 w-2 mr-2',
                        ].join(' ')}
                      ></div>
                    </div>
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
