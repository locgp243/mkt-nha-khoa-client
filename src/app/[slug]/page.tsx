import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StaticPageService } from "@/lib/api/services/static_page.service";

// Import các component UI cần thiết
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/hero-section";

// =================================================================
// STEP 1: GENERATE METADATA (TỐI ƯU SEO)
// =================================================================
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const response = await StaticPageService.getBySlug(params.slug);
    const page = response.data;

    if (!page) {
      return { title: "Không tìm thấy trang" };
    }

    return {
      title: page.seo_title || page.title,
      description: page.meta_description,
      openGraph: {
        title: page.seo_title || page.title,
        description: page.meta_description || "",
        type: "website", // Trang tĩnh nên dùng 'website'
      },
    };
  } catch (error) {
    console.error(
      `[generateMetadata] Lỗi khi lấy dữ liệu trang ${params.slug}:`,
      error
    );
    return {
      title: "Lỗi Server",
      description: "Không thể tải dữ liệu cho trang này.",
    };
  }
}

// =================================================================
// STEP 2: GENERATE STATIC PARAMS (BUILD TRANG TĨNH - SSG)
// =================================================================
export async function generateStaticParams() {
  try {
    const response = await StaticPageService.getAll(); // Giả sử em có hàm getAll
    return response.data.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error("[generateStaticParams] Lỗi khi lấy danh sách trang:", error);
    return [];
  }
}

// =================================================================
// STEP 3: THE PAGE COMPONENT
// =================================================================
export default async function StaticPageDetail({
  params,
}: {
  params: { slug: string };
}) {
  const response = await StaticPageService.getBySlug(params.slug);
  const page = response.data;

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-white">
      <HeroSection
        title={page.title}
        // Trang tĩnh thường không có ảnh đại diện, ta dùng ảnh mặc định
        imageSrc={"/logo/banner_blogs.jpg"}
        imageAlt={page.title}
      />
      <article className="w-full bg-blue-50">
        {/* Bố cục 1 cột, không có sidebar */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{page.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}

          {/* ===== Page Header ===== */}
          <header className="mt-8">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              {page.title}
            </h1>
            {/* Trang tĩnh không có tác giả hay ngày đăng nên ta bỏ phần đó đi */}
          </header>

          <Separator className="my-8" />

          {/* ===== Page Content ===== */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-dark"
            dangerouslySetInnerHTML={{ __html: page.content || "" }}
          />
        </div>
      </article>

      {/* Trang tĩnh không có các bài viết liên quan */}

      {/* ================================================================= */}
      {/* STEP 4: STRUCTURED DATA (JSON-LD) - SIÊU TỐT CHO SEO         */}
      {/* ================================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage", // Dùng 'WebPage' cho các trang thông tin chung
            headline: page.title,
            name: page.title,
            description: page.meta_description,
            url: `https://yourdomain.com/${page.slug}`, // Thay bằng domain của em
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
}
