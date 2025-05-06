'use client';

import { Call } from '@strix/client';
import {
  validateEmail,
  validateEmpty,
  validateName,
  validatePhone,
} from '@/lib/functions/global/validation';

import { T_PostResponse } from '@/api/common/fetch.type';
import {
  T_FormQlolaRequest,
  T_FormResult,
} from '@/api/webform/api.post.webform-qlola.type';
import { ACT_PostWebFormQlola } from '@/app/(views)/$action/action.post.webform-qlola';

export function CFN_PostWebFormQlola(
  transit: Call,
  data: T_FormQlolaRequest,
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (data: T_PostResponse<T_FormResult> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_PostWebFormQlola(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToWebFormQlolaPayload(
  form: T_FormQlolaRequest
): T_FormQlolaRequest {
  return {
    webform_id: form.webform_id,
    nama: form.nama,
    email: form.email,
    nomor_telepon: form.nomor_telepon,
    perusahaan: form.perusahaan,
    jabatan: form.jabatan,
    kota_domisili: form.kota_domisili,
    lokasi_perusahaan: form.lokasi_perusahaan,
    pilihan_jenis_usaha: form.pilihan_jenis_usaha,
  };
}

export function CFN_ValidateCreateWebFormQlolaFields(
  name: keyof T_FormQlolaRequest,
  value: any
): string {
  switch (name) {
    case 'webform_id':
      return '';
    case 'nama':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'nomor_telepon':
      return validatePhone(value);
    case 'perusahaan':
      return validateEmpty(value, 'Wajib di isi');
    case 'jabatan':
      return validateEmpty(value, 'Wajib di isi');
    case 'kota_domisili':
      return validateEmpty(value, 'Wajib di isi');
    case 'lokasi_perusahaan':
      return validateEmpty(value, 'Wajib di isi');
    case 'pilihan_jenis_usaha':
      return validateEmpty(value, 'Wajib di isi');

    default:
      return '';
  }
}
