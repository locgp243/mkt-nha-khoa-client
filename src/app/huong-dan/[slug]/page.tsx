import { cache } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
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
import { Guide } from "@/types/guide"; // Giả sử em có type Guide

// =================================================================
// TỐI ƯU HÓA DATA FETCHING
// =================================================================

// Dùng `cache` để hàm lấy chi tiết guide chỉ chạy 1 lần
const getGuideData = cache(async (slug: string) => {
  const response = await GuideService.getBySlug(slug);
  return response.data;
});

// Dùng `cache` để hàm lấy danh sách guide chỉ chạy 1 lần
const getAllGuides = cache(async () => {
  const response = await GuideService.getAll({ post_type: "guide" });
  return response.data;
});

// =================================================================
// METADATA VÀ STATIC PARAMS
// =================================================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const guide = await getGuideData(resolvedParams.slug);
    if (!guide) return { title: "Không tìm thấy hướng dẫn" };

    return {
      title: guide.seo_title || guide.title,
      description: guide.meta_description || guide.excerpt,
      openGraph: {
        type: "article",
        title: guide.seo_title || guide.title,
        description: guide.meta_description || guide.excerpt,
        publishedTime: guide.published_at || guide.created_at,
        authors: [guide.creator_name],
        images: [{ url: guide.featured_image_url || "/logo/banner_blogs.jpg" }],
      },
    };
  } catch (error) {
    console.error(`[generateMetadata] Lỗi khi lấy dữ liệu hướng dẫn:`, error);
    return { title: "Lỗi Server" };
  }
}

export async function generateStaticParams() {
  try {
    const guides = await getAllGuides();
    return guides.map((guide) => ({ slug: guide.slug }));
  } catch (error) {
    console.error(
      "[generateStaticParams] Lỗi khi lấy danh sách hướng dẫn:",
      error
    );
    return [];
  }
}

// =================================================================
// COMPONENT CON: DANH SÁCH HƯỚNG DẪN
// =================================================================

async function GuideList() {
  try {
    const guides = await getAllGuides();
    if (!guides || guides.length === 0) return null;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
        <h3 className="text-xl font-bold border-b pb-3 mb-4">Hướng dẫn khác</h3>
        <div className="space-y-3">
          {guides.map((guide: Guide) => (
            <div
              key={guide.id}
              className="flex justify-between items-center text-gray-700"
            >
              {/* Sửa lại link cho đúng với trang hướng dẫn */}
              <Link
                href={`/huong-dan/${guide.slug}`}
                className="hover:text-primary transition-colors"
              >
                {guide.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Lỗi khi tải danh sách hướng dẫn:", error);
    return null; // Không hiển thị gì nếu có lỗi
  }
}

// =================================================================
// COMPONENT CHÍNH: TRANG CHI TIẾT
// =================================================================

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const resolvedParams = await params;
    const guide = await getGuideData(resolvedParams.slug);
    if (!guide) notFound();

    const formattedDate = new Date(
      guide.published_at || guide.created_at
    ).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const imageUrl = guide.featured_image_url
      ? new URL(guide.featured_image_url, process.env.NEXT_PUBLIC_API_BASE_URL)
          .href
      : "/logo/banner.jpg";

    return (
      <main className="bg-white">
        <HeroSection
          title={guide.title}
          imageSrc={imageUrl}
          imageAlt={guide.title}
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
                    <BreadcrumbLink href="/huong-dan">Hướng dẫn</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{guide.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <header className="mt-8">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  {guide.title}
                </h1>
                <p className="mt-4 text-lg text-gray-500">
                  Bởi {guide.creator_name} • {formattedDate}
                </p>
              </header>

              {guide.featured_image_url && (
                <div className="relative w-full aspect-[16/9] mt-8 rounded-lg overflow-hidden">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_API_BASE_URL +
                      guide.featured_image_url
                    }
                    alt={guide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <Separator className="my-8" />

              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: guide.content || "" }}
              />
            </div>
            <div className="w-full lg:w-1/3">
              <GuideList />
            </div>
          </div>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article", // Sửa lại cho đúng type
              headline: guide.title,
              name: guide.title,
              description: guide.meta_description || guide.excerpt,
              image: guide.featured_image_url || "/logo/banner_blogs.jpg",
              datePublished: guide.published_at || guide.created_at,
              dateModified: guide.updated_at,
              author: { "@type": "Person", name: guide.creator_name },
              publisher: {
                "@type": "Organization",
                name: "Tên Thương Hiệu Của Em",
                logo: { "@type": "ImageObject", url: "/logo/your-logo.png" },
              },
            }),
          }}
        />
      </main>
    );
  } catch (error) {
    console.error(`Lỗi khi render hướng dẫn:`, error);
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Đã có lỗi xảy ra</h1>
          <p>Không thể tải được nội dung này. Vui lòng thử lại sau.</p>
        </div>
      </main>
    );
  }
}
