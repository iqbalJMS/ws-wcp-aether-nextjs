import React from 'react';
import { T_Icon } from '@/lib/types/icon';

export default function FacebookIcon({
  className,
  width,
  height,
  fill,
}: T_Icon) {
  return (
    <main>
      <svg
        className={className}
        fill={fill}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        viewBox="0 0 97.75 97.75"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
		 M67.521,24.89l-6.76,0.003c-5.301,0-6.326,2.519-6.326,6.215v8.15h12.641L67.07,52.023H54.436v32.758H41.251V52.023H30.229V39.258
		h11.022v-9.414c0-10.925,6.675-16.875,16.42-16.875l9.851,0.015V24.89L67.521,24.89z"
          />
        </g>
      </svg>
    </main>
  );
}
