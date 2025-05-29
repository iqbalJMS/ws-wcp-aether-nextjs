type T_FieldMediaImage = {
  entity_type: any[];
  entity_bundle: any[];
  fid: any[];
  uuid: any[];
  langcode: any[];
  uid: any[];
  filename: any[];
  uri: Array<{ value: string; url: string }>;
  filemime: any[];
  filesize: any[];
  status: any[];
  created: any[];
  changed: any[];
};

type T_FieldImage = {
  entity_type: any[];
  entity_bundle: any[];
  mid: any[];
  uuid: any[];
  vid: any[];
  langcode: any[];
  bundle: any[];
  revision_created: any[];
  revision_user: any[];
  status: any[];
  uid: any[];
  name: any[];
  thumbnail: Array<T_FieldMediaImage>;
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: Array<{ alias: any }>;
  field_media_image: any[];
};

type T_FieldIcon = {
  entity_type: any[];
  entity_bundle: any[];
  mid: any[];
  uuid: any[];
  vid: any[];
  langcode: any[];
  bundle: any[];
  revision_created: any[];
  revision_user: any[];
  status: any[];
  uid: any[];
  name: any[];
  thumbnail: Array<T_FieldMediaImage>;
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: Array<{ alias: any }>;
  field_media_image: any[];
};

export type T_SidebarProductPromo = {
  name: Array<{ value: string }>;
  tid: Array<{ value: number }>;
  field_product_child: Array<T_SidebarProductPromo>;
};

export type T_PromoWidget = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  field_primary_cta: Array<{
    uri: string;
    full_url: string;
    title: string;
  }>;
  field_subtitle: Array<{ value: string }>;
  field_title: Array<{ value: string }>;
  field_web_variant_styles: Array<{ field_key: Array<{ value: string }> }>;
  promo_data: {
    items: Array<{
      title: Array<{ value: string }>;
      nid: Array<{ value: number }>;
      field_promo_image: Array<T_FieldImage>;
      field_promo_start_date: Array<{ value: string }>;
      field_promo_end_date: Array<{ value: string }>;
      field_promo_category: Array<{ title: Array<{ value: string }> }>;
    }>;
    popular_category: Array<{
      title: Array<{ value: string }>;
      nid: Array<{ value: number }>;
      field_icon: Array<T_FieldIcon>;
    }>;
    pager: {
      total: number;
      limit: number;
      page: number;
      total_page: number;
    };
    sidebar: {
      category: Array<{
        title: Array<{ value: string }>;
        nid: Array<{ value: number }>;
        count: number;
      }>;
      product: Array<T_SidebarProductPromo>;
      location: Array<{
        title: Array<{ value: string }>;
        nid: Array<{ value: number }>;
      }>;
    };
  };
};
