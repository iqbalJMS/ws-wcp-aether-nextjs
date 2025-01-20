'use client';
import Image from '@/lib/element/global/image';

export default function CE_CardCategoryPromo({
  label,
  image,
  nid,
  onChangeCategory,
  isSelect,
}: {
  label?: string;
  image?: string;
  nid: number;
  isSelect: boolean;
  // eslint-disable-next-line no-unused-vars
  onChangeCategory: (nid: number) => void;
}) {
  function handleClick() {
    onChangeCategory(nid);
  }

  return (
    <div
      className={`rounded-3xl py-6 mb-8 flex flex-col items-center cursor-pointer group ${isSelect ? 'bg-gradient-to-b from-[#0973df] from-0% to-[#004c9b] to-100%' : 'bg-[#f5f5f5] hover:bg-gradient-to-b from-[#0973df] from-0% to-[#004c9b] to-100%'}`}
      onClick={handleClick}
    >
      {image && (
        <div
          className={`mb-4 ${isSelect ? 'filter brightness-0 invert' : 'group-hover:filter group-hover:brightness-0 group-hover:invert'}`}
        >
          <Image
            src={image}
            alt={label ?? ''}
            width={100}
            height={100}
            className="w-auto max-w-full"
          />
        </div>
      )}
      {label && (
        <p
          className={`text-center line-clamp-1 ${isSelect ? 'text-white' : 'text-[#014A94] group-hover:text-white '}`}
        >
          {label}
        </p>
      )}
    </div>
  );
}
