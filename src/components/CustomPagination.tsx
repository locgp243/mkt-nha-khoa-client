// src/components/ui/app-pagination.tsx

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  totalPages: number;
  currentPage: number;
  baseUrl: string; // Đường dẫn cơ sở để tạo link, ví dụ: /blog
  className?: string;
}

// Helper function để tạo các số trang một cách thông minh
const generatePageNumbers = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export function CustomPagination({
  totalPages,
  currentPage,
  baseUrl,
  className,
}: CustomPaginationProps) {
  if (totalPages <= 1) return null; // Không hiển thị nếu chỉ có 1 trang

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  const createPageUrl = (page: number) => `${baseUrl}?page=${page}`;

  return (
    <Pagination className={className}>
      <PaginationContent>
        {/* Nút Previous */}
        <PaginationItem>
          <PaginationPrevious
            href={createPageUrl(currentPage - 1)}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {/* Các nút số trang */}
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href={createPageUrl(page as number)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Nút Next */}
        <PaginationItem>
          <PaginationNext
            href={createPageUrl(currentPage + 1)}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
