export type T_ContentTypeRequest = {
  limit: string;
  page: string;
  search?: string;
};

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

export type T_Response_Content_Type = {
  nid: Array<{ value: number }>;
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
  field_components?: any[];
};