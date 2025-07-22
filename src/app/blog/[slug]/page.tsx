import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { PostService } from "@/lib/api/services/post.service";
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

// =================================================================
// STEP 1: GENERATE METADATA (QUAN TRỌNG NHẤT CHO SEO)
// =================================================================
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const response = await PostService.getBySlug(params.slug);
  const post = response.data;

  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
      description: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.",
    };
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
}

// =================================================================
// STEP 2: GENERATE STATIC PARAMS (ĐỂ BUILD TRANG TĨNH - SSG)
// =================================================================
export async function generateStaticParams() {
  const response = await PostService.getAll({ limit: 1000 });
  return response.data.map((post) => ({
    slug: post.slug,
  }));
}

// =================================================================
// STEP 3: THE PAGE COMPONENT
// =================================================================
export default async function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const response = await PostService.getBySlug(params.slug);
  console.log("API Response:", response);
  const post = response.data;
  console.log("Post detail:", post);
  console.log("Post content:", post.content);

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

  // ===== XỬ LÝ AN TOÀN CHO CONTENT =====
  const safeContent =
    post.content && typeof post.content === "string" ? post.content.trim() : "";

  // Debug: Kiểm tra loại dữ liệu
  console.log("Content type:", typeof post.content);
  console.log("Content value:", post.content);

  return (
    <main className="bg-white">
      <HeroSection
        title={post.title}
        imageSrc={post.featured_image_url || "/logo/banner_blogs.jpg"}
        imageAlt={post.title}
      />
      <article className="w-full bg-blue-50">
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

            {/* ===== Post Header ===== */}
            <header className="mt-8">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Bởi {post.creator_name} • {formattedDate} • {post.category_name}
              </p>
            </header>

            {/* ===== Featured Image ===== */}
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

            {/* ===== Post Content ===== */}
            {safeContent ? (
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-dark"
                dangerouslySetInnerHTML={{ __html: safeContent }}
              />
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-500 italic">
                  Nội dung bài viết không có sẵn.
                </p>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/3">
            <CategoryList />
          </div>
        </div>
      </article>
      <RelatedPosts />

      <Separator className="my-12" />

      {/* ================================================================= */}
      {/* STEP 4: STRUCTURED DATA (JSON-LD) - SIÊU TỐT CHO SEO         */}
      {/* ================================================================= */}
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
              name: "Tên Phòng Khám Của Em",
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
}
