'use server';

import { API_GetContentType } from '@/api/content-type/api.get-content-type';
import { T_ContentTypeRequest } from '@/api/content-type/api.get-content-type.type';

export async function ACT_GetContentType({
  request,
  alias = 'news',
}: {
  request: T_ContentTypeRequest;
  alias: string;
}) {
  const response = await API_GetContentType({ request, alias });
  return response;
}
