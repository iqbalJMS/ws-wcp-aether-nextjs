'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';
import { T_Response_Content_Type } from './api.get-content-type.type';

export async function API_GetRelatedContentType({
  type,
  nid,
}: {
  nid: number;
  type: string;
}) {
  try {
    const url = `/api/brimw/related/${nid}?_format=json_recursive&type=${type}`;

    if (!url) return undefined;
    const response = await get<T_Response_Content_Type[]>(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Related Content Type:', error);
    redirect('/404');
  }
}
