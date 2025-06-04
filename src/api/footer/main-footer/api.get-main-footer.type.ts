export type T_ResponseGetMainFooterMenu = {
  data: Array<{
    title?: string;
    list: Array<{
      name: string;
      className?: string;
      icon?: string;
      extern?: boolean;
      url?: string;
    }>;
    social_media?: Array<{
      name: string;
      icon: string;
      url: string;
    }>;
  }>;
};

export type T_ResponseAPIItemMainFooterMenu = Array<{
  title: string;
  relative: string;
  options?: {
    external: boolean;
  };
}>;

export type T_ResponseAPIItemSocialMediaMenu = Array<{
  icon: string;
  relative: string;
  title: string;
}>;

export type T_ResponseAPIItemContactUsMenu = Array<{
  key: string;
  title: string;
  uri: string;
  alias: string | null;
  relative: string;
  weight: string;
  expanded: boolean;
  enabled: boolean;
  uuid: string | null;
  options: {
    external: boolean;
  };
  field_image: any;
  icon: string;
}>;

export type T_ResponseAPIConfigFooter = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  label: Array<{ value: string }>;
  type: Array<{
    uuid: string;
    langcode: string;
    status: boolean;
    dependencies: any[];
    id: string;
    label: string;
    context: any;
    menu: any;
    token: boolean;
  }>;
  context: Array<{ value: string }>;
  changed: Array<{ value: string; format: string }>;
  field_address: Array<{
    value: string;
    format: string;
    processed: string;
    summary: string;
  }>;
  field_notes: Array<{
    value: string;
    format: string;
    processed: string;
    summary: string;
  }>;
  field_main_navigation?: Array<{
    uuid: string;
    langcode: string;
    status: boolean;
    dependencies: any[];
    id: string;
    label: string;
    description: string;
    locked: boolean;
  }>;
  field_top_navigation?: Array<{
    uuid: string;
    langcode: string;
    status: boolean;
    dependencies: any[];
    id: string;
    label: string;
    description: string;
    locked: boolean;
  }>;
};
