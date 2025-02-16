'use client';

import { useRef } from 'react';
import CE_Tab from './client.tab';
import { CE_ButtonsIdx } from './client.navigation';
import { CE_TabViewForwardRef } from './client.tab-view';
import { T_ImperativeProps } from '@/app/(views)/$element/types/promo';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export type TabViewImperativeProps = T_ImperativeProps;

export default function CE_SectionPromo({
  title,
  listTab,
}: {
  title: string;
  listTab: Array<{
    contents: Array<{
      type: string;
      img: string;
      title: string;
      date: string;
      id: string;
      description: string;
      startDate?: string;
      endDate?: string;
    }>;
    group: {
      title: string;
      informationText: string;
      showMore: {
        title: string;
        url: string;
      };
    };
  }>;
}) {
  const tabView = useRef<TabViewImperativeProps>(null);

  return (
    <section
      data-active="0"
      data-range="next"
      data-active-range="0"
      data-range-length={listTab?.[0]?.contents?.slice(0, 7).length}
      id="section-multitab-carousel"
      className={[
        'flex flex-col justify-between gap-7 1025:flex-row 1025:gap-10 items-start',
        'group/section-multitab-carousel lg:py-12 py-8',
      ].join(' ')}
    >
      <div
        className={[
          'w-full wrapper-space mx-[calc((100vw-var(--wrapper-space))/2) flex-shrink-0',
          '1025:w-[28.125rem] 1025:ml-[calc((100vw-var(--wrapper-space))/2)]',
        ].join(' ')}
      >
        {title && (
          <div
            className={[
              'leading-[1.2] text-[1.75rem] 1367:text-[2.625rem] mb-[0.875rem]',
              'wrapper inline-block 1025-only:text-center',
            ].join(' ')}
          >
            {parseHTMLToReact(title)}
          </div>
        )}
        <CE_Tab
          tabViewController={tabView}
          options={listTab?.map((data) => data?.group)}
          contents={listTab?.map((data) => data?.contents?.slice(0, 7).length)}
          attributeTargetId="section-multitab-carousel"
          attributeName={{ active: 'active' }}
          className="wrapper-space 1025-only:mx-auto 1025-only:px-[var(--wrapper-space)]"
        />
      </div>
      <CE_TabViewForwardRef
        ref={tabView}
        contents={listTab?.map((data) => data?.contents.slice(0, 7))}
        attributeTargetId="section-multitab-carousel"
        attributeName={{
          active: 'active',
          range: 'range',
          activeRange: 'activeRange',
          rangeLength: 'rangeLength',
        }}
        className="1025:mr-auto"
      />
      <CE_ButtonsIdx
        tabViewController={tabView}
        attributeTargetId="section-multitab-carousel"
        className="1025:hidden"
        attributeName={{
          activeRange: 'activeRange',
          rangeLength: 'rangeLength',
        }}
      />
    </section>
  );
}
