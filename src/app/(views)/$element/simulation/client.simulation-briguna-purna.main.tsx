import {
  T_SimulationBrigunaPurna,
  T_SimulationBrigunaPurnaRequest,
} from '@/api/simulation/briguna-purna/api.get.briguna-purna.type';
import {
  CFN_GetSimulationBrigunaPurna,
  CFN_MapToSimulationBrigunaPurnaPayload,
  CFN_ValidateCreateSimulationBrigunaPurnaFields,
} from '@/app/(views)/$function/cfn.get.simulation-briguna-purna';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/form/input.error';
import InputSlider from '@/lib/element/global/form/input.slider';
import InputText from '@/lib/element/global/form/input.text';
import useForm from '@/lib/hook/useForm';
import { useEffect, useState, useTransition } from 'react';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import CE_SimulationLabel from './client.simulation.label';

const CE_SimulationBRIGunaPurnaMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [formDisabled, setFormDisabled] = useState({
    installmentTerm: true,
    interestRate: true,
    salary: true,
  });
  const { form, formError, onFieldChange, validateForm, setForm } = useForm<
    T_SimulationBrigunaPurnaRequest,
    T_SimulationBrigunaPurnaRequest
  >(
    CFN_MapToSimulationBrigunaPurnaPayload({
      installmentTerm: 1,
      interestRate: 0,
      salary: 0,
    }),
    CFN_ValidateCreateSimulationBrigunaPurnaFields
  );
  const [result, setResult] = useState<T_SimulationBrigunaPurna>();

  const handleSubmit = (button: boolean = true) => {
    setResult(undefined);
    const validate = validateForm();
    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationBrigunaPurna(
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

  const handleResetForm = (manual = true) => {
    setIsResult(false);
    setForm(
      CFN_MapToSimulationBrigunaPurnaPayload({
        installmentTerm: 1,
        interestRate: manual ? 0.01 : 0, // ? when reset default value different from init state :D
        salary: 0,
      })
    );
  };

  useEffect(() => {
    handleResetForm(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              label="Jumlah Uang Pensiun"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.salary}
                      leftText="Rp."
                      value={form.salary}
                      type="number"
                      onChange={(value) => onFieldChange('salary', value)}
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
                      type="number"
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        onFieldChange('installmentTerm', strToInt);
                      }}
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
              onClick={() => handleResetForm()}
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

export default CE_SimulationBRIGunaPurnaMain;
