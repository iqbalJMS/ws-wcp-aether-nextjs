import { ImageProps, StaticImageData } from 'next/image';
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  MutableRefObject,
  ReactNode,
  RefObject,
} from 'react';

export type T_CardProps = {
  idx?: number;
  className?: string;
  // fixme later
  // @ts-ignore
  content: any;
};

export type T_ImperativeProps = {
  snapTo: (_idx: number | null | '+1' | '-1') => void;
};

export type T_ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type T_ButtonsProps = {
  attributeTargetId: string;
  attributeName: { range: string };
  tabViewController: RefObject<T_ImperativeProps>;
  className?: string;
};

export type T_ButtonsIdxProps = {
  attributeTargetId: string;
  attributeName: { activeRange: string; rangeLength: string };
  tabViewController: RefObject<T_ImperativeProps>;
  className?: string;
};

export type T_ButtonTabProps = {
  isActive?: boolean;
  children: ReactNode;
  activeRef: MutableRefObject<HTMLButtonElement | null>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type T_TabProps = {
  contents: Array<number>;
  options: Array<{
    title: string;
    informationText: string;
    showMore: {
      title: string;
      url: string;
    };
  }>;
  className?: string;
  tabViewController: RefObject<T_ImperativeProps>;
  attributeTargetId: string;
  attributeName: { active: string };
};

export type T_TabViewProps = {
  contents: Array<
    Array<{
      id: string;
      type: string;
      img: string;
      title: string;
      date: string;
      downloadFile?: string;
      description?: string;
      startDate?: string;
      endDate?: string;
    }>
  >;
  className?: string;
  attributeTargetId: string;
  attributeName: {
    active: string;
    range: string;
    activeRange: string;
    rangeLength: string;
  };
};

export type T_ImageProps = {
  wrapper?: HTMLAttributes<HTMLDivElement>;
  src?: string | StaticImageData;
  alt?: string;
} & Omit<ImageProps, 'src' | 'alt'>;

type T_SidebarPromoProps = {
  label: string;
  value: number;
  count?: number;
  below?: Array<T_SidebarPromoProps>;
};

export type T_PromoProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  categoryData?: Array<{
    image: string;
    text: string;
    nid: number;
  }>;
  promoData?: Array<{
    title: string;
    nid: number;
    image: string;
    startDate: string;
    endDate: string;
  }>;
  paginationData?: {
    total: number;
    limit: number;
    page: number;
    total_page: number;
  };
  sidebarData?: {
    categoryData?: Array<T_SidebarPromoProps>;
    productData?: Array<T_SidebarPromoProps>;
    locationData?: Array<T_SidebarPromoProps>;
  };
};
