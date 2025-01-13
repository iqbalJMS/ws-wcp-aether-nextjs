import Image from '@/lib/element/global/image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';
import React from 'react';

const AboutSection = ({
  bigTitle,
  title,
  description,
  textLink,
  hrefLink,
  image,
}: {
  bigTitle: string;
  title: string;
  description: string;
  textLink: string;
  hrefLink: string;
  image: string;
}) => {
  return (
    <section className="container mx-auto py-6">
      <section className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:hidden flex mt-10 lg:mt-0">
          <Image
            width={911}
            height={700}
            src={image}
            extern={false}
            alt="Tentang BRI"
            className="lg:h-[700px] h-[400px] lg:w-[911px] w-full"
          />
        </div>

        <div className="lg:w-1/2 lg:mt-0 mt-5 lg:text-left">
          {bigTitle && (
            <div className="text-[28px]">{parseHTMLToReact(bigTitle)}</div>
          )}

          <div className="lg:pl-6">
            {title && (
              <div className="mt-4 text-[28px] font-bold text-gray-800">
                {parseHTMLToReact(title)}
              </div>
            )}
            {description && (
              <div className="mt-4 text-base text-gray-[#8a8a8a]">
                {parseHTMLToReact(description)}
              </div>
            )}
            <Link
              href={hrefLink}
              className="mt-6 inline-flex items-center text-[#014a94] font-semibold transition duration-300"
            >
              {textLink}{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 hidden lg:flex mt-10 lg:mt-0">
          <Image
            width={911}
            height={700}
            src={image}
            extern={false}
            alt="Tentang BRI"
            className="h-[700px] w-[911px]"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
