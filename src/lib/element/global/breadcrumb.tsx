'use client';

import { T_BreadcrumbProps } from '@/app/(views)/$constant/types/widget/breadcrumb';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Breadcrumb: React.FC<T_BreadcrumbProps> = ({ paths, pathsSecondary }) => {
  const [pathsValue, setPathsValue] =
    React.useState<T_BreadcrumbProps['paths']>(paths);

  useEffect(() => {
    const pathsPrev = sessionStorage.getItem('path-breadcrumb');

    if (paths) {
      sessionStorage.setItem('path-breadcrumb', JSON.stringify(paths));
    } else if (pathsSecondary && pathsPrev) {
      const pathsPrevValue = JSON.parse(pathsPrev);
      setPathsValue(pathsPrevValue.concat(pathsSecondary));
    } else if (pathsSecondary && !pathsPrev) {
      setPathsValue(pathsSecondary);
    } else {
      sessionStorage.removeItem('path-breadcrumb');
      setPathsValue([]);
    }
  }, [paths, pathsSecondary]);

  return (
    <nav
      className="flex justify-center flex-wrap items-center border-b border-gray-400 pb-6 -mt-6"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex flex-wrap items-center justify-center space-x-1 md:-space-x-1 text-center">
        {pathsValue?.map((path, index) => (
          <li
            key={index}
            className="inline-flex items-center justify-center space-x-1"
          >
            {index !== pathsValue?.length - 1 ? (
              <Link
                href={path?.href ?? '/'}
                className="inline-flex items-center uppercase font-light text-sm text-gray-700 hover:text-blue-700"
              >
                {path.name}
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 6.293a1 1 0 011.414 0L14 9.586a1 1 0 010 1.414l-3.293 3.293a1 1 0 01-1.414-1.414L11.586 10 9.293 7.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <span className="text-sm uppercase font-light text-blue-700">
                {path.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
