// import InputSlider from '@/lib/element/global/input.slider';
import InputText from '@/lib/element/global/input.text';
import { useEffect, useState, useTransition } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetSimulationBritamaRencana,
  CFN_MapToSimulationBritamaRencanaPayload,
  CFN_ValidateCreateSimulationBritamaRencanaFields,
} from '@/app/(views)/$function/cfn.get.simulation-britama-rencana';
import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import {
  T_SimulationBritamaRencana,
  T_SimulationBritamaRencanaRequest,
} from '@/api/simulation/britama-rencana/api.get.britama-rencana.type';
import InputSelect from '@/lib/element/global/input.select';
import CE_SimulationBrigunaLabel from './client.simulation-briguna.label';
import InputTextVariant from '@/lib/element/global/input.text-variant';

const CE_SimulationBritamaRencanaMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  const [formDisabled, setFormDisabled] = useState({
    monthlyDeposit: true,
    durationInMonths: true,
    insurancePremium: true,
  });
  const { form, formError, onFieldChange, validateForm, resetForm } = useForm<
    T_SimulationBritamaRencanaRequest,
    T_SimulationBritamaRencanaRequest
  >(
    CFN_MapToSimulationBritamaRencanaPayload({
      monthlyDeposit: 0,
      durationInMonths: 1,
      insurancePremium: 'ZERO_PERCENT',
    }),
    CFN_ValidateCreateSimulationBritamaRencanaFields
  );
  const [result, setResult] = useState<T_SimulationBritamaRencana>();
  const handleSubmit = async (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationBritamaRencana(transiting, form, (data) => {
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
      if (
        form.monthlyDeposit &&
        form.durationInMonths &&
        form.insurancePremium
      ) {
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
              label: 'Bunga + Saldo BritAma Rencana',
              value: result?.interestEarnings.toString() || '0',
            },
            {
              label: 'Saldo Tanpa Bunga',
              value: result?.balanceWithoutInterest.toString() || '0',
            },
            {
              label: 'Bunga',
              value: result?.interest.toString() || '0',
            },
            {
              label: 'Total Investasi BritAma Rencana + BritAma',
              value: result?.totalBritamaPlanInvestment.toString() || '0',
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="">
          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 ">
            <h1 className="text-lg lg:text-xl font-medium  text-[#4A4A4A]">
              Jumlah Bulan
            </h1>
            <CE_SimulationBrigunaLabel
              label=""
              slot={
                <div className="">
                  <div className=" w-80">
                    <InputTextVariant
                      value={form.durationInMonths}
                      onChange={(value) =>
                        onFieldChange('durationInMonths', value)
                      }
                      min={1}
                      max={240}
                    />
                  </div>
                  <div className="pt-2">
                    <InputError message={formError.durationInMonths} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, durationInMonths: edit })
              }
            />
          </div>
          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 space-x-2">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              Setoran Bulan BritAma Rencana
            </h1>
            <CE_SimulationBrigunaLabel
              label=""
              slot={
                <div>
                  <div className=" w-80">
                    <InputText
                      value={form.monthlyDeposit}
                      onChange={(value) =>
                        onFieldChange('monthlyDeposit', value)
                      }
                      type="number"
                      min={0}
                      max={10000000000}
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.monthlyDeposit} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, monthlyDeposit: edit })
              }
            />
          </div>
          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 space-x-2">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              Rate Bunga BritAma Rencana (p.a)
            </h1>
            <CE_SimulationBrigunaLabel
              label=""
              editable={false}
              slot={
                <div>
                  <div className=" w-80 ">
                    <InputText
                      disabled
                      rightText="%"
                      value={'3.25'}
                      type="number"
                      min={0}
                      max={0}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 space-x-2">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              % Premi Asuransi BritAma Rencana Perbulan
            </h1>
            <CE_SimulationBrigunaLabel
              editable={false}
              label=""
              slot={
                <div>
                  <div className=" w-80">
                    <InputSelect
                      list={[
                        {
                          title: '6%',
                          value: 'SIX_PERCENT',
                        },
                        {
                          title: '0%',
                          value: 'ZERO_PERCENT',
                        },
                      ]}
                      value={form.insurancePremium}
                      onChange={(value) =>
                        onFieldChange(
                          'insurancePremium',
                          (Array.isArray(value)
                            ? value.at(0)?.value
                            : value?.value) || ''
                        )
                      }
                    />
                  </div>
                  {formError.insurancePremium && (
                    <div className="mt-5">
                      <InputError message={formError.insurancePremium} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, monthlyDeposit: edit })
              }
            />
          </div>

          <div className="w-1/2 lg:w-full flex items-center justify-between mb-5 px-5 space-x-2">
            <h1 className="text-lg lg:text-xl font-medium text-[#4A4A4A]">
              Nominal Premi Asuransi BritAma Rencana Pertahun
            </h1>
            <CE_SimulationBrigunaLabel
              label=""
              editable={false}
              slot={
                <div>
                  <div className=" w-80">
                    <InputText
                      disabled
                      rightText="%"
                      value={result?.insurancePremium || '0'}
                      type="number"
                      min={0}
                      max={0}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-full flex-none pt-10 px-5 space-x-4">
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
              color="orange-01 uppercase"
            >
              Hitung
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_SimulationBritamaRencanaMain;
