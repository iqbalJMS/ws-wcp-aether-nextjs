"use server";

import React from "react";
import { COMPONENT_MAP_WIDGET, T_FieldComponent, T_Widget } from "./$constant";

export default async function PageAether() {
  const data = {
    field_components: [
      {
        entity_bundle: [
          {
            value: "banner",
          },
        ],
      },
      {
        entity_bundle: [
          {
            value: "help_content",
          },
        ],
      },
      {
        entity_bundle: [
          {
            value: "icon_main",
          },
        ],
      },
      {
        entity_bundle: [
          {
            value: "header",
          },
        ],
      },
      {
        entity_bundle: [
          {
            value: "se_subscriber_content",
          },
        ],
      },
      {
        entity_bundle: [
          {
            value: "why_use_content",
          },
        ],
      },
    ],
  };

  const components = data?.field_components
    .map((component: T_FieldComponent) => {
      const entityBundle = component?.entity_bundle?.[0]?.value as T_Widget;
      const componentConfig = COMPONENT_MAP_WIDGET[entityBundle];

      if (componentConfig) {
        const { component: Component, props } = componentConfig;
        return {
          Component,
          props: props(component),
        };
      }

      return null;
    })
    .filter(Boolean) as Array<{
    Component: React.ComponentType<any>;
    props: Record<string, any>;
  }>;

  return (
    <React.Fragment>
      {components?.map(({ Component, props }, key) => (
        <React.Fragment key={key}>
          <Component {...props} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
