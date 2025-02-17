type ListItem = {
  image?: string;
  text?: string;
  title?: string;
  description?: string;
};

type ButtonItem = {
  buttonText?: string;
  buttonLink?: string;
};

export type T_PortletProps = {
  bgExtern?: boolean;
  bgImage: string;
  title?: string;
  subtitle?: string;
  imageAtTitle?: string;
  imageAtContent?: string;
  column?: string;
  textLink?: string;
  navigationLink?: string;
  buttonItems?: Array<ButtonItem>;
  marginLeft?: 'medium' | string;
  headerAlignment?: 'left' | 'center' | 'right';
  imageContentAlignment?: 'left' | 'center' | 'right';
  variantWidget?: string;
  variant?: '01' | '02' | '03';
  variantLayout?: 'rounded_corneer' | 'square' | 'full' | 'large';
  listItems?: Array<ListItem> | string;
};

export type T_PortletItemProps = {
  list_item: ListItem;
};
