'use client';

import Image from 'next/image';

type PromoCardProps = {
  title: string;
  description: string;
  linkText: string;
  imageUrl: string;
  reverse?: boolean;
};

const PromoCard = ({
  title,
  description,
  linkText,
  imageUrl,
  reverse = false,
}: PromoCardProps) => {
  return (
    <div
      className={`relative flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} mb-10`}
    >
      <div className="flex-1 flex flex-col justify-center p-6 md:max-w-[50%] z-10 bg-white">
        <h2 className="text-2xl font-bold mb-2">
          {title.split(' ')[0]}{' '}
          <span className="text-primary">{title.split(' ')[1]}</span>
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 font-semibold flex items-center">
          {linkText} <span className="ml-2">➔</span>
        </a>
      </div>

      <div className="flex-1 relative h-[300px] md:h-auto">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export const PromoCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <PromoCard
        title="Kartu Kredit"
        description="Kartu Kredit BRI memberikan kemudahan dan promo menarik di merchant-merchant pilihan mulai dari restoran, cafe, e-commerce, travel dan masih banyak lagi."
        linkText="Baca Lebih Lanjut"
        imageUrl="https://dummyimage.com/600x400/000/fff&text=Hello+world"
      />
      <PromoCard
        title="Lelang Asset"
        description="Informasi berbagai jenis aset, meliputi rumah tinggal, tanah kosong, pabrik, gudang, kendaraan, dsb yang dijual, baik melalui mekanisme lelang maupun jual damai dengan lokasi yang tersebar di seluruh Indonesia."
        linkText="Baca Lebih Lanjut"
        imageUrl="https://dummyimage.com/600x400/000/fff&text=Hello+world"
        reverse
      />
    </div>
  );
};

export default PromoCards;
