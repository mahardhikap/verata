import React from "react";
import { PaginationI } from "@/interfaces/catalog-card.interface";

interface PaginationProps extends PaginationI {
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPage,
  pageNow,
  onPageChange,
}) => {
  return (
    <>
      <div className="flex items-center gap-8">
        <button
          className={`rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-premium hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-second active:text-second active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
            pageNow === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="button"
          onClick={() => pageNow > 1 && onPageChange(pageNow - 1)}
          disabled={pageNow === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <p className="text-premium font-philosopher">
          Page <strong>{pageNow}</strong> of&nbsp;
          <strong>{totalPage}</strong>
        </p>

        <button
          className={`rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-premium hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-second active:text-second active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${pageNow === totalPage ? "opacity-50 cursor-not-allowed" : ""}`}
          type="button"
          onClick={() => pageNow < totalPage && onPageChange(pageNow + 1)}
          disabled={pageNow === totalPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Pagination;
