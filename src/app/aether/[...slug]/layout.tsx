// src/app/aether/[...slug]/layout.tsx
import GlobalFooter from '@/lib/element/global/global.footer';
import GlobalHeader from '@/lib/element/global/global.header';
import React from 'react';
import { ACT_GetTopMenuNavbar } from '@/app/aether/$action/action.get.top-menu-navbar';
import { ACT_GetMainMenuNavbar } from '@/app/aether/$action/action.get.main-menu-navbar';
import { ACT_GetMainMenuFooter } from '@/app/aether/$action/action.get.main-footer';
import { ACT_GetBottomMenuFooter } from '@/app/aether/$action/action.get.bottom-footer';

export default async function AetherSlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const listHeaderTop = await ACT_GetTopMenuNavbar({ lang: 'en' });
  const listHeaderBottom = await ACT_GetMainMenuNavbar({ lang: 'en' });
  const listMainFooter = await ACT_GetMainMenuFooter({ lang: 'en' });
  const listBottomFooter = await ACT_GetBottomMenuFooter({ lang: 'en' });

  return (
    <>
      <GlobalHeader
        variant="no-transparent" // Ganti variant di sini
        headerBottom={listHeaderBottom}
        headerTop={listHeaderTop}
      />
      <main className="pt-32">{children}</main>
      <GlobalFooter
        main_footer={listMainFooter}
        bottom_footer={listBottomFooter}
      />
    </>
  );
}
