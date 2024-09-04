"use server";

import { API_GetSinglePage } from "@/api/single-page/api.get-single-page";

export async function ACT_GetSinglePage({
  lang,
}: {
  lang: string;
  // TODO: dont forget replace to real responses type
}): Promise<any> {
  const response = await API_GetSinglePage({ lang });
  return response;
}
