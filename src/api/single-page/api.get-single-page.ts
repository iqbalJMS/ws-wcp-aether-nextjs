"use server";

import { get } from "@/api/common/fetch";

export async function API_GetSinglePage({
  lang,
}: {
  lang: string;
}): Promise<any> {
  try {
    const isEnglish = lang === "en" ? "" : "/id";
    const response = await get(`${isEnglish}/node/15?_format=json_recursive`);

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("An error occurred during Get Single Page:", error);
    return [];
  }
}
