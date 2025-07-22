import { Pagination } from "./pagination";

export interface Post {
  id: number;
  category_id: number;
  post_type: "post" | "guide" | string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image_url: string | null;
  status: "published" | "pending_review" | "draft" | string;
  is_featured: 0 | 1;
  view_count: number;
  estimated_read_time: number | null;
  seo_title: string | null;
  meta_description: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  category_name: string;
  creator_name: string;
  updater_name: string;
}

export interface ApiResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface PostDetailResponse {
  data: Post;
}
