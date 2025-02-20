'use server';

import { get } from '@/api/common/fetch';
import { redirect } from 'next/navigation';
import { T_ContentTypeRequest } from './api.get-content-type.type';

function objectToQueryString(obj: Record<string, string>): string {
  const params = new URLSearchParams(obj);
  return params.toString();
}

export async function API_GetContentType({
  request,
  alias = 'news',
}: {
  request: T_ContentTypeRequest;
  alias: string;
}) {
  try {
    let queryString = objectToQueryString(request);

    const url = `/${alias}?_format=json_recursive&${queryString}`;

    if (!url) return undefined;
    const response = await get(url);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Content Type:', error);
    redirect('/404');
  }
}
