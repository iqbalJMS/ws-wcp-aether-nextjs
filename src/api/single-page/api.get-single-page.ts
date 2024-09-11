"use server";

import { get } from "@/api/common/fetch";

export async function API_GetSinglePage({ }: // lang,
  {
    lang: string;
  }): Promise<any> {
  try {
    const response = await get("/node/15?_format=json_recursive");
    return response;
  } catch (error) {
    console.error("An error occurred during Get Single Page:", error);
    return [];
  }
}