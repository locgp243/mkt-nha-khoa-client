import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { GuideService } from "@/lib/api/services/guide.service";
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
import Link from "next/link";
// =================================================================
// STEP 1: GENERATE METADATA (QUAN TRỌNG NHẤT CHO SEO)
// =================================================================
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const response = await GuideService.getBySlug(params.slug);
  const guide = response.data;

  if (!guide) {
    return {
      title: "Không tìm thấy bài viết",
      description: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.",
    };
  }

  return {
    title: guide.seo_title || guide.title,
    description: guide.meta_description || guide.excerpt,
    openGraph: {
      title: guide.seo_title || guide.title,
      description: guide.meta_description || guide.excerpt,
      type: "article",
      publishedTime: guide.published_at || guide.created_at,
      authors: [guide.creator_name],
      images: [
        {
          url: guide.featured_image_url || "/logo/banner_blogs.jpg",
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
  };
}

// =================================================================
// STEP 2: GENERATE STATIC PARAMS (ĐỂ BUILD TRANG TĨNH - SSG)
// =================================================================
export async function generateStaticParams() {
  const response = await GuideService.getAll({ limit: 1000 });
  return response.data.map((guide) => ({
    slug: guide.slug,
  }));
}

// =================================================================
// STEP 3: THE PAGE COMPONENT
// =================================================================

export async function GuideList() {
  // Gọi service để lấy dữ liệu
  const response = await GuideService.getAll({ post_type: "guide" });
  const guides = response.data;
  console.log("Categories:", guides);

  // Trả về null nếu không có danh mục nào
  if (!guides || guides.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold border-b pb-3 mb-4">Hướng dẫn</h3>
      <div className="space-y-3">
        {/* Dùng map để lặp qua mảng categories và render ra từng mục */}
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="flex justify-between items-center text-gray-700"
          >
            <Link
              href={`/danh-muc/${guide.slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {guide.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function GuideDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const response = await GuideService.getBySlug(params.slug);
  console.log("API Response:", response);
  const guide = response.data;
  console.log("guide detail:", guide);
  console.log("guide content:", guide.content);

  if (!guide) {
    notFound();
  }

  const formattedDate = new Date(
    guide.published_at || guide.created_at
  ).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // ===== XỬ LÝ AN TOÀN CHO CONTENT =====
  const safeContent =
    guide.content && typeof guide.content === "string"
      ? guide.content.trim()
      : "";

  // Debug: Kiểm tra loại dữ liệu
  console.log("Content type:", typeof guide.content);
  console.log("Content value:", guide.content);

  return (
    <main className="bg-white">
      <HeroSection
        title={guide.title}
        imageSrc={guide.featured_image_url || "/logo/banner_blogs.jpg"}
        imageAlt={guide.title}
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
                  <BreadcrumbLink href="/blog">Hướng dẫn</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{guide.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* ===== guide Header ===== */}
            <header className="mt-8">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {guide.title}
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Bởi {guide.creator_name} • {formattedDate} •{" "}
                {guide.category_name}
              </p>
            </header>

            {/* ===== Featured Image ===== */}
            {guide.featured_image_url && (
              <div className="relative w-full aspect-[16/9] mt-8 rounded-lg overflow-hidden">
                <Image
                  src={guide.featured_image_url}
                  alt={guide.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <Separator className="my-8" />

            {/* ===== guide Content ===== */}
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
            <GuideList />
          </div>
        </div>
      </article>

      <Separator className="my-12" />

      {/* ================================================================= */}
      {/* STEP 4: STRUCTURED DATA (JSON-LD) - SIÊU TỐT CHO SEO         */}
      {/* ================================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blogguideing",
            headline: guide.title,
            name: guide.title,
            description: guide.meta_description || guide.excerpt,
            image: guide.featured_image_url || "/logo/banner_blogs.jpg",
            datePublished: guide.published_at || guide.created_at,
            dateModified: guide.updated_at,
            author: {
              "@type": "Person",
              name: guide.creator_name,
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
