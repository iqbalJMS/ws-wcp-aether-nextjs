import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useEffect, useState, useTransition } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetSimulationInitialInvestment,
  CFN_MapToSimulationInitialInvestmentPayload,
  CFN_ValidateCreateSimulationInitialInvestmentFields,
} from '@/app/(views)/$function/cfn.get.simulation-initial-investment';
import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import {
  T_SimulationInitialInvestment,
  T_SimulationInitialInvestmentRequest,
} from '@/api/simulation/initial-investment/api.get.initial-investment.type';

const CE_SimulationInitialInvestmentMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    duration: true,
    targetInvestmentValue: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationInitialInvestmentRequest,
    T_SimulationInitialInvestmentRequest
  >(
    CFN_MapToSimulationInitialInvestmentPayload({
      duration: 0,
      targetInvestmentValue: 0,
    }),
    CFN_ValidateCreateSimulationInitialInvestmentFields
  );
  const [result, setResult] = useState<T_SimulationInitialInvestment>();
  const handleSubmit = async (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationInitialInvestment(transiting, form, (data) => {
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
      if (form.duration && form.targetInvestmentValue) {
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
              value: result?.oneTimeInvestmentRequired.toString() || '0',
            },
            {
              label: 'Periodic Investment',
              value: result?.periodicInvestmentRequired.toString() || '0',
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Jumlah Pinjaman"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.targetInvestmentValue}
                      leftText="Rp."
                      value={form.targetInvestmentValue}
                      onChange={(value) =>
                        onFieldChange('targetInvestmentValue', value)
                      }
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={1000000000}
                      step={100000}
                      value={form.targetInvestmentValue}
                      onChange={(value) =>
                        onFieldChange('targetInvestmentValue', value)
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.targetInvestmentValue} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, targetInvestmentValue: edit })
              }
            />
          </div>
          <div className="w-1/2 flex-none mb-10 px-5">
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
                      max={100}
                      value={form.duration}
                      onChange={(value) =>
                        onFieldChange('duration', value)
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.duration} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, duration: edit })
              }
            />
          </div>
          {/* <div className="w-1/2 flex-none mb-10 px-5">
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
                        ((result?. || 0) * 100).toString() || '5'
                      }
                      type="number"
                    />
                  </div>
                </div>
              }
            />
          </div> */}
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

export default CE_SimulationInitialInvestmentMain;
