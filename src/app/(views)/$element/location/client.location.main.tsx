'use client';

import {
  T_Location,
  T_LocationRequest,
} from '@/api/location/api.get.location.type';
import CE_FormVariant01 from '@/app/(views)/$element/form/client.form.variant01';
import { CE_IconMain } from '@/app/(views)/$element/icon-menu/client.icon.main';
import useForm from '@/lib/hook/useForm';
import { useEffect, useState, useTransition } from 'react';
import {
  CFN_GetLocation,
  CFN_MapToLocationPayload,
  CFN_ValidateGetLocationFields,
} from '@/app/(views)/$function/cfn.get.location';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from '@/lib/element/global/link';
import Pagination from '@/lib/element/global/pagination';

const CE_LocationMain = () => {
  const [pending, transiting] = useTransition();
  const [location, setLocation] = useState<T_Location>();
  const { form, setForm, validateForm } = useForm<
    T_LocationRequest,
    T_LocationRequest
  >(
    CFN_MapToLocationPayload({
      skip: '0',
      limit: '9',
      province: '',
      type: '',
    }),
    CFN_ValidateGetLocationFields
  );
  let handlePageChange = (page: number) => {
    const skip = ((parseInt(form.limit) * page) - parseInt(form.limit))
    // onFieldChange('skip', skip.toString())
    setForm({
      ...form,
      'skip': skip.toString()
    })
    // console.log(form)
  }
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
  // useEffect(() => {
  //   handleLocationList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    handleLocationList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.skip]);
  return (
    <div className=" py-10">
      <div className="text-center text-2xl mb-5">
        TEMUKAN <b>KAMI</b>
      </div>

      <div className="py-5 pb-10 border-b-2 border-black border-opacity-10">
        <CE_FormVariant01
          className="mt-20"
          listItems={[
            {
              title: 'Jakarta',
              value: 'Jakarta',
            },
            {
              title: 'Bandung',
              value: 'Bandung',
            },
          ]}
          dropdownType="input-text"
          placeholder="Mencari Lokasi"
          buttonText="Cari"
          imageAtTitle="/web/guest/images/icon-menu/maps.png"
          // buttonAction={(e) => { console.log(e)}}
        />
      </div>
      <div className="py-5">
        <CE_IconMain
          list={[
            {
              title: 'asd',
              image: '',
              link: '',
              externalLink: false,
              active: true,
            },
          ]}
          cookiesName="locationMain"
        />
      </div>
      <div className="py-5 container">
        <div className="flex flex-wrap mb-10">
          {location?.data.map((dataItem, index) => (
            <div key={index} className="w-1/3 mdmax:w-1/2 flex-none px-2 mb-4">
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
                    <Link
                      href={dataItem.urlMaps ? dataItem.urlMaps : ''}
                      target="_blank"
                    >
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
        <div >
          <Pagination
            currentPage={location?.pagination.currentPage || 1}
            totalPages={location?.pagination.totalPages || 0}
            variant="simple"
            onPageChange={(e) => {handlePageChange(e)}}
          />
        </div>
        
      </div>
    </div>
  );
};

export default CE_LocationMain;
