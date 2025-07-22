export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  category_type: string;
  created_by_admin_id: number;
  updated_by_admin_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ApiResponse<T> {
  data: T[];
}

export interface SingleCategoryResponse {
  data: Category;
}
