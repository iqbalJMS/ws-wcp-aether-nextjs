import {
  T_SimulationDeposito,
  T_SimulationDepositoRequest,
} from '@/api/simulation/deposito/api.get.deposito.type';
import {
  CFN_GetSimulationDeposito,
  CFN_MapToSimulationDepositoPayload,
  CFN_ValidateCreateSimulationDepositoFields,
} from '@/app/(views)/$function/cfn.get.simulation-deposito';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/form/input.error';
import InputSelect from '@/lib/element/global/form/input.select';
import InputSlider from '@/lib/element/global/form/input.slider';
import InputText from '@/lib/element/global/form/input.text';
import useForm from '@/lib/hook/useForm';
import { useEffect, useState, useTransition } from 'react';
import CE_SimulationBrigunaLabel from './client.simulation-briguna.label';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import CE_SimulationLabel from './client.simulation.label';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';
import { useSearchParams } from 'next/navigation';

const CE_SimulationDepositoMain = () => {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [valSBE, setValSBE] = useState(0);
  const [formDisabled, setFormDisabled] = useState({
    depositAmount: true,
    termInMonths: true,
  });
  const [result, setResult] = useState<T_SimulationDeposito>();

  const { form, formError, onFieldChange, validateForm, resetForm } = useForm<
    T_SimulationDepositoRequest,
    T_SimulationDepositoRequest
  >(
    CFN_MapToSimulationDepositoPayload({
      depositAmount: 0,
      termInMonths: 0,
    }),
    CFN_ValidateCreateSimulationDepositoFields
  );

  const handleSubmit = (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationDeposito(transiting, form, (data) => {
        setResult(data?.data);
        if (button) {
          setIsResult(true);
        }
      });
    } catch (error) {}
  };

  const depositSBE = (at: number) => {
    let sbe = 0;

    if (at === 1) {
      sbe = 3.25;
    } else if (at === 3) {
      sbe = 3.5;
    } else if ([6, 12, 24, 36].includes(at)) {
      sbe = 3;
    }

    return sbe;
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setResult(undefined);
      if (form.depositAmount && form.termInMonths) {
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
    setValSBE(0);
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
                dictionary?.simulasi_deposito_bisnis?.resultSaldoDeposito ??
                'Bunga + Saldo Deposito',
              value: result?.totalDepositWithInterest.toString() || '0',
            },
            {
              label:
                dictionary?.simulasi_deposito_bisnis?.resultSaldoTanpaBunga ??
                'Saldo Tanpa Bunga',
              value: result?.totalDeposit.toString() || '0',
            },
            {
              label:
                dictionary?.simulasi_deposito_bisnis?.resultSaldoBunga ??
                'Bunga',
              value: result?.totalInterest.toString() || '0',
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.simulasi_deposito_bisnis?.deposito ?? 'Jumlah Deposito'}`}
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.depositAmount}
                      leftText={`${dictionary?.simulasi_kprs?.leftText ?? 'Rp.'}`}
                      value={form.depositAmount}
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        if (strToInt > 0) {
                          setValSBE(
                            depositSBE(Number(form.termInMonths || '0'))
                          );
                        }

                        onFieldChange('depositAmount', strToInt);
                      }}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={10000000000}
                      step={100000}
                      value={form.depositAmount}
                      onChange={(value) => {
                        onFieldChange('depositAmount', value);

                        try {
                          if (Number(value) > 0) {
                            setValSBE(
                              depositSBE(Number(form.termInMonths || '0'))
                            );
                          }
                        } catch (_) {}
                      }}
                    />
                  </div>
                  <div className="mt-5">
                    <InputError
                      message={
                        formError.depositAmount
                          ? dictionary?.reminder_text_brigunaKarya
                              ?.validateMaxMinInstallment
                          : ''
                      }
                    />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, depositAmount: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationBrigunaLabel
              label={`${dictionary?.simulasi_deposito_bisnis?.jangkaWaktu ?? 'Jangka Waktu'}`}
              slot={
                <div>
                  <div>
                    <InputSelect
                      placeholder={`${dictionary?.simulasi_deposito_bisnis?.pilihPaket ?? 'Pilih Paket'}`}
                      list={[
                        {
                          title: `1 ${dictionary?.simulasi_investasi?.rightText}`,
                          value: '1',
                        },
                        {
                          title: `3 ${dictionary?.simulasi_investasi?.rightText}`,
                          value: '3',
                        },
                        {
                          title: `6 ${dictionary?.simulasi_investasi?.rightText}`,
                          value: '6',
                        },
                        {
                          title: `12 ${dictionary?.simulasi_investasi?.rightText}`,
                          value: '12',
                        },
                        {
                          title: `24 ${dictionary?.simulasi_investasi?.rightText}`,
                          value: '24',
                        },
                        {
                          title: `36 ${dictionary?.simulasi_investasi?.rightText}`,
                          value: '36',
                        },
                      ]}
                      value={form.termInMonths}
                      onChange={(value) => {
                        const getValue = Array.isArray(value)
                          ? value.at(0)?.value
                          : value?.value;

                        onFieldChange('termInMonths', getValue || '');

                        try {
                          if (Number(form.depositAmount) > 0 && !!getValue) {
                            setValSBE(depositSBE(Number(getValue || '0')));
                          }
                        } catch (_) {}
                      }}
                    />
                  </div>
                  <div className="mt-5">
                    <InputError
                      message={
                        formError.termInMonths
                          ? dictionary?.reminder_text_brigunaKarya
                              ?.validateMaxMinTermMonth
                          : ''
                      }
                    />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, termInMonths: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.simulasi_deposito_bisnis?.sukuBunga ?? 'Suku Bunga Efektif'}`}
              editable={false}
              slot={
                <div>
                  <div className="w-[70%]">
                    <InputText
                      disabled
                      rightText="%"
                      type="number"
                      value={valSBE}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-full flex-none px-5 space-x-4">
            <ButtonSecondary
              onClick={() => handleResetForm()}
              rounded="full"
              size="md"
              color="blue-01"
              className="uppercase"
            >
              {`${dictionary?.simulasi_deposito_bisnis?.buttonAturUlang ?? 'Atur ulang'}`}
            </ButtonSecondary>
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

export default CE_SimulationDepositoMain;
