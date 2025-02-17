'use server';

import { API_GetKurs } from '@/api/kurs/api.get.kurs';
import { T_KursRequest } from '@/api/kurs/api.get.kurs.type';

export async function ACT_GetKurs(request: T_KursRequest) {
  const response = await API_GetKurs(request);
  return response;
}
