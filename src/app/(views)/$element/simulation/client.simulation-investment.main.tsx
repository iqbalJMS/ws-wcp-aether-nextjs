import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputSlider from '@/lib/element/global/form/input.slider';
import InputText from '@/lib/element/global/form/input.text';
import useForm from '@/lib/hook/useForm';
import { useEffect, useState, useTransition } from 'react';
import CE_SimulationLabel from './client.simulation.label';

import {
  T_SimulationInvestment,
  T_SimulationInvestmentRequest,
} from '@/api/simulation/investment/api.get.investment.type';
import {
  CFN_GetSimulationInvestment,
  CFN_MapToSimulationInvestmentPayload,
  CFN_ValidateCreateSimulationInvestmentFields,
} from '@/app/(views)/$function/cfn.get.simulation-investment';
import InputError from '@/lib/element/global/form/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';
import { useSearchParams } from 'next/navigation';

const CE_SimulationInvestmentMain = () => {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    installmentTerm: true,
    installment: true,
    InterestRate: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationInvestmentRequest,
    T_SimulationInvestmentRequest
  >(
    CFN_MapToSimulationInvestmentPayload({
      installmentTerm: 0,
      installment: 100000,
      InterestRate: 0,
    }),
    CFN_ValidateCreateSimulationInvestmentFields
  );
  const [result, setResult] = useState<T_SimulationInvestment>();
  const handleSubmit = (button: boolean = true) => {
    setResult(undefined);
    const validate = validateForm();
    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationInvestment(
        transiting,
        { ...form, InterestRate: Number(form.InterestRate) * 0.01 },
        (data) => {
          setResult(data?.data);

          if (button) {
            setIsResult(true);
          }
        }
      );
    } catch (error) {}
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setResult(undefined);
      if (form.installmentTerm && form.installment && form.InterestRate) {
        handleSubmit(false);
      }
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <div>
      {isResult && (
        <CE_SimulationResultVariant01
          type="row-col"
          values={[
            {
              label:
                dictionary?.simulasi_investasi?.investasi ?? 'Plafond Kredit',
              value: form.installment.toString() || '0',
            },
            {
              label:
                dictionary?.simulasi_investasi?.resultInvestasi ??
                'Suku Bunga Efektif',
              valueInterest: form?.InterestRate.toString(),
            },
            {
              label:
                dictionary?.simulasi_investasi?.resultJangkaWaktu ??
                'Jangka Waktu',
              valueInstallmentTerm: form?.installmentTerm.toString(),
            },
            {
              label:
                dictionary?.simulasi_investasi?.resultPeriodic ??
                'Periodic Investment',
              valuePeriodic:
                result?.monthlyPrincipalInstallment.toString() || '0',
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.simulasi_investasi?.investasi ?? 'Plafond Kredit'}`}
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.installment}
                      leftText={`${dictionary?.simulasi_kprs?.leftText ?? 'Rp.'}`}
                      value={form.installment}
                      onChange={(value) => onFieldChange('installment', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={100000000}
                      step={100000}
                      value={form.installment}
                      onChange={(value) => onFieldChange('installment', value)}
                    />
                  </div>
                  {formError.installment && (
                    <div className="mt-5">
                      <InputError
                        message={
                          formError.installment
                            ? dictionary?.reminder_text_kpr
                                ?.validateMaxMinInstallment
                            : ''
                        }
                      />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, installment: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.simulasi_investasi?.sukuBunga ?? 'Suku Bunga Efektif'}`}
              slot={
                <div>
                  <div className="mb-5 w-[70%]">
                    <InputText
                      disabled={formDisabled.InterestRate}
                      rightText="%"
                      value={form.InterestRate}
                      type="number"
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        onFieldChange('InterestRate', strToInt);
                      }}
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={100}
                      step={0.1}
                      value={form.InterestRate}
                      onChange={(value) => onFieldChange('InterestRate', value)}
                    />
                  </div>
                  {formError.InterestRate && (
                    <div className="mt-5">
                      <InputError
                        message={
                          formError.InterestRate
                            ? dictionary?.reminder_text_kpr
                                ?.validateMaxMinInterest
                            : ''
                        }
                      />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, InterestRate: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.simulasi_investasi?.jangkaWaktu ?? 'Jangka Waktu'}`}
              slot={
                <div>
                  <div className="mb-5 w-[70%]">
                    <InputText
                      disabled={formDisabled.installmentTerm}
                      rightText={`${dictionary?.simulasi_investasi?.rightText ?? 'Bulan'}`}
                      value={form.installmentTerm}
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        onFieldChange('installmentTerm', strToInt);
                      }}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={120}
                      value={form.installmentTerm}
                      onChange={(value) =>
                        onFieldChange('installmentTerm', value)
                      }
                    />
                  </div>
                  {formError.installmentTerm && (
                    <div className="mt-5">
                      <InputError
                        message={
                          formError.installmentTerm
                            ? dictionary?.reminder_text_kpr?.validateMaxMinTerm
                            : ''
                        }
                      />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, installmentTerm: edit })
              }
            />
          </div>

          <div className="w-full flex-none px-5">
            <ButtonSecondary
              onClick={() => handleSubmit(true)}
              rounded="full"
              size="md"
              color="orange-01"
            >
              {`${dictionary?.simulasi_deposito_bisnis?.buttonHitung ?? 'Hitung'}`}
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_SimulationInvestmentMain;
