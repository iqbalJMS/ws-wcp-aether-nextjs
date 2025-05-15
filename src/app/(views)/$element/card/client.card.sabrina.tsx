import React from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { handleurl } from '@/lib/functions/client/handle-url';
import { BASE_URL } from '@/app/(views)/$constant';

interface IProfileSabrina {
  name: string;
  description: string;
  imageUrl: string;
  backgroundUrl: string;
  buttonChatSabrina: {
    text: string;
    url: string;
  };
  buttonSiapaSabrina: {
    text: string;
    url: string;
  };
}

const CardSabrina: React.FC<IProfileSabrina> = ({
  name,
  description,
  imageUrl,
  backgroundUrl,
  buttonChatSabrina,
  buttonSiapaSabrina,
}) => {
  return (
    <div
      className="relative w-full h-auto text-white"
      style={{
        backgroundImage: `url(${BASE_URL}/api/files/?path=${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!backgroundUrl ? (
        <div className="absolute inset-0 bg-white z-0"></div>
      ) : (
        <div className="absolute inset-0 bg-[#014a94]/85 z-0"></div>
      )}

      <div className="container grid lg:grid-cols-2 lg:h-[450px] h-full relative z-10">
        <div className="col-span-1 flex flex-col justify-center lg:py-0 py-4">
          {name && (
            <div
              className={` text-2xl leading-loose lg:text-4xl lg:w-9/12 font-semibold mb-4 ${!backgroundUrl ? ' text-black ' : 'text-white'} `}
            >
              {name}
            </div>
          )}
          {description && (
            <div
              className={`leading-7 text-sm font-light lg:w-9/12 w-full lg:text-base ${!backgroundUrl ? 'text-black' : 'text-white'} `}
            >
              {parseHTMLToReact(description)}
            </div>
          )}

          <div className="flex gap-2 items-center mt-5">
            {buttonSiapaSabrina?.text && (
              <Link
                className="py-3 px-6 text-white bg-[#f59725] rounded-full"
                href={handleurl(buttonSiapaSabrina?.url) ?? ''}
              >
                {buttonSiapaSabrina?.text}
              </Link>
            )}
            {buttonChatSabrina?.text && (
              <Link
                className="py-3 px-6 text-white bg-[#f59725] rounded-full"
                href={buttonChatSabrina?.url ?? ''}
              >
                {buttonChatSabrina?.text}
              </Link>
            )}
          </div>
        </div>
        <div className="col-span-1 overflow-hidden flex justify-center">
          <div className="relative lg:w-[600px] w-full h-[480px] object-fill bottom-0">
            <Image
              extern={false}
              alt="image"
              src={`${BASE_URL}/api/files/?path=${imageUrl}`}
              fill
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSabrina;
