import apiClient from "../apiClient";
import { ENDPOINTS } from "../apiEndpoints";
import { Post, ApiResponse, PostDetailResponse } from "@/types/post";
import { Pagination } from "@/types/pagination";

// Định nghĩa kiểu cho các tham số có thể truyền vào khi lấy danh sách bài viết
interface GetPostsParams {
  page?: number;
  limit?: number;
  category_slug?: string;
}

// Định nghĩa kiểu cho dữ liệu trả về từ API, bao gồm cả data và pagination
interface PostsResponse extends ApiResponse<Post> {
  pagination: Pagination;
}

// ==========================================
// CACHE CONFIGURATION
// ==========================================
const getCacheConfig = (type: "list" | "detail" | "homepage" | "category") => {
  const configs = {
    list: { next: { revalidate: 300 } }, // 5 phút cho danh sách
    detail: { next: { revalidate: 1800 } }, // 30 phút cho chi tiết
    homepage: { next: { revalidate: 1800 } }, // 30 phút cho homepage
    category: { next: { revalidate: 600 } }, // 10 phút cho category
  };

  return configs[type];
};

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

  // Thêm cache configuration
  return apiClient(endpoint, getCacheConfig("list"));
};

/**
 * Lấy bài viết cho trang chủ (cache lâu hơn vì ít thay đổi)
 * @param limit - Số lượng bài viết
 * @returns Promise chứa dữ liệu bài viết
 */
const getForHomepage = (limit: number = 6): Promise<PostsResponse> => {
  const endpoint = `${ENDPOINTS.POSTS.LIST}?page=1&limit=${limit}`;

  // Cache lâu hơn cho homepage
  return apiClient(endpoint, getCacheConfig("homepage"));
};

/**
 * Lấy chi tiết một bài viết theo slug.
 * @param slug - Slug của bài viết cần lấy.
 * @returns Promise chứa dữ liệu bài viết.
 */
const getBySlug = (slug: string): Promise<PostDetailResponse> => {
  const endpoint = ENDPOINTS.POSTS.DETAIL(slug);

  // Cache lâu cho chi tiết bài viết (ít thay đổi)
  return apiClient(endpoint, getCacheConfig("detail"));
};

const getByCategorySlug = (
  categorySlug: string,
  params: { page?: number; limit?: number } = {}
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

  // Thêm cache configuration cho category
  return apiClient(endpoint, getCacheConfig("category"));
};

// ==========================================
// METHODS CHO ADMIN (FRESH DATA)
// ==========================================
/**
 * Lấy danh sách bài viết fresh (cho admin)
 */
const getAllFresh = (params: GetPostsParams = {}): Promise<PostsResponse> => {
  const queryParams = new URLSearchParams();

  if (params.page) {
    queryParams.append("page", params.page.toString());
  }
  if (params.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const queryString = queryParams.toString();
  const endpoint = queryString
    ? `${ENDPOINTS.POSTS.LIST}?${queryString}`
    : ENDPOINTS.POSTS.LIST;

  // Không cache cho admin
  return apiClient(endpoint, { cache: "no-store" });
};

/**
 * Lấy chi tiết bài viết fresh (cho admin)
 */
const getBySlugFresh = (slug: string): Promise<PostDetailResponse> => {
  const endpoint = ENDPOINTS.POSTS.DETAIL(slug);

  // Không cache cho admin
  return apiClient(endpoint, { cache: "no-store" });
};

// ==========================================
// ERROR HANDLING WRAPPER
// ==========================================
const withErrorHandling = async <T>(
  apiCall: () => Promise<T>,
  fallbackData?: T
): Promise<T> => {
  try {
    return await apiCall();
  } catch (error) {
    console.error("PostService Error:", error);

    if (fallbackData) {
      return fallbackData;
    }

    throw error;
  }
};

// ==========================================
// SAFE METHODS WITH ERROR HANDLING
// ==========================================
const getAllSafe = async (
  params: GetPostsParams = {}
): Promise<PostsResponse> => {
  return withErrorHandling(() => getAll(params), {
    data: [],
    pagination: {
      total_records: 0,
      page: 1,
      limit: params.limit || 10,
      total_pages: 0,
    },
  } as PostsResponse);
};

const getForHomepageSafe = async (
  limit: number = 6
): Promise<PostsResponse> => {
  return withErrorHandling(() => getForHomepage(limit), {
    data: [],
    pagination: {
      total_records: 0,
      page: 1,
      limit: limit,
      total_pages: 0,
    },
  } as PostsResponse);
};

// Gom tất cả các hàm vào một object 'PostService' để export
export const PostService = {
  // Public methods với cache
  getAll,
  getForHomepage,
  getBySlug,
  getByCategorySlug,

  // Admin methods với fresh data
  getAllFresh,
  getBySlugFresh,

  // Safe methods với error handling
  getAllSafe,
  getForHomepageSafe,
};

// ==========================================
// EXPORT ADDITIONAL UTILITIES
// ==========================================
export { getCacheConfig };
export type { GetPostsParams, PostsResponse };
