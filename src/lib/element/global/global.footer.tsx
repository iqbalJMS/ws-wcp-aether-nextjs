"use server";

import { LIST_TERMS } from "@/app/$action/constants";
import Image from "next/image";
import Link from "next/link";

import React from "react";

type T_RowElementProps = {
  label: string;
  socialMedia?: Array<{ name: string; icon: string; url: string }>;
  description: Array<{
    className?: string;
    name: string;
    icon?: string;
    url?: string;
    extern?: boolean;
  }>;
};

const RowElement = ({ description, label }: T_RowElementProps) => {
  return (
    <>
      <h1 className="text-blue-01 lg:mb-5 mb-2 font-semibold lg:text-xl text-lg">
        {label}
      </h1>
      {description?.map(({ className, name, icon, url }) => (
        <Link
          href={url ?? "/"}
          key={name}
          className={`text-blue-02 lg:px-0 px-8 flex items-center gap-2 lg:mb-3 mb-2 lg:text-sm text-sm justify-center lg:justify-start font-normal ${className}`}
        >
          {icon && (
            <Image
              src={`/images/footers/${icon}.svg`}
              width={18}
              height={18}
              alt={`icon-${icon}`}
            />
          )}
          {name}
        </Link>
      ))}
    </>
  );
};

function TermsAllReservedElement() {
  return (
    <div className="bg-blue-01 lg:py-[22px] py-4">
      <div className="text-center flex items-center lg:flex-row flex-col lg:container justify-between lg:px-0 px-4 lg:items-center lg:justify-between">
        <p className="text-white boxiner inline font-light text-sm !text-center">
          © 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.
        </p>

        <div className="items-center mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-center items-center">
            {LIST_TERMS?.map(({ url, value }, index) => (
              <div key={index}>
                <Link href={url} className="text-sm font-light text-white">
                  {value}
                </Link>
                {index + 1 !== LIST_TERMS.length && (
                  <span className="text-white mx-2">&#x2022;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function GlobalFooter() {
  return (
    <footer className="pt-6 lg:pt-11 shadow-[0_-4px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="lg:container text-center lg:text-left lg:mb-6">
        <div className="flex justify-center lg:justify-start">
          <Image
            alt="logo-bri"
            src="/images/headers/logo-bri.png"
            width={128}
            height={53}
          />
        </div>

        <div className="grid lg:grid-cols-9 grid-cols-1 lg:space-x-6 lg:mt-6 mt-3">
          <div className="lg:col-span-2 col-span-1 lg:mb-0 mb-4">
            <RowElement
              label={"Head Office BRI"}
              description={[
                {
                  name: "PT. Bank Rakyat Indonesia (Persero) Tbk",
                  className: "lg:max-w-[185px] px-24 lg:px-0 cursor-default",
                },
                {
                  name: "Gedung BRI Jl. Jenderal Sudirman Kav.44-46. Jakarta 10210 Indonesia",
                  className: "lg:max-w-[185px] px-24 lg:px-0 cursor-default",
                },
              ]}
            />
          </div>

          <div className="lg:col-span-2 col-span-1 lg:mb-0 mb-4">
            <RowElement
              label={"Contact Us"}
              description={[
                {
                  name: "14017 / 1500017",
                  icon: "call",
                  extern: true,
                  url: "tel:1500017",
                },
                {
                  name: "callbri@bri.co.id",
                  icon: "email",
                  extern: true,
                  url: "mailto:callbri@bri.co.id",
                },
              ]}
            />
          </div>

          <div className="lg:col-span-2 col-span-1 lg:mb-0 mb-4">
            <RowElement
              label={"Links"}
              description={[
                {
                  name: "BRI products",
                  url: "https://bri.co.id/bri-products",
                  extern: true,
                },
                {
                  name: "Deposit Interest",
                  extern: true,
                  url: "https://bri.co.id/deposit-interest",
                },
                {
                  name: "Rates",
                  url: "https://bri.co.id/kurs-detail",
                  extern: true,
                },
                {
                  name: "Loan Interest Rates",
                  url: "https://bri.co.id/loan-interest-rates",
                  extern: true,
                },
                {
                  name: "Whistleblowing System",
                  url: "https://whistleblowing-system.bri.co.id/",
                  extern: true,
                },
                {
                  extern: true,
                  url: "https://bri.co.id/web/erecruitment",
                  name: "Career",
                },
              ]}
            />
          </div>

          <div className="lg:col-span-3 col-span-1 lg:mb-0 mb-4">
            <RowElement
              label={"Registered & Supervised by:"}
              description={[
                {
                  className: "lg:px-0 px-16 cursor-default",
                  name: "BRI terdaftar dan diawasi oleh Otoritas Jasa Keuangan",
                },
                {
                  className: "cursor-default",
                  name: "BRI merupakan peserta penjamin LPS",
                },
              ]}
            />
          </div>
        </div>
      </div>

      <TermsAllReservedElement />
    </footer>
  );
}
