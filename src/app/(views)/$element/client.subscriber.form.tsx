'use client';

import { T_FormSubscriptionRequest } from '@/api/webform/api.post.webform-subscription.type';
import {
  CFN_MapToWebFormSubscriptionPayload,
  CFN_ValidateCreateWebFormSubscriptionFields,
} from '@/app/(views)/$function/cfn.post.webform-subscription';
import { ACT_PostWebFormSubscription } from '@/app/(views)/$action/action.post.webform-subscription';
import useForm from '@/lib/hook/useForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import InputError from '@/lib/element/global/form/input.error';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/get-dictionary';

export default function CE_SubscriberForm() {
  const params = useSearchParams();
  const locales = params.get('lang') as Locale;
  const dictionary = useDictionary(locales ?? 'id');
  const [checkList, setChecklist] = useState<string[]>([]);
  const [pending] = useTransition();
  const router = useRouter();
  const SELECT_DATA_JASA = [
    {
      title: dictionary?.subcriber_form?.checkboxTextPromo ?? 'Promo',
      value: 'Promo',
    },
    {
      title: dictionary?.subcriber_form?.checkboxTextNews ?? ' Berita',
      value: 'Berita',
    },
    {
      title: dictionary?.subcriber_form?.checkboxTextProduct ?? 'Produk',
      value: 'Produk',
    },
  ];

  const handleSelect = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setChecklist([...checkList, value]);
      onFieldChange('type', String([...checkList, value]));
    } else {
      const filteredList = checkList.filter((item) => item !== value);
      setChecklist(filteredList);
      onFieldChange('type', String(filteredList));
    }
  };

  const { form, formError, validateForm, onFieldChange } = useForm<
    T_FormSubscriptionRequest,
    T_FormSubscriptionRequest
  >(
    CFN_MapToWebFormSubscriptionPayload({
      webform_id: '',
      email: '',
      type: [],
    }),
    CFN_ValidateCreateWebFormSubscriptionFields
  );
  const handleSubmit = async () => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }

    try {
      const result = await ACT_PostWebFormSubscription({
        webform_id: 'subscription',
        email: form.email,
        type: checkList,
      });

      if (result?.sid) {
        router.refresh();
      }
    } catch (error) {}
  };
  return (
    <div className="md:flex relative md:w-[42%] w-full">
      <div
        style={{
          backgroundImage: `url(${'/web/guest/images/subscriber/mail.png'})`,
          backgroundSize: 'cover',
        }}
        className="bg-no-repeat md:w-20 md:h-36 w-11 h-20 absolute mdmax:right-0 mdmax:-top-24 md:-mt-8"
      ></div>
      <form method="post" className="w-full">
        <div className="flex items-start md:pl-28">
          <div className="flex-auto mdmax:w-24 w-full">
            <input
              type="text"
              name="email"
              id="email"
              value={form.email}
              placeholder={
                dictionary?.subcriber_form?.placeholder ??
                'Masukkan alamat email'
              }
              className="w-full h-12 px-4 mb-4 bg-[#f59a22]/30 placeholder:text-orange-01 placeholder:font-light placeholder:text-sm"
              onChange={({ target }) => onFieldChange('email', target.value)}
            />
            {formError.email && (
              <div className="py-2">
                <InputError message={formError.email} />
              </div>
            )}
            <div className="flex items-center gap-4 text-xs text-gray-500 font-light">
              {SELECT_DATA_JASA?.map((item, index) => (
                <div className="flex" key={index}>
                  <input
                    className="w-4 h-4 checked:accent-orange-01"
                    type="checkbox"
                    id={item.value}
                    value={item.value}
                    onChange={handleSelect}
                  />
                  <label className="pl-2">{item.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-none">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="bg-[#f59a22] uppercase text-white h-12 px-4 text-sm"
            >
              {dictionary?.subcriber_form?.button ?? 'Berlangganan'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
