// import InputSlider from '@/lib/element/global/input.slider';
import {
  T_SimulationBritamaRencana,
  T_SimulationBritamaRencanaRequest,
} from '@/api/simulation/britama-rencana/api.get.britama-rencana.type';
import {
  CFN_GetSimulationBritamaRencana,
  CFN_MapToSimulationBritamaRencanaPayload,
  CFN_ValidateCreateSimulationBritamaRencanaFields,
} from '@/app/(views)/$function/cfn.get.simulation-britama-rencana';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/form/input.error';
import InputSelect from '@/lib/element/global/form/input.select';
import InputText from '@/lib/element/global/form/input.text';
import InputTextVariant from '@/lib/element/global/form/input.text-variant';
import useForm from '@/lib/hook/useForm';
import { useEffect, useState, useTransition } from 'react';
import CE_SimulationBrigunaLabel from './client.simulation-briguna.label';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';
import { useSearchParams } from 'next/navigation';

const CE_SimulationBritamaRencanaMain = () => {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    monthlyDeposit: true,
    durationInMonths: true,
    insurancePremium: true,
  });
  const { form, formError, onFieldChange, validateForm, resetForm } = useForm<
    T_SimulationBritamaRencanaRequest,
    T_SimulationBritamaRencanaRequest
  >(
    CFN_MapToSimulationBritamaRencanaPayload({
      monthlyDeposit: 0,
      durationInMonths: 0,
      insurancePremium: 'ZERO_PERCENT',
    }),
    CFN_ValidateCreateSimulationBritamaRencanaFields
  );
  const [result, setResult] = useState<T_SimulationBritamaRencana>();
  const handleSubmit = (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationBritamaRencana(transiting, form, (data) => {
        setResult(data?.data);
        if (button) {
          setIsResult(true);
        }
      });
    } catch (error) {}
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setResult(undefined);
      if (
        form.monthlyDeposit &&
        form.durationInMonths &&
        form.insurancePremium
      ) {
        handleSubmit(false);
      }
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const handleResetForm = () => {
    setIsResult(false);
    resetForm();
  };

  useEffect(() => {
    handleResetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isResult && (
        <CE_SimulationResultVariant01
          values={[
            {
              label:
                dictionary?.simulasi_britama?.resultBritama ??
                'Bunga + Saldo BritAma Rencana',
              value: result?.interestEarnings.toString() || '0',
            },
            {
              label:
                dictionary?.simulasi_deposito_bisnis?.resultSaldoTanpaBunga ??
                'Saldo Tanpa Bunga',
              value: result?.balanceWithoutInterest.toString() || '0',
            },
            {
              label:
                dictionary?.simulasi_deposito_bisnis?.resultSaldoBunga ??
                'Bunga',
              value: result?.interest.toString() || '0',
            },
            {
              label:
                dictionary?.simulasi_britama?.grandTotal ??
                'Total Investasi BritAma Rencana + BritAma',
              value: result?.totalBritamaPlanInvestment.toString() || '0',
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="">
          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 ">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              {`${dictionary?.simulasi_britama?.jumlahBulan ?? 'Jumlah Bulan'}`}
            </h1>
            <CE_SimulationBrigunaLabel
              label=""
              slot={
                <div className=" w-80">
                  <div className=" w-full">
                    <InputTextVariant
                      value={form.durationInMonths}
                      min={1}
                      max={240}
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        onFieldChange('durationInMonths', strToInt);
                      }}
                    />
                  </div>
                  <div className="w-full pt-2">
                    <InputError message={formError.durationInMonths} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, durationInMonths: edit })
              }
            />
          </div>
          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 space-x-2">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              {`${dictionary?.simulasi_britama?.setoranBulanBritama ?? 'Setoran Bulan BritAma Rencana'}`}
            </h1>
            <CE_SimulationBrigunaLabel
              label=""
              slot={
                <div className="w-80">
                  <div className="w-full">
                    <InputText
                      value={form.monthlyDeposit}
                      type="number"
                      min={0}
                      max={10000000000}
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        onFieldChange('monthlyDeposit', strToInt);
                      }}
                    />
                  </div>
                  <div className=" w-full mt-5">
                    <InputError message={formError.monthlyDeposit} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, monthlyDeposit: edit })
              }
            />
          </div>
          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 space-x-2">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              {`${dictionary?.simulasi_britama?.ratebunga ?? 'Rate Bunga BritAma Rencana (p.a)'}`}
            </h1>
            <CE_SimulationBrigunaLabel
              label=""
              editable={false}
              slot={
                <div>
                  <div className=" w-80 cursor-not-allowed ">
                    <InputText
                      disabled
                      rightText="%"
                      value={'3.25'}
                      type="number"
                      min={0}
                      max={0}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 space-x-2">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              {`${dictionary?.simulasi_britama?.premiAsuransi ?? '% Premi Asuransi BritAma Rencana Perbulan'}`}
            </h1>
            <CE_SimulationBrigunaLabel
              editable={false}
              label=""
              slot={
                <div>
                  <div className=" w-80">
                    <InputSelect
                      list={[
                        {
                          title: '6%',
                          value: 'SIX_PERCENT',
                        },
                        {
                          title: '0%',
                          value: 'ZERO_PERCENT',
                        },
                      ]}
                      value={form.insurancePremium}
                      onChange={(value) =>
                        onFieldChange(
                          'insurancePremium',
                          (Array.isArray(value)
                            ? value.at(0)?.value
                            : value?.value) || ''
                        )
                      }
                    />
                  </div>
                  {formError.insurancePremium && (
                    <div className="mt-5">
                      <InputError message={formError.insurancePremium} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, monthlyDeposit: edit })
              }
            />
          </div>

          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 space-x-2">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              {`${dictionary?.simulasi_britama?.nominalPremi ?? 'Nominal Premi Asuransi BritAma Rencana Pertahun'}`}
            </h1>
            <CE_SimulationBrigunaLabel
              label=""
              editable={false}
              slot={
                <div>
                  <div className=" w-80">
                    <InputText
                      disabled
                      rightText="%"
                      value={result?.insurancePremium || '0'}
                      type="number"
                      min={0}
                      max={0}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-full flex-none pt-10 px-5 space-x-4">
            <ButtonSecondary
              onClick={() => handleResetForm()}
              rounded="full"
              size="md"
              color="blue-01"
              className=" uppercase"
            >
              {`${dictionary?.simulasi_deposito_bisnis?.buttonAturUlang ?? 'Atur ulang'}`}
            </ButtonSecondary>
            <ButtonSecondary
              onClick={() => handleSubmit(true)}
              rounded="full"
              size="md"
              color="orange-01 uppercase"
            >
              {`${dictionary?.simulasi_deposito_bisnis?.buttonHitung ?? 'Hitung'}`}
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_SimulationBritamaRencanaMain;
