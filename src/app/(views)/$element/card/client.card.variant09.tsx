'use client';

// import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import { useEnv } from '@/lib/hook/useEnv';

export type T_CardVariant09Props = {
  type?: 'search' | 'normal';
  data?: {
    title?: string;
    description?: string;
    button?: {
      title?: string;
      link?: string;
      image?: string;
      extern?: boolean;
    };
    isDescDate?: boolean;
  }[];
};
const getFileDescription = (filename: string) => {
  const ext = filename.split('.').pop()?.toLowerCase();

  switch (ext) {
    case 'pdf':
      return 'PDF Document';
    case 'doc':
      return 'DOC Document';
    case 'docx':
      return 'DOCX Document';
    case 'txt':
      return 'TXT Document';
    default:
      return 'Unknown File';
  }
};
export default function CE_CardVariant09({
  data,
  type = 'normal',
}: T_CardVariant09Props) {
  const { baseUrl } = useEnv();
  return (
    <>
      <div
        className={`${type === 'search' ? 'py-0' : 'py-10'} container overflow-hidden`}
      >
        <div className="flex flex-wrap -mx-5">
          {data?.map((item, index) => {
            return (
              <div key={index} className="w-full flex-none px-5 mb-10">
                <div className="rounded-xl bg-white overflow-hidden shadow-xl">
                  <div>
                    <div
                      className={`${type === 'search' ? 'py-5' : 'py-10'} p-10 mdmax:p-5 flex mdmax:flex-col items-center mdmax:items-start justify-between relative`}
                    >
                      <div className="mdmax:mb-5">
                        {item?.title && (
                          <div className="lg:text-lg text-base font-semibold capitalize text-blue-01 line-clamp-1 mb-2">
                            {parseHTMLToReact(item?.title)}
                          </div>
                        )}

                        {item?.description && (
                          <div className="text-black lg:text-sm text-sm text-opacity-70 capitalize">
                            {item?.isDescDate && item?.isDescDate === true
                              ? item.description
                              : getFileDescription(item.description)}
                          </div>
                        )}
                      </div>
                      <div className="absolute right-0 flex items-center justify-center h-full">
                        {item?.button?.link && (
                          <Link
                            href={`${baseUrl}/api/files/?path=${item?.button?.link}`}
                            extern={item?.button?.extern}
                            target={item?.button?.extern ? '_self' : ''}
                          >
                            <div className="inline-flex bg-white text-blue-01 lg:hover:text-white items-center lg:text-base text-xs px-10 group">
                              <div className="absolute inset-0 -right-4 lg:bg-red-700 transition-all duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
                              <div className="relative z-10 flex items-center">
                                <div className="w-5 h-5 mr-2 flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-down-to-line"
                                  >
                                    <path d="M12 17V3" />
                                    <path d="m6 11 6 6 6-6" />
                                    <path d="M19 21H5" />
                                  </svg>
                                </div>
                                {item?.button?.title}
                              </div>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
