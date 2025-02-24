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
  thumbnail: any[];
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: Array<{ alias: any }>;
  field_media_image: any[];
};

type T_Content_Type_Multitab = Array<{
  nid: Array<{ value: string }>;
  uuid: Array<{ value: string }>;
  vid: Array<{ value: string }>;
  langcode: Array<{ value: string }>;
  type: Array<{ type: string }>;
  uid: any[];
  title: Array<{ value: string }>;
  created: Array<{ value: string }>;
  path: Array<{ alias: string }>;
  field_plain_description?: Array<{ value: string }>;
  field_image?: Array<T_FieldImage>;
  body?: Array<{ value: string }>;
  field_promo_image?: Array<T_FieldImage>;
  field_promo_start_date?: Array<{ value: string }>;
  field_promo_end_date?: Array<{ value: string }>;
}>;

type T_FieldParagraph = Array<{
  field_accordion_items: any;
  field_formatted_title: any;
  column_count: number;
  field_image: any;
  field_title: any;
  field_primary_cta: any;
  field_second_column: any;
  field_first_column: any;
  field_content: Array<{ value: string }>;
  field_note: Array<{ value: string }>;
  field_carousel_items: Array<{
    field_image: Array<{
      field_media_image: Array<{ uri: Array<{ url: string }> }>;
    }>;
    field_title: Array<{ value: string }>;
    field_datetime: Array<{ value: string; end_value: string }>;
    field_content: Array<{ value: string }>;
    field_simple_text: Array<{ value: string }>;
    field_primary_cta: Array<{ full_url: string }>;
    field_content_type: T_Content_Type_Multitab;
  }>;
  field_column: Array<any>;
  field_title_custom?: Array<{ value: string }>;
}>;

export type T_MultiTab = {
  field_web_variant_styles: Array<{ field_key: Array<{ value: string }> }>;
  field_title_custom: Array<{ value: string }>;
  field_tab: Array<{
    field_image?: Array<T_FieldImage>;
    value: string;
    field_title: Array<{ value: string }>;
    field_paragraphs: T_FieldParagraph;
    field_primary_cta: Array<{ title: string; full_url: string }>;
    field_default_selected?: Array<{ value: boolean }>;
  }>;
};
