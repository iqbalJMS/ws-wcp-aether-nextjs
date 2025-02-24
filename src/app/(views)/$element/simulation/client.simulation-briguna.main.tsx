import {
  T_SimulationBriguna,
  T_SimulationBrigunaRequest,
} from '@/api/simulation/briguna/api.get.briguna.type';
import {
  CFN_GetSimulationBriguna,
  CFN_MapToSimulationBrigunaPayload,
  CFN_ValidateCreateSimulationBrigunaFields,
} from '@/app/(views)/$function/cfn.get.simulation-briguna';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/input.error';
import InputSlider from '@/lib/element/global/input.slider';
import InputText from '@/lib/element/global/input.text';
import useForm from '@/lib/hook/useForm';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import CE_SimulationResultVariant01 from './client.simulation-result.variant01';
import CE_SimulationLabel from './client.simulation.label';

const CE_SimulationBRIGunaMain = ({ type }: { type: 'tab' | 'page' }) => {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [resetCount, setResetCount] = useState(0);
  const pathname = usePathname();

  const [formDisabled, setFormDisabled] = useState({
    karyaInstallmentTerm: true,
    karyaInterestRate: true,
    karyaSalary: true,
    purnaInstallmentTerm: true,
    purnaInterestRate: true,
    purnaSalary: true,
  });
  const {
    form: karyaForm,
    formError: karyaFormError,
    onFieldChange: karyaOnFieldChange,
    validateForm: karyaValidateForm,
    resetForm: karyaResetForm,
  } = useForm<T_SimulationBrigunaRequest, T_SimulationBrigunaRequest>(
    CFN_MapToSimulationBrigunaPayload({
      installmentTerm: 1,
      interestRate: 0.1,
      salary: 0,
      type: 'KARYA',
    }),
    CFN_ValidateCreateSimulationBrigunaFields
  );

  const {
    form: purnaForm,
    formError: purnaFormError,
    onFieldChange: purnaOnFieldChange,
    validateForm: purnaValidateForm,
    resetForm: purnaResetForm,
  } = useForm<T_SimulationBrigunaRequest, T_SimulationBrigunaRequest>(
    CFN_MapToSimulationBrigunaPayload({
      installmentTerm: 1,
      interestRate: 0.1,
      salary: 0,
      type: 'PURNA',
    }),
    CFN_ValidateCreateSimulationBrigunaFields
  );

  const [resultKarya, setResultKarya] = useState<T_SimulationBriguna>();
  const [resultPurna, setResultPurna] = useState<T_SimulationBriguna>();

  const handleSubmit = (button: boolean = true) => {
    setResultKarya(undefined);
    setResultPurna(undefined);
    const karyaValidate = karyaValidateForm();
    const purnaValidate = purnaValidateForm();

    if (pending || !karyaValidate || !purnaValidate) {
      return;
    }

    try {
      CFN_GetSimulationBriguna(
        transiting,
        { ...karyaForm, interestRate: Number(karyaForm.interestRate) * 0.01 },
        (data) => {
          setResultKarya(data?.data);
        }
      );
      CFN_GetSimulationBriguna(
        transiting,
        { ...purnaForm, interestRate: Number(purnaForm.interestRate) * 0.01 },
        (data) => {
          setResultPurna(data?.data);
        }
      );
    } catch (error) {
    } finally {
      if (button) {
        setIsResult(true);
      }
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setResultKarya(undefined);
      setResultPurna(undefined);
      if (
        karyaForm.installmentTerm &&
        karyaForm.interestRate &&
        karyaForm.salary &&
        purnaForm.installmentTerm &&
        purnaForm.interestRate &&
        purnaForm.salary
      ) {
        handleSubmit(false);
      }
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [karyaForm]);

  const handleResetForm = () => {
    setIsResult(false);
    karyaResetForm();
    purnaResetForm();
  };

  useEffect(() => {
    handleResetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetCount]);

  return (
    <div className="">
      {isResult && (
        <CE_SimulationResultVariant01
          values={
            type === 'tab'
              ? [
                  {
                    label: 'Estimasi Angsuran Bulanan',
                    value:
                      (
                        (resultKarya?.monthlyInstallment || 0) +
                        (resultPurna?.monthlyInstallment || 0)
                      ).toString() || '0',
                  },
                ]
              : [
                  {
                    label: 'Hasil BRIGuna Karya',
                    value: resultKarya?.monthlyInstallment.toString() || '0',
                  },
                  {
                    label: 'Hasil BRIGuna Purna',
                    value: resultPurna?.monthlyInstallment.toString() || '0',
                  },
                  {
                    label: 'Hasil BRIGuna Umum (BRIGuna Karya + BRIGuna Umum)',
                    value:
                      (
                        (resultKarya?.monthlyInstallment || 0) +
                        (resultPurna?.monthlyInstallment || 0)
                      ).toString() || '0',
                  },
                ]
          }
          onClose={() => setIsResult(false)}
        />
      )}
      {!isResult && (
        <div className="flex flex-wrap -mx-5">
          <div className="w-full flex-none px-5">
            {pathname == '/simulasi-briguna' ? (
              <CE_SimulationLabel label="BRIGuna Karya" editable={false} />
            ) : (
              <></>
            )}
          </div>
          <div className="w-full flex-none mb-10 px-5">
            {pathname == '/simulasi-briguna' ? (
              <CE_SimulationLabel
                label="Jumlah Gaji"
                slot={
                  <div>
                    <div className="mb-5 w-[50%]">
                      <InputText
                        disabled={formDisabled.karyaSalary}
                        leftText="Rp."
                        value={karyaForm.salary}
                        type="number"
                        onChange={(value) => {
                          karyaOnFieldChange('salary', value);
                        }}
                      />
                    </div>
                    <div>
                      <InputSlider
                        min={0}
                        max={10000000000}
                        step={10000000}
                        value={karyaForm.salary}
                        onChange={(value) => {
                          karyaOnFieldChange('salary', value);
                        }}
                      />
                    </div>
                    {karyaFormError.salary && (
                      <div className="mt-5">
                        <InputError message={karyaFormError.salary} />
                      </div>
                    )}
                  </div>
                }
                onChange={(edit) =>
                  setFormDisabled({ ...formDisabled, karyaSalary: edit })
                }
              />
            ) : (
              <CE_SimulationLabel
                label="Plafond"
                slot={
                  <div>
                    <div className="mb-5 w-[50%]">
                      <InputText
                        disabled={formDisabled.karyaSalary}
                        leftText="Rp."
                        value={karyaForm.salary}
                        type="number"
                        onChange={(value) => {
                          karyaOnFieldChange('salary', value);
                        }}
                      />
                    </div>
                    <div>
                      <InputSlider
                        min={0}
                        max={10000000000}
                        step={10000000}
                        value={karyaForm.salary}
                        onChange={(value) => {
                          karyaOnFieldChange('salary', value);
                        }}
                      />
                    </div>
                    {karyaFormError.salary && (
                      <div className="mt-5">
                        <InputError message={karyaFormError.salary} />
                      </div>
                    )}
                  </div>
                }
                onChange={(edit) =>
                  setFormDisabled({ ...formDisabled, karyaSalary: edit })
                }
              />
            )}
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
                      value={karyaForm.installmentTerm}
                      type="number"
                      onChange={(value) => {
                        karyaOnFieldChange('installmentTerm', value);
                      }}
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={15}
                      value={karyaForm.installmentTerm}
                      onChange={(value) => {
                        karyaOnFieldChange('installmentTerm', value);
                      }}
                    />
                  </div>
                  {karyaFormError.installmentTerm && (
                    <div className="mt-5">
                      <InputError message={karyaFormError.installmentTerm} />
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
                      value={karyaForm.interestRate}
                      type="number"
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        karyaOnFieldChange('interestRate', strToInt);
                      }}
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={0}
                      max={25}
                      step={0.1}
                      value={karyaForm.interestRate}
                      onChange={(value) => {
                        let strToInt = 0;

                        try {
                          strToInt = Number(value);
                        } catch (_) {}

                        karyaOnFieldChange('interestRate', strToInt);
                      }}
                    />
                  </div>
                  {karyaFormError.interestRate && (
                    <div className="mt-5">
                      <InputError message={karyaFormError.interestRate} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, karyaInterestRate: edit })
              }
            />
          </div>

          {/* BRIGUNA PURNA */}
          {pathname == '/simulasi-briguna' ? (
            <>
              <div className="border-b-2 pb-5 border-blue-01 border-opacity-35 border-dashed mb-10 w-full"></div>
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
                          value={purnaForm.salary}
                          type="number"
                          onChange={(value) =>
                            purnaOnFieldChange('salary', value)
                          }
                        />
                      </div>
                      <div>
                        <InputSlider
                          min={0}
                          max={10000000000}
                          step={10000000}
                          value={purnaForm.salary}
                          onChange={(value) =>
                            purnaOnFieldChange('salary', value)
                          }
                        />
                      </div>
                      {purnaFormError.salary && (
                        <div className="mt-5">
                          <InputError message={purnaFormError.salary} />
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
                          value={purnaForm.installmentTerm}
                          type="number"
                          onChange={(value) =>
                            purnaOnFieldChange('installmentTerm', value)
                          }
                        />
                      </div>
                      <div>
                        <InputSlider
                          min={0}
                          max={15}
                          value={purnaForm.installmentTerm}
                          onChange={(value) =>
                            purnaOnFieldChange('installmentTerm', value)
                          }
                        />
                      </div>
                      {purnaFormError.installmentTerm && (
                        <div className="mt-5">
                          <InputError
                            message={purnaFormError.installmentTerm}
                          />
                        </div>
                      )}
                    </div>
                  }
                  onChange={(edit) =>
                    setFormDisabled({
                      ...formDisabled,
                      purnaInstallmentTerm: edit,
                    })
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
                          value={purnaForm.interestRate}
                          type="number"
                          onChange={(value) => {
                            let strToInt = 0;

                            try {
                              strToInt = Number(value);
                            } catch (_) {}

                            purnaOnFieldChange('interestRate', strToInt);
                          }}
                        />
                      </div>
                      <div>
                        <InputSlider
                          min={0}
                          max={25}
                          step={0.1}
                          value={purnaForm.interestRate}
                          onChange={(value) => {
                            let strToInt = 0;

                            try {
                              strToInt = Number(value);
                            } catch (_) {}

                            purnaOnFieldChange('interestRate', strToInt);
                          }}
                        />
                      </div>
                      {purnaFormError.interestRate && (
                        <div className="mt-5">
                          <InputError message={purnaFormError.interestRate} />
                        </div>
                      )}
                    </div>
                  }
                  onChange={(edit) =>
                    setFormDisabled({
                      ...formDisabled,
                      purnaInterestRate: edit,
                    })
                  }
                />
              </div>
            </>
          ) : (
            <></>
          )}
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

export default CE_SimulationBRIGunaMain;
