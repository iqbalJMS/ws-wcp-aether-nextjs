"use server";
import Image from "@/lib/element/global/image";
import { parseHTMLToReact } from "@/lib/functions/global/htmlParser";

type T_WhyUsItemProps = {
  list_item: {
    image: string;
    text: string;
  };
};

export default async function SE_WhyUsItem({ list_item }: T_WhyUsItemProps) {
  return (
    <div className="flex gap-4">
      <div className="md:w-1/4">
        <Image
          extern
          src={list_item.image}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-16 h-auto"
        />
      </div>
      <div className="w-full">{parseHTMLToReact(list_item.text ?? "")}</div>
    </div>
  );
}
