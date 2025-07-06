"use client";

import React from "react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void; // Optional: callback if you manage state externally
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
    // Optionally, you can add router.push here if you manage routing internally
  };

  return (
    <nav className="flex justify-center items-center space-x-2 py-8">
      {pages.map((page) => (
        <React.Fragment key={page}>
          {/* Item số trang */}
          <Link
            href={`?page=${page}`} // Example link, adjust based on your routing
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior if using onPageChange
              handlePageClick(page);
            }}
            className={`
              relative flex items-center justify-center
              w-10 h-10 text-lg font-semibold
              transition-colors duration-200 ease-in-out
              ${
                currentPage === page
                  ? "bg-[#00B0F0] text-white" // Màu nền xanh cho trang hiện tại
                  : "text-gray-600 hover:text-gray-800"
              }
              ${
                currentPage === page ? "rounded-md" : "rounded-sm"
              } /* Slightly rounded corners */
            `}
            // Styling cho hình bình hành nếu là trang hiện tại
            style={
              currentPage === page
                ? {
                    clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)", // Hình bình hành
                  }
                : {}
            }
          >
            {page}
          </Link>

          {/* Dấu gạch chéo ngăn cách */}
          {page < totalPages && <span className="text-gray-400 mx-1">/</span>}
        </React.Fragment>
      ))}

      {/* Nút Next */}
      {currentPage < totalPages && (
        <>
          <span className="text-gray-400 mx-1">/</span>{" "}
          {/* Dấu gạch chéo trước Next */}
          <Link
            href={`?page=${currentPage + 1}`} // Example link
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(currentPage + 1);
            }}
            className="flex items-center text-gray-600 hover:text-gray-800 font-semibold text-lg px-2"
          >
            Next <span className="ml-1">&gt;</span>
          </Link>
        </>
      )}
    </nav>
  );
}
