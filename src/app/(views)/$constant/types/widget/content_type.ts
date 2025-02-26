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

export type T_Content_Type = {
  nid: Array<{ value: string }>;
  uuid: Array<{ value: string }>;
  vid: Array<{ value: string }>;
  langcode: Array<{ value: string }>;
  type: Array<{ type: string }>;
  uid: any[];
  title: Array<{ value: string }>;
  created: Array<{ value: string }>;
  path: Array<{ alias: string }>;
  field_plain_description: Array<{ value: string }>;
  field_image: Array<T_FieldImage>;
  body: Array<{ value: string }>;
  field_components?: any[];
  field_document?: any[];
};

export type T_News = {
  entity_type: any[];
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  parent_id: Array<{ value: string }>;
  parent_type: Array<{ value: string }>;
  parent_field_name: Array<{ value: string }>;
  content_translation_source: Array<{ value: string }>;
  content_translation_outdated: Array<{ value: boolean }>;
  content_translation_changed: Array<{ value: string; format: string }>;
  field_content_type: Array<T_Content_Type>;
};
