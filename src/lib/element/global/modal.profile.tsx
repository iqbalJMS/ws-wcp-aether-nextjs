'use client';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Image from 'next/image';
import React, { useRef } from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose?: () => void;
  hasButtonClose?: boolean;
  user: {
    title?: string;
    position?: string;
    description?: string;
    image?: string;
  };
}

const CE_ModalProfile: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  hasButtonClose,
  user,
}) => {
  const elementModal = useRef<HTMLDivElement>(null);
  useOnClickOutside(elementModal, () => onClose?.());

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-2xl w-[60rem] p-8 relative"
        ref={elementModal}
      >
        {hasButtonClose && (
          <button
            onClick={onClose}
            className="absolute flex items-center gap-2 top-3 right-5 text-gray-500 hover:text-gray-800"
          >
            <p className="bg-yellow-500 flex items-center justify-center h-5 w-5 rounded-full text-white text-xs">
              ✕
            </p>
            Close
          </button>
        )}
        <div className="flex items-start gap-6 py-8">
          <div className="aspect-square rounded-lg w-full max-w-[22rem] shadow-lg relative">
            <Image
              fill
              alt="user-profile"
              className="rounded-xl"
              src={
                user?.image ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&s'
              }
            />
          </div>

          <div className="text-left w-full">
            {user?.title && (
              <h2 className="text-2xl font-bold mt-4">{user?.title}</h2>
            )}
            {user?.position && (
              <p className="text-sm text-blue-500 font-semibold mb-6 mt-2">
                {user?.position}
              </p>
            )}
            {user?.description && (
              <div className="mb-2 text-xl">
                {parseHTMLToReact(user?.description)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CE_ModalProfile;
