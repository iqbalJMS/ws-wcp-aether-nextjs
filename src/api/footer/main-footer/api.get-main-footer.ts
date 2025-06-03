'use server';
import { get } from '@/api/common/fetch';
import {
  T_ResponseAPIItemContactUsMenu,
  T_ResponseAPIItemMainFooterMenu,
  T_ResponseAPIItemSocialMediaMenu,
  T_ResponseGetMainFooterMenu,
  T_ResponseAPIConfigFooter,
} from './api.get-main-footer.type';
import { Locale } from '@/i18n-config';

import enDictionary from '@/locales/en/global.json';
import idDictionary from '@/locales/id/global.json';

const getDictionary = (locale: Locale) => {
  let dictionary;

  if (locale === 'en') {
    dictionary = enDictionary;
  } else {
    dictionary = idDictionary;
  }

  return dictionary;
};

// Static/dummy data sections
const createStaticFooterData = (dictionary: any) => ({
  headOffice: {
    title: dictionary?.footer?.headOfficeTitle || 'Kantor Pusat',
    list: [
      {
        name: dictionary?.footer?.companyName || 'PT Bank Rakyat Indonesia (Persero) Tbk',
        className: 'lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black',
      },
      {
        name: dictionary?.footer?.address || 'Jl. Jenderal Sudirman Kav. 44-46, Jakarta 10210',
        className: 'lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black',
      }
    ]
  },
  legalInfo: {
    list: [
      {
        className: 'lg:px-0 px-16 cursor-default text-blue-01',
        name: dictionary?.footer?.legalOjk || 'BRI terdaftar dan diawasi oleh Otoritas Jasa Keuangan',
      },
      {
        className: 'cursor-default text-blue-01',
        name: dictionary?.footer?.legalLps || 'BRI merupakan peserta penjamin LPS',
      }
    ]
  }
})

const transformContactUsData = (contactUsData: T_ResponseAPIItemContactUsMenu) => {
  return (
    contactUsData?.map((item) => ({
      name: item.title,
      icon: item.icon,
      url: item.relative || item.uri,
      extern: item.options?.external || false,
      className: 'text-blue-01',
    })) || []
  );
};

const transformSocialMediaData = (
  socialMediaData: T_ResponseAPIItemSocialMediaMenu
) => {
  return (
    socialMediaData?.map((item) => ({
      name: item.title,
      icon: item.icon,
      url: item.relative,
      className: 'text-blue-01',
    })) || []
  );
};

const transformTautanData = (tautanData: T_ResponseAPIItemMainFooterMenu) => {
  return (
    tautanData?.map((item) => ({
      name: item.title,
      url: item.relative,
      extern: item.options?.external || false,
      className: 'text-blue-01',
    })) || []
  );
};

//ganti <p> menjadi <p class="mb-4"> untuk menambahkan jarak antar kalimat
const addParagraphSpacing = (htmlString: string) => {
  if (!htmlString) return '';
  
  let result = htmlString.replace(/<p>/g, '<p class="mb-4">');
   
  return result;
};

const transformConfigFooter = (configFooter: T_ResponseAPIConfigFooter) => {
  if (!configFooter || typeof configFooter !== 'object') {
    return null;
  }
  
  const addressField = configFooter.field_address?.[0];
  const notesField = configFooter.field_notes?.[0];
  
  const result = {
    address: addParagraphSpacing(addressField?.processed || addressField?.value || ''),
    notes: addParagraphSpacing(notesField?.processed || notesField?.value || ''),
  };
    
  return result;
};

const fetchConfigFooterData =
  async ({ isEnglish }: { isEnglish: string }): Promise<T_ResponseAPIConfigFooter> => {
    try {
      return await get(`${isEnglish}/config_pages/footer?_format=json_recursive`, {
        Authorization: `Basic ${btoa(`${process.env.DRUPAL_AUTH}:${process.env.DRUPAL_PASSWORD}`)}`,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching config footer data:', error);
      return {} as T_ResponseAPIConfigFooter;
    }
  };

const fetchContactUsData =
  async ({ isEnglish }: { isEnglish: string }): Promise<T_ResponseAPIItemContactUsMenu> => {
    return await get(`${isEnglish}/bricc-api/menu-items/contact-us?_format=json_recursive`);
  };

const fetchSocialMediaData = async ({ isEnglish }: { isEnglish: string }): Promise<T_ResponseAPIItemSocialMediaMenu> => {
  return await get(`${isEnglish}/bricc-api/menu-items/social-media?_format=json_recursive`);
};

const fetchTautanData = async ({ isEnglish }: { isEnglish: string }): Promise<T_ResponseAPIItemMainFooterMenu> => {
  return await get(`${isEnglish}/bricc-api/menu-items/footer?_format=json_recursive`);
};

const combineFooterData = (
  socialMediaData: T_ResponseAPIItemSocialMediaMenu,
  contactUsData: T_ResponseAPIItemContactUsMenu,
  tautanData: T_ResponseAPIItemMainFooterMenu,
  configFooter: T_ResponseAPIConfigFooter,
  dictionary: any
): T_ResponseGetMainFooterMenu => {
  const staticData = createStaticFooterData(dictionary);
  const configData = transformConfigFooter(configFooter);
  
  //ganti nilai dari dictionary ke response API
  if (configData?.address) {
    staticData.headOffice.list = [
      {
        name: configData.address,
        className: 'lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black',
      }
    ];
  }
  //ganti nilai dari dictionary ke response API
  if (configData?.notes) {
    staticData.legalInfo.list = [
      {
        className: 'lg:px-0 px-16 cursor-default text-blue-01',
        name: configData.notes,
      }
    ];
  }

  return {
    data: [
      staticData.headOffice,
      {
        title: dictionary?.footer?.contactUsTitle || 'Hubungi Kami',
        list: transformContactUsData(contactUsData),
        social_media: transformSocialMediaData(socialMediaData),
      },
      {
        title: dictionary?.footer?.linksTitle || 'Tautan',
        list: transformTautanData(tautanData),
      },
      staticData.legalInfo,
    ]
  }
}

export async function API_GetMainFooterMenu({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainFooterMenu> {
  const isEnglish = !lang || lang === 'id' ? '/id' : '';
  
  try {
    // Get dictionary based on language
    const dictionary = getDictionary(lang as Locale);
    
    const [socialMediaData, contactUsData, tautanData, configFooter] = await Promise.all([
      fetchSocialMediaData({ isEnglish }),
      fetchContactUsData({ isEnglish }),
      fetchTautanData({ isEnglish }),
      fetchConfigFooterData({ isEnglish }),
    ]);
    
    const result = combineFooterData(
      socialMediaData,
      contactUsData,
      tautanData,
      configFooter,
      dictionary,
    );

    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    const fallbackDictionary = getDictionary('id');
    // Pass empty object for configFooter in fallback
    return combineFooterData([], [], [], {} as T_ResponseAPIConfigFooter, fallbackDictionary);
  }
}