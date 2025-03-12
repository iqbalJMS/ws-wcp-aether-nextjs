'use client';
import React from 'react';
import CE_Card from './client.card';
// import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export default function CE_FlipCard({
  data,
  backgroundImage,
}: {
  data: Array<{
    title: string;
    subtitle: string;
    desc: string;
    frontImage: string;
    backImage: string;
  }>;
  backgroundImage: string;
}) {
  return (
    <>
      <div className="w-full flex justify-center pb-10">
        <div className="w-full h-full flex justify-center items-center ">
          {/* WEB section */}
          <section className="hidden lg:flex justify-center items-center w-full h-full pt-0 px-4">
            <div
              className="w-9/12 2xl:w-7/12 h-full"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${backgroundImage ?? ''})`,
                backgroundAttachment: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '800px',
                backgroundPosition: 'center',
              }}
            >
              <div className="mt-60 ml-20 ">
                {data && (
                  <CE_Card
                    frontImage={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.[0]?.frontImage}`}
                    backImage={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.[0]?.backImage}`}
                  />
                )}
              </div>
            </div>
            <div className="w-4/12 xl:w-6/12 h-full flex flex-col justify-center px-10">
              <div className="text-[#000842] text-3xl xl:text-4xl font-bold">
                {data?.[0]?.title ?? <h1>{data?.[0]?.title ?? ''}</h1>}
              </div>
              <div className="text-[#737F95] text-base xl:text-lg pt-3">
                {data?.[0]?.subtitle ?? <h2>{data?.[0]?.subtitle ?? ''}</h2>}
              </div>
            </div>
          </section>

          {/* MOBIlE */}
          <section className="w-full flex flex-col justify-center items-center h-full lg:hidden">
            <div
              className="w-full h-80 flex justify-center"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${backgroundImage ?? ''})`,
                backgroundAttachment: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 500,
                backgroundPosition: 'center',
              }}
            >
              <div className="mt-72 ml-56 md:ml-80">
                {data && (
                  <CE_Card
                    frontImage={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.[0]?.frontImage}`}
                    backImage={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.[0]?.backImage}`}
                  />
                )}
              </div>
            </div>
            <div className="h-full flex flex-col px-5 md:px-32">
              <div className="text-[#000842] text-2xl font-bold">
                {data?.[0]?.title ?? <h1>{data?.[0]?.title ?? ''}</h1>}
              </div>
              <div className="text-[#737F95] text-sm pt-3">
                {data?.[0]?.subtitle ?? <h2>{data?.[0]?.subtitle ?? ''}</h2>}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
