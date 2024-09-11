import GlobalFooter from "@/lib/element/global/global.footer";
import { ACT_GetTopMenuNavbar } from "./$action/action.get.top-menu-navbar";
import React from "react";

import { ACT_GetMainMenuNavbar } from "./$action/action.get.main-menu-navbar";
import GlobalHeader from "@/lib/element/global/global.header";

export default async function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: "en" });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: "en" });

  return (
    <React.Fragment>
      <GlobalHeader headerBottom={listHeaderBottom} headerTop={listHeaderTop} />
      {children}
      <GlobalFooter />
    </React.Fragment>
  );
}
