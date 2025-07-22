import apiClient from "../apiClient";
import { ENDPOINTS } from "../apiEndpoints";
import { Guide, ApiResponse } from "@/types/guide"; // Chỉ cần Post và ApiResponse

// Định nghĩa kiểu cho các tham số có thể truyền vào khi lấy danh sách bài hướng dẫn
interface GetGuidesParams {
  page?: number;
  limit?: number;
  category_slug?: string;
  post_type?: "guide" | "post"; // Thêm post_type để lọc
}

/**
 * Lấy danh sách bài viết hướng dẫn, hỗ trợ phân trang và lọc.
 * @param params - Các tham số như page, limit, post_type, category_slug.
 * @returns Promise chứa dữ liệu bài viết và thông tin phân trang.
 */
const getAll = (
  params: GetGuidesParams = { post_type: "guide" }
): Promise<ApiResponse<Guide>> => {
  // URLSearchParams là cách an toàn và chuyên nghiệp nhất để tạo query string
  const queryParams = new URLSearchParams();

  // Duyệt qua các tham số và thêm vào query string nếu chúng tồn tại
  if (params.page) queryParams.append("page", params.page.toString());
  if (params.limit) queryParams.append("limit", params.limit.toString());
  if (params.category_slug)
    queryParams.append("category_slug", params.category_slug);
  if (params.post_type) queryParams.append("post_type", params.post_type);

  const queryString = queryParams.toString();
  // Dùng ENDPOINTS.POSTS.LIST vì API của em dùng chung endpoint cho cả post và guide
  const endpoint = queryString
    ? `${ENDPOINTS.POSTS.LIST}?${queryString}`
    : ENDPOINTS.POSTS.LIST;

  return apiClient(endpoint);
};

/**
 * Lấy chi tiết một bài viết theo slug.
 * @param slug - Slug của bài viết cần lấy.
 * @returns Promise chứa dữ liệu chi tiết của một bài viết.
 */
const getBySlug = (slug: string): Promise<{ data: Guide }> => {
  // Giả sử API trả về { data: Post }
  const endpoint = ENDPOINTS.POSTS.DETAIL(slug);
  return apiClient(endpoint);
};

// Đổi tên thành GuideService để phù hợp với chức năng của trang
export const GuideService = {
  getAll,
  getBySlug,
};
