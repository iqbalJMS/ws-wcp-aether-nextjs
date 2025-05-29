'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import FacebookIcon from '@/lib/element/global/icons/facebook-icon';
import LinkedinIcon from '@/lib/element/global/icons/linkedin-icon';
import ShareIcon from '@/lib/element/global/icons/share-icon';
import TwitterIcon from '@/lib/element/global/icons/twitter-icon';
import WhatsappIcon from '@/lib/element/global/icons/whatsapp-icon';

interface ShareComponentProps {
  textShare?: string;
}

export default function ShareComponent({
  textShare = 'BBRI Stock Info - https://bri.co.id/informasi-investor',
}: ShareComponentProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const encodedTextShare = encodeURIComponent(textShare);

  return (
    <>
      <div className="relative">
        <div
          onClick={() => setIsShareOpen(!isShareOpen)}
          className="relative w-52 flex items-center justify-center py-4 rounded-full uppercase font-bold text-sm text-white bg-orange-400 hover:bg-gray-600 duration-300 cursor-pointer"
        >
          <span className="pr-2">
            <ShareIcon
              className="text-white"
              width={20}
              height={20}
              stroke=""
            />
          </span>
          SHARE
          <div
            className={[
              'absolute w-full pt-4 top-12',
              'transition-opacity ease-in-out duration-200',
              isShareOpen ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          >
            <div className="flex items-center justify-center space-x-2">
              <Link
                href={`https://x.com/intent/tweet?text=${encodedTextShare}`}
                target="_self"
                rel="noreferrer"
              >
                <TwitterIcon
                  className="fill-orange-400"
                  height={35}
                  width={35}
                />
              </Link>

              <Link
                href={`https://www.facebook.com/sharer/sharer.php?&quote=${encodedTextShare}`}
                target="_self"
              >
                <FacebookIcon
                  className="fill-orange-400"
                  height={35}
                  width={35}
                />
              </Link>

              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedTextShare}`}
                target="_self"
              >
                <LinkedinIcon
                  className="fill-orange-400"
                  width={35}
                  height={35}
                />
              </Link>

              <Link
                href={`https://web.whatsapp.com/send?text=${encodedTextShare}`}
                target="_self"
              >
                <WhatsappIcon
                  className="bg-orange-400 rounded-full p-[3px]"
                  fill="#ffffff"
                  width={35}
                  height={35}
                />
              </Link>

              <div
                onClick={async () => {
                  await navigator.clipboard.writeText(textShare);
                  setAlertOpen(true);
                  setTimeout(() => setAlertOpen(false), 3000);
                }}
                className="cursor-pointer"
              >
                <svg
                  className="bg-orange-400 rounded-full p-[6px]"
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="35px"
                  height="35px"
                  viewBox="0 0 353.809 353.809"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M230.962,122.919c-10.1-10.076-21.562-18.531-33.176-24.452c-6.785-3.459-15.108-0.769-18.555,6.023
        c-3.468,6.792-0.775,15.108,6.017,18.567c9.079,4.624,18.128,11.325,26.198,19.383c12.004,12.003,20.951,26.259,24.524,39.116
        c2.84,10.13,2.119,18.278-1.934,22.338L115.208,322.716c-9.16,9.163-37.392,1.459-61.426-22.596
        c-24.061-24.056-31.771-52.284-22.611-61.447l43.147-43.156c5.392-5.393,5.392-14.123,0-19.516
        c-5.393-5.393-14.124-5.393-19.516,0l-43.142,43.156c-21.836,21.827-11.917,65.969,22.584,100.479
        c22.155,22.151,48.264,34.173,69.896,34.173c12.076,0,22.761-3.747,30.583-11.571L253.546,223.41
        c11.481-11.476,14.676-28.968,9.02-49.276C257.66,156.587,246.449,138.405,230.962,122.919z"
                      />
                      <path
                        d="M319.558,34.33c-15.486-15.486-33.67-26.697-51.203-31.597c-20.309-5.663-37.801-2.462-49.275,9.007L100.248,130.557
        c-11.466,11.475-14.664,28.985-9.007,49.281c4.906,17.54,16.117,35.729,31.612,51.203c10.076,10.082,21.557,18.542,33.173,24.463
        c2.009,1.027,4.149,1.508,6.272,1.508c5.011,0,9.863-2.751,12.286-7.530c3.468-6.791,0.775-15.096-6.02-18.561
        c-9.076-4.63-18.128-11.338-26.196-19.39c-12.003-12.01-20.954-26.259-24.527-39.109c-2.84-10.136-2.123-18.291,1.937-22.344
        L238.595,31.255c4.059-4.047,12.201-4.768,22.338-1.934c12.85,3.591,27.111,12.526,39.115,24.524
        c24.037,24.043,31.747,52.284,22.584,61.453l-43.145,43.15c-5.387,5.392-5.387,14.124,0,19.522c5.393,5.392,14.123,5.392,19.516,0
        l43.168-43.157C363.975,112.975,354.055,68.833,319.558,34.33z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert for copy success */}
      {alertOpen && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Link copied to clipboard!
          <button
            onClick={() => setAlertOpen(false)}
            className="ml-2 font-bold"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
