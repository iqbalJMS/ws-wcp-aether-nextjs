"use client";

import { useRef } from "react";
import Link from "next/link";
import { DUMMY_DATA } from "@/app/aether/$constant/abstraction";
import CE_Tab from "./client.tab";
import { CE_Buttons, CE_ButtonsIdx } from "./client.navigation";
import { CE_TabViewForwardRef } from "./client.tab-view";
import { T_ImperativeProps } from "@/app/aether/$element/types/promo";

export type TabViewImperativeProps = T_ImperativeProps;

export default function CE_SectionPromo() {
  const tabView = useRef<TabViewImperativeProps>(null);

  return (
    <section
      data-active="0"
      data-range="next"
      data-active-range="0"
      data-range-length={DUMMY_DATA[0].contents.length}
      id="section"
      className={[
        "my-9 flex flex-col justify-between gap-7 1025:flex-row 1025:gap-10 items-center",
        "group/section",
      ].join(" ")}
    >
      <div
        className={[
          "w-full wrapper-space mx-[calc((100vw-var(--wrapper-space))/2) flex-shrink-0",
          "1025:w-[28.125rem] 1025:ml-[calc((100vw-var(--wrapper-space))/2)]",
        ].join(" ")}
      >
        <h2
          className={[
            "leading-[1.2] text-[1.75rem] 1367:text-[2.625rem] mb-[0.875rem]",
            "wrapper inline-block 1025-only:text-center",
          ].join(" ")}
        >
          <span>Temukan</span>{" "}
          <span className="font-semibold">promosi & berita terbaru kami</span>
        </h2>
        <CE_Tab
          options={DUMMY_DATA.map((data) => data.group)}
          attributeTargetId="section"
          attributeName={{ active: "active" }}
          className="wrapper-space 1025-only:mx-auto 1025-only:px-[var(--wrapper-space)]"
        />
        <p className="text-sm text-gray-600 mb-[0.875rem] 1025-only:text-center">
          Lihat pengumuman terbaru kami
        </p>
        <Link
          href="https://bri.co.id/announcement"
          className={[
            "uppercase flex items-center mb-7 w-max text-blue-700 font-medium",
            "hoverable:hover:underline 1025-only:mx-auto",
          ].join(" ")}
        >
          Lihat lebih banyak
        </Link>
        <CE_Buttons
          tabViewController={tabView}
          attributeTargetId="section"
          className="1025-only:hidden"
          attributeName={{ range: "range" }}
        />
      </div>
      <CE_TabViewForwardRef
        ref={tabView}
        contents={DUMMY_DATA.map((data) => data.contents)}
        attributeTargetId="section"
        attributeName={{
          active: "active",
          range: "range",
          activeRange: "activeRange",
          rangeLength: "rangeLength",
        }}
        className="mx-auto 1025:ml-auto 1025:mr-0"
      />
      <CE_ButtonsIdx
        tabViewController={tabView}
        attributeTargetId="section"
        className="1025:hidden"
        attributeName={{
          activeRange: "activeRange",
          rangeLength: "rangeLength",
        }}
      />
    </section>
  );
}
