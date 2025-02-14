const PaginationKurs = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (_page: number) => void;
}) => {
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisible = 3; // Jumlah maksimal tombol yang ditampilkan
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 text-sm font-medium ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        Previous
      </button>

      {getVisiblePages().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-4 py-2 text-sm font-medium ${
            currentPage === pageNumber
              ? 'rounded-full border border-gray-02 bg-gradient-to-b from-[#fff] from-0% to-[#dcdcdc] to-100%'
              : 'bg-white text-gray-700 hover:bg-gray-800 hover:text-white rounded-sm'
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 text-sm font-medium ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-800 hover:text-white'
        } rounded-sm`}
      >
        Next
      </button>
    </div>
  );
};

export const ShowingText = ({
  currentPage,
  itemsPerPage,
  dataLength,
}: {
  currentPage: number;
  itemsPerPage: number;
  dataLength: number;
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, dataLength);

  return (
    <div className="text-sm">
      Showing {startIndex} to {endIndex} of {dataLength} entries
    </div>
  );
};

export default PaginationKurs;
