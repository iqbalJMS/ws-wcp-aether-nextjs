import Link from '@/lib/element/global/link';
import React from 'react';
import { ChevronRightIcon } from '@/lib/element/global/icons/chevron-right-icon';
import { Tooltip } from '@/lib/element/global/tooltip';

type T_PortletVariant07Props = {
  title?: string;
  cardContent?: Array<{
    title?: string;
    textContent?: string;
    textLink?: string;
    urlTextLink?: string;
  }>;
};

export default async function SE_PortletVariant07({
  title,
  cardContent,
}: T_PortletVariant07Props) {
  return (
    <section className="my-20 py-20 bg-[#fafafa]">
      <div className="container">
        {title && (
          <h1 className="text-4xl font-semibold mb-8 mdmax:text-center">
            {title}
          </h1>
        )}
        <div className="flex items-center mdmax:justify-center flex-col md:flex-row gap-8">
          {cardContent &&
            cardContent.length > 0 &&
            cardContent.map((cc, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-8 shadow-md hover:bg-blue-500 hover:text-white space-y-8 md:w-1/4 w-full group/card07"
              >
                {cc.title && <h3 className="font-bold text-xl">{cc.title}</h3>}
                {cc.textContent && (
                  <div>
                    <p className="line-clamp-4 text-gray-400 group-hover/card07:text-white">
                      {cc.textContent}
                    </p>
                    <Tooltip
                      description={cc.textContent}
                      position="right"
                      variant="complex"
                    >
                      <span className="text-blue-800 font-bold group-hover/card07:text-white">
                        [...]
                      </span>
                    </Tooltip>
                  </div>
                )}
                {cc.textLink && (
                  <Link
                    href={cc.urlTextLink ?? '#'}
                    className="text-blue-800 hover:underline flex gap-2 group-hover/card07:text-white items-center"
                  >
                    <p className="uppercase">{cc.textLink}</p>
                    <ChevronRightIcon
                      width={20}
                      height={20}
                      className="stroke-blue-800 group-hover/card07:stroke-white"
                    />
                  </Link>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
