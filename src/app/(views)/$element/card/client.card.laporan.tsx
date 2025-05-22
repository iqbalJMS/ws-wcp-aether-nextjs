'use client';

import { useState, useMemo } from 'react';
import { handleurl } from '@/lib/functions/client/handle-url';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from '@/lib/element/global/link';
import Image from '@/lib/element/global/image';
import { useEnv } from '@/lib/hook/useEnv';


type Document = { title?: string; path?: string };
type Card = { title?: string; description?: string; image?: string; documents?: Document[] };
type SectionGroup = { yearTitle?: string; cards?: Card[] };
type FlattenedCard = Card & { year: string };

type Props = {
  title?: string;
  subtitle?: string;
  data?: SectionGroup[];
};

export default function CE_CardLaporan({ title, subtitle, data }: Props) {
  const { baseUrl } = useEnv();
  const [search, setSearch] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const allCards: FlattenedCard[] = useMemo(() => {
    return (
      data?.flatMap(group => {
        const year = group.yearTitle ?? 'Tanpa Tahun';
        return (group.cards ?? []).map(card => ({ ...card, year }));
      }) ?? []
    );
  }, [data]);

  const filteredCards = useMemo(() => {
    return allCards.filter(card =>
      (card.title ?? '').toLowerCase().includes(search.toLowerCase())
    );
  }, [allCards, search]);

  // Group filtered cards by year
  const groupedFilteredCards = useMemo(() => {
    const grouped: Record<string, FlattenedCard[]> = {};
    filteredCards.forEach(card => {
      if (!grouped[card.year]) grouped[card.year] = [];
      grouped[card.year].push(card);
    });
    return grouped;
  }, [filteredCards]);

  // Get array of year groups for pagination
  const yearGroups = Object.entries(groupedFilteredCards);
  const totalPages = Math.ceil(yearGroups.length / itemsPerPage);
  
  // Get paginated year groups
  const paginatedYearGroups = yearGroups.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // Convert back to grouped format for rendering
  const paginatedGroupedCards = useMemo(() => {
    const grouped: Record<string, FlattenedCard[]> = {};
    paginatedYearGroups.forEach(([year, cards]) => {
      grouped[year] = cards;
    });
    return grouped;
  }, [paginatedYearGroups]);

  // Calculate total cards for display info
  const startEntry = (currentPage - 1) * itemsPerPage + 1;
  const endEntry = Math.min(currentPage * itemsPerPage, yearGroups.length);

  return (
    <div className="container mx-auto py-6">
      {title && (
        <div className="mb-4 text-3xl font-semibold text-center">
          {parseHTMLToReact(title)}
        </div>
      )}

      {subtitle && (
        <div className="mb-6 text-lg text-gray-600 text-center">
          {parseHTMLToReact(subtitle)}
        </div>
      )}

      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm">Tampilkan</label>
          <select
            className="border px-2 py-1 text-sm rounded"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[10, 25, 50, 100].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <span className="text-sm">entri</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Cari:</label>
          <input
            type="text"
            className="border px-3 py-1 rounded text-sm"
            placeholder="Laporan..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {Object.entries(paginatedGroupedCards).map(([year, cards]) => (
        <div key={year} className="mb-10">
          <h3 className="text-xl font-bold mb-4">{parseHTMLToReact(year)}</h3>

          <div className="flex flex-wrap -mx-2">
            {cards.map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-6">
                <div className="h-full">
                  <div className="p-4 shadow-lg h-full flex flex-col bg-white border border-gray-200">
                    {item.image && (
                      <div className="w-full h-[255px] mb-2">
                        <Image
                          extern={false}
                          src={handleurl(`${baseUrl}/api/files/?path=${item.image}`)}
                          alt={item.title || 'Laporan'}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                    <div className="flex-1 mb-4">
                      {item.title && (
                        <div className="text-red-01 font-semibold text-sm min-h-[40px] mt-6">
                          {parseHTMLToReact(item.title)}
                        </div>
                      )}
                      {item.description && (
                        <div className="text-sm text-gray-700">
                          {parseHTMLToReact(item.description)}
                        </div>
                      )}
                    </div>
                    {(item.documents ?? []).length > 0 && (
                      <div>
                        {(item.documents ?? []).map((doc, idx) =>
                          doc?.path ? (
                            <div
                              key={idx}
                              className="text-base font-semibold flex gap-3 items-center hover:underline overflow-auto text-[#014A94] mb-1"
                            >
                              <Link
                                href={handleurl(`${baseUrl}/api/files/?path=${doc.path}`)}
                                className="flex items-center gap-1 text-sm"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {doc.title || 'Download PDF'}
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
                                >
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </Link>
                            </div>
                          ) : null
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
          <p className="text-sm text-gray-600">
            Menampilkan {startEntry} sampai {endEntry} dari {yearGroups.length} entri
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => p - 1)}
              disabled={currentPage === 1}
              className="text-sm text-blue-700 disabled:text-gray-400"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-sm border rounded w-8 h-8 text-center ${
                  currentPage === page ? 'bg-gray-200 font-bold' : ''
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => p + 1)}
              disabled={currentPage === totalPages}
              className="text-sm text-blue-700 disabled:text-gray-400"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      )}
    </div>
  );
}