import { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StaticPageService } from "@/lib/api/services/static_page.service";

// Import các component UI cần thiết
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

// Bọc hàm lấy dữ liệu trong `cache` để tránh gọi API nhiều lần
const getPageData = cache(async (slug: string) => {
  const response = await StaticPageService.getBySlug(slug);
  return response.data;
});

// =================================================================
// STEP 1: GENERATE METADATA (TỐI ƯU SEO)
// =================================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    // Await params để lấy giá trị thực
    const { slug } = await params;
    const page = await getPageData(slug);

    if (!page) {
      return { title: "Không tìm thấy trang" };
    }

    return {
      title: page.seo_title || page.title,
      description: page.meta_description,
      openGraph: {
        title: page.seo_title || page.title,
        description: page.meta_description || "",
        type: "website",
      },
    };
  } catch (error) {
    console.error(`[generateMetadata] Lỗi khi lấy dữ liệu trang:`, error);
    return {
      title: "Lỗi Server",
      description: "Không thể tải dữ liệu cho trang này.",
    };
  }
}

// =================================================================
// STEP 3: THE PAGE COMPONENT
// =================================================================
export default async function StaticPageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    // Await params để lấy giá trị thực
    const { slug } = await params;

    // Dùng lại hàm đã được cache, Next.js sẽ không gọi lại API
    const page = await getPageData(slug);

    if (!page) {
      notFound();
    }

    return (
      <main className="bg-white">
        <HeroSection
          title={page.title}
          imageSrc={"/logo/banner_blogs.jpg"}
          imageAlt={page.title}
        />
        <article className="w-full bg-muted">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{page.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <header className="mt-8">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {page.title}
              </h1>
            </header>

            <Separator className="my-8" />

            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: page.content || "" }}
            />
          </div>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              headline: page.title,
              name: page.title,
              description: page.meta_description,
              url: `https://yourdomain.com/${slug}`,
              datePublished: page.created_at,
              dateModified: page.updated_at,
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
    console.error(`Lỗi khi render trang:`, error);
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Đã có lỗi xảy ra</h1>
          <p>
            Không thể tải được nội dung của trang này. Vui lòng thử lại sau.
          </p>
        </div>
      </main>
    );
  }
}
