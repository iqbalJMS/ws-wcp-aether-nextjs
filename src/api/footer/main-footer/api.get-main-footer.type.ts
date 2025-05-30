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
