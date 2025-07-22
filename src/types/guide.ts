// /types/Guide.ts (Em có thể tạo file này hoặc thêm vào file type có sẵn)

// Type cho một bài viết hướng dẫn
export interface Guide {
  id: number;
  category_id: number;
  post_type: "guide" | "post"; // Có thể là guide hoặc post
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image_url: string;
  status: "published" | "draft";
  is_featured: number;
  view_count: number;
  estimated_read_time: number;
  seo_title: string;
  meta_description: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  category_name: string;
  creator_name: string;
  updater_name: string;
}

// Em có thể tái sử dụng các type này từ các file trước
export interface Pagination {
  total_records: number;
  page: number;
  limit: number;
  total_pages: number;
}

export interface ApiResponse<T> {
  data: T[];
  pagination: Pagination;
}
