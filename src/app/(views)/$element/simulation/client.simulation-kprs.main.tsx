import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useEffect, useState, useTransition } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetSimulationKPRS,
  CFN_MapToSimulationKPRSPayload,
  CFN_ValidateCreateSimulationKPRSFields,
} from '@/app/(views)/$function/cfn.get.simulation-kprs';
import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import {
  T_SimulationKPRS,
  T_SimulationKPRSRequest,
} from '@/api/simulation/kprs/api.get.kprs.type';

const CE_SimulationKPRSMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    installmentAmount: true,
    installmentTerm: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationKPRSRequest,
    T_SimulationKPRSRequest
  >(
    CFN_MapToSimulationKPRSPayload({
      installmentAmount: 0,
      installmentTerm: 1,
    }),
    CFN_ValidateCreateSimulationKPRSFields
  );
  const [result, setResult] = useState<T_SimulationKPRS>();
  const handleSubmit = async (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationKPRS(transiting, form, (data) => {
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
      if (form.installmentAmount && form.installmentTerm) {
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
              label: 'Estimasi Angsuran Bulanan',
              value: result?.monthlyInstallment.toString() || '0',
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
                      disabled={formDisabled.installmentAmount}
                      leftText="Rp."
                      value={form.installmentAmount}
                      onChange={(value) =>
                        onFieldChange('installmentAmount', value)
                      }
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={1000000000}
                      step={100000}
                      value={form.installmentAmount}
                      onChange={(value) =>
                        onFieldChange('installmentAmount', value)
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.installmentAmount} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, installmentAmount: edit })
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
                      disabled={formDisabled.installmentTerm}
                      rightText="Tahun"
                      value={form.installmentTerm}
                      onChange={(value) =>
                        onFieldChange('installmentTerm', value)
                      }
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={1}
                      max={15}
                      value={form.installmentTerm}
                      onChange={(value) =>
                        onFieldChange('installmentTerm', value)
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.installmentTerm} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, installmentTerm: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5 bg-[#CACACD] opacity-25">
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
                        ((result?.interestRate || 0) * 100).toString() || '5'
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

export default CE_SimulationKPRSMain;
