'use client';

import Link from '@/lib/element/global/link';
import { useState } from 'react';
import { Tabs } from '@/lib/element/global/tabs';
import Table from '@/lib/element/global/table';
import InputSelect from '@/lib/element/global/input.select';
import InputText from '@/lib/element/global/input.text';
import { T_Kurs } from '@/app/aether/$constant/types/widget/kurs';
// import InputSlider from "@/lib/element/global/input.slider";

type T_Props = {
  listTable: T_Kurs['data'];
  listCurrency: T_Kurs['field_currency'];
  availableCurrency: T_Kurs['available_currency'];
};

export function CE_KursValue({
  listTable,
  listCurrency,
  // TODO kindly removed it if unused
  // availableCurrency,
}: T_Props) {
  const data = listTable?.map((item) => {
    return {
      id: item.currency,
      name: item.currency,
      age: item.buyRateERate,
      position: item.sellRateERate,
    };
  });
  const dataCurrencySelected = listCurrency.map((item) => {
    return {
      title: item.value,
      value: item.value,
    };
  });

  const tabs = [
    {
      title: 'BELI',
      information: 'Kamu akan menjual valas ke BRI',
      slug: 'buy',
    },
    {
      title: 'JUAL',
      information: 'Kamu akan membeli valas dari BRI',
      slug: 'jual',
    },
  ];

  const [tabValue, setTabValue] = useState(tabs.at(0)?.slug || '');

  return (
    <div className="flex -mx-10">
      <div className="w-1/2 px-10">
        <Table
          headers={[
            {
              title: 'Kurs',
              field: 'name',
              callback: (item) => {
                return <span>{item.name}</span>;
              },
            },
            { title: 'Beli', field: 'age' },
            { title: 'Jual', field: 'position' },
          ]}
          list={data}
        />
      </div>
      <div className="w-1/2 px-10">
        <div>
          <div className="text-lg uppercase text-blue-01 font-semibold border-b-2 border-blue-01 pb-2">
            Kalkulator
          </div>
          <Tabs
            list={tabs}
            value={tabValue}
            onChange={(value) => setTabValue(value)}
            variant="full"
          />
          <div className="mt-5">
            <div className="flex items-center -mx-2 mb-5">
              <div className="w-[25%] flex-none px-2">
                <InputSelect
                  list={dataCurrencySelected}
                  value={dataCurrencySelected?.[0]?.value}
                />
              </div>
              <div className="flex-1 px-2">
                <InputText
                  value=""
                  type="number"
                  placeholder="Masukan Nominal"
                />
              </div>
            </div>
            <div className="flex items-center -mx-2 mb-5">
              <div className="w-[25%] flex-none px-2">
                <InputSelect
                  list={dataCurrencySelected}
                  value={dataCurrencySelected?.[1]?.value}
                />
              </div>
              <div className="flex-1 px-2">
                <div className="text-blue-01 px-4">0</div>
                {/* <InputSlider max={10} min={0}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CE_KursMain({
  listTable,
  listCurrency,
  availableCurrency,
}: T_Props) {
  const tabs = [
    {
      title: 'E-RATE',
      information:
        'e-Rate BRI adalah kurs khusus yang dapat dinikmati oleh pengguna e-Banking BRI ketika melakukan transaksi transfer.',
      slug: 'e-rate',
    },
    {
      title: 'KURS TT COUNTER',
      information:
        'e-Rate BRI adalah kurs khusus yang dapat dinikmati oleh pengguna e-Banking BRI ketika melakukan transaksi transfer.',
      slug: 'kurs-tt',
    },
  ];
  const [tabValue, setTabValue] = useState(tabs.at(0)?.slug || '');

  return (
    <div className="container py-10">
      <div className="flex items-end justify-between border-b-2 border-dashed border-blue-01 border-opacity-20 pb-5 mb-10">
        <div>
          <div className="text-2xl font-semibold mb-2">Kurs BRI</div>
          <div className=" text-black font-medium text-opacity-30">
            * Terakhir diperbarui 23 Sep 2024 10:10 Untuk transaksi kurang dari
            eq. USD 2.500
          </div>
        </div>
        <div>
          <Link className="text-blue-01 flex items-center" href={'/'}>
            LIHAT SELENGKAPNYA{' '}
            <span className="text-xl inline-block ml-2">{'  >'}</span>
          </Link>
        </div>
      </div>
      <div className="mb-10">
        <Tabs
          list={tabs}
          value={tabValue}
          onChange={(value) => setTabValue(value)}
          variant="border-arrow"
        />
      </div>
      <div>
        <CE_KursValue
          listTable={listTable}
          listCurrency={listCurrency}
          availableCurrency={availableCurrency}
        />
      </div>
    </div>
  );
}
