'use client';

import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { Tabs } from '@/lib/element/global/tabs';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useMemo, useState } from 'react';
import CE_SimulationKPRMain from './client.simulation-kpr.main';
import CE_SimulationKPRSMain from './client.simulation-kprs.main';
import CE_SimulationDepositoMain from './client.simulation-deposito.main';
import CE_SimulationCarMain from './client.simulation-car.main';
import CE_SimulationBRIGunaMain from './client.simulation-briguna.main';
import CE_SimulationBritamaRencanaMain from './client.simulation-britama-rencana.main';
import CE_SimulationBRIGunaKaryaMain from './client.simulation-briguna-karya.main';
import CE_SimulationBRIGunaPurnaMain from './client.simulation-briguna-purna.main';
import CE_SimulationDepositoBusinessMain from './client.simulation-deposito-business.main';
import CE_SimulationDepositoValasMain from './client.simulation-deposito-valas.main';
import CE_SimulationInvestmentMain from './client.simulation-investment.main';
import CE_SimulationInitialInvestmentMain from './client.simulation-initial-investment.main';

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
  type,
}: T_SimulationMainProps) => {
  const [variant, setVariant] = useState(initialVariant);
  const simulation = useMemo(() => {
    return tabs?.find((item) => item.variant === variant);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);
  return (
    <div className="relative overflow-hidden">
      <div className="w-[50%]  h-full absolute top-0 left-0">
        <Image
          src={'/web/guest/images/simulation/bg.png'}
          extern={true}
          alt="background"
          width={1920}
          height={980}
          className="w-full h-full object-cover object-right-bottom"
        />
      </div>
      <div className="relative z-10 container py-20">
        <div className="flex mdmax:flex-wrap  -mx-10">
          <div className="w-[50%] mdmax:w-full flex-none px-10 mdmax:mb-10">
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
          <div className="w-1/2 mdmax:w-full flex-none px-10">
            <div className={` ${type === 'tab' ? '-mt-20 mdmax:mt-0' : '' }`}>
              {type === 'tab' && (
                <div className="text-right mb-10">
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
              )}

              {type === 'tab' && (
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
              )}

              <div>
                <div className={`text-3xl font-semibold ${type === 'tab' ? '' : '' }`}>
                  {simulation && simulation.title}
                </div>
                {type === 'page' && (
                  <div className="flex mdmax:flex-wrap items-center justify-between">
                    <div className="flex-none mdmax:w-full">
                      <div className="text-black text-opacity-50 font-medium text-lg">
                        Tertarik mengajukan {simulation && simulation.title}?
                        <br /> Kunjungi cabang terdekat kami.
                      </div>
                    </div>
                    <div className='mdmax:w-full'>
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
                )}
                <div className="border-b-2 pb-5 border-blue-01 border-opacity-35 border-dashed mb-10"></div>
                <div className=" mb-10">
                  {variant === 'kpr' && <CE_SimulationKPRMain />}
                  {variant === 'kprs' && <CE_SimulationKPRSMain />}
                  {variant === 'cicilan_kendaraan' && <CE_SimulationCarMain />}
                  {variant === 'britama_rencana' && <CE_SimulationBritamaRencanaMain />}
                  {variant === 'briguna_umum' && <CE_SimulationBRIGunaMain />}
                  {variant === 'briguna_karya' && <CE_SimulationBRIGunaKaryaMain />}
                  {variant === 'briguna_purna' && <CE_SimulationBRIGunaPurnaMain />}
                  {variant === 'deposito' && <CE_SimulationDepositoMain />}
                  {variant === 'deposito_bisnis' && <CE_SimulationDepositoBusinessMain />}
                  {variant === 'deposito_valas' && <CE_SimulationDepositoValasMain />}
                  {variant === 'kredit_investasi' && <CE_SimulationInvestmentMain />}
                  {variant === 'initial-investment' && <CE_SimulationInitialInvestmentMain />}
                </div>
                {type === 'tab' && (
                  <div className="flex mdmax:flex-wrap items-center justify-between">
                    <div className="flex-none mdmax:w-full">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CE_SimulationMain;
