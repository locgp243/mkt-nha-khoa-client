// app/blog/page.tsx

import { PostCard } from "@/components/PostCard";
import { PostService } from "@/lib/api/services/post.service";
import { Post } from "@/types/post";
import { Pagination as PaginationInfo } from "@/types/pagination";
import { CustomPagination } from "@/components/CustomPagination";

// Cấu hình số bài viết mỗi trang
const POSTS_PER_PAGE = 3;

// BlogPage giờ là một Server Component `async`
export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  // Lấy trang hiện tại từ URL, mặc định là 1
  const currentPage = Number(searchParams?.page) || 1;

  // Khai báo biến để hứng kết quả
  let posts: Post[] = [];
  let pagination: PaginationInfo | null = null;
  let error: string | null = null;

  try {
    // Fetch dữ liệu trực tiếp trên server
    const response = await PostService.getAll({
      page: currentPage,
      limit: POSTS_PER_PAGE,
    });
    posts = response.data;
    pagination = response.pagination;
  } catch (err) {
    console.error("Lỗi khi fetch bài viết:", err);
    error = "Không thể tải danh sách bài viết. Vui lòng thử lại sau.";
  }

  // Nếu có lỗi, hiển thị thông báo
  if (error) {
    return (
      <p className="text-center text-red-500 font-medium py-20">{error}</p>
    );
  }

  return (
    <main className="bg-white">
      {/* ===== BANNER SECTION ===== */}
      <section
        className="relative h-[423px] bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
                   before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-no-repeat before:bg-center
                   before:bg-[url('/logo/MayDent_Blogs_Mobile.jpg')] lg:before:bg-[url('/logo/banner_blogs.jpg')]"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto h-full flex items-center">
          <div className="w-[90%] lg:w-[42%] mx-auto lg:mx-0 z-10 text-center lg:text-left">
            <h1 className="text-[36px] text-white font-bold leading-[4.025rem] tracking-[.2px]">
              Blog
            </h1>
            <p className="text-white text-[1.5rem] leading-[2rem] tracking-[.2px] hidden md:block">
              Blog kiến thức, tips, thủ thuật hay về công nghệ, phần mềm, CRM...
              dành cho các phòng khám nha khoa.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="w-[90%] lg:w-[80%] py-14 mx-auto">
        {/* ===== BREADCRUMBS ===== */}
        <div className="flex items-center breadcrumbs cursor-pointer">
          <div className="relative bg-[#C1F1FF] h-[34px] text-gray-700 text-sm breadcrumbsList pr-6 flex items-center hover:scale-[1.1] hover:z-10">
            <span>CRM - Phần mềm quản lý nha khoa</span>
          </div>
          <div className="bg-[#81d4fa] relative h-[34px] text-gray-700 text-sm pl-4 pr-6 breadcrumbsList flex items-center hover:scale-[1.1] hover:z-10">
            <span>Blog</span>
          </div>
        </div>

        {/* ===== POSTS GRID & PAGINATION ===== */}
        <div className="mt-10">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              <CustomPagination
                totalPages={pagination?.total_pages || 1}
                currentPage={currentPage}
                baseUrl="/blog"
                className="mt-12"
              />
            </>
          ) : (
            <p className="text-center text-gray-500 font-medium">
              Không tìm thấy bài viết nào.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
