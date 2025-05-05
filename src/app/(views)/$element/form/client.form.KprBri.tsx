'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/form/input.error';
import InputLabel from '@/lib/element/global/form/input.label';
import InputText from '@/lib/element/global/form/input.text';
import { useState, useTransition } from 'react';

import { T_FormKprBriRequest } from '@/api/webform/api.post.webform.type';
import useForm from '@/lib/hook/useForm';
import {
  CFN_MapToWebFormPayload,
  CFN_ValidateCreateWebFormFields,
} from '@/app/(views)/$function/cfn.post.webform';
import { useRouter } from 'next/navigation';
import { ACT_PostWebForm } from '@/app/(views)/$action/action.post.webform';

export default function CE_FormKprBri({
  fieldForm,
  title,
  subTitle,
}: {
  fieldForm: string;
  title: string;
  subTitle: string;
}) {
  const [pending] = useTransition();
  const INPUT_RADIO_DATA = [{ value: 'Ya' }, { value: 'Tidak' }];
  type T_RadioType = 'Ya' | 'Tidak';
  const [radioType, setradioType] = useState<T_RadioType>('Ya');
  const router = useRouter();
  const { form, formError, validateForm, onFieldChange } = useForm<
    T_FormKprBriRequest,
    T_FormKprBriRequest
  >(
    CFN_MapToWebFormPayload({
      webform_id: '',
      nama: '',
      email: '',
      nomor_telepon: '',
      jabatan: '',
      kota_domisili: '',
      perusahaan: '',
      checklist_persetujuan_pemberian_data: 'Ya',
    }),
    CFN_ValidateCreateWebFormFields
  );
  const handleSubmit = async () => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }

    try {
      const result = await ACT_PostWebForm({
        webform_id: fieldForm ?? 'kprbri',
        nama: form.nama,
        email: form.email,
        nomor_telepon: form.nomor_telepon,
        jabatan: form.jabatan,
        kota_domisili: form.kota_domisili,
        perusahaan: form.perusahaan,
        checklist_persetujuan_pemberian_data:
          form.checklist_persetujuan_pemberian_data,
      });

      if (result?.sid) {
        router.refresh();
      }
    } catch (error) {}
  };
  return (
    <section className="container max-w-[1280px] py-20">
      <h1
        className="text-2xl font-medium uppercase"
        dangerouslySetInnerHTML={{ __html: title ?? '' }}
      />
      <div className="px-8 py-6">
        <h2
          className="text-base"
          dangerouslySetInnerHTML={{ __html: subTitle ?? '' }}
        />
        <div className="w-full flex-none my-6">
          <InputLabel label="Nama">
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
          <InputLabel label="Nomor Telepon">
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
          <InputLabel label="Email">
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
          <InputLabel label="Perusahaan">
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
          <InputLabel label="Jabatan">
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
          <InputLabel label="Kota Domisili">
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
          <InputLabel label="Pilihan Jenis Usaha">
            <span className="pt-2">
              {INPUT_RADIO_DATA?.map((item, index) => (
                <div className="flex" key={index}>
                  <input
                    className="text-black"
                    type="radio"
                    id={item.value}
                    value={item.value}
                    checked={radioType === item?.value}
                    onChange={({ target }) => {
                      setradioType(target.value as T_RadioType);
                      onFieldChange(
                        'checklist_persetujuan_pemberian_data',
                        target.value
                      );
                    }}
                  />
                  <label className="pl-2">{item.value}</label>
                </div>
              ))}
            </span>
            {formError.checklist_persetujuan_pemberian_data && (
              <InputError
                message={formError.checklist_persetujuan_pemberian_data}
              />
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
            Mengirim
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
