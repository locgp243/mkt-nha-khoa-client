import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// Services & Types
import { GuideService } from "@/lib/api/services/guide.service";
import { Guide } from "@/types/guide";
import FAQSection from "@/app/huong-dan/FAQSection";
import { faqItems } from "@/types/faqData";

// Kiểu dữ liệu cho card hiển thị
interface GuideCard {
  id: number;
  iconSrc: string;
  title: string;
  description: string;
  href: string;
}

// =================================
// TỐI ƯU SEO TỰ ĐỘNG
// =================================
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hướng Dẫn Sử Dụng Phần Mềm Nha Khoa Maydental",
    description:
      "Tổng hợp các bài viết, video hướng dẫn cách thức sử dụng phần mềm nha khoa online Maydental một cách nhanh chóng, dễ dàng và hiệu quả nhất.",
    alternates: {
      canonical: "/huong-dan",
    },
  };
}

// =================================
// COMPONENT CHÍNH (SERVER COMPONENT)
// =================================
export default async function HuongDanPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  let guides: GuideCard[] = [];
  let error: string | null = null;

  // Fetch dữ liệu trên server
  try {
    const response = await GuideService.getAll({ post_type: "guide" });
    guides = (response.data || []).map((post: Guide) => ({
      id: post.id,
      iconSrc: `${API_URL}${post.featured_image_url}`,
      title: post.title,
      description: post.excerpt,
      href: `/huong-dan/${post.slug}`,
    }));
  } catch (err) {
    console.error("Lỗi khi fetch bài hướng dẫn:", err);
    error = "Không thể tải danh sách bài hướng dẫn. Vui lòng thử lại sau.";
  }

  // Xử lý lỗi
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  // Tạo Structured Data cho Google
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        // Lưu ý: Chuyển JSX thành text thuần túy cho schema
        text: item.plainAnswer,
      },
    })),
  };

  return (
    <main className="bg-[#F2F5F8]">
      {/* Script JSON-LD cho SEO nâng cao */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Section 1: Banner */}
      <section className="relative h-[calc(100vh-100px)] md:h-[calc(100vh-100px)] lg:h-[423px] bg-cover bg-no-repeat bg-center bg-[#EEEEEF] before:content-[''] before:absolute before:inset-0 before:bg-[url('/logo/manual_Tablet.jpg')] before:md:bg-[url('/logo/manual_Tablet.jpg')] before:lg:bg-[url('/logo/banner_manual.jpg')] before:bg-cover before:bg-no-repeat before:bg-center">
        <div className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto px-4 h-full flex lg:items-center">
          <div className="w-[90%] pt-8 mx-auto md:w-[90%] md:pt-8 md:mx-auto lg:w-[42%] lg:mx-0 z-10 text-center lg:text-right">
            <h1 className="text-[36px] text-white font-bold leading-[4.025rem] tracking-[.2px]">
              Hướng Dẫn Sử Dụng Maydental
            </h1>
            <p className="text-white text-[1.5rem] leading-[2rem] tracking-[.2px] hidden md:block">
              Cách thức sử dụng phần mềm nha khoa online nhanh chóng, dễ dàng và
              hiệu quả
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Nội dung chính */}
      <section className="w-[90%] md:w-[90%] lg:w-[80%] py-10 mx-auto bg-[#F2F5F8]">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Bài Viết Hướng Dẫn
        </h2>
        <span className="text-black">
          Maydental là{" "}
          <span className="text-[#018DCC]">phần mềm quản lý nha khoa</span>{" "}
          Online được Maysoft phát triển theo tiêu chí : Đơn giản, đầy đủ và tin
          cậy. Bs có thể tham khảo thêm các hướng dẫn sử dung như sau:
        </span>

        {/* Danh sách bài hướng dẫn */}
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {guides.map((card) => (
            <Link href={card.href} key={card.id}>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full justify-center transition-shadow hover:shadow-lg duration-300 cursor-pointer">
                <div className="w-full flex items-center">
                  <div className="w-[30%] flex-shrink-0">
                    <Image
                      src={process.env.NEXT_PUBLIC_API_BASE_URL + card.iconSrc}
                      alt={card.title} // Đảm bảo alt text mô tả đúng hình ảnh
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-[70%] pl-4">
                    <h3 className="text-[16px] font-semibold text-[#018DCA] mb-2 line-clamp-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Phần FAQ được gọi từ component riêng */}
        <FAQSection />

        {/* Phần Video có thể thêm sau */}
        <div className="mt-4 mb-4">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Video Hướng Dẫn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {/* Nơi để các video... */}
          </div>
        </div>
      </section>
    </main>
  );
}
