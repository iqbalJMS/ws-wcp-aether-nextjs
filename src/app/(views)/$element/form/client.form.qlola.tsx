'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/form/input.error';
import InputLabel from '@/lib/element/global/form/input.label';
import InputText from '@/lib/element/global/form/input.text';
import { useState, useTransition } from 'react';
import useForm from '@/lib/hook/useForm';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  CFN_MapToWebFormQlolaPayload,
  CFN_ValidateCreateWebFormQlolaFields,
} from '@/app/(views)/$function/cfn.post.webform-qlola';
import { ACT_PostWebFormQlola } from '@/app/(views)/$action/action.post.webform-qlola';
import { T_FormQlolaRequest } from '@/api/webform/api.post.webform-qlola.type';
import DropDown from '@/lib/element/global/dropdown';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';

type Option = {
  value: string;
};

export default function CE_FormQlola({
  fieldForm,
  title,
  subTitle,
}: {
  fieldForm: string;
  title: string;
  subTitle: string;
}) {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');
  const [pending] = useTransition();
  const SELECT_DATA_JASA = [
    { value: 'B2B' },
    { value: 'B2C' },
    { value: 'SME' },
  ];
  const [selectedJasa, setSelectedJasa] = useState<Option | null>(null);
  const router = useRouter();

  const { form, formError, validateForm, onFieldChange } = useForm<
    T_FormQlolaRequest,
    T_FormQlolaRequest
  >(
    CFN_MapToWebFormQlolaPayload({
      webform_id: '',
      nama: '',
      email: '',
      nomor_telepon: '',
      perusahaan: '',
      jabatan: '',
      kota_domisili: '',
      lokasi_perusahaan: '',
      pilihan_jenis_usaha: 'B2B',
    }),
    CFN_ValidateCreateWebFormQlolaFields
  );
  const handleSubmit = async () => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }

    try {
      const result = await ACT_PostWebFormQlola({
        webform_id: fieldForm ?? 'qlola',
        nama: form.nama,
        email: form.email,
        nomor_telepon: form.nomor_telepon,
        jabatan: form.jabatan,
        kota_domisili: form.kota_domisili,
        perusahaan: form.perusahaan,
        pilihan_jenis_usaha: form.pilihan_jenis_usaha,
        lokasi_perusahaan: form.lokasi_perusahaan,
      });

      if (result?.sid) {
        router.refresh();
      }
    } catch (error) {}
  };
  return (
    <section className="container max-w-[1280px] py-20">
      <h1
        className="text-xl"
        dangerouslySetInnerHTML={{
          __html: dictionary?.qlola_form?.label ?? title,
        }}
      />
      <div className="px-8 py-6">
        <h2
          className="text-base"
          dangerouslySetInnerHTML={{
            __html: dictionary?.qlola_form?.subLabel ?? subTitle,
          }}
        />
        <div className="w-full flex-none my-6">
          <InputLabel label={`${dictionary?.qlola_form?.formName ?? 'Nama'} `}>
            <InputText
              type="text"
              value={form.nama}
              state={'init'}
              onChange={(value) => onFieldChange('nama', value)}
            />
            {formError.nama && <InputError message={formError.nama} />}
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel
            label={`${dictionary?.qlola_form?.formPhone ?? 'Nomor Telepon'} `}
          >
            <div className="w-full">
              <input
                className="w-full border-black border-opacity-10 border-[1px] py-2 px-5 rounded-md focus:border-blue-01 focus:outline-none"
                type="tel"
                value={form.nomor_telepon}
                onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                onChange={({ target }) =>
                  onFieldChange('nomor_telepon', target.value)
                }
              />
            </div>
            {formError.nomor_telepon && (
              <InputError message={formError.nomor_telepon} />
            )}
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel
            label={`${dictionary?.qlola_form?.formEmail ?? 'Email'} `}
          >
            <InputText
              type="text"
              value={form.email}
              state={'init'}
              onChange={(value) => onFieldChange('email', value)}
            />
            {formError.email && <InputError message={formError.email} />}
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel
            label={`${dictionary?.qlola_form?.formPerusahaan ?? 'Perusahaan'} `}
          >
            <InputText
              type="text"
              value={form.perusahaan}
              state={'init'}
              onChange={(value) => onFieldChange('perusahaan', value)}
            />
            {formError.perusahaan && (
              <InputError message={formError.perusahaan} />
            )}
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel
            label={`${dictionary?.qlola_form?.formJabatan ?? 'Jabatan'} `}
          >
            <InputText
              type="text"
              value={form.jabatan}
              state={'init'}
              onChange={(value) => onFieldChange('jabatan', value)}
            />
            {formError.jabatan && <InputError message={formError.jabatan} />}
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel
            label={`${dictionary?.qlola_form?.formCity ?? 'Kota Domisili'} `}
          >
            <InputText
              type="text"
              value={form.kota_domisili}
              onChange={(value) => onFieldChange('kota_domisili', value)}
              state={'init'}
            />
            {formError.kota_domisili && (
              <InputError message={formError.kota_domisili} />
            )}
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel
            label={`${dictionary?.qlola_form?.formLokasiPerusahaan ?? 'Lokasi Perusahaan'} `}
          >
            <InputText
              type="text"
              value={form.lokasi_perusahaan}
              onChange={(value) => onFieldChange('lokasi_perusahaan', value)}
              state={'init'}
            />
            {formError.lokasi_perusahaan && (
              <InputError message={formError.lokasi_perusahaan} />
            )}
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel
            label={`${dictionary?.qlola_form?.formJenisUsaha ?? 'Pilihan Jenis Usaha'} `}
          >
            <span className="pt-2">
              <DropDown
                options={
                  SELECT_DATA_JASA?.map((item) => ({
                    value: item?.value,
                  })) || []
                }
                selected={selectedJasa}
                onSelectedChanges={(selected) => {
                  setSelectedJasa(selected);
                  onFieldChange('pilihan_jenis_usaha', selected.value);
                }}
                placeholder={
                  dictionary?.qlola_form?.optionPlaceholder ?? 'Pilih opsi'
                }
              />
            </span>
            {formError.pilihan_jenis_usaha && (
              <InputError message={formError.pilihan_jenis_usaha} />
            )}
          </InputLabel>
        </div>
        <div className="w-full flex-none mt-10 flex justify-end">
          <ButtonSecondary
            onClick={() => {
              handleSubmit();
            }}
            rounded="not-full"
            size="md"
            color="blue-02"
          >
            {dictionary?.qlola_form?.button ?? 'Mengirim'}
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
