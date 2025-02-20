import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';

export default function SE_RelatedContent({
  dataContent,
  type,
}: {
  type: string;
  dataContent: {
    contents: Array<{
      nid: number;
      title: string;
      date: string;
      image?: string;
      startDate?: string;
      endDate?: string;
    }>;
  };
}) {
  const formatDateTimestamp = (date: string): string => {
    const now = new Date(date);
    const formattedDate = now.toLocaleString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedDate;
  };

  const urlLink = (id: string) => {
    switch (type) {
      case 'promo':
        return `/promo-detail/${id}`;
      case 'news':
        return `/news-detail/${id}`;
      case 'alert_mode':
        return `/waspada-modus-detail/${id}`;
      default:
        return '#';
    }
  };

  return (
    <div className="flex items-center md:flex-row flex-col gap-4">
      {dataContent.contents.map((data) => (
        <div
          key={data.nid}
          className="h-[300px] mdmax:max-w-[300px] relative rounded-xl overflow-hidden group cursor-pointer"
        >
          <Image
            src={data.image || '/web/guest/images/no-image.png'}
            width={0}
            height={0}
            alt=""
            sizes="100vw"
            className="w-full h-full object-cover group-hover:transform group-hover:scale-125 transition-transform ease-in-out duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full  group-hover:bg-[#014A94]/70 bg-transparent transition-all ease-in-out duration-300">
            <Link href={data.nid ? urlLink(data.nid.toString()) : '#'}>
              <div className="absolute z-10 bottom-10 px-5 flex flex-col gap-2">
                {data?.startDate ? (
                  <p className="line-clamp-1 text-lg text-white">
                    {data?.startDate} -{' '}
                    {data?.endDate ?? 'Tidak ada kedaluwarsa'}
                  </p>
                ) : (
                  <p className="line-clamp-1 text-lg text-white">
                    {formatDateTimestamp(data?.date)}
                  </p>
                )}
                {data.title && (
                  <div className="text-2xl font-semibold text-white line-clamp-2">
                    {data.title}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
