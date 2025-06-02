import { get } from '@/api/common/fetch';
import {
  T_ResponseAPIItemMainFooterMenu,
  T_ResponseAPIItemSocialMediaMenu,
  T_ResponseAPIItemContactUsMenu,
  T_ResponseGetMainFooterMenu,
} from '@/api/footer/main-footer/api.get-main-footer.type';
import { Locale } from '@/i18n-config';

// Import dictionaries statically
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

const createStaticFooterData = (dictionary: any) => ({
  headOffice: {
    title: dictionary?.footer?.headOfficeTitle || 'Kantor Pusat',
    list: [
      {
        name:
          dictionary?.footer?.companyName ||
          'PT Bank Rakyat Indonesia (Persero) Tbk',
        className:
          'lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black',
      },
      {
        name:
          dictionary?.footer?.address ||
          'Jl. Jenderal Sudirman Kav. 44-46, Jakarta 10210',
        className:
          'lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black',
      },
    ],
  },
  legalInfo: {
    list: [
      {
        className: 'lg:px-0 px-16 cursor-default text-blue-01',
        name:
          dictionary?.footer?.legalOjk ||
          'BRI terdaftar dan diawasi oleh Otoritas Jasa Keuangan',
      },
      {
        className: 'cursor-default text-blue-01',
        name:
          dictionary?.footer?.legalLps || 'BRI merupakan peserta penjamin LPS',
      },
    ],
  },
});

const transformContactUsData = (
  contactUsData: T_ResponseAPIItemContactUsMenu
) => {
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

const fetchContactUsData =
  async (): Promise<T_ResponseAPIItemContactUsMenu> => {
    return await get('/bricc-api/menu-items/contact-us?_format=json_recursive');
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
  dictionary: any
): T_ResponseGetMainFooterMenu => {

  const staticData = createStaticFooterData(dictionary);

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
    ],
  };
};

// Main API function
export async function API_GetMainFooterMenu({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainFooterMenu> {
  const isEnglish = !lang || lang === 'id' ? '/id' : '';
  try {
    const [socialMediaData, tautanData] = await Promise.all([
      fetchSocialMediaData({ isEnglish }),
      fetchTautanData({ isEnglish }),
    // Get dictionary based on language
    const dictionary = getDictionary(lang as Locale);

    // Fetch all dynamic data from APIs
    const [socialMediaData, contactUsData, tautanData] = await Promise.all([
      fetchSocialMediaData(),
      fetchContactUsData(),
      fetchTautanData(),
    ]);

    // Combine all data
    const result = combineFooterData(
      socialMediaData,
      contactUsData,
      tautanData,
      dictionary
    );

    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    // Return fallback data with default dictionary
    const fallbackDictionary = getDictionary('id');
    return combineFooterData([], [], [], fallbackDictionary);
  }
}
