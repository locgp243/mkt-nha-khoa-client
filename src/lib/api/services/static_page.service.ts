// lib/api/services/static-page.service.ts
import apiClient from "../apiClient";
import { ENDPOINTS } from "@/lib/api/apiEndpoints"; // Giả sử em có định nghĩa endpoint cho pages
import {
  StaticPageResponse,
  StaticPageListResponse,
} from "@/types/static_page";

const getAll = (): Promise<StaticPageListResponse> => {
  return apiClient(ENDPOINTS.STATIC_PAGE.LIST); // Ví dụ: /api/pages
};

/**
 * Lấy chi tiết một trang tĩnh theo slug.
 */
const getBySlug = (slug: string): Promise<StaticPageResponse> => {
  const endpoint = ENDPOINTS.STATIC_PAGE.DETAIL(slug); // Ví dụ: /api/pages/{slug}
  return apiClient(endpoint, { cache: "no-store" });
};

export const StaticPageService = {
  getAll,
  getBySlug,
};
