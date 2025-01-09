"use server";

import { API_GetMainMenuNavbar } from "@/api/navbar-menu/main-navbar/api.get-main-menu-navbar";
import { T_ResponseGetMainMenuNavbar } from "@/api/navbar-menu/main-navbar/api.get-main-menu-navbar.type";

export async function ACT_GetMainMenuNavbar({
  lang,
  theme
}: {
  lang: string;
  theme?: string;
}): Promise<T_ResponseGetMainMenuNavbar> {
  const response = await API_GetMainMenuNavbar({ lang, theme });
  return response;
}
