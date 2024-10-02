import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useState } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';
import {
  CFN_MapToSimulationKPRPayload,
  CFN_ValidateCreateSimulationKPRFields,
  T_CreateSimulationKPR,
} from '@/app/aether/$function/cfn.create.simulation-kpr';
import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';

const CE_SimulationKPRMain = () => {
  const [isResult, setIsResult] = useState(false);
  const [formDisabled, setFormDisabled] = useState({
    loanAmount: true,
    period: true,
  });
  const { form, formError, onFieldChange } = useForm<
    T_CreateSimulationKPR,
    T_CreateSimulationKPR
  >(
    CFN_MapToSimulationKPRPayload({
      amountLoan: 0,
      period: 0,
      rate: 5,
    }),
    CFN_ValidateCreateSimulationKPRFields
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
              label="Jumlah Pinjaman"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.loanAmount}
                      leftText="Rp."
                      value={form.amountLoan}
                      onChange={(value) => onFieldChange('amountLoan', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={1000000000}
                      step={100000}
                      value={form.amountLoan}
                      onChange={(value) => onFieldChange('amountLoan', value)}
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.amountLoan} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, loanAmount: edit })
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
                  <div className="mt-5">
                    <InputError message={formError.period} />
                  </div>
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
              editable={false}
              slot={
                <div>
                  <div className="w-[70%]">
                    <InputText
                      disabled
                      rightText="%"
                      value={form.rate}
                      onChange={(value) => onFieldChange('rate', value)}
                      type="number"
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.rate} />
                  </div>
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

export default CE_SimulationKPRMain;
