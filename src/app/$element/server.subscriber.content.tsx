import CE_SubscriberForm from "./client.subscriber.form";

type T_SubscriberContentProps = {
  bg_image?: string;
};

export default function SE_SubscriberContent({
  bg_image,
}: T_SubscriberContentProps) {
  return (
    <section className="py-24">
      <div className="container md:flex items-center">
        <div className="relative md:h-96 h-72 md:w-[60%] w-full">
          <div
            style={{
              backgroundImage: `url(${
                bg_image || "images/subscriber/subscribe-backg.png"
              })`,
              backgroundSize: "cover",
            }}
            className="bg-no-repeat w-full h-full absolute mdmax:-left-12 z-[2]"
          ></div>
          <h2 className="absolute top-1/3 md:ml-56 ml-28 mt-4 md:text-3xl text-xl md:pr-16">
            Dapatkan <b className="text-red-500">berbagai penawaran menarik</b>{" "}
            dari <b className="text-red-500">BRI</b> di inbox email Anda
          </h2>
        </div>
        <CE_SubscriberForm />
      </div>
    </section>
  );
}
