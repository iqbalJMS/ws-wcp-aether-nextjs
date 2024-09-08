"use client";

import Image from "@/lib/element/global/image";
import Modal from "@/lib/element/global/modal";
import { useState } from "react";
import { T_IconList } from "@/app/$action/constants";

type T_IconMainProps = {
  maxListShow?: number;
  list: T_IconList[];
};

type T_IconMenuProps = {
  image: string;
  title?: string;
  variant?: "config" | "main";
  hover?: "selected" | "main";
};

function CE_IconMenu({
  image,
  title,
  variant = "main",
  hover = "main",
}: T_IconMenuProps) {
  return (
    <div
      className={`
       text-center cursor-pointer relative  group
        ${
          hover === "selected"
            ? "border-[.2rem] border-dashed hover:border-solid p-5 rounded-xl"
            : "px-5 pb-5"
        }
      `}
    >
      <div
        className={`w-14 h-14 inline-block mb-4 ${
          variant === "main"
            ? ""
            : "rounded-full shadow-md flex items-center justify-center"
        }`}
      >
        <Image
          src={image}
          alt="image"
          width={200}
          height={200}
          className={`${
            variant === "main" ? "w-full h-full" : "w-[60%] h-[60%]"
          } object-contain`}
        />
      </div>
      {variant === "main" && (
        <>
          <div className="uppercase font-semibold">{title}</div>
          {hover === "main" && (
            <div className="absolute bottom-0 left-0 w-full h-2 px-5">
              <div className="bg-red-01 w-full h-2 rounded-full transition-all ease-in-out duration-300 group-hover:opacity-100 opacity-0"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function CE_IconMain({ maxListShow = 1, list }: T_IconMainProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="overflow-hidden relative py-10 container">
        <div className="border-b-2 border-black border-opacity-50">
          <div className="flex justify-center -mx-5 ">
            {list.map((listItem, listIndex) => {
              return (
                listIndex < maxListShow && (
                  <CE_IconMenu
                    key={listIndex}
                    image={`/images/dummy/${listItem.image}`}
                    title={listItem.title}
                  />
                )
              );
            })}
            {list.length > maxListShow && (
              <div onClick={() => setShowModal(true)}>
                <CE_IconMenu
                  image="/images/icon-menu/config.png"
                  variant="config"
                />
              </div>
            )}
          </div>
        </div>
        <Modal open={showModal} setOpen={setShowModal}>
          <div>
            <div className="text-center font-semibold text-xl mb-2">
              Personalisasi Link Cepat
            </div>
            <div className="text-center  mb-4">
              Silakan dan pilih hingga {maxListShow} link cepat rutin perbankan
              favorit Anda.
            </div>
            <div className="flex justify-center -mx-2">
              {list.map((listItem, listIndex) => {
                return (
                  <div key={listIndex} className="w-1/4 px-2">
                    <CE_IconMenu
                      key={listIndex}
                      image={`/images/dummy/${listItem.image}`}
                      title={listItem.title}
                      hover="selected"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
