'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { useEffect, useState, useTransition } from 'react';
import useForm from '@/lib/hook/useForm';

import CE_FormVariant01 from '@/app/(views)/$element/form/client.form.variant01';
import Pagination from '@/lib/element/global/pagination';
import InputSelect from '@/lib/element/global/form/input.select';

import { T_LocationType } from '@/api/location/api.get.location-type.type';
import { T_InputSelectItem } from '@/lib/types/input';
import { T_LocationCategory } from '@/api/location/api.get.location-category.type';
import {
  T_Location,
  T_LocationRequest,
} from '@/api/location/api.get.location.type';

import { ACT_GetLocationProvince } from '@/app/(views)/$action/action.get.location-province';
import { ACT_GetLocationType } from '@/app/(views)/$action/action.get.location-type';
import { ACT_GetLocationCategory } from '@/app/(views)/$action/action.get.location-category';
import {
  CFN_GetLocation,
  CFN_MapToLocationPayload,
  CFN_ValidateGetLocationFields,
} from '@/app/(views)/$function/cfn.get.location';
import { useEnv } from '@/lib/hook/useEnv';
import debounce from '@/lib/functions/global/debounce';
import { handleurl } from '@/lib/functions/client/handle-url';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

type T_Props = {
  types: {
    id: string;
    imageUrl?: string;
  }[];
};

// Konstanta untuk tipe yang tidak memerlukan kategori
const TYPES_WITHOUT_CATEGORY = [
  '67779f07066040986c754d47', // BRILink
  '6777a1b6066040986c754d5c'  // Weekend Banking
];

