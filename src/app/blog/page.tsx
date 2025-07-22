import { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { PostService } from "@/lib/api/services/post.service";
import { CustomPagination } from "@/components/CustomPagination";

const POSTS_PER_PAGE = 6; // Thầy đổi lại thành 6 như code gốc của em

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

// =================================================================
// ## PHẦN METADATA (SEO) - Giữ nguyên, đã rất tốt
// =================================================================
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const currentPage = Number(searchParams?.page) || 1;

  // Thay đổi nhỏ: Sử dụng một biến baseUrl để quản lý URL gốc dễ dàng hơn
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://tenmiencuaem.com";
  const canonicalUrl = `${baseUrl}/blog${
    currentPage > 1 ? `?page=${currentPage}` : ""
  }`;

  const pageTitle = `Blog kiến thức Marketing & Nha khoa ${
    currentPage > 1 ? `| Trang ${currentPage}` : ""
  }`;
  const description =
    "Blog kiến thức, tips, thủ thuật hay về công nghệ, phần mềm, CRM... dành cho các phòng khám nha khoa.";

  return {
    title: pageTitle,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      url: canonicalUrl,
      images: [`${baseUrl}/logo/banner_blogs.jpg`],
    },
  };
}

// =================================================================
// ## PHẦN COMPONENT CHÍNH CỦA TRANG
// =================================================================
export default async function BlogPage({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;

  try {
    // --- ĐIỂM QUAN TRỌNG NHẤT ---
    // Lệnh gọi API này chạy trên Server trong lúc build.
    // File PostService.ts của em PHẢI ĐẢM BẢO đọc được biến môi trường
    // từ process.env.NEXT_PUBLIC_API_URL (hoặc tên biến em đặt)
    // để có được URL public của backend.
    const { data: posts, pagination } = await PostService.getAll({
      page: currentPage,
      limit: POSTS_PER_PAGE,
      // Thầy thêm cache: 'no-store' để đảm bảo dữ liệu luôn mới nhất,
      // em có thể điều chỉnh lại revalidate sau nếu muốn.
      // cache: 'no-store',
    });

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
                Blog kiến thức, tips, thủ thuật hay về công nghệ, phần mềm,
                CRM... dành cho các phòng khám nha khoa.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CONTENT SECTION ===== */}
        <section className="w-[90%] lg:w-[80%] py-14 mx-auto">
          {/* Breadcrumbs có thể giữ nguyên hoặc tối ưu bằng JSON-LD như thầy đã gợi ý */}
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
            {posts && posts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>

                {/* --- ĐÂY LÀ LOGIC PAGINATION ĐÃ SỬA --- */}
                {/* Chỉ hiển thị khi tổng số trang > 1 */}
                {pagination && pagination.total_pages > 1 && (
                  <CustomPagination
                    totalPages={pagination.total_pages}
                    currentPage={currentPage}
                    baseUrl="/blog"
                    className="mt-12"
                  />
                )}
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
  } catch (err) {
    // Log lỗi chi tiết trên server để dễ dàng debug trên Vercel
    console.error("Failed to fetch blog posts:", err);
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-center text-red-500 font-medium">
          Không thể tải danh sách bài viết. Vui lòng thử lại sau.
        </p>
      </div>
    );
  }
}
