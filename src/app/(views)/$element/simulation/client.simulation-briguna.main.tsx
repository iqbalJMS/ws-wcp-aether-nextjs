import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useEffect, useState, useTransition } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';

import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import {
  T_SimulationBriguna,
  T_SimulationBrigunaRequest,
} from '@/api/simulation/briguna/api.get.briguna.type';
import {
  CFN_GetSimulationBriguna,
  CFN_MapToSimulationBrigunaPayload,
  CFN_ValidateCreateSimulationBrigunaFields,
} from '@/app/(views)/$function/cfn.get.simulation-briguna';

const CE_SimulationBRIGunaMain = ({ type }: { type: 'tab' | 'page' }) => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    karyaInstallmentTerm: true,
    karyaInterestRate: true,
    karyaSalary: true,
    purnaInstallmentTerm: true,
    purnaInterestRate: true,
    purnaSalary: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationBrigunaRequest,
    T_SimulationBrigunaRequest
  >(
    CFN_MapToSimulationBrigunaPayload({
      installmentTerm: 1,
      interestRate: 0,
      salary: 0,
      type: 'KARYA',
    }),
    CFN_ValidateCreateSimulationBrigunaFields
  );
  const [result, setResult] = useState<T_SimulationBriguna[]>();
  const handleSubmit = async (button: boolean = true) => {
    setResult(undefined);
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }

    try {
      CFN_GetSimulationBriguna(transiting, form, (data) => {
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
      if (form.installmentTerm && form.interestRate && form.salary) {
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
          values={
            type === 'tab'
              ? [{
                label: 'Estimasi Angsuran Bulanan',
                value:
                  result
                    ?.reduce(
                      (acc, curr) => acc + curr.monthlyInstallment,
                      0
                    )
                    .toString() || '0',
              },]
              : [
                  {
                    label: 'Hasil BRIGuna Karya',
                    value: result?.at(0)?.monthlyInstallment.toString() || '0',
                  },
                  {
                    label: 'Hasil BRIGuna Purna',
                    value: result?.at(1)?.monthlyInstallment.toString() || '0',
                  },
                  {
                    label: 'Hasil BRIGuna Umum (BRIGuna Karya + BRIGuna Umum)',
                    value:
                      result
                        ?.reduce(
                          (acc, curr) => acc + curr.monthlyInstallment,
                          0
                        )
                        .toString() || '0',
                  },
                ]
          }
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          {/* <div className="w-full flex-none px-5">
            <CE_SimulationLabel label="BRIGuna" editable={false} />
          </div> */}
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Jumlah Gaji"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.karyaSalary}
                      leftText="Rp."
                      value={form.salary}
                      onChange={(value) => {
                        onFieldChange('salary', value);
                      }}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={10000000000}
                      step={100000}
                      value={form.salary}
                      onChange={(value) => {
                        onFieldChange('salary', value);
                      }}
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
                setFormDisabled({ ...formDisabled, karyaSalary: edit })
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
                      disabled={formDisabled.karyaInstallmentTerm}
                      rightText="Tahun"
                      value={form.installmentTerm}
                      onChange={(value) => {
                        onFieldChange('installmentTerm', value);
                      }}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={15}
                      value={form.installmentTerm}
                      onChange={(value) => {
                        onFieldChange('installmentTerm', value);
                      }}
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
                setFormDisabled({ ...formDisabled, karyaInstallmentTerm: edit })
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
                      disabled={formDisabled.karyaInterestRate}
                      rightText="%"
                      value={form.interestRate * 100}
                      onChange={(value) => {
                        onFieldChange('interestRate', value);
                      }}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={0.25}
                      step={0.001}
                      value={form.interestRate}
                      onChange={(value) => {
                        onFieldChange('interestRate', value);
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
            />
          </div>
          {/* <div className="border-b-2 pb-5 border-blue-01 border-opacity-35 border-dashed mb-10 w-full"></div>
          <div className="w-full flex-none px-5">
            <CE_SimulationLabel label="BRIGuna Purna" editable={false} />
          </div>
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Jumlah Uang Pensiun"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.purnaSalary}
                      leftText="Rp."
                      value={form.purnaSalary}
                      onChange={(value) => onFieldChange('purnaSalary', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={1000000000}
                      step={100000}
                      value={form.purnaSalary}
                      onChange={(value) => onFieldChange('purnaSalary', value)}
                    />
                  </div>
                  {formError.purnaSalary && (
                    <div className="mt-5">
                      <InputError message={formError.purnaSalary} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, purnaSalary: edit })
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
                      disabled={formDisabled.purnaInstallmentTerm}
                      rightText="Tahun"
                      value={form.purnaInstallmentTerm}
                      onChange={(value) =>
                        onFieldChange('purnaInstallmentTerm', value)
                      }
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={15}
                      value={form.purnaInstallmentTerm}
                      onChange={(value) =>
                        onFieldChange('purnaInstallmentTerm', value)
                      }
                    />
                  </div>
                  {formError.purnaInstallmentTerm && (
                    <div className="mt-5">
                      <InputError message={formError.purnaInstallmentTerm} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, purnaInstallmentTerm: edit })
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
                      disabled={formDisabled.purnaInterestRate}
                      rightText="%"
                      value={form.purnaInterestRate}
                      onChange={(value) =>
                        onFieldChange('purnaInterestRate', value)
                      }
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={25}
                      step={1}
                      value={form.purnaInterestRate}
                      onChange={(value) =>
                        onFieldChange('purnaInterestRate', value)
                      }
                    />
                  </div>
                  {formError.purnaInterestRate && (
                    <div className="mt-5">
                      <InputError message={formError.purnaInterestRate} />
                    </div>
                  )}
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

export default CE_SimulationBRIGunaMain;
