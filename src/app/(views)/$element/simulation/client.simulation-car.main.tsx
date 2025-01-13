import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useEffect, useState, useTransition } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';

import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import InputSelect from '@/lib/element/global/input.select';
import {
  T_SimulationVehicleInstallment,
  T_SimulationVehicleInstallmentRequest,
} from '@/api/simulation/vehicle-installment/api.get.vehicle-installment.type';
import {
  CFN_GetSimulationVehicleInstallment,
  CFN_MapToSimulationVehicleInstallmentPayload,
  CFN_ValidateCreateSimulationVehicleInstallmentFields,
} from '@/app/(views)/$function/cfn.get.simulation-vehicle-installment';

const CE_SimulationCarMain = () => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    vehiclePrice: true,
    installmentTerm: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationVehicleInstallmentRequest,
    T_SimulationVehicleInstallmentRequest
  >(
    CFN_MapToSimulationVehicleInstallmentPayload({
      installmentTerm: 0,
      vehiclePrice: 0,
      vehicleStatus: 'NEW',
    }),
    CFN_ValidateCreateSimulationVehicleInstallmentFields
  );
  const [result, setResult] = useState<T_SimulationVehicleInstallment>();
  const handleSubmit = async (button: boolean = true) => {
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
              label: 'Harga OTR',
              value: form.vehiclePrice.toString(),
            },
            {
              label: 'Uang Muka',
              value: result?.downPaymentAmount.toString() || '',
              width: '50',
            },
            {
              label: 'Pokok Hutang',
              value: result?.principalDebt.toString() || '',
              width: '50',
            },
            {
              label: 'Bunga',
              value: ((result?.interestRate || 0) * 100).toString() || '',
              col: true,
              percentage: true,
            },
            {
              label: 'Angsuran Pokok',
              value: result?.principalInstallment.toString() || '',
              col: true,
            },
            {
              label: 'Angsuran Bunga/ Bulan',
              value: result?.interestInstallmentPerMonth.toString() || '',
              col: true,
            },
            {
              label: 'Angsuran/ Bulan',
              value: result?.totalInstallmentPerMonth.toString() || '',
              col: true,
            },
            {
              label: 'Provisi',
              value: '',
              col: true,
              active: form.vehicleStatus === 'NEW' ? true  : false
            },
            {
              label: 'Administrasi',
              value: result?.administrationFee.toString() || '',
              col: true,
            },
            {
              label: 'TDP (DP + Biaya Administrasi + Provisi)',
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
              label="Status Kendaraan"
              editable={false}
              slot={
                <div>
                  <div className="">
                    <InputSelect
                      list={[
                        {
                          title: 'Baru',
                          value: 'NEW',
                        },
                        {
                          title: 'Bekas',
                          value: 'USED',
                        },
                      ]}
                      value={form.vehicleStatus}
                      onChange={(value) =>
                        onFieldChange(
                          'vehicleStatus',
                          (Array.isArray(value)
                            ? value.at(0)?.value
                            : value?.value) || ''
                        )
                      }
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
              label="Harga OTR"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      disabled={formDisabled.vehiclePrice}
                      leftText="Rp."
                      value={form.vehiclePrice}
                      onChange={(value) => {
                        onFieldChange('vehiclePrice', value);
                      }}
                      type="number"
                    />
                  </div>
                  <div>
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
                      <InputError message={formError.vehiclePrice} />
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
              label="Uang Muka"
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
                        leftText="Rp."
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
              label="Pokok Hutang"
              editable={false}
              slot={
                <div>
                  <div className="">
                    <InputText
                      disabled
                      leftText="Rp."
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
                      min={0}
                      max={form.vehicleStatus === 'NEW' ? 6 : 4}
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
              label="Bunga"
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
              Hitung
            </ButtonSecondary>
          </div>
        </div>
      )}
    </div>
  );
};

export default CE_SimulationCarMain;
