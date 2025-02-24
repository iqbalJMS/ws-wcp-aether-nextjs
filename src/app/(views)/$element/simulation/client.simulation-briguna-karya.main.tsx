import {
  T_SimulationBrigunaKarya,
  T_SimulationBrigunaKaryaRequest,
} from '@/api/simulation/briguna-karya/api.get.briguna-karya.type';
import {
  CFN_GetSimulationBrigunaKarya,
  CFN_MapToSimulationBrigunaKaryaPayload,
  CFN_ValidateCreateSimulationBrigunaKaryaFields,
} from '@/app/(views)/$function/cfn.get.simulation-briguna-karya';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/input.error';
import InputSlider from '@/lib/element/global/input.slider';
import InputText from '@/lib/element/global/input.text';
import useForm from '@/lib/hook/useForm';
import { useEffect, useState, useTransition } from 'react';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import CE_SimulationLabel from './client.simulation.label';

const CE_SimulationBRIGunaKaryaMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [resetCount, setResetCount] = useState(0);
  const [formDisabled, setFormDisabled] = useState({
    installmentTerm: true,
    interestRate: true,
    salary: true,
  });
  const { form, formError, onFieldChange, validateForm, resetForm } = useForm<
    T_SimulationBrigunaKaryaRequest,
    T_SimulationBrigunaKaryaRequest
  >(
    CFN_MapToSimulationBrigunaKaryaPayload({
      installmentTerm: 1,
      interestRate: 0.1,
      salary: 0,
    }),
    CFN_ValidateCreateSimulationBrigunaKaryaFields
  );
  const [result, setResult] = useState<T_SimulationBrigunaKarya>();

  const handleSubmit = (button: boolean = true) => {
    setResult(undefined);
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }

    try {
      CFN_GetSimulationBrigunaKarya(
        transiting,
        { ...form, interestRate: Number(form.interestRate) * 0.01 },
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
      if (form.installmentTerm && form.interestRate && form.salary) {
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
              label="Jumlah Gaji"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.salary}
                      leftText="Rp."
                      value={form.salary}
                      onChange={(value) => onFieldChange('salary', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={10000000000}
                      step={100000}
                      value={form.salary}
                      onChange={(value) => onFieldChange('salary', value)}
                    />
                  </div>
                  {formError.salary && (
                    <div className="mt-5">
                      <InputError message={formError.salary} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, salary: edit })
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
                  {formError.installmentTerm && (
                    <div className="mt-5">
                      <InputError message={formError.installmentTerm} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, installmentTerm: edit })
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
                      type="number"
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        onFieldChange('interestRate', strToInt);
                      }}
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={25}
                      step={0.1}
                      value={form.interestRate}
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        onFieldChange('interestRate', strToInt);
                      }}
                    />
                  </div>
                  {formError.interestRate && (
                    <div className="mt-5">
                      <InputError message={formError.interestRate} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, interestRate: edit })
              }
            />
          </div>

          <div className="w-full flex-none px-5 space-x-4">
            <ButtonSecondary
              onClick={() => setResetCount((prev) => prev + 1)}
              rounded="full"
              size="md"
              color="blue-01"
              className=" uppercase"
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

export default CE_SimulationBRIGunaKaryaMain;
