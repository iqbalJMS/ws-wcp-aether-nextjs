import React from "react";
import CE_SectionPromo from "@/app/aether/$element/promo/CE_SectionPromo";
import { CE_BannerMain } from "@/app/$element/client.banner.main";
import CE_HelpContent from "@/app/$element/client.help.content";
import { SE_IconMain } from "@/app/$element/server.icon.main";
import SE_WhyUsContent from "@/app/$element/server.why-us.content";
import SE_SubscriberContent from "@/app/$element/server.subscriber.content";

type T_ComponentPropsFunc<T> = (_component: T) => Record<string, any>;

type T_ComponentMapWidget<T = any> = {
  component: React.ComponentType<T>;
  props: T_ComponentPropsFunc<T>;
};

export type T_FieldComponent = {
  entity_bundle: Array<{ value: string }>;
};

export type T_Widget =
  | "header"
  | "banner"
  | "help_content"
  | "icon_main"
  | "se_subscriber_content"
  | "why_use_content";

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  header: {
    component: CE_SectionPromo,
    props: (_component) => {
      return {};
    },
  },
  banner: {
    component: CE_BannerMain,
    props: (_component) => {
      return {};
    },
  },
  help_content: {
    component: CE_HelpContent,
    props: (_component) => {
      return {
        list_items: [
          {
            title: "Membuka Tabungan",
            value: "https://bri.co.id/web/tabungan#",
          },
          {
            title: "Membuka Deposito",
            value: "https://bri.co.id/web/deposito#",
          },
        ],
      };
    },
  },
  icon_main: {
    component: SE_IconMain,
    props: (_component) => {
      return {
        cookiesName: "home",
      };
    },
  },
  why_use_content: {
    component: SE_WhyUsContent,
    props: (_component) => {
      return {
        title: "Mengapa memilih BRI",
        subtitle:
          "Melayani lebih dari 128 tahun, Bank BRI senantiasa memberikan kemudahan dan kecepatan dalam merespon berbagai kebutuhan nasabah dengan didukung oleh layanan perbankan yang prima.",
        list_items: [
          {
            image: "/images/why-us/kredit.png",
            title: "Cepat",
            description:
              "Melayani lebih cepat dan efisien dalam proses transaksi, khususnya untuk nasabah yang ingin melakukan transaksi.",
          },
          {
            image: "/images/why-us/kredit.png",
            title: "Cepat",
            description:
              "Melayani lebih cepat dan efisien dalam proses transaksi, khususnya untuk nasabah yang ingin melakukan transaksi.",
          },
          {
            image: "/images/why-us/kredit.png",
            title: "Cepat",
            description:
              "Melayani lebih cepat dan efisien dalam proses transaksi, khususnya untuk nasabah yang ingin melakukan transaksi.",
          },
          {
            image: "/images/why-us/kredit.png",
            title: "Cepat",
            description:
              "Melayani lebih cepat dan efisien dalam proses transaksi, khususnya untuk nasabah yang ingin melakukan transaksi.",
          },
          {
            image: "/images/why-us/kredit.png",
            title: "Cepat",
            description:
              "Melayani lebih cepat dan efisien dalam proses transaksi, khususnya untuk nasabah yang ingin melakukan transaksi.",
          },
        ],
        bg_image: "/images/why-us/bg-image.jpg",
      };
    },
  },
  se_subscriber_content: {
    component: SE_SubscriberContent,
    props: (_component) => {
      return {
        bg_image: "images/subscriber/subscribe-backg.png",
      };
    },
  },
};
