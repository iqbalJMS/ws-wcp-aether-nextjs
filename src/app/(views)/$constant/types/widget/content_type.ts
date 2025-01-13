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
