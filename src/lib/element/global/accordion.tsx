'use client';

import { useEffect, useState } from 'react';

import { ChevronDownIcon } from './icons/chevron-down-icon';
import { ChevronRightIcon } from './icons/chevron-right-icon';
import Image from './image';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export type T_AccordionProps = {
  renderContent: React.ReactNode;
  renderTitle: React.ReactNode;
  isOpen?: boolean;
  variant?: 'full' | 'full-border' | 'rounded' | 'none';
  imageTitle?: string;
  content: string;
};

export default function Accordion({
  renderContent,
  renderTitle,
  imageTitle,
  variant,
  content,
  isOpen = false,
}: T_AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(Boolean(isOpen));

  useEffect(() => {
    setAccordionOpen(Boolean(isOpen));
  }, [isOpen]);

  return (
    <>
      <section
        className={`${variant == 'rounded' ? 'shadow-lg rounded-[2.5rem] p-4' : ''}`}
      >
        <div
          className={`${variant == 'full-border' ? 'border-b' : variant == 'full' ? 'rounded-lg bg-blue-01 p-4 text-white' : ''}`}
        >
          {/*<div className={`${variant == 'full-border' ? '' : ''}`}>*/}
          <div>
            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className={`${variant == 'full-border' || variant == 'rounded' || variant == 'full' || variant == 'none' ? 'border-none' : 'border-b'} flex py-4 items-center w-full`}
            >
              <div className="flex items-center justify-between w-full">
                {imageTitle ? (
                  <div className="flex items-center">
                    <div className="w-10 h-10 inline-flex items-center justify-center">
                      <Image
                        extern={true}
                        src={imageTitle}
                        alt="icon"
                        width={36}
                        height={36}
                        className="object-cover"
                      />
                    </div>
                    {renderTitle}
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex-grow">{renderTitle}</div>

                    <span className="ml-1">
                      {accordionOpen ? (
                        <ChevronDownIcon
                          className={`${variant == 'full' ? 'stroke-white' : 'stroke-gray-700'}`}
                          width={28}
                          height={28}
                          strokeWidth="2"
                        />
                      ) : (
                        <ChevronRightIcon
                          className={`${variant == 'full' ? 'stroke-white' : 'stroke-gray-700'}`}
                          width={28}
                          height={28}
                          strokeWidth="2"
                        />
                      )}
                    </span>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden pl-0" style={{ color: '#627d92' }}>
            {content ? parseHTMLToReact(content) : renderContent}
          </div>
        </div>
      </section>
    </>
  );
}
