import ButtonSecondary from '@/lib/element/global/button.secondary';
import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEnv } from '@/lib/hook/useEnv';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export function CE_BannerVariant01({
  data,
  slider_variant,
}: {
  data: Array<{
    image: string;
    title: string;
    desc: string;
    button: string;
    buttonLink: string;
    alignment: 'left' | 'center' | 'right' | 'justify';
  }>;
  slider_variant?: string;
}) {
  const { baseUrl } = useEnv();
  const [index, setIndex] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === data?.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data?.length]);

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex === data?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data?.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    setTranslateX(deltaX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 50) {
      goToPrevious();
    } else if (translateX < -50) {
      goToNext();
    }

    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  return (
    <section className="pb-5">
      <div className="relative">
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
          className={`overflow-hidden relative h-[50rem] mdmax:h-[30rem] z-10 ${
            slider_variant === 'header_curved' 
              ? 'rounded-br-[14rem] mdmax:rounded-br-[7rem]' 
              : ''
          }`}
        >
          {data?.map((bannerItem, bannerIndex: number) => {
            const { alignment } = bannerItem;
            return (
              <div
                key={bannerIndex}
                className={`
                  absolute w-full h-full top-0 left-0
                  transition-all ease-in-out duration-500
                  ${bannerIndex === index ? '' : 'opacity-0'}
                  `}
              >
                <div className="h-full relative">
                  {bannerItem?.image && (
                    <Image
                      extern={false}
                      src={`${baseUrl}/api/files/?path=${bannerItem.image}`}
                      alt="image"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 left-0 w-full">
                    <div className="container">
                      {alignment === 'right' ? (
                        <div className="w-full max-w-[700px] ml-auto mr-0">
                          <div className="flex flex-col gap-4 items-start text-left">
                            {bannerItem?.title && (
                              <div className="text-[4rem] mdmax:text-3xl font-semibold text-white">
                                {parseHTMLToReact(bannerItem?.title)}
                              </div>
                            )}
                            {bannerItem?.desc && (
                              <div className="text-[1rem] mdmax:text-sm font-medium text-white mb-10">
                                {parseHTMLToReact(bannerItem?.desc)}
                              </div>
                            )}
                            {bannerItem?.button && (
                              <Link href={bannerItem?.buttonLink ?? '#'}>
                                <ButtonSecondary
                                  size="lg"
                                  color="red-01"
                                  rounded="full"
                                  className="px-20"
                                >
                                  {bannerItem?.button}
                                </ButtonSecondary>
                              </Link>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`
                            flex flex-col
                            ${alignment === 'left' ? 'items-start text-left' : ''}
                            ${
                              alignment === 'center'
                                ? 'items-center text-center'
                                : ''
                            }
                            ${
                              alignment === 'justify'
                                ? 'items-stretch text-justify'
                                : ''
                            }
                          `}
                        >
                          {bannerItem?.title && (
                            <div className="text-[4rem] mdmax:text-3xl font-semibold text-white max-w-4xl">
                              {parseHTMLToReact(bannerItem?.title)}
                            </div>
                          )}
                          {bannerItem?.desc && (
                            <div className="text-[1rem] mdmax:text-sm font-medium text-white mb-10 max-w-4xl">
                              {parseHTMLToReact(bannerItem?.desc)}
                            </div>
                          )}
                          {bannerItem?.button && (
                            <Link href={bannerItem?.buttonLink ?? '#'}>
                              <ButtonSecondary
                                size="lg"
                                color="red-01"
                                rounded="full"
                                className="px-20"
                              >
                                {bannerItem?.button}
                              </ButtonSecondary>
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className={`absolute left-0 bottom-0 w-full h-[30%] bg-gradient-to-t from-[#94183d] to-[rgba(148,24,61,0)] opacity-60 z-10 ${
              slider_variant === 'header_curved' 
                ? 'rounded-br-[14rem]' 
                : ''
            }`}
          ></div>
        </div>
        {data?.length > 1 && (
          <div
            className={[
              'absolute top-1/2 z-30 right-0 w-full',
              'mdmax:top-[initial] mdmax:bottom-32 mdmax:right-[initial] mdmax:left-1/2 mdmax:-translate-x-1/2 mdmax:w-[initial]',
            ].join(' ')}
          >
            <div className="container text-right">
              <div className="-mt-10 mdmax:m-0 mdmax:flex mdmax:gap-2 inline-block">
                {data?.map((_: any, bannerIndex: number) => (
                  <button
                    key={bannerIndex}
                    type="button"
                    className={[
                      'w-5 h-5 rounded-full bg-red-01 mb-3 ',
                      'mdmax:w-4 mdmax:h-4',
                      `${bannerIndex === index ? '' : 'bg-opacity-50'}`,
                      'cursor-pointer border-0 p-0', // Add border-0 and p-0 to remove default button styles
                    ].join(' ')}
                    onClick={() => setIndex(bannerIndex)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div className={`w-full h-[50rem] mdmax:h-[30rem] absolute top-4 left-0 bg-black overflow-hidden bg-opacity-10 z-0 ${
          slider_variant === 'header_curved' 
            ? 'rounded-br-[14rem] mdmax:rounded-br-[7rem]' 
            : ''
        }`}></div>
      </div>
    </section>
  );
}