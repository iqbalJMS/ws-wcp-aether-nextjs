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

const CE_SimulationDepositoMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    depositAmount: true,
    termInMonths: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
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
                      max={1000000000}
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
            <CE_SimulationLabel
              label="Jangka Waktu"
              slot={
                <div>
                  <div className="mb-5 w-[70%]">
                    <InputText
                      disabled={formDisabled.termInMonths}
                      rightText="Tahun"
                      value={form.termInMonths}
                      onChange={(value) =>
                        onFieldChange('termInMonths', value)
                      }
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={100}
                      value={form.termInMonths}
                      onChange={(value) =>
                        onFieldChange('termInMonths', value)
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
                      value={
                        ((result?.rate || 0) * 100).toString() || '5'
                      }
                      type="number"
                    />
                  </div>
                </div>
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
              Hitung
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_SimulationDepositoMain;
