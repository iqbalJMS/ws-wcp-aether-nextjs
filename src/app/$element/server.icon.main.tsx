"use server";

import { CE_IconMain } from "./client.icon.main";
import { T_IconList } from "@/app/$action/constants";
// import { SFN_CookieIcon } from "@/app/$function/sfn.cookie.icon";

type T_IconMainProps = {
  maxListShow?: number;
  cookiesName: string;
};

export async function SE_IconMain({
  maxListShow = 1,
}: // cookiesName,
T_IconMainProps) {
  const icons: T_IconList[] = [
    {
      image: "icon-menu.png",
      title: "Title Dummy 01",
      link: "https://bri.co.id",
    },
    {
      image: "icon-menu-02.png",
      title: "Title Dummy 02",
      link: "https://bri.co.id",
    },
  ];

  // const check = await SFN_CookieIcon(cookiesName, icons)
  // check.set()
  return (
    <>
      <CE_IconMain list={icons} maxListShow={maxListShow} />
    </>
  );
}
