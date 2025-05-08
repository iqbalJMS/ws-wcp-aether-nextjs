'use client';

import { ACT_PostWebForm } from '@/app/(views)/$action/action.post.webform';
import { Call } from '@strix/client';
import {
  validateEmail,
  validateEmpty,
  validateName,
  validatePhone,
} from '@/lib/functions/global/validation';
import {
  T_FormKprBriRequest,
  T_FormResult,
} from '@/api/webform/api.post.webform.type';
import { T_PostResponse } from '@/api/common/fetch.type';

export function CFN_PostWebForm(
  transit: Call,
  data: T_FormKprBriRequest,
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (data: T_PostResponse<T_FormResult> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_PostWebForm(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToWebFormPayload(
  form: T_FormKprBriRequest
): T_FormKprBriRequest {
  return {
    webform_id: form.webform_id,
    nama: form.nama,
    email: form.email,
    nomor_telepon: form.nomor_telepon,
    perusahaan: form.perusahaan,
    jabatan: form.jabatan,
    kota_domisili: form.kota_domisili,
    checklist_persetujuan_pemberian_data:
      form.checklist_persetujuan_pemberian_data,
  };
}

export function CFN_ValidateCreateWebFormFields(
  name: keyof T_FormKprBriRequest,
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
    case 'checklist_persetujuan_pemberian_data':
      return validateEmpty(value, 'Wajib di isi');

    default:
      return '';
  }
}
