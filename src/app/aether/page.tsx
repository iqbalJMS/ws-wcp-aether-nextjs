import React from "react";
import { COMPONENT_MAP_WIDGET, T_FieldComponent, T_Widget } from "./$constant";

export default async function PageAether() {
  const data = await {
    // TODO: temporary abstraction
    // waiting for endpoint node
    field_components: [
      {
        entity_bundle: [
          {
            value: "header",
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
    <>
      {components?.map(({ Component, props }, key) => (
        <React.Fragment key={key}>
          <Component {...props} />
        </React.Fragment>
      ))}
    </>
  );
}
