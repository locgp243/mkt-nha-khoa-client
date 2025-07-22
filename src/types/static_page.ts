// types/static-page.ts
export interface StaticPage {
  id: number;
  title: string;
  slug: string;
  content: string;
  seo_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface StaticPageListResponse {
  data: StaticPage[];
}
// Thường API sẽ trả về cấu trúc này
export interface StaticPageResponse {
  data: StaticPage;
}
