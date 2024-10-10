'use client';

import Link from '@/lib/element/global/link';
import { useEffect, useState, useTransition } from 'react';
import { Tabs } from '@/lib/element/global/tabs';
import Table from '@/lib/element/global/table';
import InputSelect from '@/lib/element/global/input.select';
import InputText from '@/lib/element/global/input.text';
import { T_Kurs } from '@/app/(views)/$constant/types/widget/kurs';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetKurs,
  CFN_MapToKursPayload,
  CFN_ValidateGetKursFields,
  T_GetKurs,
} from '@/app/(views)/$function/cfn.get.kurs';

type T_Props = {
  listTable: T_Kurs['data'];
  listCurrency: T_Kurs['field_currency'];
  availableCurrency: T_Kurs['available_currency'];
  tabActive?: string;
};

function CE_KursValue({ listTable, listCurrency, tabActive }: T_Props) {
  const [pending, transiting] = useTransition();
  const isERate = tabActive === 'e-rate';
  const data = listTable?.map((item) => {
    return {
      id: item.currency,
      name: item.currency,
      buy: isERate ? item.buyRateERate : item.buyRateCounter,
      sell: isERate ? item.sellRateERate : item.sellRateCounter,
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
      slug: 'Beli',
    },
    {
      title: 'JUAL',
      information: 'Kamu akan membeli valas dari BRI',
      slug: 'Jual',
    },
  ];

  const [tabValue, setTabValue] = useState<T_GetKurs['calcType']>(
    (tabs.at(0)?.slug as T_GetKurs['calcType']) || 'Beli'
  );
  const { form, setForm, onFieldChange, validateForm } = useForm<
    T_GetKurs,
    T_GetKurs
  >(
    CFN_MapToKursPayload({
      amount: 0,
      calcType: tabValue,
      fromCurrency: dataCurrencySelected.at(0)?.value || '',
      toCurrency: dataCurrencySelected.at(1)?.value || '',
      type: 'buy',
    }),
    CFN_ValidateGetKursFields
  );

  const handleCalculation = () => {
    if (pending) {
      return;
    }
    const isValid = validateForm();
    if (isValid) {
      CFN_GetKurs(transiting, form);
    }
  };

  useEffect(() => {
    handleCalculation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.amount, form.type]);
  useEffect(() => {
    if (isERate) {
      if (tabValue === 'Beli') {
        setForm({ ...form, type: 'buyRate' });
      } else {
        setForm({ ...form, type: 'sellRate' });
      }
    } else {
      if (tabValue === 'Beli') {
        setForm({ ...form, type: 'buy' });
      } else {
        setForm({ ...form, type: 'sell' });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabValue, isERate]);

  return (
    <div className="flex mdmax:flex-wrap -mx-10">
      <div className="w-1/2 mdmax:w-full px-10">
        <Table
          headers={[
            {
              title: 'Kurs',
              field: 'name',
              callback: (item) => {
                return <span>{item.name}</span>;
              },
            },
            {
              title: 'Beli',
              field: 'buy',
              callback: (item) => {
                return (
                  <span>
                    {new Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(item.buy)}
                  </span>
                );
              },
            },
            {
              title: 'Jual',
              field: 'sell',
              callback: (item) => {
                return (
                  <span>
                    {new Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(item.sell)}
                  </span>
                );
              },
            },
          ]}
          list={data}
        />
      </div>
      <div className="w-1/2 mdmax:w-full px-10">
        <div>
          <div className="text-lg uppercase text-blue-01 font-semibold border-b-2 border-blue-01 pb-2">
            Kalkulator
          </div>
          <Tabs
            list={tabs}
            value={tabValue}
            onChange={(value) => setTabValue(value as T_GetKurs['calcType'])}
            variant="full"
          />
          <div className="mt-5">
            <div className="flex items-center -mx-2 mb-5">
              <div className="w-[25%] mdmax:w-[40%] flex-none px-2">
                <InputSelect
                  list={dataCurrencySelected}
                  value={form.fromCurrency}
                  onChange={(value) =>
                    onFieldChange(
                      'fromCurrency',
                      (Array.isArray(value)
                        ? value.at(0)?.value
                        : value?.value) || ''
                    )
                  }
                />
              </div>
              <div className="flex-1 px-2">
                <InputText
                  value={form.amount}
                  type="number"
                  placeholder="Masukan Nominal"
                  onChange={(value) =>
                    onFieldChange('amount', parseInt(value.toString()))
                  }
                />
              </div>
            </div>
            <div className="flex items-center -mx-2 mb-5">
              <div className="w-[25%] mdmax:w-[40%] flex-none px-2">
                <InputSelect
                  list={dataCurrencySelected}
                  value={form.toCurrency}
                  onChange={(value) =>
                    onFieldChange(
                      'toCurrency',
                      (Array.isArray(value)
                        ? value.at(0)?.value
                        : value?.value) || ''
                    )
                  }
                />
              </div>
              <div className="flex-1 px-2">
                <div className="text-blue-01 px-4">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CE_KursMain = ({
  listTable,
  listCurrency,
  availableCurrency,
}: T_Props) => {
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
      <div className="flex mdmax:flex-col mdmax:items-start items-end justify-between border-b-2 border-dashed border-blue-01 border-opacity-20 pb-5 mb-10">
        <div className="mdmax:mb-5">
          <div className="text-2xl font-semibold mb-2">Kurs BRI</div>
          <div className=" text-black mdmax:text-sm  font-medium text-opacity-30">
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
          tabActive={tabValue}
          listTable={listTable}
          listCurrency={listCurrency}
          availableCurrency={availableCurrency}
        />
      </div>
    </div>
  );
};

export default CE_KursMain;
