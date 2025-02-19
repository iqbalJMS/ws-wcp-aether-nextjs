type T_ComponentPropsFunc<T> = (_component: T) => Record<string, any>;

export type T_ComponentMapWidget<T = any> = {
  component: React.ComponentType<T>;
  props: T_ComponentPropsFunc<T>;
};

export type T_Widget =
  | 'slider'
  | 'dropdown_action'
  | 'personalized_shortcut'
  | 'image_slider'
  | 'subscription'
  | 'header'
  | 'multi_tab'
  | 'contact_info'
  | 'section'
  | 'kurs'
  | 'staircase_cards'
  | 'breadcrumb'
  | 'image'
  | 'kurs'
  | 'two_column'
  | 'rich_text'
  | 'bbri_stock_market'
  | 'promo_widget';

export type T_IconList = {
  image: string;
  title: string;
  link: string;
  externalLink: boolean;
  active: boolean;
  isFixed: string
};

export type T_CarouselMainProps = {
  title?: string;
  description?: string;
  button?: {
    name: string;
    link: string;
  };
  data: Array<{
    nid?: number;
    image?: string;
    title?: string;
    desc?: string;
    subDesc?: string;
    date?: string;
    button?: {
      name?: string;
      link?: string;
    };
  }>;
  variant: '01' | '02' | '03' | '04' | '05' | '06' | '07';
};

export type T_ContentMainProps = {
  title?: string;
  data?: Array<{
    image?: string;
    title?: string;
    desc?: string;
    button?: {
      name?: string;
      link?: string;
    };
  }>;
  variant: '01' | '02' | '03' | '04' | '05';
};
