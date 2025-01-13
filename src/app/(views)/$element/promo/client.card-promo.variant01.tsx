import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

export default function CE_CardPromoVariant01({
  image,
  title,
  startDate,
  endDate,
  nid,
}: {
  image?: string;
  title?: string;
  startDate?: string;
  endDate?: string;
  nid?: number;
}) {
  const formatDate = (date: string) => {
    const now = new Date(date);
    const formattedDate = now.toLocaleString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
    return formattedDate;
  };

  return (
    <Link href={nid ? `/promo-detail/${nid}` : '#'} target="_blank">
      <div className="h-[300px] mdmax:max-w-[300px] relative rounded-xl overflow-hidden group cursor-pointer">
        {image && (
          <Image
            src={image}
            width={0}
            height={0}
            alt=""
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#014A94]/70 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300">
          <div className="absolute z-10 bottom-10 px-5 flex flex-col gap-2">
            {title && (
              <div className="text-2xl font-semibold text-white">{title}</div>
            )}
            {startDate && endDate && (
              <div className="text-white">
                {formatDate(startDate)} - {formatDate(endDate)}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
