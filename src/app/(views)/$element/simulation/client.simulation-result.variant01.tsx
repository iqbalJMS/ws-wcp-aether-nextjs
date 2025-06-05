'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import CE_SimulationResultMain from './client.simulation-result.main';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';
import { useSearchParams } from 'next/navigation';

type T_SimulationresultVariant01Props = {
  values: {
    label: string;
    value?: string;
    width?: string;
    col?: boolean;
    percentage?: boolean;
    active?: boolean;
    currency?: string;
    valueInterest?: string;
    valueInstallmentTerm?: string;
    valuePeriodic?: string;
  }[];
  onClose: () => void;
  type?: 'center' | 'row-col';
};

const CE_SimulationResultVariant01 = ({
  values,
  onClose,
  type = 'center',
}: T_SimulationresultVariant01Props) => {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');
  return (
    <CE_SimulationResultMain onClose={onClose}>
      <div>
        <div className={type === 'center' ? '' : 'mb-2'}>
          {type === 'center' &&
            values.map((valueItem, valueIndex) => {
              return (
                <div key={valueIndex} className="mb-10">
                  <div className="text-xl text-center uppercase">
                    {valueItem.label}
                  </div>
                  {valueItem?.value && (
                    <div className="text-[3rem] text-center text-blue-01 font-semibold">
                      <span>{valueItem?.currency || 'Rp'}</span>.{' '}
                      {new Intl.NumberFormat('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(parseFloat(valueItem?.value || ''))}
                    </div>
                  )}
                  {valueItem?.valueInterest && (
                    <div className="text-[3rem] text-center text-blue-01 font-semibold">
                      {valueItem.valueInterest} %
                    </div>
                  )}
                  {valueItem?.valueInstallmentTerm && (
                    <div className="text-[3rem] text-center text-blue-01 font-semibold">
                      {valueItem?.valueInstallmentTerm}{' '}
                      {dictionary?.simulasi_investasi?.rightText ?? 'Month'}
                    </div>
                  )}
                </div>
              );
            })}
          {type === 'row-col' && (
            <div className="flex flex-wrap">
              {values
                .filter(
                  (valueItem) =>
                    valueItem.active === undefined || valueItem.active === true
                )
                .map((valueItem, valueIndex) => {
                  return (
                    <div
                      key={valueIndex}
                      className="flex-none mdmax:!w-full mb-5"
                      style={{ width: `${valueItem.width || 100}%` }}
                    >
                      <div
                        className={
                          valueItem.col
                            ? 'flex justify-between items-center mdmax:flex-wrap'
                            : ''
                        }
                      >
                        <div className="uppercase  mdmax:w-full mdmax:flex-none font-medium text-black text-opacity-50">
                          {valueItem.label}
                        </div>
                        {valueItem?.value && (
                          <div className="text-lg text-blue-01 font-semibold mdmax:w-full mdmax:flex-none">
                            {!valueItem.percentage && 'Rp. '}
                            {new Intl.NumberFormat('en-US', {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            }).format(parseFloat(valueItem.value || '0'))}
                            {valueItem.percentage && '%'}
                          </div>
                        )}
                        {valueItem?.valueInterest && (
                          <div className="text-lg text-blue-01 font-semibold mdmax:w-full">
                            {valueItem?.valueInterest} %
                          </div>
                        )}
                        {valueItem?.valueInstallmentTerm && (
                          <div className="text-lg text-blue-01 font-semibold mdmax:w-full">
                            {valueItem?.valueInstallmentTerm}{' '}
                            {dictionary?.simulasi_investasi?.rightText ??
                              'Month'}
                          </div>
                        )}
                        {valueItem?.valuePeriodic && (
                          <div className="text-lg text-blue-01 font-semibold mdmax:w-full mdmax:flex-none">
                            {!valueItem.percentage && 'Rp. '}
                            {new Intl.NumberFormat('en-US', {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            }).format(
                              parseFloat(valueItem.valuePeriodic || '0')
                            )}
                            {valueItem.percentage && '%'} /{' '}
                            {dictionary?.simulasi_investasi?.rightText ??
                              'Month'}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="text-center">
          <ButtonSecondary
            onClick={onClose}
            rounded="full"
            size="lg"
            color="orange-01"
          >
            {`${dictionary?.simulasi_deposito_bisnis?.buttonAturUlang ?? 'Hitung ulang'}`}
          </ButtonSecondary>
        </div>
      </div>
    </CE_SimulationResultMain>
  );
};

export default CE_SimulationResultVariant01;
