'use client';
import { useEffect, useState } from 'react';

import { ChevronRightIcon } from './chevron-right-icon';
import { ChevronUpIcon } from './chevron-up-icon';

type T_AccordionProps = {
  renderContent: React.ReactNode;
  renderTitle: React.ReactNode;
  isOpen?: boolean;
  variant?: 'full' | 'full-border' | 'rounded';
};

export default function Accordion({
  renderContent,
  isOpen,
  renderTitle,
  variant,
}: T_AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setAccordionOpen(true);
  }, [isOpen]);

  return (
    <section
      className={`${variant == 'rounded' ? 'shadow-lg rounded-[40px] px-4 py-4 border' : ''}`}
    >
      <div
        className={`${variant == 'full-border' ? 'border-b' : variant == 'full' ? 'rounded-lg bg-blue-01 px-4 py-4 text-white' : ''}`}
      >
        <div className={`${variant == 'full-border' ? 'container' : ''}`}>
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className={`${variant == 'full-border' || variant == 'rounded' || variant == 'full' ? 'border-none' : 'border-b'} ${styles.buttonContainer}`}
          >
            <div className="w-full">{renderTitle}</div>

            {accordionOpen ? (
              <ChevronUpIcon
                className={`${variant == 'full' ? 'stroke-white' : 'stroke-blue-02'}`}
                width={36}
                height={36}
                strokeWidth="2"
              />
            ) : (
              <ChevronRightIcon
                className={`${variant == 'full' ? 'stroke-white' : 'stroke-blue-02'}`}
                width={36}
                height={36}
                strokeWidth="2"
              />
            )}
          </button>
        </div>
      </div>
      <div
        className={`${styles.renderContent} ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">{renderContent}</div>
      </div>
    </section>
  );
}

const styles = {
  buttonContainer: 'flex items-center w-full',
  renderContent:
    'grid overflow-hidden transition-all duration-500 ease-in-out  ',
};
