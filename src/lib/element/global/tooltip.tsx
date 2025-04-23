'use client';

import React from 'react';

type T_TooltipProps = {
  description: string | React.ReactNode;
  variant?: 'simple' | 'complex';
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
};

export function Tooltip({
  description,
  variant = 'simple',
  position = 'top',
  children,
}: T_TooltipProps) {
  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full mb-2 left-1/2 transform -translate-x-1/2';
      case 'bottom':
        return 'top-full mt-2 left-1/2 transform -translate-x-1/2';
      case 'left':
        return 'right-full mr-2 top-1/2 transform -translate-y-1/2';
      case 'right':
        return 'left-full ml-2 top-1/2 transform -translate-y-1/2';
      default:
        return 'bottom-full mb-2 left-1/2 transform -translate-x-1/2';
    }
  };

  const tooltipStyles =
    variant === 'simple' ? 'bg-black' : 'bg-gray-800 shadow-lg';

  return (
    <div className="relative group w-fit">
      <div className="cursor-pointer">{children}</div>
      <div
        className={`invisible group-hover:visible absolute p-2 font-normal text-xs rounded-md bg-opacity-80 text-white ${tooltipStyles} ${getPositionClasses()} w-56`}
      >
        {description}
      </div>
    </div>
  );
}
