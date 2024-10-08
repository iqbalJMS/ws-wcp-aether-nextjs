'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { Tabs } from '@/lib/element/global/tabs';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useMemo, useState } from 'react';
import CE_SimulationKPRMain from './client.simulation-kpr.main';
import CE_SimulationCarMain from './client.simulation-car.main';
import CE_SimulationBRIGunaMain from './client.simulation-briguna.main';

type T_SimulationMainProps = {
  type: 'tab' | 'page';
  button: {
    link: string;
    title: string;
    extern: boolean;
  };
  action: {
    description: string;
    button: {
      link: string;
      title: string;
      extern: boolean;
    };
  };
  variant: string;
  tabs: {
    title: string;
    image: string;
    variant: string;
    tnc: string;
  }[];
};

const CE_SimulationMain = ({
  variant: initialVariant = 'kpr',
  tabs,
  button,
  action,
}: T_SimulationMainProps) => {
  const [variant, setVariant] = useState(initialVariant);
  const simulation = useMemo(() => {
    return tabs?.find((item) => item.variant === variant);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);
  return (
    <div className="relative overflow-hidden">
      <div className="w-[50%] h-full absolute top-0 left-0">
        <Image
          src={'/web/guest/images/simulation/bg.png'}
          alt="background"
          width={1920}
          height={980}
          className="w-full h-full object-cover object-right-bottom"
        />
      </div>
      <div className="relative z-10 container py-20">
        <div className="flex  -mx-20">
          <div className="w-1/2 flex-none px-20">
            <div className="mb-10">
              {simulation && (
                <Image
                  extern={false}
                  src={simulation.image}
                  alt="background"
                  width={1920}
                  height={980}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div className="simulation-tnc text-black text-opacity-55">
              {simulation && parseHTMLToReact(simulation.tnc)}
            </div>
          </div>
          <div className="w-1/2 flex-none px-20">
            <div className="-mt-20">
              <div className="text-right mb-10">
                {simulation?.variant}{' '}
                <Link
                  href={button.link}
                  extern={button.extern}
                  target={button.extern ? '_blank' : ''}
                >
                  <div className="inline-block text-blue-01 text-base">
                    {button.title} &#10095;
                  </div>
                </Link>
              </div>
              <div className="mb-10">
                <Tabs
                  list={tabs.map((item) => ({
                    title: item.title,
                    slug: item.variant,
                  }))}
                  onChange={(value) => setVariant(value)}
                  value={variant}
                  variant="border-arrow"
                />
              </div>
              <div>
                <div className="text-3xl font-semibold border-b-2 pb-5 border-blue-01 border-opacity-35 border-dashed mb-10">
                  {simulation && simulation.title}
                </div>
                <div className=" mb-10">
                  {variant === 'kpr' && <CE_SimulationKPRMain />}
                  {variant === 'car' && <CE_SimulationCarMain />}
                  {variant === 'briguna' && <CE_SimulationBRIGunaMain />}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-none">
                    <div className="text-black text-opacity-50 font-medium text-lg">
                      Tertarik mengajukan {simulation && simulation.title}?
                      <br /> Kunjungi cabang terdekat kami.
                    </div>
                  </div>
                  <div>
                    <Link
                      href={action.button.link}
                      extern={action.button.extern}
                      target={action.button.extern ? '_blank' : ''}
                    >
                      <div className="inline-block text-blue-01 text-base">
                        {action.button.title} &#10095;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CE_SimulationMain;
