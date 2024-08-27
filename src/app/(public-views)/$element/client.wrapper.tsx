"use client";

import GlobalFooter from "@/lib/element/global/global.footer";
import GlobalHeader from "@/lib/element/global/global.header";
// import { useDictionary } from "@/get-dictionary";
// import { Locale } from "@/i18n-config";
// import GlobalFooter from "@/lib/global/components/global.footer";
// import GlobalHeader from "@/lib/global/components/global.header";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function CE_Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const params = useSearchParams();
  // const locales = params.get("lang") as Locale;
  // const dictionary = useDictionary(locales ?? "id");

  return (
    <>
      {/* <GlobalHeader
        params={{ lang: locales ?? "id" }}
        dictionary={dictionary?.navbar}
      /> */}
      <GlobalHeader /> 
      {children}
      <GlobalFooter/>
    </>
  );
}
