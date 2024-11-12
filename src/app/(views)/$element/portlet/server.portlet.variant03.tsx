'use server';

import SE_PortletVariant01Item from './server.portlet.item';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { T_PortletProps } from '@/app/(views)/$element/types/portlet';
import Image from '@/lib/element/global/image';
import { API_BASE_URL } from '@/app/(views)/$constant/variables';

export default async function SE_PortletVariant03({
  title,
  subtitle,
  imageAtTitle,
  imageAtContent,
  headerAlignment,
  imageContentAlignment,
  bgImage,
  listItems,
}: Omit<T_PortletProps, 'variant'>) {
  const backgroundImg = bgImage ? `${API_BASE_URL}${bgImage}` : '';

  return (
    <section
      className="w-full bg-no-repeat pt-20 pb-12"
      style={{
        backgroundImage: `url(${
          bgImage
            ? (backgroundImg ?? '/web/guest/images/why-us/bg-image.jpg')
            : ''
        })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container flex flex-col">
        <div
          className={`flex flex-col justify-center ${headerAlignment === 'left' ? 'justify-start mdmax:justify-center' : headerAlignment === 'right' ? 'justify-end mdmax:justify-center' : 'justify-center'}`}
        >
          {imageAtTitle ? (
            <div className="flex gap-2 items-center">
              <Image width={40} height={40} src={imageAtTitle} alt="" />
              {title && (
                <div className="font-medium md:text-4xl text-3xl">
                  {parseHTMLToReact(title)}
                </div>
              )}
            </div>
          ) : (
            title && (
              <div className="font-medium md:text-4xl text-3xl  mb-4">
                {parseHTMLToReact(title)}
              </div>
            )
          )}
          {subtitle && (
            <div className="mdmax:text-center">
              {parseHTMLToReact(subtitle)}
            </div>
          )}
        </div>
        <div className="col-span-1">
          {imageAtContent ? (
            imageContentAlignment === 'left' ? (
              <div className="flex gap-4 py-12 md:flex-row flex-col">
                <div className="w-full h-[20rem] rounded-xl overflow-hidden mb-5 inline-block">
                  <Image
                    extern={false}
                    src={imageAtContent}
                    alt="image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="md:max-w-2xl max-w-[90%]">
                  {typeof listItems !== 'string'
                    ? listItems?.map((item, index) => (
                        <SE_PortletVariant01Item key={index} list_item={item} />
                      ))
                    : parseHTMLToReact(listItems)}
                </div>
              </div>
            ) : (
              <div className="flex gap-4 py-12 md:flex-row flex-col">
                <div className="md:max-w-2xl max-w-[90%]">
                  {typeof listItems !== 'string'
                    ? listItems?.map((item, index) => (
                        <SE_PortletVariant01Item key={index} list_item={item} />
                      ))
                    : parseHTMLToReact(listItems)}
                </div>
                <div className="w-full h-[20rem] rounded-xl overflow-hidden mb-5 inline-block">
                  <Image
                    extern={false}
                    src={imageAtContent}
                    alt="image"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )
          ) : (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-12 md:max-w-4xl max-w-[90%]">
              {listItems?.map((item, index) => (
                <SE_PortletVariant01Item key={index} list_item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
