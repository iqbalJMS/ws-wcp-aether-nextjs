"use server";

import { API_GetNavbarMenu } from "@/api/navbar-menu/api.get-menu-navbar";
import { T_ResponseGetNavbarMenu } from "@/api/navbar-menu/api.get-menu-navbar.type";

export async function ACT_GetNavbarMenu({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetNavbarMenu> {
  const response = await API_GetNavbarMenu({ lang });
  return response;
}
