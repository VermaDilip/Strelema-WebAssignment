import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  totalRecords,
  recordsPerPage,
  onPageChange,
  onRecordsPerPageChange,
}) {
  const startRecord = (currentPage - 1) * recordsPerPage + 1;
  const endRecord = Math.min(currentPage * recordsPerPage, totalRecords);

  return (
    <div className="flex w-full justify-between items-center h-[46px]">
      <div className="flex items-center gap-5">
        <span className="text-gray-500 font-outfit text-sm font-normal leading-[22px]">
          Showing
        </span>
        <div className="relative">
          <div className="w-[76px] h-[46px] rounded-[10px] border border-gray-500/20 bg-white flex items-center justify-center">
            <span className="text-dark-500 font-lexend text-sm font-normal leading-[22px]">
              {recordsPerPage}
            </span>
            <ChevronRight className="w-5 h-5 text-dark-500 rotate-90 ml-4" />
          </div>
        </div>
      </div>

      <span className="text-gray-500 font-outfit text-sm font-normal leading-[22px]">
        Showing {startRecord} to {endRecord} out of {totalRecords} records
      </span>

      <div className="flex items-center gap-2.5">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-6 h-6 flex items-center justify-center disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6 text-dark-500" />
        </button>

        <div className="flex items-start gap-[5px]">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex py-[7px] px-3 justify-center items-center gap-2.5 rounded-lg font-outfit text-sm leading-[22px] ${
                page === currentPage
                  ? "border border-gradient-primary font-semibold bg-gradient-to-r from-[#0A255F] to-[#2F539E] bg-clip-text text-transparent"
                  : "rounded-[50px] bg-white text-dark-500 font-normal"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-6 h-6 flex items-center justify-center disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6 text-dark-500" />
        </button>
      </div>
    </div>
  );
}