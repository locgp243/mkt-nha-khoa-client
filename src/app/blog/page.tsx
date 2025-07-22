import { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { PostService } from "@/lib/api/services/post.service";
import { CustomPagination } from "@/components/CustomPagination";

const POSTS_PER_PAGE = 3;

// SEO: Dùng generateMetadata để tạo title, description động cho mỗi trang
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const currentPage = Number(searchParams?.page) || 1;
  const pageTitle = `Blog kiến thức Marketing & Nha khoa ${
    currentPage > 1 ? `| Trang ${currentPage}` : ""
  }`;
  const description =
    "Blog kiến thức, tips, thủ thuật hay về công nghệ, phần mềm, CRM... dành cho các phòng khám nha khoa.";

  return {
    title: pageTitle,
    description: description,
    // Canonical URL để tránh duplicate content cho các trang phân trang
    alternates: {
      canonical: `/blog${currentPage > 1 ? `?page=${currentPage}` : ""}`,
    },
    openGraph: {
      title: pageTitle,
      description: description,
      url: `/blog${currentPage > 1 ? `?page=${currentPage}` : ""}`,
      images: [`/logo/banner_blogs.jpg`], // Ảnh đại diện khi share link
    },
  };
}

export default async function BlogPage({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;

  try {
    const { data: posts, pagination } = await PostService.getAll({
      page: currentPage,
      limit: POSTS_PER_PAGE,
    });

    return (
      <main className="bg-white">
        {/* ===== BANNER SECTION (Giữ nguyên) ===== */}
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
          {/* ===== BREADCRUMBS CHUẨN SEO ===== */}{" "}
          <div className="flex items-center breadcrumbs cursor-pointer">
            {" "}
            <div className="relative bg-[#C1F1FF] h-[34px] text-gray-700 text-sm breadcrumbsList pr-6 flex items-center hover:scale-[1.1] hover:z-10">
              <span>CRM - Phần mềm quản lý nha khoa</span>{" "}
            </div>{" "}
            <div className="bg-[#81d4fa] relative h-[34px] text-gray-700 text-sm pl-4 pr-6 breadcrumbsList flex items-center hover:scale-[1.1] hover:z-10">
              <span>Blog</span>{" "}
            </div>{" "}
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

                {/* ===== PHẦN PAGINATION ĐÃ ĐƯỢC CHỈNH LẠI ===== */}
                {/* Logic mới: Luôn hiển thị pagination miễn là có bài viết */}
                <CustomPagination
                  totalPages={pagination?.total_pages}
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
  } catch (err) {
    console.error("Lỗi khi fetch bài viết:", err);
    return (
      <p className="text-center text-red-500 font-medium py-20">
        Không thể tải danh sách bài viết. Vui lòng thử lại sau.
      </p>
    );
  }
}
