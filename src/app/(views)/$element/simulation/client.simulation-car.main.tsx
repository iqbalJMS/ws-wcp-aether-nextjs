import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputSlider from '@/lib/element/global/form/input.slider';
import InputText from '@/lib/element/global/form/input.text';
import useForm from '@/lib/hook/useForm';
import { useEffect, useState, useTransition } from 'react';
import CE_SimulationLabel from './client.simulation.label';

import {
  T_SimulationVehicleInstallment,
  T_SimulationVehicleInstallmentRequest,
} from '@/api/simulation/vehicle-installment/api.get.vehicle-installment.type';
import {
  CFN_GetSimulationVehicleInstallment,
  CFN_MapToSimulationVehicleInstallmentPayload,
  CFN_ValidateCreateSimulationVehicleInstallmentFields,
} from '@/app/(views)/$function/cfn.get.simulation-vehicle-installment';
import InputError from '@/lib/element/global/form/input.error';
import InputSelect from '@/lib/element/global/form/input.select';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';
import { useSearchParams } from 'next/navigation';

const CE_SimulationCarMain = () => {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    vehiclePrice: true,
    installmentTerm: true,
  });
  const {
    form,
    formError,
    onFieldChange,
    validateForm,
    setForm,
    setFormError,
  } = useForm<
    T_SimulationVehicleInstallmentRequest,
    T_SimulationVehicleInstallmentRequest
  >(
    CFN_MapToSimulationVehicleInstallmentPayload({
      vehiclePrice: 0,
      vehicleStatus: 'NEW',
      installmentTerm: 1,
    }),
    CFN_ValidateCreateSimulationVehicleInstallmentFields
  );
  const [result, setResult] = useState<T_SimulationVehicleInstallment>();
  const handleSubmit = (button: boolean = true) => {
    setResult(undefined);
    const validate = validateForm();
    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationVehicleInstallment(transiting, form, (data) => {
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
      if (form.vehiclePrice && form.installmentTerm && form.vehicleStatus) {
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
          type="row-col"
          values={[
            {
              label: dictionary?.vehicle_simulation?.hargaOtr ?? 'Harga OTR',
              value: form.vehiclePrice.toString(),
            },
            {
              label: dictionary?.vehicle_simulation?.uangMuka ?? 'Uang Muka',
              value: result?.downPaymentAmount.toString() || '',
              width: '50',
            },
            {
              label:
                dictionary?.vehicle_simulation?.pokokHutang ?? 'Pokok Hutang',
              value: result?.principalDebt.toString() || '',
              width: '50',
            },
            {
              label: dictionary?.vehicle_simulation?.bunga ?? 'Bunga',
              value: ((result?.interestRate || 0) * 100).toString() || '',
              col: true,
              percentage: true,
            },
            {
              label:
                dictionary?.vehicle_simulation?.angsuranPokok ??
                'Angsuran Pokok',
              value: result?.principalInstallment.toString() || '',
              col: true,
            },
            {
              label:
                dictionary?.vehicle_simulation?.angsuranBunga ??
                'Angsuran Bunga/ Bulan',
              value: result?.interestInstallmentPerMonth.toString() || '',
              col: true,
            },
            {
              label:
                dictionary?.vehicle_simulation?.angsuranBulanan ??
                'Angsuran/ Bulan',
              value: result?.totalInstallmentPerMonth.toString() || '',
              col: true,
            },
            {
              label: dictionary?.vehicle_simulation?.provisi ?? 'Provisi',
              value: result?.provisionFee?.toString() || '',
              col: true,
              active: form.vehicleStatus === 'NEW' ? true : false,
            },
            {
              label:
                dictionary?.vehicle_simulation?.administration ??
                'Administrasi',
              value: result?.administrationFee.toString() || '',
              col: true,
            },
            {
              label:
                dictionary?.vehicle_simulation?.TDPAdminitration ??
                'TDP (DP + Biaya Administrasi + Provisi)',
              value: result?.totalPayment.toString() || '',
              col: true,
            },
          ]}
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.vehicle_simulation?.statusKendaraan ?? 'Status Kendaraan'}`}
              editable={false}
              slot={
                <div>
                  <div className="">
                    <InputSelect
                      list={[
                        {
                          title:
                            dictionary?.vehicle_simulation?.vehicleStatusNew ??
                            'Baru',
                          value: 'NEW',
                        },
                        {
                          title:
                            dictionary?.vehicle_simulation?.vehicleStatusUsed ??
                            'Bekas',
                          value: 'USED',
                        },
                      ]}
                      placeholder={`${dictionary?.vehicle_simulation?.placeholder ?? 'Pilih Status'}`}
                      value={form.vehicleStatus}
                      onChange={(value) => {
                        onFieldChange(
                          'vehicleStatus',
                          (Array.isArray(value)
                            ? value.at(0)?.value
                            : value?.value) || ''
                        );
                        setForm((prevForm) => ({
                          ...prevForm,
                          installmentTerm: 1,
                          vehiclePrice: 0,
                        }));
                        setFormError({});
                      }}
                    />
                  </div>
                  {formError.vehicleStatus && (
                    <div className="mt-5">
                      <InputError message={formError.vehicleStatus} />
                    </div>
                  )}
                </div>
              }
            />
          </div>
          <div className="w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.vehicle_simulation?.hargaOtr ?? 'Harga OTR'}`}
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.vehiclePrice}
                      leftText={`${dictionary?.simulasi_kprs?.leftText ?? 'Rp.'}`}
                      value={form.vehiclePrice}
                      onChange={(value) => {
                        onFieldChange('vehiclePrice', value);
                      }}
                      type="number"
                    />
                  </div>
                  <div className="cursor-pointer">
                    <InputSlider
                      min={0}
                      max={10000000000}
                      step={100000}
                      value={form.vehiclePrice}
                      onChange={(value) => {
                        onFieldChange('vehiclePrice', value);
                      }}
                    />
                  </div>
                  {formError.vehiclePrice && (
                    <div className="mt-5">
                      <InputError
                        message={
                          formError.vehiclePrice
                            ? dictionary?.reminder_text_brigunaKarya
                                ?.validateMaxMinInstallment
                            : ''
                        }
                      />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, vehiclePrice: edit })
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.vehicle_simulation?.uangMuka ?? 'Uang Muka'}`}
              editable={false}
              slot={
                <div>
                  <div className="flex gap-1">
                    <div className="w-[25%] flex-none">
                      <InputText
                        disabled
                        rightText="%"
                        value={form.vehicleStatus === 'NEW' ? 25 : 30}
                        type="number"
                      />
                    </div>
                    <div className="w-[75%]  flex-none">
                      <InputText
                        disabled
                        leftText={`${dictionary?.simulasi_kprs?.leftText ?? 'Rp.'}`}
                        value={result?.downPaymentAmount}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.vehicle_simulation?.pokokHutang ?? 'Pokok Hutang'}`}
              editable={false}
              slot={
                <div>
                  <div className="">
                    <InputText
                      disabled
                      leftText={`${dictionary?.simulasi_kprs?.leftText ?? 'Rp.'}`}
                      value={result?.principalDebt}
                      type="number"
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="w-1/2 mdmax:w-full flex-none mb-10 px-5">
            <CE_SimulationLabel
              label={`${dictionary?.vehicle_simulation?.jangkaWaktu ?? 'Jangka Waktu'}`}
              slot={
                <div>
                  <div className="mb-5 w-[70%]">
                    <InputText
                      disabled={formDisabled.installmentTerm}
                      rightText={`${dictionary?.vehicle_simulation?.rightText ?? 'Tahun'}`}
                      value={form.installmentTerm}
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        onFieldChange('installmentTerm', strToInt);
                      }}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={1}
                      max={form.vehicleStatus === 'NEW' ? 6 : 4}
                      value={form.installmentTerm}
                      onChange={(value) =>
                        onFieldChange('installmentTerm', value)
                      }
                    />
                  </div>
                  {form.vehicleStatus === 'NEW' ? (
                    <div>
                      {formError.installmentTerm && (
                        <div className="mt-5">
                          <InputError
                            message={
                              formError.installmentTerm
                                ? dictionary?.reminder_text_brigunaKarya
                                    ?.validateMaxMinCarNew
                                : ''
                            }
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      {formError.installmentTerm && (
                        <div className="mt-5">
                          <InputError
                            message={
                              formError.installmentTerm
                                ? dictionary?.reminder_text_brigunaKarya
                                    ?.validateMaxMinCarUsed
                                : ''
                            }
                          />
                        </div>
                      )}
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
              label={`${dictionary?.vehicle_simulation?.bunga ?? 'Bunga'}`}
              editable={false}
              slot={
                <div>
                  <div className="w-[70%]">
                    <InputText
                      disabled
                      rightText="%"
                      value={
                        result
                          ? new Intl.NumberFormat('EN-us').format(
                              result.interestRate * 100
                            )
                          : 0
                      }
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
              {dictionary?.simulasi_deposito_bisnis?.buttonHitung ?? 'Hitung'}
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_SimulationCarMain;
