'use client';
import React from 'react';
import Image from 'next/image';

import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';

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

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  cards,
}) => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 py-12 bg-gray-50">
        <div className="flex-1">
          {title && (
            <div className="font-semibold mb-4 text-3xl">
              {parseHTMLToReact(title)}
            </div>
          )}
          {description && (
            <p className="text-gray-600 text-lg">
              {parseHTMLToReact(description)}
            </p>
          )}
        </div>

        <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold">{card.bigTitle}</h3>

              {card?.details?.map((detail, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  {detail.title && (
                    <div className="text-gray-500 text-sm font-medium">
                      {parseHTMLToReact(detail.title)}
                    </div>
                  )}
                  {detail.description && (
                    <div className="text-gray-700 text-sm">
                      {parseHTMLToReact(detail.description)}
                    </div>
                  )}
                  {detail.link && (
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm underline"
                    >
                      {parseHTMLToReact(detail.link)}
                    </a>
                  )}
                  {detail?.icon && (
                    <div className="flex items-center gap-2">
                      {Object.entries(detail?.icon).map((item) => {
                        return (
                          <Link key={item[0]} href={item[1]}>
                            <Image
                              key={item[0]}
                              src={`/icons/${item[0]}.svg`}
                              alt={`/icons/${item[0]}.svg`}
                              width={18}
                              height={18}
                            />
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
  );
};

export default ContactSection;
