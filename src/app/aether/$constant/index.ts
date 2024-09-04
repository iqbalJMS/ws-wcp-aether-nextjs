type T_ComponentPropsFunc<T> = (_component: T) => Record<string, any>;

type T_ComponentMapWidget<T = any> = {
  component: React.ComponentType<T>;
  props: T_ComponentPropsFunc<T>;
};

export type T_FieldComponent = {
  entity_bundle: Array<{ value: string }>;
};

export type T_Widget = "header" | "card_slider";

export const COMPONENT_MAP_WIDGET: Record<T_Widget, T_ComponentMapWidget> = {
  header: {
    component: null as unknown as React.ComponentType<{}>,
    props: (_component) => {
      return {
        // TODO: return all props needed
      };
    },
  },
  card_slider: {
    component: null as unknown as React.ComponentType<{}>,
    props: (_component) => {
      return {
        // TODO: return all props needed
      };
    },
  },
  // Add other components here
};
