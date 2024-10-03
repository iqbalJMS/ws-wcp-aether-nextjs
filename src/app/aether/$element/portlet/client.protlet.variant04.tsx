'use client';

import Image from 'next/image';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  imageSrc,
  link,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 my-10">
      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <a href={link} className="text-blue-500 mt-4 inline-flex items-center">
          Baca Lebih Lanjut <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

const InfoCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <InfoCard
        title="Kartu Kredit"
        description="Kartu Kredit BRI memberikan kemudahan dan promo menarik di merchant-merchant pilihan mulai dari restoran, cafe, e-commerce, travel dan masih banyak lagi"
        imageSrc="/path-to-image1.jpg"
        link="#"
      />
      <InfoCard
        title="Lelang Asset"
        description="Informasi berbagai jenis aset, meliputi rumah tinggal, tanah kosong, pabrik, gudang, kendaraan, dsb yang dijual, baik melalui mekanisme lelang maupun jual damai..."
        imageSrc="/path-to-image2.jpg"
        link="#"
      />
    </div>
  );
};

export default InfoCards;
