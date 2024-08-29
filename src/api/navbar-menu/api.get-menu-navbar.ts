"use server";

import { T_ResponseGetNavbarMenu } from "./api.get-menu-navbar.type";

// TODO: kindly remove when API is ready
const ABSTRACTION_RESPONSE_DATA = {
  data: [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Kontak",
      link: "/contact",
    },
  ],
};

export async function API_GetNavbarMenu({
  // TODO: used as a param - integration API
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetNavbarMenu> {
  try {
    const response: T_ResponseGetNavbarMenu = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: ABSTRACTION_RESPONSE_DATA.data,
        });
      }, 500);
    });

    return response;
  } catch (error) {
    console.error("An error occurred during Get Navbar Menu:", error);
    return { data: [] };
  }
}
