import { T_Content_Type } from './content_type';

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
  full_url: string;
  options?: {
    external: boolean;
  };
};

type FieldImageItem = {
  field_media_image: Array<{ uri: Array<{ url: string }> }>;
};

type FieldSecondImage = {
  field_media_image: Array<{ uri: Array<{ url: string }> }>;
};

export type T_Section = {
  field_title_custom: any;
  field_web_variant_styles: Array<{ field_key: Array<{ value: string }> }>;
  field_content?: HtmlContent[];
  column_count?: number;
  field_formatted_title?: HtmlContent[];
  field_image?: FieldImage[];
  field_margin_left?: { value: string }[];
  field_note?: any[];
  field_primary_cta?: FieldPrimaryCTA[];
  field_column?: Array<{
    field_alignment_style?: Array<{ value: 'left' | 'center' | 'right' }>;
    entity_bundle: Array<{ value: string }>;
    field_form: Array<{ target_id: string }>;
    field_content_list: Array<{
      title: Array<{ value: string }>;
      body: Array<{ value: string }>;
      field_pictures: Array<{
        field_media_image: Array<{ uri: Array<{ url: string }> }>;
      }>;
      field_position: Array<{ value: string }>;
    }>;
    field_document: any;
    field_media_image: any;
    field_subtitle: any;
    field_accordion_items: Array<{
      field_title?: any;
      field_content: Array<{ value: string }>;
      field_paragraphs?: Array<{
        field_content: Array<{
          value: string;
        }>;
      }>;
    }>;
    field_second_image: Array<FieldSecondImage>;
    field_image?: Array<FieldImageItem>;
    field_primary_cta?: FieldPrimaryCTA[];
    field_content?: HtmlContent[];
    field_alignment?: Array<{ value: string }>;
    field_title_custom?: Array<{ value: string }>;
    field_carousel_items?: Array<any>;
    field_content_type: Array<T_Content_Type>;
    field_title?: any;
    field_image_slider_items?: Array<{
      field_image?: Array<FieldImageItem>;
      field_primary_cta?: Array<{ uri: string }>;
    }>;
  }>;
};
