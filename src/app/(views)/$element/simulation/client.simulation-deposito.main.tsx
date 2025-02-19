import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useEffect, useState, useTransition } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetSimulationDeposito,
  CFN_MapToSimulationDepositoPayload,
  CFN_ValidateCreateSimulationDepositoFields,
} from '@/app/(views)/$function/cfn.get.simulation-deposito';
import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import {
  T_SimulationDeposito,
  T_SimulationDepositoRequest,
} from '@/api/simulation/deposito/api.get.deposito.type';
import InputSelect from '@/lib/element/global/input.select';
import CE_SimulationBrigunaLabel from './client.simulation-briguna.label';

const CE_SimulationDepositoMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  const [formDisabled, setFormDisabled] = useState({
    depositAmount: true,
    termInMonths: true,
  });
  const { form, formError, onFieldChange, validateForm, resetForm } = useForm<
    T_SimulationDepositoRequest,
    T_SimulationDepositoRequest
  >(
    CFN_MapToSimulationDepositoPayload({
      depositAmount: 0,
      termInMonths: 1,
    }),
    CFN_ValidateCreateSimulationDepositoFields
  );
  const [result, setResult] = useState<T_SimulationDeposito>();
  const handleSubmit = async (button: boolean = true) => {
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
            },
            {
              label: 'Saldo Tanpa Bunga',
              value: result?.totalDeposit.toString() || '0',
            },
            {
              label: 'Bunga',
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
              label="Jumlah Deposito"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.depositAmount}
                      leftText="Rp."
                      value={form.depositAmount}
                      onChange={(value) =>
                        onFieldChange('depositAmount', value)
                      }
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={10000000000}
                      step={100000}
                      value={form.depositAmount}
                      onChange={(value) =>
                        onFieldChange('depositAmount', value)
                      }
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
                      placeholder="Pilih Paket"
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
                        {
                          title: '36 Bulan',
                          value: '36',
                        },
                      ]}
                      value={form.termInMonths}
                      onChange={(value) =>
                        onFieldChange(
                          'termInMonths',
                          (Array.isArray(value)
                            ? value.at(0)?.value
                            : value?.value) || ''
                        )
                      }
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
                      value={((result?.rate || 0) * 100).toString() || '5'}
                      type="number"
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
              className="bg-[#014A94] uppercase"
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

export default CE_SimulationDepositoMain;
