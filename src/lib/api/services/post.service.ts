import apiClient from "../apiClient";
import { ENDPOINTS } from "../apiEndpoints";
import { Post, ApiResponse, PostDetailResponse } from "@/types/post";
import { Pagination } from "@/types/pagination"; // Import kiểu Pagination đã định nghĩa trước đó
// Định nghĩa kiểu cho các tham số có thể truyền vào khi lấy danh sách bài viết
interface GetPostsParams {
  page?: number;
  limit?: number;
  category_slug?: string; // << Thêm thuộc tính này
}

// Định nghĩa kiểu cho dữ liệu trả về từ API, bao gồm cả data và pagination
interface PostsResponse extends ApiResponse<Post> {
  pagination: Pagination;
}

/**
 * Lấy danh sách bài viết, hỗ trợ phân trang.
 * @param params - Các tham số như page và limit.
 * @returns Promise chứa dữ liệu bài viết và thông tin phân trang.
 */
const getAll = (params: GetPostsParams = {}): Promise<PostsResponse> => {
  // URLSearchParams là cách an toàn và chuyên nghiệp nhất để tạo query string
  const queryParams = new URLSearchParams();

  if (params.page) {
    queryParams.append("page", params.page.toString());
  }
  if (params.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  // Nối chuỗi query vào endpoint nếu có
  const queryString = queryParams.toString();
  const endpoint = queryString
    ? `${ENDPOINTS.POSTS.LIST}?${queryString}`
    : ENDPOINTS.POSTS.LIST;

  return apiClient(endpoint);
};
/**
 * Lấy chi tiết một bài viết theo slug.
 * @param slug - Slug của bài viết cần lấy.
 * @returns Promise chứa dữ liệu bài viết.
 */
const getBySlug = (slug: string): Promise<PostDetailResponse> => {
  // Gọi thẳng hàm, không cần bọc trong ``
  const endpoint = ENDPOINTS.POSTS.DETAIL(slug);
  return apiClient(endpoint);
};

const getByCategorySlug = (
  categorySlug: string,
  params: { page?: number; limit?: number } = {} // Thêm params với giá trị mặc định
): Promise<PostsResponse> => {
  // Lấy endpoint gốc
  let endpoint = ENDPOINTS.POSTS.LIST_BY_CATEGORY(categorySlug);

  // Dùng URLSearchParams để thêm các tham số phân trang một cách an toàn
  const searchParams = new URLSearchParams();

  if (params.page) {
    searchParams.append("page", params.page.toString());
  }
  if (params.limit) {
    searchParams.append("limit", params.limit.toString());
  }

  const queryString = searchParams.toString();

  // Nối chuỗi query vào endpoint nếu có
  if (queryString) {
    endpoint = `${endpoint}&${queryString}`;
  }

  console.log("Fetching posts with endpoint:", endpoint); // Log để debug

  return apiClient(endpoint);
};
// Gom tất cả các hàm vào một object 'PostService' để export, giúp việc gọi hàm rõ ràng hơn
export const PostService = {
  getAll,
  getBySlug,
  getByCategorySlug,
};
