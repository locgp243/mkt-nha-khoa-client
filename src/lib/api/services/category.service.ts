import apiClient from "@/lib/api/apiClient";
import { ENDPOINTS } from "@/lib/api/apiEndpoints";
import {
  Category,
  ApiResponse,
  SingleCategoryResponse,
} from "@/types/category";

const getAll = ({}): Promise<ApiResponse<Category>> => {
  const endpoint = ENDPOINTS.CATEGORIES.LIST;
  return apiClient(endpoint);
};

const getBySlug = (slug: string): Promise<SingleCategoryResponse> => {
  const endpoint = ENDPOINTS.CATEGORIES.DETAIL(slug);
  return apiClient(endpoint, { cache: "no-store" });
};
// Gom tất cả các hàm vào một object 'CategoryService' để export, giúp việc gọi hàm rõ ràng hơn
export const CategoryService = {
  getAll,
  getBySlug,
};
