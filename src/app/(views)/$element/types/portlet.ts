export type T_PortletProps = {
  bgImage: string;
  title?: string;
  subtitle?: string;
  imageAtTitle?: string;
  imageAtContent?: string;
  textLink?: string;
  navigationLink?: string;
  buttonItems?: Array<{
    buttonText?: string;
    buttonLink?: string;
  }>;
  marginLeft?: 'medium' | string;
  headerAlignment?: 'left' | 'center' | 'right';
  imageContentAlignment?: 'left' | 'center' | 'right';
  variantWidget?: string;
  variant?: '01' | '02' | '03';
  variantLayout?: 'rounded_corneer' | 'square' | 'full' | 'large';
  listItems?: Array<{
    image?: string;
    text: string;
  }>;
};

export type T_PortletItemProps = {
  list_item: {
    image?: string;
    text: string;
  };
};
