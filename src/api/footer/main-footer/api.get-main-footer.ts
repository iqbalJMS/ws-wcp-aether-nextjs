'use server';
import { get } from '@/api/common/fetch';
import {
  T_ResponseAPIItemMainFooterMenu,
  T_ResponseAPIItemSocialMediaMenu,
  T_ResponseGetMainFooterMenu,
} from './api.get-main-footer.type';

// Static/dummy data sections
const STATIC_FOOTER_DATA = {
  headOffice: {
    title: 'Head Office BRI',
    list: [
      {
        name: 'PT. Bank Rakyat Indonesia (Persero) Tbk',
        className: 'lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black',
      },
      {
        name: 'Gedung BRI Jl. Jenderal Sudirman Kav.44-46. Jakarta 10210 Indonesia',
        className: 'lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black',
      },
    ],
  },
  contactUs: {
    title: 'Hubungi Kami',
    list: [
      {
        name: '1500017',
        icon: 'call',
        extern: true,
        url: 'tel:1500017',
        className: 'text-blue-01',
      },
      {
        name: 'callbri@bri.co.id',
        icon: 'email',
        extern: true,
        url: 'mailto:callbri@bri.co.id',
        className: 'text-blue-01',
      },
    ],
  },
  legalInfo: {
    list: [
      {
        className: 'lg:px-0 px-16 cursor-default text-blue-01',
        name: 'BRI terdaftar dan diawasi oleh Otoritas Jasa Keuangan',
      },
      {
        className: 'cursor-default text-blue-01',
        name: 'BRI merupakan peserta penjamin LPS',
      },
    ],
  },
};

const transformSocialMediaData = (socialMediaData: T_ResponseAPIItemSocialMediaMenu) => {
  return socialMediaData?.map((item) => ({
    name: item.title,
    icon: item.icon,
    url: item.relative,
    className: 'text-blue-01',
  })) || [];
};

const transformTautanData = (tautanData: T_ResponseAPIItemMainFooterMenu) => {
  return tautanData?.map((item) => ({
    name: item.title,
    url: item.relative,
    extern: item.options?.external || false,
    className: 'text-blue-01',
  })) || [];
};

const fetchSocialMediaData = async (): Promise<T_ResponseAPIItemSocialMediaMenu> => {
  return await get('/bricc-api/menu-items/social-media?_format=json_recursive');
};

const fetchTautanData = async (): Promise<T_ResponseAPIItemMainFooterMenu> => {
  return await get('/bricc-api/menu-items/footer?_format=json_recursive');
};

const combineFooterData = (
  socialMediaData: T_ResponseAPIItemSocialMediaMenu,
  tautanData: T_ResponseAPIItemMainFooterMenu
): T_ResponseGetMainFooterMenu => {
  return {
    data: [
      STATIC_FOOTER_DATA.headOffice,
      {
        ...STATIC_FOOTER_DATA.contactUs,
        social_media: transformSocialMediaData(socialMediaData),
      },
      {
        title: 'Tautan',
        list: transformTautanData(tautanData),
      },
      STATIC_FOOTER_DATA.legalInfo,
    ],
  };
};

export async function API_GetMainFooterMenu({
  // TODO: used as a param - integration API
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainFooterMenu> {
  try {
    const [socialMediaData, tautanData] = await Promise.all([
      fetchSocialMediaData(),
      fetchTautanData(),
    ]);

    return combineFooterData(socialMediaData, tautanData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Footer Menu:', error);
    return { data: [] };
  }
}