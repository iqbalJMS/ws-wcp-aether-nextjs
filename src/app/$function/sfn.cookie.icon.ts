"use server";

import { cookies } from "next/headers";
import { T_IconList } from "@/app/$action/constants";

export async function SFN_CookieIcon(name: string, list: T_IconList[]) {
  const set = () => {
    cookies().set(name, JSON.stringify(list));
  };
  const get = () => {
    const cookie = cookies().get(name);
    return cookie;
  };
  return {
    set,
    get,
  };
}
