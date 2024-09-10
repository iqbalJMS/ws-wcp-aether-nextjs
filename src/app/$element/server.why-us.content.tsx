import Link from "next/link";
import SE_WhyUsItem from "./server.why-us.item";
import { ArrowDownIcon } from "@/lib/element/global/arrow-down-icon";

type T_WhyUsContentProps = {
  bg_image: string;
  title: string;
  subtitle: string;
  textLink: string;
  list_items: Array<{
    image: string;
    title: string;
    description: string;
  }>;
};

export default function SE_WhyUsContent({
  title,
  subtitle,
  textLink,
  list_items,
  bg_image,
}: T_WhyUsContentProps) {
  const backgroundImg = bg_image
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bg_image}`
    : "";
  return (
    <section
      className="w-full bg-no-repeat pt-20 pb-12"
      style={{
        backgroundImage: `url(${
          backgroundImg || "images/why-us/bg-image.jpg"
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <h2 className="font-medium md:text-4xl text-3xl mdmax:text-center mb-4">
          {title || "Mengapa memilih BRI"}
        </h2>
        <p className="text-[#627d92] font-normal md:text-xl text-lg md:max-w-4xl leading-8 mdmax:text-center">
          {subtitle ||
            "Melayani lebih dari 128 tahun, Bank BRI senantiasa memberikan kemudahan dan kecepatan dalam merespon berbagai kebutuhan nasabah dengan didukung oleh layanan perbankan yang prima."}
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-12 md:max-w-4xl max-w-[90%]">
          {list_items.map((item, index) => (
            <SE_WhyUsItem key={index} list_item={item} />
          ))}
        </div>
        <div className="w-full">
          <Link
            className="text-blue-02 mdmax:text-sm font-bold flex items-center"
            href={"#"}
          >
            {textLink || "CARI TAHU LEBIH LANJUT TENTANG BRI"}
            <ArrowDownIcon className="-rotate-90 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
