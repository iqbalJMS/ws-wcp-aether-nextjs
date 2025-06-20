import {
  T_SimulationKPR,
  T_SimulationKPRRequest,
} from '@/api/simulation/kpr/api.get.kpr.type';
import {
  CFN_GetSimulationKPR,
  CFN_MapToSimulationKPRPayload,
  CFN_ValidateCreateSimulationKPRFields,
} from '@/app/(views)/$function/cfn.get.simulation-kpr';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/form/input.error';
import InputSlider from '@/lib/element/global/form/input.slider';
import InputText from '@/lib/element/global/form/input.text';
import useForm from '@/lib/hook/useForm';
import { useEffect, useState, useTransition } from 'react';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import CE_SimulationLabel from './client.simulation.label';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';
import { useSearchParams } from 'next/navigation';

const CE_SimulationKPRMain = () => {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    installmentAmount: true,
    installmentTerm: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationKPRRequest,
    T_SimulationKPRRequest
  >(
    CFN_MapToSimulationKPRPayload({
      installmentAmount: 0,
      installmentTerm: 1,
    }),
    CFN_ValidateCreateSimulationKPRFields
  );
  const [result, setResult] = useState<T_SimulationKPR>();
  const handleSubmit = (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationKPR(transiting, form, (data) => {
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
              label:
                dictionary?.simulasi_kprs?.resultAngsuran ??
                'Estimasi Angsuran Bulanan',
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
              label={`${dictionary?.simulasi_kprs?.pinjaman ?? 'Jumlah Pinjaman'}`}
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.installmentAmount}
                      leftText={`${dictionary?.simulasi_kprs?.leftText ?? 'Rp.'}`}
                      value={form.installmentAmount}
                      type="number"
                      onChange={(value) =>
                        onFieldChange('installmentAmount', value)
                      }
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={10000000000}
                      step={100000}
                      value={form.installmentAmount}
                      onChange={(value) =>
                        onFieldChange('installmentAmount', value)
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <InputError
                      message={
                        formError.installmentAmount
                          ? dictionary?.reminder_text_brigunaKarya
                              ?.validateMaxMinInstallment
                          : ''
                      }
                    />
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
              label={`${dictionary?.simulasi_kprs?.jangkaWaktu ?? 'Jangka Waktu'}`}
              slot={
                <div>
                  <div className="mb-5 w-[70%]">
                    <InputText
                      disabled={formDisabled.installmentTerm}
                      rightText={`${dictionary?.simulasi_kprs?.rightText ?? 'Tahun'}`}
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
                      max={20}
                      value={form.installmentTerm}
                      onChange={(value) =>
                        onFieldChange('installmentTerm', value)
                      }
                    />
                  </div>
                  <div className="mt-5">
                    <InputError
                      message={
                        formError.installmentTerm
                          ? dictionary?.reminder_text_kpr?.validateMaxTermMonth
                          : ''
                      }
                    />
                  </div>
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, installmentTerm: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5 opacity-25">
            <CE_SimulationLabel
              label={`${dictionary?.simulasi_kprs?.sukuBunga ?? 'Suku Bunga Efektif'}`}
              editable={false}
              slot={
                <div>
                  <div className="w-[70%]">
                    <InputText disabled rightText="%" value={5} type="number" />
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
              {`${dictionary?.simulasi_kprs?.buttonHitung ?? 'Hitung'}`}
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_SimulationKPRMain;
