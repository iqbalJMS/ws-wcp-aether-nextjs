'use client';

import React from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEnv } from '@/lib/hook/useEnv';

interface ProfileProps {
  title?: string;
  position?: string;
  description?: string;
  imageUrl?: string;
  backgroundUrl?: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
  title,
  position,
  description,
  imageUrl,
  backgroundUrl,
}) => {
  const { baseUrl } = useEnv();
  return (
    <div
      className="relative w-full h-auto text-white py-8 px-4 lg:px-16"
      style={{
        backgroundImage: `url(${baseUrl}/api/files/?path=${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#ffff]/90 z-0"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 p-8">
        <div
          className="flex-shrink-0 relative bg-top h-[480px] w-[400px] rounded-br-[4rem] overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${baseUrl}/api/files/?path=${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div>
          {position && (
            <div className="text-xl leading-loose lg:text-4xl font-semibold text-black mb-4">
              {position}
            </div>
          )}
          {title && (
            <div className="text-xl leading-loose lg:text-4xl font-semibold text-blue-01 mb-6">
              {title}
            </div>
          )}
          {description && (
            <div className="text-[#627d92] leading-loose text-sm lg:text-base">
              {parseHTMLToReact(description)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
