type HtmlContent = {
  value: string;
  format: string;
  processed: string;
};

type FieldImage = {
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
  path: any[];
  field_media_image: FieldImageItem['field_media_image'];
};

type FieldPrimaryCTA = {
  uri: string;
  title: string;
  options: any[];
};

type FieldImageItem = {
  field_media_image: Array<{ uri: Array<{ url: string }> }>;
};

export type T_Section = {
  field_web_variant_styles: Array<{ field_key: Array<{ value: string }> }>;
  field_content?: HtmlContent[];
  column_count?: number;
  field_formatted_title?: HtmlContent[];
  field_image?: FieldImage[];
  field_margin_left?: { value: string }[];
  field_note?: any[];
  field_primary_cta?: FieldPrimaryCTA[];
  field_column?: Array<{
    field_image?: Array<FieldImageItem>;
    field_primary_cta?: FieldPrimaryCTA[];
    field_content?: any;
    field_alignment?: Array<{ value: string }>;
    field_title?: any;
    field_image_slider_items?: Array<{
      field_image?: Array<FieldImageItem>;
      field_primary_cta?: Array<{ uri: string }>;
    }>;
  }>;
};
