'use client';

import React, { useState, useEffect } from 'react';
import Image from '@/lib/element/global/image';

interface SocialMedia {
  name: string;
  icon: string;
  url: string;
  className?: string;
}

interface ShareIconClientProps {
  socialMedia: SocialMedia[];
}

const ShareIconClient: React.FC<ShareIconClientProps> = ({ socialMedia }) => {
  const [isSosmedOpen, setIsSosmedOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (!target.closest('.share-icon-container') && isSosmedOpen) {
        setIsSosmedOpen(false);
      }
    };

    if (isSosmedOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSosmedOpen]);

  return (
    <div className="share-icon-container relative">
      <button
        onClick={() => setIsSosmedOpen((prev) => !prev)}
        className="bg-orange-400 text-white font-bold py-2 px-4 rounded-full uppercase text-sm ml-3"
      >
        SHARE
      </button>

      {isSosmedOpen && (
        <div className="absolute right-0 top-10 bg-white shadow-md rounded-md p-3 z-50 flex space-x-4">
          {Array.isArray(socialMedia) && socialMedia.length > 0 ? (
            socialMedia.map((socialItem, index) => {
              const handleSocialClick = (
                e: React.MouseEvent<HTMLAnchorElement>
              ): void => {
                e.preventDefault();
                window.open(socialItem.url, '_blank', 'width=600,height=400');
              };

              return (
                <a
                  key={index}
                  href={socialItem.url || '/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 lg:text-sm text-sm justify-center font-normal"
                  onClick={handleSocialClick}
                >
                  {socialItem.icon && (
                    <div className="w-6 h-6 overflow-hidden">
                      <Image
                        src={`/web/guest/images/footers/${socialItem.icon}.svg`}
                        width={20}
                        height={20}
                        extern={true}
                        alt={`icon-${socialItem.icon}`}
                      />
                    </div>
                  )}
                </a>
              );
            })
          ) : (
            <div className="text-gray-600 px-2 py-1">
              No sharing options available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShareIconClient;
