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
      <div className="w-full h-screen flex justify-center pt-20 pb-10">
        <div className=" w-[40rem] h-full md:w-[50rem] xl:w-full grid grid-cols-1 ">
          <section className="h-2/3 flex pt-0 mx-10">
            <div
              className="w-9/12 flex justify-end items-center"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${backgroundImage ?? ''})`,
                backgroundAttachment: 'cover',
                backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'top',
                // backgroundPositionY: 'top',
                // backgroundPositionX: 'right',
              }}
            >
              <div className="w-fit h-fit mt-44 mr-40 ">
                {data && (
                  <CE_Card
                    frontImage={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.[0]?.frontImage}`}
                    backImage={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${data?.[0]?.backImage}`}
                  />
                )}
              </div>
            </div>
            <div className="w-7/12 h-full flex flex-col justify-center">
              <div className="text-[#000842] text-4xl font-bold">
                {data?.[0]?.title ?? <h1>{data?.[0]?.title ?? ''}</h1>}
              </div>
              <div className="text-[#737F95] text-lg pt-3">
                {data?.[0]?.subtitle ?? <h2>{data?.[0]?.subtitle ?? ''}</h2>}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
