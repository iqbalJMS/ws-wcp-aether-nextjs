'use server';

import { API_PostWebForm } from '@/api/webform/api.post.webform';
import { T_FormKprBriRequest } from '@/api/webform/api.post.webform.type';

export async function ACT_PostWebForm(request: T_FormKprBriRequest) {
  return await API_PostWebForm(request);
}
