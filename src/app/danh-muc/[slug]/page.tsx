// app/danh-muc/[slug]/page.tsx

import { notFound } from "next/navigation";
import { CategoryService } from "@/lib/api/services/category.service";
import { PostService } from "@/lib/api/services/post.service";
import { PostCard } from "@/components/PostCard";
import { CategoryHero } from "@/components/banner-section";
import { CustomPagination } from "@/components/CustomPagination"; // Import component pagination chuẩn
import { Post } from "@/types/post";
import { Pagination as PaginationInfo } from "@/types/pagination";

const POSTS_PER_PAGE = 2;

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    page?: string;
  };
}

// ✨ Tối ưu SEO: Generate metadata động cho trang (Giữ nguyên)
export async function generateMetadata({ params }: CategoryPageProps) {
  try {
    const categoryData = await CategoryService.getBySlug(params.slug);
    return {
      title: categoryData.data.name,
      description: categoryData.data.description,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { title: "Không tìm thấy danh mục" };
  }
}

// Component chính của trang, giờ sẽ xử lý tất cả
export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  // Lấy trang hiện tại từ URL, mặc định là 1
  const currentPage = Number(searchParams?.page) || 1;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let category: any = null;
  let posts: Post[] = [];
  let pagination: PaginationInfo | null = null;

  try {
    // Gọi song song 2 API để tối ưu tốc độ
    // Fetch dữ liệu cho ĐÚNG trang hiện tại (currentPage)
    const [categoryRes, postsRes] = await Promise.all([
      CategoryService.getBySlug(params.slug),
      PostService.getByCategorySlug(params.slug, {
        page: currentPage,
        limit: POSTS_PER_PAGE,
      }),
    ]);

    category = categoryRes.data;
    posts = postsRes.data;
    pagination = postsRes.pagination;
  } catch (err) {
    // Nếu không fetch được dữ liệu (ví dụ slug sai), sẽ trả về trang 404
    console.error(`Failed to fetch data for category ${params.slug}:`, err);
    notFound();
  }

  return (
    <main>
      <CategoryHero name={category.name} description={category.description} />

      <section className="w-[90%] lg:w-[80%] py-14 mx-auto">
        {/* Phần Breadcrumbs của em */}
        <div className="flex items-center breadcrumbs cursor-pointer">
          <div className="relative bg-[#C1F1FF] h-[34px] text-gray-700 text-sm breadcrumbsList pr-6 flex items-center hover:scale-[1.1] hover:z-10">
            <span>{category.name}</span>
          </div>
        </div>

        {/* Bỏ PaginatedPostsGrid, render trực tiếp lưới bài viết và phân trang */}
        <div className="mt-10">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Sử dụng AppPagination với baseUrl động theo slug */}
              <CustomPagination
                totalPages={pagination?.total_pages || 1}
                currentPage={currentPage}
                baseUrl={`/danh-muc/${params.slug}`}
                className="mt-12"
              />
            </>
          ) : (
            <p className="text-center text-gray-500 font-medium">
              Không tìm thấy bài viết nào trong danh mục này.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
