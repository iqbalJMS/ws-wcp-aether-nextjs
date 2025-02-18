import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
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

const CE_SimulationBritamaRencanaMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    amount: true,
    month: true,
    premiAsuransi: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationBritamaRencanaRequest,
    T_SimulationBritamaRencanaRequest
  >(
    CFN_MapToSimulationBritamaRencanaPayload({
      amount: 0,
      month: 1,
      premiAsuransi: 'ENAMPERSEN',
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
      if (form.amount && form.month && form.premiAsuransi) {
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
              label: 'Bunga + Saldo BritAma Rencana',
              value: result?.bungaSaldoBritamaRencana.toString() || '0',
            },
            {
              label: 'Saldo Tanpa Bunga',
              value: result?.saldoTanpaBunga.toString() || '0',
            },
            {
              label: 'Bunga',
              value: result?.bunga.toString() || '0',
            },
            {
              label: 'Total Investasi BritAma Rencana + BritAma',
              value: result?.totalInvestasiBritamaRencana.toString() || '0',
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Jumlah Bulan"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.month}
                      rightText="Bulan"
                      value={form.month}
                      onChange={(value) => onFieldChange('month', value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={15}
                      step={1}
                      value={form.month}
                      onChange={(value) => onFieldChange('month', value)}
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.month} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, month: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              editable={false}
              label="% Premi Asuransi BritAma Rencana Perbulan"
              slot={
                <div>
                  <div className="">
                    <InputSelect
                      list={[
                        {
                          title: '6%',
                          value: 'ENAMPERSEN',
                        },
                        {
                          title: '0%',
                          value: 'NOLPERSEN',
                        },
                      ]}
                      value={form.premiAsuransi}
                      onChange={(value) =>
                        onFieldChange(
                          'premiAsuransi',
                          (Array.isArray(value)
                            ? value.at(0)?.value
                            : value?.value) || ''
                        )
                      }
                    />
                  </div>
                  {formError.premiAsuransi && (
                    <div className="mt-5">
                      <InputError message={formError.premiAsuransi} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, amount: edit })
              }
            />
          </div>
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Setoran Bulan BritAma Rencana"
              slot={
                <div>
                  <div className="mb-5 w-[70%]">
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
                      max={100000000}
                      step={1000000}
                      value={form.amount}
                      onChange={(value) => onFieldChange('amount', value)}
                    />
                  </div>
                  <div className="mt-5">
                    <InputError message={formError.amount} />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, amount: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Rate Bunga BritAma Rencana (p.a)"
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
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Nominal Premi Asuransi BritAma Rencana Pertahun"
              editable={false}
              slot={
                <div>
                  <div className="w-[70%]">
                    <InputText
                      disabled
                      rightText="%"
                      value={result?.asurancePremium.toString() || '0'}
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

export default CE_SimulationBritamaRencanaMain;
