import React from "react";
import { CE_BannerMain } from "@/app/$element/client.banner.main";
import { SE_IconMain } from "@/app/$element/server.icon.main";
import SE_WhyUsContent from "@/app/$element/server.why-us.content";
import SE_SubscriberContent from "@/app/$element/server.subscriber.content";
import CE_HelpContent from "@/app/$element/client.help.content";
import { T_Slider } from "./types/widget/slider";
import { T_ComponentMapWidget, T_Widget } from "./types";
import { T_DropdownAction } from "./types/widget/dropdown-action";
import { T_Section } from "./types/widget/section";
import { T_Subscription } from "./types/widget/subscription";
import { CE_ImageSliderMain } from "@/app/$element/client.image-slider.main";
import { T_ImageSlider } from "./types/widget/image-slider";

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  slider: {
    component: CE_BannerMain,
    props: (_component: T_Slider) => {
      return {
        data: _component?.field_slider_items?.map((item) => {
          return {
            image: item?.field_image?.[0]?.field_media_image?.[0]?.uri[0]?.url,
            title: item?.field_title?.[0]?.value,
            desc: item?.field_content?.[0]?.value,
            button: item?.field_primary_cta[0]?.title,
          };
        }),
      };
    },
  },
  dropdown_action: {
    component: CE_HelpContent,
    props: (_component: T_DropdownAction) => {
      return {
        title: _component?.field_title[0]?.value,
        list_items: _component?.field_menu_list[0]?.field_links.map((item) => {
          return {
            title: item?.title,
            value: item?.uri,
          };
        }),
      };
    },
  },
  personalized_shortcut: {
    component: SE_IconMain,
    props: (_component) => {
      return {};
    },
  },
  section: {
    component: SE_WhyUsContent,
    props: (_component: T_Section) => {
      return {
        title: _component?.field_formatted_title[0]?.value,
        subtitle: _component?.field_content[0]?.value,
        listItems: _component?.field_column?.map((item) => {
          return {
            image: item?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
            text: item?.field_content[0]?.value,
          };
        }),
        textLink: _component?.field_primary_cta[0]?.title,
        navigationLink: _component?.field_primary_cta[0]?.uri,
        bgImage: _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
      };
    },
  },
  subscription: {
    component: SE_SubscriberContent,
    props: (_component: T_Subscription) => {
      return {
        bgImage: _component?.field_image[0]?.field_media_image[0]?.uri[0]?.url,
        description: _component?.field_content[0]?.value,
      };
    },
  },
  image_slider: {
    component: CE_ImageSliderMain,
    props: (_component: T_ImageSlider) => {
      return {
        title: _component?.field_title[0]?.value,
        data: _component.field_image_slider_items?.map((item) => {
          return {
            link: item?.field_primary_cta[0]?.uri,
            image: item?.field_image[0].field_media_image[0]?.uri[0]?.url,
          };
        }),
      };
    },
  },
  header: {
    component: () => <></>,
    props: (_component) => {
      return {};
    },
  },
};
