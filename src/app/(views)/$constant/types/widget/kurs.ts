type T_Data = {
  buyRateCounter: number;
  buyRateERate: number;
  currency: string;
  isShow: boolean;
  sellRateCounter: number;
  sellRateERate: number;
  image: string;
};

type T_EntityData = {
  entity_type: { value: string }[];
  entity_bundle: { value: string }[];
  id: { value: number }[];
  uuid: { value: string }[];
  revision_id: { value: number }[];
  langcode: { value: string }[];
  type: {
    target_id: string;
    target_type: string;
    target_uuid: string;
  }[];
  note: { timeUpdated: string; value: string };
  status: { value: true }[];
  created: { value: string; format: string }[];
  parent_id: { value: string }[];
  parent_type: { value: string }[];
  parent_field_name: { value: string }[];
  behavior_settings: { value: any[] }[];
  default_langcode: { value: true }[];
  revision_translation_affected: any[];
  content_translation_source: { value: 'und' }[];
  content_translation_outdated: { value: false }[];
  content_translation_changed: { value: string; format: string }[];
  field_currency: Array<{ value: string }>;
  data: Array<T_Data>;
  available_currency: string[];
};

export type T_Kurs = T_EntityData;
