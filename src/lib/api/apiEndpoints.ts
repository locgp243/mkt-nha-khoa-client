export const ENDPOINTS = {
  POSTS: {
    LIST: "/api/public/posts",
    DETAIL: (slug: string) => `/api/public/posts/${slug}`,
    LIST_BY_CATEGORY: (categorySlug: string) =>
      `/api/public/posts?category_slug=${categorySlug}`,
    GUIDE: "/api/public/posts?post_type=guide",
  },
  CATEGORIES: {
    LIST: "/api/public/categories",
    DETAIL: (slug: string) => `/api/public/categories/${slug}`,
  },
  PRINCING_PACKAGE: {
    LIST: "/api/public/pricing-packages",
  },
  CUSTOMER: {
    REGISTER: "/api/public/customers/register",
  },
  STATIC_PAGE: {
    LIST: "/api/public/pages",
    DETAIL: (slug: string) => `/api/public/pages/${slug}`,
  },
  CONTACT: {
    CREATE: "/api/public/contact",
  },
  SETTINGS: {
    GET: "/api/public/settings",
  },
};
