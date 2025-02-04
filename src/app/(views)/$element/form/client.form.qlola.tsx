'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputError from '@/lib/element/global/input.error';
import InputLabel from '@/lib/element/global/input.label';
import InputSelect from '@/lib/element/global/input.select';
import InputText from '@/lib/element/global/input.text';
import { useState } from 'react';

export default function CE_FormQlola() {
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState(0);
  return (
    <section className="container max-w-[1280px]">
      <h1 className="text-2xl font-medium">Field Form Qlola by BRI</h1>
      <div className="px-8 py-6">
        <h2 className="font-bold text-lg">Data Pribadi</h2>
        <div className="w-full flex-none my-6">
          <InputLabel label="Nama">
            <InputText
              type="text"
              onChange={(e) => setNameValue(e.toString())}
              value={nameValue}
              state={'init'}
            />
            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel label="Nomor Telepon">
            <InputText
              type="number"
              onChange={(e) => setPhoneValue(Number(e))}
              value={phoneValue}
              state={'init'}
            />
            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel label="Email">
            <InputText
              type="text"
              onChange={(e) => setNameValue(e.toString())}
              value={nameValue}
              state={'init'}
            />
            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel label="Perusahaan">
            <InputText
              type="text"
              onChange={(e) => setNameValue(e.toString())}
              value={nameValue}
              state={'init'}
            />
            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel label="Jabatan">
            <InputText
              type="text"
              onChange={(e) => setNameValue(e.toString())}
              value={nameValue}
              state={'init'}
            />
            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel label="Kota Domisili">
            <InputText
              type="text"
              onChange={(e) => setNameValue(e.toString())}
              value={nameValue}
              state={'init'}
            />
            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel label="Lokasi Perusahaan">
            <InputText
              type="text"
              onChange={(e) => setNameValue(e.toString())}
              value={nameValue}
              state={'init'}
            />
            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6">
          <InputLabel label="Pilihan Jenis Usaha">
            <InputSelect
              list={[
                {
                  value: '0',
                  title: 'Pilih opsi',
                },
                {
                  value: '1',
                  title: 'B2B',
                },
                {
                  value: '2',
                  title: 'B2C',
                },
                {
                  value: '2',
                  title: 'SME',
                },
              ]}
              onChange={() => {}}
              value={'0'}
              state={'init'}
            />
            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mt-10 flex justify-end">
          <ButtonSecondary
            onClick={() => {}}
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
