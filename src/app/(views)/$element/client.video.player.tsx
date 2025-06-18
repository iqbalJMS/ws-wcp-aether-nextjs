'use client';

import React from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEnv } from '@/lib/hook/useEnv';

interface VideoPlayerVariant1Props {
  videoId?: string;
  title?: string;
  backgroundImage?: string;
  description?: string;
}

const VideoPlayerVariant1: React.FC<VideoPlayerVariant1Props> = ({
  videoId,
  title,
  backgroundImage,
  description,
}) => {
  const { baseUrl } = useEnv();
  return (
    <div className="relative flex flex-col items-center py-16 space-y-4">
      {title && <h2 className="text-4xl font-semibold">{title}</h2>}
      {description && (
        <h3 className="text-lg font-normal text-[#8A8CA0]">
          {parseHTMLToReact(description)}
        </h3>
      )}
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover opacity-30" />

      <div
        style={{
          backgroundImage: `url(${baseUrl}/api/files/?path=${backgroundImage})`,
        }}
        className="relative flex justify-center py-6 w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
      >
        <iframe
          className="w-full max-w-[41.25rem] h-64 sm:h-96"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

interface CompanyProfileProps {
  videoUrl?: string;
  title?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
}

const VideoPlayerVariant2: React.FC<CompanyProfileProps> = ({
  videoUrl,
  title,
  description,
  linkUrl,
  linkText,
}) => {
  return (
    <div className="container mx-auto bg-yellow-500">
      <div className="flex flex-col md:flex-row items-center bg-gray-100 py-12 px-6">
        <div>
          <iframe
            className="w-full aspect-video h-64 sm:h-96"
            src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-8 md:mt-0 md:ml-12 md:pl-12 w-full md:w-1/2">
          {title && (
            <div className="text-3xl font-bold mb-4">
              {parseHTMLToReact(title)}
            </div>
          )}
          {description && (
            <p className="text-gray-700 mb-6 body">
              {parseHTMLToReact(description)}
            </p>
          )}
          {linkText && (
            <a href={linkUrl} className="text-blue-600 hover:underline">
              {linkText} &gt;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { VideoPlayerVariant2, VideoPlayerVariant1 };