const CE_LocationMain = ({ types }: T_Props) => {
  const { baseUrl } = useEnv();
  const [pending, transiting] = useTransition();
  const [location, setLocation] = useState<T_Location>();
  const [locationProvinces, setLocationProvinces] =
    useState<T_InputSelectItem[]>();
  const [locationTypes, setLocationTypes] = useState<T_LocationType['data']>();
  const [locationCategories, setLocationCategories] =
    useState<T_LocationCategory['data']>();
  const { form, setForm, validateForm, onFieldChange } = useForm<
    T_LocationRequest,
    T_LocationRequest
  >(
    CFN_MapToLocationPayload({
      skip: '0',
      limit: '9',
      province: '',
      tipe: '',
      category: '',
    }),
    CFN_ValidateGetLocationFields
  );

  const initializeFormData = async () => {
    try {
      const typeResponse = await ACT_GetLocationType();
      const types = typeResponse?.data.data || [];
      setLocationTypes(types);

      const firstTypeId = types.at(0)?.id || '';
      setForm((prevForm) => ({
        ...prevForm,
        tipe: firstTypeId,
      }));
    } catch (error) {
      //eslint-disable-next-line no-console
      console.error('Error initializing form data:', error);
    }
  };

  const handleLocationProvinceList = async () => {
    try {
      const response = await ACT_GetLocationProvince();
      response?.data.data.unshift({
        id: 0,
        uuid: '0',
        name: 'Semua Lokasi',
      });
      setLocationProvinces(
        response?.data.data.map((provinceItem) => ({
          title: provinceItem.name,
          value: provinceItem.uuid === '0' ? '' : provinceItem.uuid.toString(),
        }))
      );
    } catch (error) {
      //eslint-disable-next-line no-console
      console.error('Error fetching provinces:', error);
    }
  };
  
  const handleLocationCategoryList = async (typeId: string) => {
    try {
      if (TYPES_WITHOUT_CATEGORY.includes(typeId)) {
        setLocationCategories([]);
        setForm((prevForm) => ({
          ...prevForm,
          category: '',
        }));
        return;
      }

      const response = await ACT_GetLocationCategory({ tipe_id: typeId });
      const categories = response?.data.data || [];
      setLocationCategories(categories);

      setForm((prevForm) => ({
        ...prevForm,
        category: '',
      }));
    } catch (error) {
      //eslint-disable-next-line no-console
      console.error('Error fetching categories:', error);
      setLocationCategories([]);
    }
  };

  const handleLocationList = () => {
    if (pending) {
      return;
    }
    const isValid = validateForm();
    if (isValid) {
      CFN_GetLocation(transiting, form, (data) => {
        setLocation(data?.data);
      });
    }
  };

  const handlePageChange = (page: number) => {
    const skip = parseInt(form.limit) * page - parseInt(form.limit);
    setForm({
      ...form,
      skip: skip.toString(),
    });
  };

  const debouncedHandleLocationList = debounce(handleLocationList, 300);

  useEffect(() => {
    handleLocationProvinceList();
    initializeFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Ubah kondisi - cek tipe saja, karena category bisa kosong (Any/semua)
    if (form.tipe !== '') {
      debouncedHandleLocationList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.skip, form.province, form.tipe, form.category]);

  useEffect(() => {
    const fetchCategories = async () => {
      // Reset location data ketika tipe berubah
      setLocation(undefined);
      await handleLocationCategoryList(form.tipe);
    };

    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.tipe]);

  let getLocationType = (id: string) => {
    return locationTypes?.find((locationtypeItem) => {
      return locationtypeItem.id === id;
    });
  };

  const getTranslatedLabel = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const lang = url.searchParams.get('lang');
      return lang === 'en' ? 'Any' : 'Semua';
    }
    return 'Semua';
  };

  return (
    <div className=" py-10">
      <div className="text-center text-2xl mb-5">
        TEMUKAN <b>KAMI</b>
      </div>

      <div className="py-5 pb-10 border-b-2 border-black border-opacity-10">
        <CE_FormVariant01
          className="mt-20"
          listItems={locationProvinces || []}
          dropdownType="input-text"
          placeholder="Mencari Lokasi"
          buttonText="Cari"
          imageAtTitle="/web/guest/images/icon-menu/maps.png"
          buttonAction={(e) => {
            form.skip = '0';
            onFieldChange('province', e?.toString() || '');
          }}
        />
      </div>
      <div className="py-10 pb-0 border-b-2 border-black border-opacity-10 text-center mb-5">
        <div className="inline-flex -mx-5 mdmax:-mx-2">
          {types?.map((locationTypeItem) => {
            return (
              <div
                key={locationTypeItem.id}
                className="w-[15rem] mdmax:w-[5.5rem] group px-5 mdmax:px-2"
              >
                <div
                  className="relative cursor-pointer"
                  onClick={() => {
                    form.skip = '0';
                    form.category = '';
                    onFieldChange('tipe', locationTypeItem.id);
                  }}
                >
                  <div
                    className={[
                      'w-full h-2 mdmax:h-1 rounded-sm bg-red-01 absolute bottom-0 left-0  group-hover:block',
                      form.tipe === locationTypeItem.id ? 'block' : 'hidden',
                    ].join(' ')}
                  ></div>
                  <div>
                    <div className="text-center mb-2">
                      {locationTypeItem.imageUrl && (
                        <Image
                          src={`${baseUrl}/api/files/?path=${locationTypeItem.imageUrl}`}
                          alt=""
                          width={100}
                          height={100}
                          className="w-[5rem] h-[5rem] mdmax:w-[2rem] mdmax:h-[2rem] mx-auto"
                        />
                      )}
                    </div>
                    <div className="text-center font-semibold h-[5rem] mdmax:h-[2rem] mdmax:text-[0.5rem]">
                      {getLocationType(locationTypeItem.id)?.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mb-10">
        {!TYPES_WITHOUT_CATEGORY.includes(form.tipe) && (
          <div className="w-[30%] mdmax:w-full mdmax:px-5 inline-block">
            <div className="text-left font-semibold mb-2">Layanan</div>
            <InputSelect
              list={[
                { title: getTranslatedLabel(), value: '' },
                ...(Array.isArray(locationCategories) && locationCategories.length > 0
                  ? locationCategories.map((locationCategoryItem) => ({
                      title: locationCategoryItem.name,
                      value: locationCategoryItem.id,
                    }))
                  : []
                ),
              ]}
              value={form.category || ''}
              onChange={(value) => {
                form.skip = '0';
                onFieldChange(
                  'category',
                  (Array.isArray(value) ? value.at(0)?.value : value?.value) ||
                    ''
                );
              }}
            />
          </div>
        )}
      </div>
      <div className="py-5 container">
        <div className="flex flex-wrap mb-10 -mx-2">
          {location?.data.map((dataItem, index) => (
            <div key={index} className="w-1/3 mdmax:w-full flex-none px-2 mb-4">
              <div className="shadow-lg relative rounded-md rounded-br-[3rem] overflow-hidden group p-4">
                <div className="mt-2">
                  {dataItem.tipe && (
                    <div className=" text-blue-02  mb-2">
                      {parseHTMLToReact(dataItem.tipe)}
                    </div>
                  )}
                  {dataItem.name && (
                    <div className=" text-blue-01 text-2xl font-semibold  mb-10">
                      {parseHTMLToReact(dataItem.name)}
                    </div>
                  )}
                  {dataItem.address && (
                    <div className=" text-black text-opacity-50 text-base h-[5rem] mb-2">
                      {parseHTMLToReact(dataItem.address)}
                    </div>
                  )}
                  <div className="text-black text-opacity-50 mb-10">
                    <div className="flex">
                      <div className="w-[30%] flex-none">Kode Agen</div>
                      <div>: {dataItem.kodeAgen || '-'}</div>
                    </div>
                    <div className="flex">
                      <div className="w-[30%] flex-none">Telp</div>
                      <div>: {dataItem.phone || '-'}</div>
                    </div>
                  </div>
                  <div>
                    <Link href={handleurl(dataItem.urlMaps)} target="_self">
                      <div className="flex items-center text-red-01 font-semibold mb-5">
                        <div className="mr-2">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 256 256"
                            className="w-5 h-5"
                          >
                            <path
                              fill="currentColor"
                              d="M128 60a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-112a92.1 92.1 0 0 0-92 92c0 77.36 81.64 135.4 85.12 137.83a12 12 0 0 0 13.76 0a259 259 0 0 0 42.18-39C205.15 170.57 220 136.37 220 104a92.1 92.1 0 0 0-92-92m31.3 174.71a249.4 249.4 0 0 1-31.3 30.18a249.4 249.4 0 0 1-31.3-30.18C80 167.37 60 137.31 60 104a68 68 0 0 1 136 0c0 33.31-20 63.37-36.7 82.71"
                            />
                          </svg>
                        </div>
                        <div>Look on Map</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Pagination
            currentPage={location?.pagination.currentPage || 1}
            totalPages={location?.pagination.totalPages || 0}
            variant="simple"
            onPageChange={(e) => {
              handlePageChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CE_LocationMain;