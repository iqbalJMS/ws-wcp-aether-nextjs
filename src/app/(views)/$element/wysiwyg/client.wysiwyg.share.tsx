'use client';
import FacebookIcon from '@/lib/element/global/facebook-icon';
import Link from '@/lib/element/global/link';
import LinkedinIcon from '@/lib/element/global/linkedin-icon';
import ShareIcon from '@/lib/element/global/share-icon';
import TwitterIcon from '@/lib/element/global/twitter-icon';
import WhatsappIcon from '@/lib/element/global/whatsapp-icon';
import { useState } from 'react';

export default function CE_WysiwygShaxre({ text }: { text: string }) {
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsShareOpen(!isShareOpen)}
      className="relative w-52 flex items-center justify-center py-4 rounded-full uppercase font-bold text-sm text-white bg-orange-400 hover:bg-gray-600 duration-300 cursor-pointer"
    >
      <span className="pr-2">
        <ShareIcon className="text-white" width={20} height={20} stroke="" />
      </span>
      Bagikan
      <div
        className={[
          'absolute w-full pt-4 top-12',
          'transition-opacity ease-in-out duration-200',
          isShareOpen ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        <div className="flex items-center justify-center space-x-2">
          <Link
            href={`https://x.com/intent/tweet?text=${text}`}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="fill-orange-400" height={35} width={35} />
          </Link>

          <Link
            href={`https://www.facebook.com/sharer/sharer.php?&quote=${text}`}
            target="_blank"
          >
            <FacebookIcon className="fill-orange-400" height={35} width={35} />
          </Link>

          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?text=${text}`}
            target="_blank"
          >
            <LinkedinIcon className="fill-orange-400" width={35} height={35} />
          </Link>

          <Link
            href={`https://web.whatsapp.com/send?text=${text}`}
            target="_blank"
          >
            <WhatsappIcon
              className="bg-orange-400 rounded-full p-[3px]"
              fill="#ffffff"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
