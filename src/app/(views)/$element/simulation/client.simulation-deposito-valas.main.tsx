import {
  T_SimulationDepositoValas,
  T_SimulationDepositoValasRequest,
} from '@/api/simulation/deposito-valas/api.get.deposito-valas.type';
import {
  CFN_GetSimulationDepositoValas,
  CFN_MapToSimulationDepositoValasPayload,
  CFN_ValidateCreateSimulationDepositoValasFields,
} from '@/app/(views)/$function/cfn.get.simulation-deposito-valas';
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

const CE_SimulationDepositoValasMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [resetCount, setResetCount] = useState(0);
  const [valSBE, setValSBE] = useState(0);
  const [formDisabled, setFormDisabled] = useState({
    depositAmount: true,
    termInMonths: true,
    currency: true,
  });
  const { form, formError, onFieldChange, validateForm, resetForm } = useForm<
    T_SimulationDepositoValasRequest,
    T_SimulationDepositoValasRequest
  >(
    CFN_MapToSimulationDepositoValasPayload({
      depositAmount: 0,
      termInMonths: 0,
      currency: 'USD',
    }),
    CFN_ValidateCreateSimulationDepositoValasFields
  );
  const [result, setResult] = useState<T_SimulationDepositoValas>();
  const handleSubmit = (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationDepositoValas(transiting, form, (data) => {
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
      if (form.depositAmount && form.termInMonths && form.currency) {
        handleSubmit(false);
      }
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const depositSBE = (at: number) => {
    let sbe = 0;

    if ([1, 3, 12, 14].includes(at)) {
      sbe = 2;
    } else if (at === 6) {
      sbe = 2.25;
    }

    return sbe;
  };

  const handleResetForm = () => {
    setIsResult(false);
    setValSBE(0);
    resetForm();
  };

  useEffect(() => {
    handleResetForm();
  }, [resetCount]);

  return (
    <div>
      {isResult && (
        <CE_SimulationResultVariant01
          values={[
            {
              label: 'Bunga + Saldo Deposito',
              value: result?.totalDepositWithInterest.toString() || '0',
              currency: `${form.currency}`,
            },
            {
              label: 'Saldo Tanpa Bunga',
              value: result?.totalDeposit.toString() || '0',
              currency: `${form.currency}`,
            },
            {
              label: 'Bunga',
              value: result?.totalInterest.toString() || '0',
              currency: `${form.currency}`,
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-full">
            <CE_SimulationBrigunaLabel
              label="Mata Uang"
              slot={
                <div>
                  <div>
                    <InputSelect
                      placeholder="Pilih Mata Uang"
                      list={[
                        {
                          title: 'USD',
                          value: 'USD',
                        },
                        {
                          title: 'EUR',
                          value: 'EUR',
                        },
                        {
                          title: 'SGD ',
                          value: 'SGD',
                        },
                        {
                          title: 'JPY ',
                          value: 'JPY',
                        },
                        {
                          title: 'AUD ',
                          value: 'AUD',
                        },
                        {
                          title: 'GBP ',
                          value: 'GBP',
                        },
                        {
                          title: 'HKD ',
                          value: 'HKD',
                        },
                        {
                          title: 'CNY ',
                          value: 'CNY',
                        },
                      ]}
                      value={form.currency}
                      onChange={(value) =>
                        onFieldChange(
                          'currency',
                          (Array.isArray(value)
                            ? value.at(0)?.value
                            : value?.value) || ''
                        )
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.currency} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, termInMonths: edit })
              }
            />
          </div>
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Jumlah Deposito"
              slot={
                <div>
                  <div className="mb-5 w-[50%] flex items-center space-x-2">
                    <h1 className="text-lg font-medium">{form.currency}</h1>
                    <InputText
                      disabled={formDisabled.depositAmount}
                      value={form.depositAmount}
                      type="number"
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        if (strToInt > 0) {
                          depositSBE(Number(form.termInMonths || '0'));
                        }

                        onFieldChange('depositAmount', strToInt);
                      }}
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={100000000}
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
                    <InputError message={formError.depositAmount} />
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
              label="Jangka Waktu"
              slot={
                <div>
                  <div>
                    <InputSelect
                      placeholder="SELECT PACKAGE"
                      list={[
                        {
                          title: '1 Bulan',
                          value: '1',
                        },
                        {
                          title: '3 Bulan',
                          value: '3',
                        },
                        {
                          title: '6 Bulan',
                          value: '6',
                        },
                        {
                          title: '12 Bulan',
                          value: '12',
                        },
                        {
                          title: '24 Bulan',
                          value: '24',
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
                    <InputError message={formError.termInMonths} />
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
              label="Suku Bunga Efektif"
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
              onClick={() => setResetCount((prev) => prev + 1)}
              rounded="full"
              size="md"
              color="blue-01"
              className="uppercase"
            >
              Atur ulang
            </ButtonSecondary>
            <ButtonSecondary
              onClick={() => handleSubmit(true)}
              rounded="full"
              size="md"
              color="orange-01"
            >
              Hitung
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_SimulationDepositoValasMain;
