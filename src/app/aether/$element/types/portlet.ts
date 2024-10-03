export type T_PortletProps = {
  title?: string;
  subtitle?: string;
  imageAtTitle?: string
  imageAtContent?: string;
  textLink?: string;
  navigationLink?: string;
  buttonItems?: Array<{
    buttonText?: string;
    buttonLink?: string;
  }>;
  bgImage?: string;
  headerAlignment?: 'left' | 'center' | 'right';
  imageContentAlignment?: 'left' | 'center' | 'right';
  variant: '01' | '02' | '03';
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