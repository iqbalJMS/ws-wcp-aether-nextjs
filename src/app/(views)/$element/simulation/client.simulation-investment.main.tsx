import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useEffect, useState, useTransition } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';

import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import {
  T_SimulationInvestment,
  T_SimulationInvestmentRequest,
} from '@/api/simulation/investment/api.get.investment.type';
import {
  CFN_GetSimulationInvestment,
  CFN_MapToSimulationInvestmentPayload,
  CFN_ValidateCreateSimulationInvestmentFields,
} from '@/app/(views)/$function/cfn.get.simulation-investment';

const CE_SimulationInvestmentMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    duration: true,
    investmentAmount: true,
    interestRate: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationInvestmentRequest,
    T_SimulationInvestmentRequest
  >(
    CFN_MapToSimulationInvestmentPayload({
      duration: 0,
      investmentAmount: 0,
      interestRate: 0,
    }),
    CFN_ValidateCreateSimulationInvestmentFields
  );
  const [result, setResult] = useState<T_SimulationInvestment>();
  const handleSubmit = async (button: boolean = true) => {
    setResult(undefined);
    const validate = validateForm();
    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationInvestment(transiting, form, (data) => {
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
      if (form.duration && form.investmentAmount && form.interestRate) {
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
              label: 'One Time Investment',
              value: result?.oneTimeInvestmentResult.toString() || '0',
            },
            {
              label: 'Periodic Investment',
              value: result?.periodicInvestmentResult.toString() || '0',
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Plafond Kredit"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.investmentAmount}
                      leftText="Rp."
                      value={form.investmentAmount}
                      onChange={(value) => onFieldChange('investmentAmount', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={1000000000}
                      step={100000}
                      value={form.investmentAmount}
                      onChange={(value) => onFieldChange('investmentAmount', value)}
                    />
                  </div>
                  {formError.investmentAmount && (
                    <div className="mt-5">
                      <InputError message={formError.investmentAmount} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, investmentAmount: edit })
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
                      disabled={formDisabled.duration}
                      rightText="Tahun"
                      value={form.duration}
                      onChange={(value) =>
                        onFieldChange('duration', value)
                      }
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={15}
                      value={form.duration}
                      onChange={(value) =>
                        onFieldChange('duration', value)
                      }
                    />
                  </div>
                  {formError.duration && (
                    <div className="mt-5">
                      <InputError message={formError.duration} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, duration: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Suku Bunga Efektif"
              slot={
                <div>
                  <div className="mb-5 w-[70%]">
                    <InputText
                      disabled={formDisabled.interestRate}
                      rightText="%"
                      value={form.interestRate}
                      onChange={(value) => onFieldChange('interestRate', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={15}
                      step={1}
                      value={form.interestRate}
                      onChange={(value) => onFieldChange('interestRate', value)}
                    />
                  </div>
                  {formError.interestRate && (
                    <div className="mt-5">
                      <InputError message={formError.interestRate} />
                    </div>
                  )}
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

export default CE_SimulationInvestmentMain;
