"use server";
/*eslint no-restricted-imports: ["error", "fs"]*/
import React from "react";
import { CE_BannerMain } from "../$element/client.banner.main";
import { SE_IconMain } from "../$element/server.icon.main";
import CE_HelpContent from "../$element/client.help.content";
import SE_WhyUsContent from "../$element/server.why-us.content";
import SE_SubscriberContent from "../$element/server.subscriber.content";
// TODO: Waiting for widget content from drupal
// import { COMPONENT_MAP_WIDGET, T_FieldComponent, T_Widget } from "./$constant";

export default async function PageAether() {
  // const data = {
  // TODO: temporary abstraction
  // waiting for endpoint node
  //   field_components: [
  //     {
  //       entity_bundle: [
  //         {
  //           value: "header",
  //         },
  //       ],
  //     },
  //     {
  //       entity_bundle: [
  //         {
  //           value: "card_slider",
  //         },
  //       ],
  //     },
  //   ],
  // };

  // const components = data?.field_components
  //   .map((component: T_FieldComponent) => {
  //     const entityBundle = component?.entity_bundle?.[0]?.value as T_Widget;
  //     const componentConfig = COMPONENT_MAP_WIDGET[entityBundle];

  //     if (componentConfig) {
  //       const { component: Component, props } = componentConfig;
  //       return {
  //         Component,
  //         props: props(component),
  //       };
  //     }

  //     return null;
  //   })
  //   .filter(Boolean) as Array<{
  //   Component: React.ComponentType<any>;
  //   props: Record<string, any>;
  // }>;

  return (
    <React.Fragment>
      {/* {components?.map(({ Component, props }, key) => (
        <React.Fragment key={key}>
          <Component {...props} />
        </React.Fragment>
      ))} */}
      <CE_BannerMain />
      <CE_HelpContent
        list_items={[
          {
            title: "Membuka Tabungan",
            value: "https://bri.co.id/web/tabungan#",
          },
          {
            title: "Membuka Deposito",
            value: "https://bri.co.id/web/deposito#",
          },
        ]}
      />
      <SE_IconMain cookiesName="home" />
      <SE_WhyUsContent
        title={"Mengapa memilih BRI"}
        subtitle={
          "Melayani lebih dari 128 tahun, Bank BRI senantiasa memberikan kemudahan dan kecepatan dalam merespon berbagai kebutuhan nasabah dengan didukung oleh layanan perbankan yang prima."
        }
        textLink={"CARI TAHU LEBIH LANJUT TENTANG BRI"}
        list_items={[
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
        ]}
        bg_image={"/images/why-us/bg-image.jpg"}
      />
      <SE_SubscriberContent bg_image="images/subscriber/subscribe-backg.png" />
    </React.Fragment>
  );
}
