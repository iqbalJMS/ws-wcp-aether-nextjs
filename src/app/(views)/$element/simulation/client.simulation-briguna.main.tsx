import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useState } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';
import {
  CFN_MapToSimulationBRIGunaPayload,
  CFN_ValidateCreateSimulationBRIGunaFields,
  T_CreateSimulationBRIGuna,
} from '@/app/(views)/$function/cfn.create.simulation-briguna';
import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';

const CE_SimulationBRIGunaMain = () => {
  const [isResult, setIsResult] = useState(false);
  const [formDisabled, setFormDisabled] = useState({
    amount: true,
    period: true,
    rate: true,
  });
  const { form, formError, onFieldChange } = useForm<
    T_CreateSimulationBRIGuna,
    T_CreateSimulationBRIGuna
  >(
    CFN_MapToSimulationBRIGunaPayload({
      amount: 0,
      period: 0,
      rate: 5,
    }),
    CFN_ValidateCreateSimulationBRIGunaFields
  );

  const handleSubmit = () => {
    setIsResult(true);
  };

  return (
    <div>
      {isResult && (
        <CE_SimulationResultVariant01
          values={[
            {
              label: 'Estimasi Angsuran Bulanan',
              value: '154120937',
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Plafond"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.amount}
                      leftText="Rp."
                      value={form.amount}
                      onChange={(value) => onFieldChange('amount', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={1000000000}
                      step={100000}
                      value={form.amount}
                      onChange={(value) => onFieldChange('amount', value)}
                    />
                  </div>
                  {formError.amount && (
                    <div className="mt-5">
                      <InputError message={formError.amount} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, amount: edit })
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
                      disabled={formDisabled.period}
                      rightText="Tahun"
                      value={form.period}
                      onChange={(value) => onFieldChange('period', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={100}
                      value={form.period}
                      onChange={(value) => onFieldChange('period', value)}
                    />
                  </div>
                  {formError.period && (
                    <div className="mt-5">
                      <InputError message={formError.period} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, period: edit })
              }
            />
          </div>
          <div className="w-1/2 flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Suku Bunga Efektif"
              slot={
                <div>
                  <div className="mb-5 w-[70%]">
                    <InputText
                      disabled={formDisabled.rate}
                      rightText="%"
                      value={form.rate}
                      onChange={(value) => onFieldChange('rate', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={25}
                      step={0.01}
                      value={form.rate}
                      onChange={(value) => onFieldChange('rate', value)}
                    />
                  </div>
                  {formError.rate && (
                    <div className="mt-5">
                      <InputError message={formError.rate} />
                    </div>
                  )}
                </div>
              }
            />
          </div>
          <div className="w-full flex-none px-5">
            <ButtonSecondary
              onClick={handleSubmit}
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

export default CE_SimulationBRIGunaMain;
