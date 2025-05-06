'use server';

import { API_PostWebFormQlola } from '@/api/webform/api.post.webform-qlola';
import { T_FormQlolaRequest } from '@/api/webform/api.post.webform-qlola.type';

export async function ACT_PostWebFormQlola(request: T_FormQlolaRequest) {
  return await API_PostWebFormQlola(request);
}
