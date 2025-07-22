// Định nghĩa cho đối tượng phân trang
export interface Pagination {
  total_records: number;
  page: number;
  limit: number;
  total_pages: number;
}

// Định nghĩa cho một đối tượng "Gói giá" (Pricing Plan)
export interface Pricing {
  id: number;
  name: string;
  description: string;
  price_monthly: string; // Giá tiền để dạng string để giữ nguyên độ chính xác
  features: string[];
  is_featured: number; // 0 hoặc 1
  is_active: number; // 0 hoặc 1
  created_by_admin_id: number;
  updated_by_admin_id: number;
  created_at: string; // Kiểu string cho ngày tháng theo định dạng ISO 8601 hoặc tương tự
  updated_at: string;
  creator_name: string;
  updater_name: string;
}

// Định nghĩa cho toàn bộ cấu trúc trả về của API, sử dụng Generic Type
export interface ApiResponse<T> {
  data: T[];
  pagination: Pagination;
}
