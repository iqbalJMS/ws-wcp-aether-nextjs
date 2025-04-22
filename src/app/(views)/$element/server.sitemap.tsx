'use server';

import { T_Items } from '@/api/navbar-menu/main-navbar/api.get-main-menu-navbar.type';
import { ACT_GetBottomMenuFooter } from '@/app/(views)/$action/action.get.bottom-footer';
import { ACT_GetMainMenuFooter } from '@/app/(views)/$action/action.get.main-footer';
import { ACT_GetMainMenuNavbar } from '@/app/(views)/$action/action.get.main-menu-navbar';
import { ACT_GetTopMenuNavbar } from '@/app/(views)/$action/action.get.top-menu-navbar';
import Link from '@/lib/element/global/link';

export default async function SE_Sitemap() {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });

  return (
    <section className="container py-10">
      <h1 className="mb-4 text-center underline">Sitemap</h1>
      <div className="flex items-start flex-wrap gap-8 ">
        {listHeaderTop && listHeaderTop.length > 0 && (
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="font-bold text-2xl">Top Navigation</h2>
            <ul className="list-none">
              {listHeaderTop.map((listItem, index) => {
                return (
                  <li key={index} className="my-4">
                    <Link
                      target="_self"
                      href={listItem.relative || '#'}
                      className="text-blue-02 text-xl hover:underline"
                    >
                      {listItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="bg-white p-5 shadow-md rounded-md">
          <h2 className="font-bold text-2xl">Footer</h2>
          <ul className="list-none">
            {listMainFooter?.data?.[2]?.list?.map((listItem, index) => {
              return (
                <li key={index} className="my-4">
                  <Link
                    target="_self"
                    href={listItem.url || '#'}
                    extern={listItem.extern}
                    className="text-blue-02 text-xl hover:underline"
                  >
                    {listItem.name}
                  </Link>
                </li>
              );
            })}
            {listBottomFooter?.data?.map((listItem, index) => {
              return (
                <li key={index} className="my-4">
                  <Link
                    target="_self"
                    href={listItem.url || '#'}
                    extern={listItem.extern}
                    className="text-blue-02 text-xl hover:underline"
                  >
                    {listItem.value}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {listHeaderBottom &&
          listHeaderBottom.length &&
          listHeaderBottom.map((listItem, index) => {
            return (
              <div key={index} className="bg-white p-5 shadow-md rounded-md">
                <div className="flex items-center font-bold gap-3 text-2xl">
                  <h2 className="font-bold text-2xl">Main Navigation</h2>
                  {`>`}
                  <Link
                    className="hover:underline"
                    href={listItem.relative || '#'}
                  >
                    {listItem.title}
                  </Link>
                </div>
                {listItem.below && <RecursiveList items={listItem.below} />}
              </div>
            );
          })}
      </div>
    </section>
  );
}

const RecursiveList = ({
  items,
  level = 0,
}: {
  items: T_Items[];
  level?: number;
}) => {
  return (
    <ul className="list-none">
      {items.map((item, index) => (
        <li key={index} className={`ml-${level * 4} my-4`}>
          <Link
            target="_self"
            href={item.relative || '#'}
            className={`text-blue-02 hover:underline ${level === 0 ? 'text-xl font-bold' : 'text-lg'}`}
          >
            {item.title}
          </Link>
          {item.below && <RecursiveList items={item.below} level={level + 1} />}
        </li>
      ))}
    </ul>
  );
};
