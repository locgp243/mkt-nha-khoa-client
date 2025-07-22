// app/page.tsx
// KHÔNG CÓ "use client"; ở đầu file này, vì đây là Server Component
import Image from "next/image";
import Link from "next/link";
// Không import useState ở đây nữa, vì nó không dùng trực tiếp trong Home

import {
  FaBullhorn,
  FaCheckSquare,
  FaEdit,
  FaGlobeAsia,
  FaUserMd,
  FaUsersCog,
  FaUserShield,
} from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

// Import các service và type cần thiết cho blog posts
import { PostCard } from "@/components/PostCard";
import { PostService } from "@/lib/api/services/post.service";
import { Post } from "@/types/post";

// Import Client Component TestimonialsCarousel
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"; // <--- Đảm bảo đường dẫn này đúng

// Cấu hình số bài viết blog hiển thị trên trang chủ
const NUM_BLOG_POSTS_ON_HOME = 6; // Ví dụ chỉ hiển thị 3 bài gần nhất

// Home component giờ là một Server Component
export default async function Home() {
  let latestPosts: Post[] = [];
  let postsError: string | null = null;

  try {
    // Fetch dữ liệu bài viết blog trực tiếp tại Server Component
    // Lấy 3 bài viết mới nhất (hoặc số lượng em muốn)
    const response = await PostService.getAll({
      page: 1, // Luôn lấy trang đầu tiên
      limit: NUM_BLOG_POSTS_ON_HOME,
    });
    latestPosts = response.data;
  } catch (err) {
    console.error("Lỗi khi fetch bài viết blog cho trang chủ:", err);
    postsError = "Không thể tải các bài viết blog gần đây.";
  }

  // Dữ liệu tĩnh hoặc dữ liệu không yêu cầu tương tác client có thể được giữ nguyên
  const coreFeatures = [
    {
      iconSrc: <FaFileInvoiceDollar className="text-primary text-7xl" />,
      title: "Tránh thất thoát về doanh thu",
      description: (
        <span>
          Chỉ với 300VND phòng khám sẽ có 1 giải pháp tránh thất thoát doanh thu
          <strong> hiệu quả nhất hiện nay.</strong>
        </span>
      ),
    },
    {
      iconSrc: <FaUserShield className="text-primary text-7xl" />,
      title: "An toàn, an tâm ngủ ngon",
      description: (
        <span>
          Dữ liệu được lưu trữ dạng <strong>Read-only</strong> ở rất nhiều
          server trên hệ thống Cloud của AWS
        </span>
      ),
    },
    {
      iconSrc: <FaGlobeAsia className="text-primary text-7xl" />,
      title: "Online, truy cập mọi lúc mọi nơi",
      description:
        "Chuyển đổi số, quản lý phòng khám online 24/7, chỉ cần Wifi Internet hoặc 3G/4G",
    },
    {
      iconSrc: <FaBullhorn className="text-primary text-7xl" />,
      title: "Zalo, SMS, CSKH nha khoa",
      description:
        "Tự động gửi SMS, tin nhắn Zalo CSKH: kế hoạch điều trị, lịch sử thanh toán, tái khám định kỳ 6 tháng, HPPD, lịch hẹn, cảm ơn ...",
    },
    {
      iconSrc: <FaUsersCog className="text-primary text-7xl" />,
      title: "Quản lý chuỗi phòng khám toàn diện",
      description: (
        <span>
          Với phòng khám nhỏ, không có phần mềm cũng chẳng sao, nhưng nếu mở
          chuỗi thì Maydental là <strong> giải pháp số 1</strong>
        </span>
      ),
    },
    {
      iconSrc: <FaUserMd className="text-primary text-7xl" />,
      title: "Chăm sóc khách hàng tốt hơn",
      description: (
        <span>
          Maydental cung cấp góc nhìn 360 về khách hàng, giúp phòng khám{" "}
          <strong>hiểu và CSKH tốt hơn</strong>
        </span>
      ),
    },
  ];
  const linhHen = [
    "Hỗ trợ quản lý tất cả lịch phòng khám chỉ trong 10 phút",
    "Tự động gởi SMS nhắc lịch hẹn",
    "Tăng 30% khách hàng cũ quay lại",
    "Giảm thời gian chờ trung bình của khách hàng xuống dưới 15 phút",
    "Tối ưu lịch làm việc của bác sĩ và phụ tá, ghế nha",
    "Đặt và nhắc lịch hẹn cho từng dịch vụ nha khoa như: niềng răng, nội nha, chỉnh nha, răng sứ, implant..",
  ];
  const hoSo = [
    "Tìm kiếm 3000 hồ sơ bệnh nhân trong 1 giây",
    "Tạo hồ sơ mới với thao tác đơn giản trong 30 giây",
    "Lên kế hoạch điều trị nhanh chóng",
    "Nha khoa số, Bệnh án điện tử, quản lý Labo",
    "Hỗ trợ hình ảnh, video, file PDF",
    "Tiết kiệm hơn 1 giờ mỗi ngày ",
    "Xem và lưu trữ toàn bộ bệnh án chi tiết của từng bệnh nhân chỉ với 1 thao tác click chuột",
  ];
  const thuChi = [
    "Thu chi, công nợ, labo tương ứng với kế hoạch điều trị của từng bệnh nhân",
    "Báo cáo công nợ, thu chi phòng khám theo ngày, tuần hoặc tháng..",
    "Báo cáo doanh thu theo Bác sĩ, nha sĩ, phụ tá",
    "Báo cáo doanh thu theo từng loại dịch vụ: niềng răng, nội nha, chỉnh nha, răng sứ và implant",
    "Thông tin trực quan, rõ ràng và chính xác.",
  ];

  return (
    <main className="bg-white">
      {/* ===== BANNER SECTION ===== */}
      <section
        className="
          relative h-[calc(100vh-50px)] md:h-[calc(100vh-50px)] lg:h-[100vh] 
          bg-[#EEEEEF] 

          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/logo/Maydental_banner_2021.jpg')] 
          before:md:bg-[url('/logo/Maydental_banner_2021.jpg')] 
          before:lg:bg-[url('/logo/Maydental_banner_2021.jpg')] 
          before:bg-cover before:bg-no-repeat before:bg-center
          before:z-0 
        "
      >
        {/* Div chứa nội dung - Có giới hạn chiều rộng và căn giữa */}
        <div
          className="
            relative z-10 /* Đặt z-index cao hơn để nội dung hiển thị trên ảnh nền */
            container mx-auto px-4 /* shadcn/ui  class + căn giữa + padding ngang */
            h-full flex items-center /* Giữ nguyên flexbox cho nội dung */
          "
        >
          {/* Div chứa text và buttons của banner */}
          <div
            className="
              w-full
              lg:w-[42%] 
              pt-8 md:pt-8 lg:pt-0 
              text-center lg:text-left 
              mx-auto lg:mx-0 
            "
          >
            <h1
              className="text-[32px] md:text-[36px] lg:text-[48px] text-white font-bold mb-4" /* Kích thước font responsive */
              style={{
                lineHeight: "1.2" /* Tối ưu line-height */,
                letterSpacing: ".2px",
              }}
            >
              Phần mềm quản lý nha khoa
            </h1>
            <p
              className="text-white text-base md:text-lg mb-8" /* Kích thước font responsive */
              style={{
                lineHeight: "1.5",
                letterSpacing: ".2px",
              }}
            >
              Maydental là giải pháp CRM - quản lý &amp; vận hành PK nha khoa,
              ứng dụng công nghệ điện toán đám mây giúp chủ doanh nghiệp, bác sĩ
              quản lý: phòng khám, chuỗi phòng khám một cách đơn giản, hiệu quả,
              tiết kiệm thời gian và đạt doanh thu cao.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              {" "}
              {/* Flexbox cho buttons */}
              <Button
                variant="outline" /* Sử dụng variant outline của shadcn/ui */
                className="cursor-pointer bg-transparent text-white border-[#33A5D5] hover:bg-[#33A5D5]" /* Màu sắc tùy chỉnh */
                size="lg" /* Kích thước lớn */
              >
                Đăng nhập
              </Button>
              <Button
                className="cursor-pointer bg-[#f9b01e] text-white hover:bg-[#f9b01e]/90" /* Màu sắc tùy chỉnh */
                size="lg" /* Kích thước lớn */
              >
                Dùng thử 7 ngày
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="px-0 pt-20 mb-20 text-center w-[80%] mx-auto">
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-bold text-primary mb-2">
          Đơn giản - Đầy đủ - Tin cậy
        </h2>
        <p className="text-sm text-gray-600 mb-12">
          Vì sao Maydental được các Bs Nha khoa và Phòng khám ưu ái sử dụng?
        </p>

        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-0">
          {coreFeatures.map((card, index) => (
            <div
              key={index}
              className="bg-white pt-2 rounded-lg flex flex-col items-start h-[165px] justify-start duration-300"
            >
              <div className="w-[100%] flex">
                <div className="w-[25%] ">
                  <div className="mb-4 mt-4 ">{card.iconSrc}</div>
                </div>
                <div className="w-[75%] flex flex-col items-start">
                  <h3 className="text-[20px] text-black font-semibold text-left mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] text-left leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center flex-col pt-14 bg-[#F7F5F6]">
        <div className="w-[90%] mx-auto ">
          <h1 className="text-[32px] text-center font-semibold text-primary">
            Giải pháp CRM dành cho nha khoa
          </h1>
          <div className="text-center">
            Nền tảng vững chắc - Nâng tầm phòng khám
          </div>
        </div>
      </div>
      {/* Xếp lịch phòng khám hiệu quả */}
      <section className="p-4 bg-[#F7F5F6]">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-16 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex items-center justify-center">
              <Image
                src="/logo/post_9.png"
                alt="Giao diện quản lý bệnh nhân"
                width={500}
                height={400}
                // layout="responsive" // Có thể thêm layout="responsive" để ảnh tự co giãn
                // objectFit="contain" // Hoặc objectFit nếu không muốn ảnh bị cắt
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-left text-primary mb-4">
                Xếp lịch phòng khám hiệu quả
              </h2>
              <ul className="space-y-4">
                {linhHen.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <FaCheckSquare className="text-primary text-xl" />
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 transition-colors cursor-pointer">
                <button className="bg-[#028BFF] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Số hóa 100% hồ sơ bệnh nhân*/}
      <section className="p-4 bg-[#F7F5F6]">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-left text-primary mb-4">
                Số hóa 100% hồ sơ bệnh nhân
              </h2>
              <ul className="space-y-4">
                {hoSo.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <FaCheckSquare className="text-primary text-xl" />
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 transition-colors cursor-pointer">
                <button className="bg-[#F9B01E] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity">
                  Đăng ký ngay
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/logo/feature_banner_02_sm.png"
                alt="Giao diện quản lý bệnh nhân"
                width={500}
                height={400}
                // layout="responsive"
                // objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quản lý thu chi dễ dàng */}
      <section className="p-4 bg-[#F7F5F6]">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-16 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex items-center justify-center">
              <Image
                src="/logo/Banner_app11.png"
                alt="Giao diện quản lý bệnh nhân"
                width={500}
                height={400}
                // layout="responsive"
                // objectFit="contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-left text-primary mb-4">
                Quản lý thu chi dễ dàng
              </h2>
              <ul className="space-y-4">
                {thuChi.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <FaCheckSquare className="text-primary text-xl" />
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 transition-colors cursor-pointer">
                <button className="bg-[#018DCA] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity">
                  Chi phí sử dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG POSTS SECTION ===== */}
      <section
        className="mt-20 mb-16 w-[90%] mx-auto
          md:w-[90%] md:pt-8 md:mx-auto
          lg:w-[80%]"
      >
        <h1 className="text-center text-3xl text-primary font-semibold">
          Chuyển đổi số, nha khoa 4.0
        </h1>
        {/* HIỂN THỊ CÁC BÀI VIẾT BLOG TẠI ĐÂY */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] mx-auto">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <PostCard key={post.id} post={post} /> // Sử dụng PostCard từ BlogPage
            ))
          ) : (
            <p className="text-center text-gray-500 font-medium col-span-full">
              {postsError || "Không tìm thấy bài viết nào gần đây."}
            </p>
          )}
        </div>
        {/* Nút xem tất cả bài viết */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-blue-600 hover:underline text-lg font-semibold"
          >
            Xem tất cả bài viết →
          </Link>
        </div>
      </section>

      {/* ===== BOTTOM CTA SECTION ===== */}
      <section
        className="
          relative h-[calc(100vh-350px)] md:h-[calc(100vh-50px)] lg:h-[423px]
          bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
          before:content-[''] before:absolute before:inset-0
          before:bg-[#018DCA]
          before:bg-cover before:bg-no-repeat before:bg-center
        "
      >
        <div
          className="
            w-[100%] md:w-[95%] lg:w-[80%] 
            mx-auto px-4 pt-8 h-full flex lg:items-center justify-center
          "
        >
          <div
            className="
              w-[100%] mx-auto
              md:w-[100%]md:mx-auto
              lg:w-[50%] lg:mx-0
              z-10
              item-center 
              text-center
            "
            style={{ float: "left" }}
          >
            <Image
              src="/logo/logo_white.png"
              alt="Maysoft Logo"
              width={250}
              height={60}
              className="mx-auto flex-shrink-0"
            />
            <h1
              className="text-[32px] my-4 text-white font-bold"
              style={{
                letterSpacing: ".2px",
              }}
            >
              Trải nghiệm và dùng thử miễn phí
            </h1>
            <p
              className="
                text-white text-sm tracking-[.2px]
                block w-[100%] mx-auto
                md:w-[80%] md:mx-auto
                lg:w-[80%] 
              "
            >
              <span className="italic">
                Phần mềm quản lý nha khoa miễn phí{" "}
              </span>
              sử dụng trong 7 ngày Không cần download, Không cần cài đặt, Online
              mọi lúc, mọi nơi Tài khoản trải nghiệm phần mềm User:{" "}
              <span className="text-black">demo</span> Password:{" "}
              <span className="text-black">pmnk2021</span>
            </p>
            <button
              className="
                bg-transparent text-white py-2 px-5 rounded
                cursor-pointer mr-1 mt-8
                border border-[#33A5D5] hover:bg-[#33A5D5] transition-colors
                flex items-center justify-center w-full
              "
            >
              <FaEdit className="mr-2" />
              Dùng thử 7 ngày
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel (Component con được đánh dấu "use client") */}
      <section className="p-4 bg-[#ffffff]">
        <div className="w-[80%] mx-auto">
          {/* Component TestimonialsCarousel đã được tách riêng */}
          <TestimonialsCarousel />
        </div>
      </section>
    </main>
  );
}
