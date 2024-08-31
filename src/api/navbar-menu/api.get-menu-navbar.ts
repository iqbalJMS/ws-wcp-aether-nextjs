"use server";

import { get } from "../common/fetch";
import { T_ResponseGetNavbarMenu } from "./api.get-menu-navbar.type";

export async function API_GetNavbarMenu({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetNavbarMenu> {
  try {
    const response: T_ResponseGetNavbarMenu = await get(
      "/menu-items/top-navigation?_format=json"
    );

    return response;
  } catch (error) {
    console.error("An error occurred during Get Navbar Menu:", error);
    return [];
  }
}
