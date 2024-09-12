"use client";

import useScrollActive from "@/lib/hook/useScroll";
import Image from "./image";
import { T_ResponseGetTopMenuNavbar } from "@/api/navbar-menu/top-navbar/api.get-top-menu-navbar.type";
import { T_ResponseGetMainMenuNavbar } from "@/api/navbar-menu/main-navbar/api.get-main-menu-navbar.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LIST_LANGUAGES = ["ID", "EN"];

export default function GlobalHeader({
  headerTop,
  headerBottom,
  variant = 'transparent'
}: {
  headerTop: T_ResponseGetTopMenuNavbar;
  headerBottom: T_ResponseGetMainMenuNavbar;
  variant: 'transparent' | 'no-transparent'
}) {
  const pathname = usePathname();
  const currentLanguage = useSearchParams().get("lang")
  const router = useRouter();
  const isScrolling = useScrollActive();

  const onSwitchLanguages =(language: string) => {
      if (currentLanguage !== language) {
        const queryParams = new URLSearchParams({
          lang: language,
        }).toString();

        router.push(`${pathname}?${queryParams}`);
        router.refresh();
      }
    }

  return (
    <>
      <header
        className={`${isScrolling ? "bg-white shadow-md" : ""} z-50 fixed w-full ${variant === 'transparent' ? '' : 'bg-white'}`}
      >
        <div className="container py-5 ">
          <div className={`flex items-center gap-5 justify-end mb-5 ${isScrolling ? 'hidden' : ''}`}>
            <div className="flex items-center gap-8">
              {headerTop?.map((header, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-center">
                      {header.icon && (
                        <Image
                          extern
                          src={`${header.icon}`}
                          width={18}
                          height={18}
                          alt={`icon-${header.icon}`}
                          className="w-3 h-3 mr-2"
                        />
                      )}
                      <div className={`text-[0.813rem] font-light ${variant === 'transparent' ? 'text-white' : ''}`}>{header.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`${variant === 'transparent' ? 'text-white' : ''}`}>|</div>
            <div className="flex items-center gap-5 text-[0.813rem] font-light">
           
               {LIST_LANGUAGES.map((label) => (
                  <button
                    key={label}
                    onClick={() => onSwitchLanguages(label.toLowerCase())}
                    className={`text-xs p-1 px-2 rounded-md 
                      ${variant === 'transparent' ? 'text-white' : ''}
                      ${
                      (currentLanguage ?? "id")?.includes(label.toLowerCase())
                        ? "border border-orange-01"
                        : ""
                    }`}
                  >
                    {label}
                  </button>
                ))}
            </div>
          </div>
          <div className="flex items-end justify-between ">
            <div>
              <Image
                alt="logo-bri"
                src="/images/headers/logo-bri.png"
                width={128}
                height={53}
                className={`${isScrolling ? '' : 'filter brightness-0 invert'} `}
              />
            </div>
            <div>
              <div className="flex items-center gap-10 ">
                {headerBottom?.map((headerBottom, index) => {
                  return (
                    <div
                      key={index}
                      className="pb-2 group border-b-4 border-transparent hover:border-red-01 "
                    >
                      <div className={`
                        text-sm font-normal cursor-pointer uppercase relative 
                        
                        ${isScrolling ? 'text-black' : variant === 'transparent' ? 'text-white' : ''}
                        `}>
                        {headerBottom?.title}
                        <div className="bg-white w-5 h-5 absolute top-[230%] left-1/2 transform -translate-x-1/2 rotate-45 invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-200"></div>
                      </div>
                      <div className="absolute left-0 w-full invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 pt-10">
                        <div className="bg-white">
                          <div className="container py-5">
                            <div className="text-[1.5rem] mb-4 font-medium">
                              {headerBottom?.title}
                            </div>
                            <div className="flex">
                              {headerBottom?.below?.map((subItem, subIndex) => {
                                return (
                                  <div key={subIndex} className="mr-40">
                                    <div className="text-red-01 font-semibold mb-2">
                                      {subItem?.title}
                                    </div>
                                    <div>
                                      {subItem?.below?.map(
                                        (item, itemIndex) => {
                                          return (
                                            <div key={itemIndex}>
                                              <div className="flex items-center justify-between">
                                                {item.title}
                                                <Image
                                                  src={`/images/headers/arrow-right.svg`}
                                                  width={18}
                                                  height={18}
                                                  alt={`icon-arrow-right`}
                                                  className="w-3 h-3 ml-4"
                                                />
                                              </div>
                                            </div>
                                          );
                                        },
                                      )}
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
