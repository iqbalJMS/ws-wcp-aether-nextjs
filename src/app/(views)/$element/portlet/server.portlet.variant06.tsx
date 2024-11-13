import Link from '@/lib/element/global/link';
import Image from '@/lib/element/global/image';
import React from 'react';

type T_PortletVariant06Props = {
  title?: string;
  listContent: Array<{
    textContent?: string;
    cardContent?: Array<{
      title?: string;
      item: Array<{
        title: string;
        textValue?: Array<{
          value: string;
        }>;
        imageValue?: Array<{
          image: string;
          url?: string;
        }>;
      }>;
    }>;
  }>;
};

export default async function SE_PortletVariant06({
  title,
  listContent,
}: T_PortletVariant06Props) {
  return (
    <section className="my-20 py-20 bg-[#fafafa]">
      <div className="container">
        {title && <h1 className="text-4xl font-semibold mb-4">{title}</h1>}
        <div className="grid md:grid-cols-3 grid-cols-1 md:space-x-4 space-y-4">
          {listContent.length > 0 &&
            listContent.map((lc, index) => (
              <React.Fragment key={index}>
                {lc.textContent && (
                  <div className="max-w-[80%]">{lc.textContent}</div>
                )}
                {lc.cardContent &&
                  lc.cardContent.map((cc, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-md p-8 shadow-md"
                    >
                      {cc.title && <h3 className="font-bold">{cc.title}</h3>}
                      {cc.item.map((item, index) => (
                        <div key={index} className="my-4">
                          {item.title && (
                            <h4 className="text-[#404040]/40 uppercase">
                              {item.title}
                            </h4>
                          )}
                          {item.textValue?.map((textValue, index) => (
                            <React.Fragment key={index}>
                              {textValue.value && <p>{textValue.value}</p>}
                            </React.Fragment>
                          ))}
                          <div className="flex gap-2">
                            {item.imageValue?.map((imageValue, index) => (
                              <Link
                                key={index}
                                href={imageValue.url ?? '#'}
                                className="h-8 w-8 rounded-full text-white bg-blue-01 flex justify-center items-center"
                              >
                                <div className="relative h-4 w-4 text-white">
                                  <Image
                                    extern
                                    src={imageValue.image}
                                    alt={`image-${imageValue.image}`}
                                    fill
                                    className="text-white"
                                  />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
}
