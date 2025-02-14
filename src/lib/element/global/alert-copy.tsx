import React from 'react';
import successIcon from '@/../../public/images/icon-menu/success-filled-svgrepo-com.svg';
import closeIcon from '@/../../public/images/icon-menu/close-bold-svgrepo-com.svg';
import Image from 'next/image';

const AlertCopy = ({
  alertOpen,
  closeAlert,
}: {
  alertOpen: boolean;
  closeAlert: () => void;
}) => {
  return (
    <div
      className={
        !alertOpen
          ? 'hidden'
          : 'overflow-y-auto overflow-x-hidden fixed bottom-0 right-0 left-0 z-50 justify-center items-center w-full h-screen md:inset-0 max-h-full'
      }
    >
      <div
        className="flex justify-start items-end p-5 lg:p-4 w-full h-screen"
        onClick={() => closeAlert()}
      >
        <div className="relative w-72 h-14 flex justify-center items-center bg-[#D4EDDA] border-[#155724] border-2 rounded shadow">
          <div className="w-60 flex items-center">
            <Image
              src={successIcon}
              alt={'success-icon'}
              height={18}
              width={18}
            />
            <h1 className="text-xs text-[#328042]">
              <span className="font-bold px-2">Success:</span>
              the url has been copied
            </h1>
          </div>
          <Image
            className="cursor-pointer"
            src={closeIcon}
            alt={'close-icon'}
            height={18}
            width={18}
          />
        </div>
      </div>
    </div>
  );
};

export default AlertCopy;
