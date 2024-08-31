"use server";

import { get } from "../common/fetch";
import { T_ResponseGetNavbarMenu } from "./api.get-menu-navbar.type";

export async function API_GetNavbarMenu({}: // TODO: parsing lang as params API
// lang,
{
  lang: string;
}): Promise<T_ResponseGetNavbarMenu> {
  try {
    const response: T_ResponseGetNavbarMenu = await get(
      "/menu-items/social-media?_format=json"
    );
    console.log("this is a response, ", response);
    return response;
  } catch (error) {
    console.error("An error occurred during Get Navbar Menu:", error);
    return { data: [] };
  }
}
