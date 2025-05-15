'use client';

import { useEffect, useMemo, useState, useTransition } from 'react';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

import {
  CFN_GetKurs,
  CFN_MapToKursPayload,
  CFN_ValidateGetKursFields,
  T_GetKurs,
} from '@/app/(views)/$function/cfn.get.kurs';
import InputSelect from '@/lib/element/global/form/input.select';
import InputText from '@/lib/element/global/form/input.text';
import Table from '@/lib/element/global/table';
import Tabs from '@/lib/element/global/tabs';
import PaginationKurs, { ShowingText } from './client.pagination.kurs';

import useForm from '@/lib/hook/useForm';
import { useEnv } from '@/lib/hook/useEnv';
import { T_Kurs } from '@/app/(views)/$constant/types/widget/kurs';

type T_Props = {
  listTable: T_Kurs['data'];
  listCurrency: T_Kurs['field_currency'];
  availableCurrency: T_Kurs['available_currency'];
  note?: T_Kurs['note'];
  tabActive?: string;
  forPage?: string;
};

function CE_KursValue({
  listTable,
  availableCurrency,
  tabActive,
  forPage,
}: T_Props) {
  const { baseUrl } = useEnv();
  const [pending, transiting] = useTransition();
  const isERate = tabActive === 'e-rate';
  const [currentPage, setCurrentPage] = useState(1);
  const itemsTablePerPage = 10;
  const dataTableLength = listTable.length;
  const totalPages = useMemo(
    () => Math.ceil(dataTableLength / itemsTablePerPage),
    [dataTableLength, itemsTablePerPage]
  );

  const paginatedDataTable: T_Kurs['data'] = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsTablePerPage;
    const endIndex = startIndex + itemsTablePerPage;
    return listTable.slice(startIndex, endIndex);
  }, [currentPage, itemsTablePerPage, listTable]);

  const data = paginatedDataTable?.map((item) => {
    return {
      id: item.currency,
      name: item.currency,
      buy: isERate ? item.buyRateERate : item.buyRateCounter,
      sell: isERate ? item.sellRateERate : item.sellRateCounter,
      image: item.image,
    };
  });

  const dataCurrencySelected = availableCurrency.map((item) => {
    return {
      title: item,
      value: item,
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
  const [calculationResult, setCalculationResult] = useState(0);
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
      CFN_GetKurs(transiting, form, (data) => {
        const resultMapping = {
          buy: data?.data.calcBuyCounter,
          sell: data?.data.calcSellCounter,
          buyRate: data?.data.calcBuyeRate,
          sellRate: data?.data.calcSelleRate,
        };

        setCalculationResult(resultMapping[form.type] || 0);
      });
    }
  };

  useEffect(() => {
    handleCalculation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.amount, form.type, form.fromCurrency, form.toCurrency]);
  useEffect(() => {
    const type = isERate
      ? tabValue === 'Beli'
        ? 'buyRate'
        : 'sellRate'
      : tabValue === 'Beli'
        ? 'buy'
        : 'sell';

    setForm({ ...form, amount: 0, calcType: tabValue, type });
    setCalculationResult(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabValue, isERate]);

  return (
    <div className="flex mdmax:flex-wrap -mx-10">
      <div
        className={`w-1/2 mdmax:w-full px-10 ${listTable.length > 10 ? 'order-2' : ''}`}
      >
        <Table
          headers={[
            {
              title: 'Kurs',
              field: 'name',
              callback: (item) => {
                return (
                  <div className="flex items-center gap-5">
                    <div className="w-10 flex-none">
                      <Image
                        src={`${baseUrl}/api/files/?path=${item.image}`}
                        extern={false}
                        alt="background"
                        width={60}
                        height={60}
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </div>
                    <div>{item.name}</div>
                  </div>
                );
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
          itemsPerPage={forPage === 'home' ? 999999 : 5}
        />
        {listTable.length > 10 && (
          <div className="flex md:flex-row flex-col items-center justify-between gap-3">
            <ShowingText
              currentPage={currentPage}
              itemsPerPage={itemsTablePerPage}
              dataLength={dataTableLength}
            />
            <PaginationKurs
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
      <div
        className={`w-1/2 mdmax:w-full px-10 ${listTable.length > 10 ? 'order-1' : ''}`}
      >
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
                <div className="text-blue-01 px-4">
                  {new Intl.NumberFormat('EN-us').format(calculationResult)}
                </div>
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
  note,
  forPage = 'home',
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
        'TT Counter BRI merupakan layanan nilai tukar valuta asing (valas) yang dilakukan langsung di counter bank.',
      slug: 'kurs-tt',
    },
  ];
  const [tabValue, setTabValue] = useState(tabs.at(0)?.slug || '');

  const formatDate = (date: string) => {
    const now = new Date(date);
    const formattedDate = now.toLocaleString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return formattedDate;
  };
  return (
    <div className="container py-10">
      <div className="flex mdmax:flex-col mdmax:items-start items-end justify-between border-b-2 border-dashed border-blue-01 border-opacity-20 pb-5 mb-10">
        <div className="mdmax:mb-5">
          <div className="text-2xl font-semibold mb-2">Kurs BRI</div>
          <div className=" text-black mdmax:text-sm  font-medium text-opacity-30">
            * Terakhir diperbarui {formatDate(note?.timeUpdated || '')} Untuk
            transaksi kurang dari eq. {note?.value}
          </div>
        </div>
        {listTable.length < 10 && (
          <div>
            <Link
              className="text-blue-01 flex items-center"
              href={'/kurs-detail'}
            >
              LIHAT SELENGKAPNYA{' '}
              <span className="text-xl inline-block ml-2">{'  >'}</span>
            </Link>
          </div>
        )}
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
          forPage={forPage}
        />
      </div>
    </div>
  );
};

export default CE_KursMain;
