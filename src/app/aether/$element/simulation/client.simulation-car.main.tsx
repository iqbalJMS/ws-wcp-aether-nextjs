import InputSlider from '@/lib/element/global/input.slider';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import { useEffect, useState } from 'react';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import useForm from '@/lib/hook/useForm';

import InputError from '@/lib/element/global/input.error';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import InputSelect from '@/lib/element/global/input.select';
import {
  CFN_MapToSimulationCarPayload,
  CFN_ValidateCreateSimulationCarFields,
  T_CreateSimulationCar,
} from '@/app/aether/$function/cfn.create.simulation-car';

const CE_SimulationCarMain = () => {
  const [isResult, setIsResult] = useState(false);
  const [formDisabled, setFormDisabled] = useState({
    otrPrice: true,
    period: true,
  });
  const { form, formError, onFieldChange, setForm } = useForm<
    T_CreateSimulationCar,
    T_CreateSimulationCar
  >(
    CFN_MapToSimulationCarPayload({
      carStatus: '',
      dp: 0,
      dpIDR: 0,
      otrPrice: 0,
      period: 0,
      principalDebt: 0,
      rate: 0,
    }),
    CFN_ValidateCreateSimulationCarFields
  );

  const handleSubmit = () => {
    setIsResult(true);
  };

  useEffect(() => {
    let dp = 0;
    let rate = 0;
    let dpIDR = 0;
    let principalDebt = 0;
    switch (form.carStatus) {
      case 'baru':
        dp = 25;
        break;
      case 'bekas':
        dp = 30;
        break;

      default:
        break;
    }
    switch (form.period) {
      case 1:
        rate = 4.99;
        break;
      case 2:
        rate = 5.5;
        break;
      case 3:
        rate = 6.1;
        break;
      case 4:
        rate = 6.65;
        break;
    }

    if (form.otrPrice !== 0 && dp !== 0) {
      dpIDR = form.otrPrice * (dp / 100);
      principalDebt = form.otrPrice - dpIDR;
    }
    setForm({
      ...form,
      dp: dp,
      dpIDR: dpIDR,
      principalDebt: principalDebt,
      rate: rate,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.otrPrice, form.carStatus, form.period]);

  return (
    <div>
      {isResult && (
        <CE_SimulationResultVariant01
          type="row-col"
          values={[
            {
              label: 'Harga OTR',
              value: form.otrPrice.toString(),
            },
            {
              label: 'Uang Muka',
              value: form.dpIDR.toString(),
              width: '50',
            },
            {
              label: 'Pokok Hutang',
              value: form.principalDebt.toString(),
              width: '50',
            },
            {
              label: 'Bunga',
              value: form.rate.toString(),
              col: true,
              percentage: true,
            },
            {
              label: 'Angsuran Pokok',
              value: '154120937',
              col: true,
            },
            {
              label: 'Angsuran Bunga/ Bulan',
              value: '154120937',
              col: true,
            },
            {
              label: 'Angsuran/ Bulan',
              value: '154120937',
              col: true,
            },
            {
              label: 'Administrasi',
              value: '154120937',
              col: true,
            },
            {
              label: 'TDP (DP + Biaya Administrasi + Provisi)',
              value: '154120937',
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
                          value: 'baru',
                        },
                        {
                          title: 'Bekas',
                          value: 'bekas',
                        },
                      ]}
                      value={form.carStatus}
                      onChange={(value) =>
                        onFieldChange(
                          'carStatus',
                          (Array.isArray(value)
                            ? value.at(0)?.value
                            : value?.value) || ''
                        )
                      }
                    />
                  </div>
                  {formError.carStatus && (
                    <div className="mt-5">
                      <InputError message={formError.carStatus} />
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
                      disabled={formDisabled.otrPrice}
                      leftText="Rp."
                      value={form.otrPrice}
                      onChange={(value) => {
                        onFieldChange('otrPrice', value);
                      }}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={1000000000}
                      step={100000}
                      value={form.otrPrice}
                      onChange={(value) => {
                        onFieldChange('otrPrice', value);
                      }}
                    />
                  </div>
                  {formError.otrPrice && (
                    <div className="mt-5">
                      <InputError message={formError.otrPrice} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, otrPrice: edit })
              }
            />
          </div>
          <div className="w-1/2 flex-none mb-10 px-5">
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
                        value={form.dp}
                        onChange={(value) => onFieldChange('dp', value)}
                        type="number"
                      />
                    </div>
                    <div className="w-[75%]  flex-none">
                      <InputText
                        disabled
                        leftText="Rp."
                        value={form.dpIDR}
                        onChange={(value) => onFieldChange('dpIDR', value)}
                        type="number"
                      />
                    </div>
                  </div>
                  {formError.dp && (
                    <div className="mt-5">
                      <InputError message={formError.dp} />
                    </div>
                  )}
                </div>
              }
            />
          </div>
          <div className="w-1/2 flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Pokok Hutang"
              editable={false}
              slot={
                <div>
                  <div className="">
                    <InputText
                      disabled
                      leftText="Rp."
                      value={form.principalDebt}
                      type="number"
                    />
                  </div>
                  {formError.principalDebt && (
                    <div className="mt-5">
                      <InputError message={formError.principalDebt} />
                    </div>
                  )}
                </div>
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
                      max={4}
                      value={form.period}
                      onChange={(value) => onFieldChange('period', value)}
                    />
                  </div>
                  {formError.period && (
                    <div className="mt-5">
                      <InputError message={formError.period} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, period: edit })
              }
            />
          </div>
          <div className="w-1/2 flex-none mb-10 px-5">
            <CE_SimulationLabel
              label="Bunga"
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
                  {formError.rate && (
                    <div className="mt-5">
                      <InputError message={formError.rate} />
                    </div>
                  )}
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

export default CE_SimulationCarMain;
