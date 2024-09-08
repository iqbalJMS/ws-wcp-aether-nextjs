"use server";
import Image from "next/image";

type T_WhyUsItemProps = {
  list_item: {
    image: string;
    title: string;
    description: string;
  };
};

export default async function SE_WhyUsItem({ list_item }: T_WhyUsItemProps) {
  return (
    <div className="flex gap-4">
      <div className="md:w-1/4">
        <Image
          src={list_item.image}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-16 h-auto"
        />
      </div>
      <div className="w-full">
        <h3 className="text-blue-02 md:text-xl text-lg font-bold mb-2">
          {list_item.title}
        </h3>
        <p className="text-[#627d92] mdmax:text-sm">{list_item.description}</p>
      </div>
    </div>
  );
}
