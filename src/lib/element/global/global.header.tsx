"use client";

import useScrollActive from "@/lib/hook/useScroll";
import Image from "./image";

export default function GlobalHeader() {
  const isScrolling = useScrollActive();
  const headerTops = [
    {
      title: "Promosi",
      icon: "tag",
      link: "/",
    },
    {
      title: "Simulasi Keuangan",
      icon: "calculator",
      link: "/",
    },
    {
      title: "Lokasi",
      icon: "location",
      link: "/",
    },
    {
      title: "Bantuan",
      icon: "help",
      link: "/",
    },
    {
      title: "Cari",
      icon: "search",
      link: "/",
    },
    {
      title: "PPID",
      icon: "document",
      link: "/",
    },
  ];
  const headerBottoms = [
    {
      title: "INDIVIDU",
      subs: [
        {
          title: "Simpanan",
          items: [
            {
              title: "Tabungan",
            },
          ],
        },
        {
          title: "Simpanan",
          items: [
            {
              title: "Tabungan",
            },
          ],
        },
      ],
    },
    {
      title: "INDIVIDU2",
      subs: [
        {
          title: "Simpanan2",
          items: [
            {
              title: "Tabungan2",
            },
          ],
        },
        {
          title: "Simpanan2",
          items: [
            {
              title: "Tabungan2",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <header className={`${isScrolling ? "shadow-md" : "shadow-md"} relative`}>
        <div className="container py-5 ">
          <div className="flex items-center gap-5 justify-end mb-5">
            <div className="flex items-center gap-8">
              {headerTops.map((header, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-center">
                      {header.icon && (
                        <Image
                          src={`/images/headers/${header.icon}.svg`}
                          width={18}
                          height={18}
                          alt={`icon-${header.icon}`}
                          className="w-3 h-3 mr-2"
                        />
                      )}
                      <div className="text-sm">{header.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>|</div>
            <div className="flex items-center gap-5 text-sm">
              <div className="px-2 py-1 border border-orange-01 rounded-md">
                ID
              </div>
              <div>EN</div>
            </div>
          </div>
          <div className="flex items-end justify-between ">
            <div>
              <Image
                alt="logo-bri"
                src="/images/headers/logo-bri.png"
                width={128}
                height={53}
              />
            </div>
            <div>
              <div className="flex items-center gap-10 ">
                {headerBottoms.map((headerBottom, index) => {
                  return (
                    <div
                      key={index}
                      className="pb-2 group border-b-4 border-transparent hover:border-red-01 "
                    >
                      <div className="text-lg font-semibold cursor-pointer">
                        {headerBottom.title}
                      </div>
                      <div className="absolute left-0 w-full  hidden group-hover:block pt-10 ">
                        <div className="bg-white border">
                          <div className="container py-5">
                            <div className="text-2xl mb-3 font-bold">
                              {headerBottom.title}
                            </div>
                            <div className="flex ">
                              {headerBottom.subs.map((subItem, subIndex) => {
                                return (
                                  <div key={subIndex} className="mr-40">
                                    <div className="text-red-01 font-semibold">
                                      {subItem.title}
                                    </div>
                                    <div>
                                      {subItem.items.map((item, itemIndex) => {
                                        return (
                                          <div key={itemIndex}>
                                            <div className="flex items-center">
                                              {item.title}
                                              <Image
                                                src={`/images/headers/arrow-right.svg`}
                                                width={18}
                                                height={18}
                                                alt={`icon-arrow-right`}
                                                className="w-3 h-3 mr-2"
                                              />
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
