'use client';
import React from 'react';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from '@/lib/element/global/link';

interface CardDetail {
  title?: string;
  description?: string;
  link?: string;
  icon?: 'facebook' | 'instagram' | 'twitter';
}

interface Card {
  bigTitle: string;
  details: CardDetail[];
}

interface ContactSectionProps {
  title: string;
  description: string;
  cards: Card[];
}

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-facebook"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-twitter"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-instagram"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-youtube"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const iconComponents = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  youtube: <YouTubeIcon />,
};

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  cards,
}) => {
  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 py-12">
          <div className="flex-1">
            {title && (
              <div className="mb-4 text-3xl">{parseHTMLToReact(title)}</div>
            )}
            {description && (
              <p className="text-lg font-light lg:w-1/2 w-full">
                {parseHTMLToReact(description)}
              </p>
            )}
          </div>

          <div className="flex-[2] flex flex-wrap gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white w-[380px] shadow-md rounded-lg p-7 flex flex-col gap-4"
              >
                <h3 className="text-xl font-semibold">{card.bigTitle}</h3>

                {card?.details?.map((detail, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    {detail.title && (
                      <div className="text-gray-500 text-sm font-medium">
                        {parseHTMLToReact(detail.title)}
                      </div>
                    )}
                    {detail.description && (
                      <div className="text-black text-sm text-poppins font-">
                        {parseHTMLToReact(detail.description)}
                      </div>
                    )}
                    {detail.link && (
                      <a
                        href={detail.link}
                        target="_self"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-sm underline"
                      >
                        {parseHTMLToReact(detail.link)}
                      </a>
                    )}
                    {detail?.icon && (
                      <div className="flex items-center gap-2">
                        {Object.entries(detail?.icon)?.map((item) => {
                          return (
                            <Link
                              extern={false}
                              key={item?.[0]}
                              href={item?.[1]}
                              target="_self"
                              className="bg-[#014a94] flex items-center justify-center h-7 w-7 text-white p-2 rounded-full"
                              rel="noopener noreferrer"
                            >
                              {/* @ts-ignored */}
                              {iconComponents?.[item[0]]}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
