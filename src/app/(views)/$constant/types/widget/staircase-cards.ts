export type T_FieldItem = {
  field_title: { value: string }[];
  field_content: { value: string }[];
  field_image: { field_media_image: { uri: { url: string }[] }[] }[];
  field_primary_cta: { title: string; full_url: string }[];
};

export type T_StaircaseCards = {
  field_cards: Array<T_FieldItem>;
};
