type FieldTitle = { value: string };
type FieldContent = { value: string };

type FieldPrimaryCTA = {
  uri: string;
  full_url: string;
  title: string;
};

type FieldImage = {
  field_media_image: {
    uri: { url: string }[];
  }[];
};

export type T_Header = {
  field_title: FieldTitle[];
  field_header_style: Array<{ value: string }>;
  field_content: FieldContent[];
  field_web_variant_styles: Array<{ field_key: Array<{ value: string }> }>;
  field_primary_cta: FieldPrimaryCTA[];
  field_image: FieldImage[];
};
