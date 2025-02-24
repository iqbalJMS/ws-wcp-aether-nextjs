'use server';

import { API_GetRelatedContentType } from '@/api/content-type/api.get-related-content';

export async function ACT_GetRelatedContentType({
  nid,
  type,
}: {
  nid: number;
  type: string;
}) {
  const response = await API_GetRelatedContentType({ nid, type });
  return response;
}
