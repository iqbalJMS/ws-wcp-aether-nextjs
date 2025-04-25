'use client';

import { T_CarouselMainProps } from '@/app/(views)/$constant/types';
import { CE_CarouselVariant01 } from './client.carousel.variant01';
import { CE_CarouselVariant02 } from './client.carousel.variant02';
import { CE_CarouselVariant03 } from './client.carousel.variant03';
import { CE_CarouselVariant04 } from './client.carousel.variant04';
import { CE_CarouselVariant05 } from './client.carousel.variant05';
import { CE_CarouselVariant07 } from './client.carousel.variant07';

export default function CE_CarouselMain({
  data,
  title,
  button,
  description,
  variant = '01',
}: T_CarouselMainProps) {
  return (
    <>
      {variant === '01' && (
        <CE_CarouselVariant01
          data={data}
          title={title}
          button={button}
          description={description}
        />
      )}
      {variant === '02' && (
        <CE_CarouselVariant02 data={data} title={title} button={button} />
      )}
      {variant === '03' && (
        <CE_CarouselVariant03
          data={data}
          title={title}
          button={button}
          description={description}
        />
      )}
      {variant === '04' && (
        <CE_CarouselVariant04
          data={data}
          title={title}
          button={button}
          description={description}
        />
      )}
      {variant === '05' && (
        <CE_CarouselVariant05
          data={data}
          title={title}
          button={button}
          description={description}
        />
      )}
      {variant === '07' && (
        <CE_CarouselVariant07
          data={data}
          title={title}
          button={button}
          description={description}
        />
      )}
    </>
  );
}
