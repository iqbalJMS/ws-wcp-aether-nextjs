import React from 'react';
import { API_BASE_URL } from '@/app/(views)/$constant/variables';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

interface ProfileProps {
  name: string;
  description: string;
  imageUrl: string;
  backgroundUrl: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
  name,
  description,
  imageUrl,
  backgroundUrl,
}) => {
  return (
    <div
      className="relative w-full h-auto text-white py-8 px-4 lg:px-16"
      style={{
        backgroundImage: `url(${API_BASE_URL}${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#014a94]/85 z-0"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 p-8">
        <div
          className="flex-shrink-0 relative bg-top h-[480px] w-[400px] rounded-br-[4rem] overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${API_BASE_URL}${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div>
          {name && (
            <div className="text-xl leading-loose lg:text-4xl font-normal lg:w-9/12 text-white mb-4">
              {name}
            </div>
          )}
          {description && (
            <div className="text-white leading-loose text-sm font-light lg:text-base">
              {parseHTMLToReact(description)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
