"use server";
import { get } from "@/api/common/fetch";
import { T_ResponseAPIItemMainFooterMenu, T_ResponseGetMainFooterMenu } from "./api.get-main-footer.type";

const ABSTRACTION_RESPONSE_DATA = {
  data: [
    {
      title: "Head Office BRI",
      list: [
        {
          name: "PT. Bank Rakyat Indonesia (Persero) Tbk",
          className:
            "lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black",
        },
        {
          name: "Gedung BRI Jl. Jenderal Sudirman Kav.44-46. Jakarta 10210 Indonesia",
          className:
            "lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black",
        },
      ],
    },
    {
      title: "Hubungi Kami",
      list: [
        {
          name: "1500017",
          icon: "call",
          extern: true,
          url: "tel:1500017",
          className: "text-blue-01 ",
        },
        {
          name: "callbri@bri.co.id",
          icon: "email",
          extern: true,
          url: "mailto:callbri@bri.co.id",
          className: "text-blue-01 ",
        },
      ],
      social_media: [
        {
          name: "",
          icon: "facebook",
          url: "https://www.facebook.com/BRIofficialpage",
          className: "text-blue-01 ",
        },
        {
          name: "",
          icon: "instagram",
          url: "https://www.instagram.com/bankbri_id",
          className: "text-blue-01 ",
        },
        {
          name: "",
          icon: "twitter",
          url: "https://x.com/kontakbri",
          className: "text-blue-01 ",
        },
        {
          name: "",
          icon: "youTube",
          url: "https://www.youtube.com/channel/UCRHFE_ooDrkEiRRJbog3EjA",
          className: "text-blue-01 ",
        },
      ],
    },
    {
      title: "Tautan",
      list: []
    },
    {
      list: [
        {
          className: "lg:px-0 px-16 cursor-default text-blue-01",
          name: "BRI terdaftar dan diawasi oleh Otoritas Jasa Keuangan",
        },
        {
          className: "cursor-default text-blue-01",
          name: "BRI merupakan peserta penjamin LPS",
        },
      ],
    },
  ],
};
export async function API_GetMainFooterMenu({
  // TODO: used as a param - integration API
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainFooterMenu> {
  try {
    const response: T_ResponseAPIItemMainFooterMenu = await get(
      '/bricc-api/menu-items/footer?_format=json_recursive',
    );

    ABSTRACTION_RESPONSE_DATA.data[2].list = response?.map((res) => ({
      name: res.title,
      url: res.relative,
      extern: res.options?.external || false,
      className: 'text-blue-01'
    })) || [];

    return ABSTRACTION_RESPONSE_DATA
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("An error occurred during Get Main Footer Menu:", error);
    return { data: [] };
  }
}
