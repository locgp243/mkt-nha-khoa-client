import { cache } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { PostService } from "@/lib/api/services/post.service";

// Import các component UI
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/hero-section";
import { RelatedPosts } from "@/components/related-posts";
import { CategoryList } from "@/components/category-list";

// BƯỚC 1: Tạo hàm lấy dữ liệu được bọc bởi `cache`
const getPostData = cache(async (slug: string) => {
  const response = await PostService.getBySlug(slug);
  return response.data;
});

// =================================================================
// STEP 1: GENERATE METADATA (TỐI ƯU SEO VÀ XỬ LÝ LỖI)
// =================================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostData(slug);

    if (!post) {
      return { title: "Không tìm thấy bài viết" };
    }

    return {
      title: post.seo_title || post.title,
      description: post.meta_description || post.excerpt,
      openGraph: {
        title: post.seo_title || post.title,
        description: post.meta_description || post.excerpt,
        type: "article",
        publishedTime: post.published_at || post.created_at,
        authors: [post.creator_name],
        images: [
          {
            url: post.featured_image_url || "/logo/banner_blogs.jpg",
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error(`[generateMetadata] Lỗi khi lấy dữ liệu bài viết:`, error);
    return {
      title: "Lỗi Server",
      description: "Không thể tải dữ liệu cho bài viết này.",
    };
  }
}

// =================================================================
// STEP 2: GENERATE STATIC PARAMS (XỬ LÝ LỖI)
// =================================================================
export async function generateStaticParams() {
  try {
    const response = await PostService.getAll({ limit: 1000 });
    return response.data.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error(
      "[generateStaticParams] Lỗi khi lấy danh sách bài viết:",
      error
    );
    return [];
  }
}

// =================================================================
// STEP 3: THE PAGE COMPONENT (TỐI ƯU VÀ XỬ LÝ LỖI)
// =================================================================
export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = await getPostData(slug);

    // Dùng lại hàm đã được cache, không gọi lại API
    if (!post) {
      notFound();
    }

    const formattedDate = new Date(
      post.published_at || post.created_at
    ).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    return (
      <main className="bg-white">
        <HeroSection
          title={post.title}
          imageSrc={post.featured_image_url || "/logo/banner_blogs.jpg"}
          imageAlt={post.title}
        />
        <article className="w-full bg-muted">
          <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{post.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <header className="mt-8">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  {post.title}
                </h1>
                <p className="mt-4 text-lg text-gray-500">
                  Bởi {post.creator_name} • {formattedDate} •{" "}
                  {post.category_name}
                </p>
              </header>

              {post.featured_image_url && (
                <div className="relative w-full aspect-[16/9] mt-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.featured_image_url}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <Separator className="my-8" />

              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              />
            </div>
            <div className="w-full lg:w-1/3">
              <CategoryList />
            </div>
          </div>
        </article>
        <RelatedPosts />
        <Separator className="my-12" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              name: post.title,
              description: post.meta_description || post.excerpt,
              image: post.featured_image_url || "/logo/banner_blogs.jpg",
              datePublished: post.published_at || post.created_at,
              dateModified: post.updated_at,
              author: {
                "@type": "Person",
                name: post.creator_name,
              },
              publisher: {
                "@type": "Organization",
                name: "Tên Thương Hiệu Của Em",
                logo: {
                  "@type": "ImageObject",
                  url: "/logo/your-logo.png",
                },
              },
            }),
          }}
        />
      </main>
    );
  } catch (error) {
    console.error(`Lỗi khi render bài viết:`, error);
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Đã có lỗi xảy ra</h1>
          <p>Không thể tải được nội dung bài viết. Vui lòng thử lại sau.</p>
        </div>
      </main>
    );
  }
}
