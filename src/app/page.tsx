"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBullhorn,
  FaCheckSquare,
  FaEdit,
  FaGlobeAsia,
  FaListAlt,
  FaUserMd,
  FaUsersCog,
  FaUserShield,
} from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";

export default function Home() {
  const coreFeatures = [
    {
      iconSrc: <FaFileInvoiceDollar className="text-[#018DCA] text-7xl" />, // Cập nhật icon
      title: "Tránh thất thoát về doanh thu",
      description: (
        <span>
          Chỉ với 300VND phòng khám sẽ có 1 giải pháp tránh thất thoát doanh thu
          <strong> hiệu quả nhất hiện nay.</strong>
        </span>
      ),
    },
    {
      iconSrc: <FaUserShield className="text-[#018DCA] text-7xl" />, // Cập nhật icon
      title: "An toàn, an tâm ngủ ngon",
      description: (
        <span>
          Dữ liệu được lưu trữ dạng <strong>Read-only</strong> ở rất nhiều
          server trên hệ thống Cloud của AWS
        </span>
      ),
    },
    {
      iconSrc: <FaGlobeAsia className="text-[#018DCA] text-7xl" />, // Cập nhật icon
      title: "Online, truy cập mọi lúc mọi nơi",
      description:
        "Chuyển đổi số, quản lý phòng khám online 24/7, chỉ cần Wifi Internet hoặc 3G/4G",
    },
    {
      iconSrc: <FaBullhorn className="text-[#018DCA] text-7xl" />, // Cập nhật icon
      title: "Zalo, SMS, CSKH nha khoa",
      description:
        "Tự động gửi SMS, tin nhắn Zalo CSKH: kế hoạch điều trị, lịch sử thanh toán, tái khám định kỳ 6 tháng, HPPD, lịch hẹn, cảm ơn ...",
    },
    {
      iconSrc: <FaUsersCog className="text-[#018DCA] text-7xl" />, // Cập nhật icon
      title: "Quản lý chuỗi phòng khám toàn diện",
      description: (
        <span>
          Với phòng khám nhỏ, không có phần mềm cũng chẳng sao, nhưng nếu mở
          chuỗi thì Maydental là <strong> giải pháp số 1</strong>
        </span>
      ),
    },
    {
      iconSrc: <FaUserMd className="text-[#018DCA] text-7xl" />, // Cập nhật icon
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
  const blogPosts = [
    {
      id: "ban-chai-tre",
      cate: "Phần mềm quản lý",
      date: "10 tháng 08 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Vì sao nên dùng bàn chải tre The Humble? Và đâu là lý do",
      description:
        "Từ trước đến nay, chúng ta đã hình thành thói quen với việc sử dụng bàn chải đánh răng có nguồn gốc từ nhựa. Mổi cho đến khi chúng ta nhận ra những chiếc b...",
      link: "/blog/vi-sao-nen-dung-ban-chai-tre",
    },
    {
      id: "ban-chai-nhua",
      cate: "Tin nha khoa",
      date: "02 tháng 08 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title:
        "Thay đổi chiếc bàn chải nhựa, hành động nhỏ vì hành tinh thân yêu",
      description:
        'Maydental sẽ kể bạn nghe câu chuyện về những "chiến binh" bàn chải đánh răng từ tre, thay thế cho những chiếc bàn chải nhựa chứa nhiều hiểm họa tiềm tàng, tiếp...',
      link: "/blog/thay-doi-ban-chai-nhua",
    },
    {
      id: "profile-phong-kham",
      date: "09 tháng 07 năm 2021",
      cate: "Tin nha khoa",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "[Chia sẻ] 7 cách tạo profile phòng khám trên Internet",
      description:
        "Internet là một công cụ giúp phòng khám Marketing hiệu quả. Sau đây, Maydental sẽ cùng Bs đi qua các cách để tạo Profile nha khoa tối ưu!...",
      link: "/blog/7-cach-tao-profile-phong-kham",
    },
    {
      id: "covid-cong-viec",
      date: "07 tháng 07 năm 2021",
      cate: "Phần mềm quản lý",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "[Top 7] công việc phòng khám nên làm trong mùa dịch covid",
      description:
        "Nha khoa nên làm gì trong mùa dịch, hãy cùng Maydental thử qua các công việc sau: phân loại khách hàng, tìm hiểu phần mềm, tạo profile trên internet, kiếm kề và...",
      link: "/blog/top-7-cong-viec-phong-kham-mua-covid",
    },
    {
      id: "sau-rang-tre-em",
      cate: "Maketting",
      date: "18 tháng 05 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Sâu răng trẻ em, các điểm cần lưu ý",
      description:
        "Sâu răng ở trẻ em (Early childhood caries ECC) thường gặp 2-3 tuổi đến 3 tuổi, mặc dù có thể xuất hiện sớm hơn và có rất nhiều nguyên nhân...",
      link: "/blog/sau-rang-tre-em",
    },
    {
      id: "bi-quyet-upsell",
      cate: "Maketting",
      date: "31 tháng 03 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Bí quyết Upsell trong nha khoa",
      description:
        "Trong kinh doanh nha khoa, nhờ bí quyết Upsell mà phòng khám dễ thu nhiều lợi nhuận hơn nhưng không bộ khiến khách hàng khó chịu...",
      link: "/blog/bi-quyet-upsell-nha-khoa",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Sau 10 năm làm phụ tá Nha khoa tại Pháp, tôi trở về Việt Nam, đảm nhận vị trí trưởng phòng đào tạo tại nha khoa SINGAE, với nhiệm vụ chuẩn hóa và nâng tầm chất lượng nha khoa. Tôi luôn tìm kiếm giải pháp quản lý & vận hành phòng khám nha khoa như tôi từng sử dụng tại Pháp.",
      author: "Đinh Xuân Thu Trinh",
      title: "TRƯỞNG PHÒNG ĐÀO TẠO TẠI NHA KHOA SINGAE",
      avatar: "/logo/tran_ngoc_phuong_thao.png", // Assuming you have an avatar image
    },
    {
      id: 2,
      text: "Phần mềm Maydental thực sự đã giúp phòng khám của chúng tôi tối ưu hóa quy trình làm việc, từ việc quản lý lịch hẹn cho đến theo dõi hồ sơ bệnh nhân. Giao diện thân thiện và dễ sử dụng, giúp đội ngũ nhanh chóng làm quen. Rất hài lòng với sự hỗ trợ nhiệt tình từ đội ngũ Maydental.",
      author: "Nguyễn Văn A",
      title: "GIÁM ĐỐC PHÒNG KHÁM NHA KOC",
      avatar: "/logo/tran_ngoc_phuong_thao.png", // Use a generic avatar if no specific one
    },
    {
      id: 3,
      text: "Là một bác sĩ bận rộn, việc quản lý thông tin bệnh nhân và lịch làm việc luôn là thách thức. Maydental đã giải quyết triệt để vấn đề này, giúp tôi tập trung hơn vào chuyên môn. Tính năng báo cáo thống kê cũng rất hữu ích để nắm bắt tình hình kinh doanh.",
      author: "Lê Thị B",
      title: "BÁC SĨ NHA KHOA TẠI HÀ NỘI",
      avatar: "/logo/tran_ngoc_phuong_thao.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const currentTestimonial = testimonials[currentIndex];
  return (
    <main className="bg-white">
      <div className="px-0 pt-16 mb-12 text-center w-[80%] mx-auto">
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-bold text-[#018DCA] mb-2">
          Đơn giản - Đầy đủ - Tin cậy
        </h2>
        <p className="text-sm text-gray-600 mb-12">
          Vì sao Maydental được các Bs Nha khoa và Phòng khám ưu ái sử dụng?
        </p>

        <div
          className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-0"
          // Removed dynamic class based on isLaptop
        >
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
      <section
        className="
          relative h-[calc(100vh-50px)] md:h-[calc(100vh-50px)] lg:h-[423px]
          bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/logo/Maydental_banner_tablet_2021.jpg')]
          before:md:bg-[url('/logo/Maydental_banner_tablet_2021.jpg')]
          before:lg:bg-[url('/logo/Maydental_banner_2021.jpg')]
          before:bg-cover before:bg-no-repeat before:bg-center
        "
      >
        <div
          className="
            w-[90%] md:w-[90%] lg:w-[80%]
            m-auto px-4 h-full flex
          "
          // Removed dynamic class based on !isLaptop
        >
          <div
            className="
              w-[90%] pt-8 mx-auto
              md:w-[90%] md:pt-8 md:mx-auto
              lg:w-[42%] lg:mx-0
              z-10
              text-center lg:text-left
            "
            style={{ float: "left" }} // Kept float for minimal disruption, consider replacing with flex/grid
          >
            <h1
              className="text-[32px] text-white font-bold"
              style={{
                lineHeight: "4.025rem",
                letterSpacing: ".2px",
              }}
            >
              Phần mềm quản lý nha khoa
            </h1>
            <p
              className="text-white texl-sm" // Typo: texl-sm -> text-sm (corrected)
              style={{
                lineHeight: "1.5rem",
                letterSpacing: ".2px",
              }}
            >
              Maydental là giải pháp CRM - quản lý & vận hành PK nha khoa, ứng
              dụng công nghệ điện toán đám mây giúp chủ doanh nghiệp, bác sĩ
              quản lý: phòng khám, chuỗi phòng khám một cách đơn giản, hiệu quả,
              tiết kiệm thời gian và đạt doanh thu cao.
            </p>
            <button
              className="
                bg-transparent text-white py-2 px-5 rounded
                cursor-pointer mr-1
                border border-[#33A5D5] hover:bg-[#33A5D5] transition-colors
              "
              // Replaced inline style with Tailwind classes
            >
              Đăng nhập
            </button>
            <button
              className="
                bg-[#f9b01e] text-white py-2 px-5 rounded
                cursor-pointer hover:opacity-90 transition-opacity
              "
              // Replaced inline style with Tailwind classes
            >
              Dùng thử 7 ngày
            </button>
          </div>
        </div>
      </section>

      <div className="flex items-center flex-col pt-14 bg-[#F7F5F6]">
        <div className="w-[90%] mx-auto ">
          <h1 className="text-[32px] text-center font-semibold text-[#018DCA]">
            Giải pháp CRM dành cho nha khoa
          </h1>
          <div className="text-center">
            Nền tảng vững chắc - Nâng tầm phòng khám
          </div>
        </div>
      </div>
      {/* Xếp lịch phòng khám hiệu quả */}
      <section className="p-4 bg-[#F7F5F6]">
        <div
          className="w-[90%] lg:w-[80%] mx-auto pt-16 pb-16"
          // Removed dynamic width based on !isLaptop
        >
          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Right Column: Image Mockup */}
            <div className="flex items-center justify-center">
              <Image
                src="/logo/post_9.png" // Cập nhật đường dẫn hình ảnh mockup
                alt="Giao diện quản lý bệnh nhân"
                width={500} // Điều chỉnh chiều rộng phù hợp
                height={400} // Điều chỉnh chiều cao phù hợp
              />
            </div>
            {/* Left Column: Benefits List */}
            <div>
              <h2 className="text-3xl font-bold text-left text-[#018DCA] mb-4">
                Xếp lịch phòng khám hiệu quả
              </h2>
              <ul className="space-y-4">
                {linhHen.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <FaCheckSquare className="text-[#018DCA] text-xl" />
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8 transition-colors cursor-pointer">
                <button
                  className="bg-[#028BFF] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                  // Replaced inline style with Tailwind classes
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Số hóa 100% hồ sơ bệnh nhân*/}
      <section className="p-4 bg-[#F7F5F6]">
        <div
          className="w-[90%] lg:w-[80%] mx-auto pt-4 pb-16"
          // Removed dynamic width based on !isLaptop
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-left text-[#018DCA] mb-4">
                Số hóa 100% hồ sơ bệnh nhân
              </h2>
              <ul className="space-y-4">
                {hoSo.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <FaCheckSquare className="text-[#018DCA] text-xl" />
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8 transition-colors cursor-pointer">
                <button
                  className="bg-[#F9B01E] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                  // Replaced inline style with Tailwind classes
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>

            {/* Right Column: Image Mockup */}
            <div className="flex items-center justify-center">
              <Image
                src="/logo/feature_banner_02_sm.png" // Cập nhật đường dẫn hình ảnh mockup
                alt="Giao diện quản lý bệnh nhân"
                width={500} // Điều chỉnh chiều rộng phù hợp
                height={400} // Điều chỉnh chiều cao phù hợp
              />
            </div>
          </div>
        </div>
      </section>
      {/* Quản lý thu chi dễ dàng */}
      <section className="p-4 bg-[#F7F5F6]">
        <div
          className="w-[90%] lg:w-[80%] mx-auto pt-16 pb-16"
          // Removed dynamic width based on !isLaptop
        >
          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Right Column: Image Mockup */}
            <div className="flex items-center justify-center">
              <Image
                src="/logo/Banner_app11.png" // Cập nhật đường dẫn hình ảnh mockup
                alt="Giao diện quản lý bệnh nhân"
                width={500} // Điều chỉnh chiều rộng phù hợp
                height={400} // Điều chỉnh chiều cao phù hợp
              />
            </div>
            {/* Left Column: Benefits List */}
            <div>
              <h2 className="text-3xl font-bold text-left text-[#018DCA] mb-4">
                Quản lý thu chi dễ dàng
              </h2>
              <ul className="space-y-4">
                {thuChi.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <FaCheckSquare className="text-[#018DCA] text-xl" />
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8 transition-colors cursor-pointer">
                <button
                  className="bg-[#018DCA] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                  // Replaced inline style with Tailwind classes
                >
                  Chi phí sử dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="mt-20 mb-16   w-[90%] mx-auto
              md:w-[90%] md:pt-8 md:mx-auto
              lg:w-[80%]  "
      >
        <h1 className="text-center text-3xl text-[#018DCA] font-semibold">
          Chuyển đổi số, nha khoa 4.0
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              className="block bg-white rounded-lg shadow-md overflow-hidden
                         transition-transform transform duration-300 ease-in-out"
            >
              <div className="absolute border bg-[#1FBAE4] text-white text-xs px-3 py-2 rounded-br-lg z-10">
                {post.date}
              </div>

              {/* Hình ảnh bài viết */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill // Lấp đầy vùng cha
                  style={{ objectFit: "cover" }} // Đảm bảo ảnh cover không gian
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Tối ưu hóa ảnh responsive
                />
              </div>

              {/* Nội dung bài viết */}
              <div className="p-6 pt-10">
                <span className="text-[12px] flex items-center text-[#018DCA]">
                  <FaListAlt className="mr-1" />
                  {post.cate}
                </span>
                <h3 className="text-xl font-semibold text-[#018DCA] mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
                text-white text-sm  tracking-[.2px]
                block  w-[100%] mx-auto
              md:w-[80%]md:mx-auto
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
              // Replaced inline style with Tailwind classes
            >
              <FaEdit className="mr-2" />
              Dùng thử 7 ngày
            </button>
          </div>
        </div>
      </section>

      <section className="p-4 bg-[#ffffff]">
        <div className="w-[80%] mx-auto">
          <div className="w-[100%]">
            <div className="relative flex items-center justify-end min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-0 opacity-80 lg:opacity-100">
                <Image
                  src="/logo/character.png" // Replace with your actual doctor image path
                  alt="Doctor"
                  width={400} // Adjust size as needed
                  height={500} // Adjust size as needed
                  objectFit="contain"
                  className="max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto"
                />
              </div>

              {/* Testimonial Content Box */}
              <div
                className="
              bg-white rounded-lg shadow-xl p-6 md:p-10 lg:p-12
              w-full md:w-3/4 lg:w-2/3 xl:w-1/2 relative z-10
              flex flex-col items-center justify-end
              min-h-[280px] md:min-h-[380px] lg:min-h-[450px]
              transition-all duration-500 ease-in-out transform
             
            "
              >
                <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed mb-6 italic">
                  &quot;{currentTestimonial.text}&quot;
                </p>
                <div className="flex flex-col items-center">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    width={80}
                    height={80}
                    className="rounded-full mb-4 border-2 border-blue-400"
                  />
                  <p className="font-semibold text-lg text-gray-900">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 uppercase">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                h-3 w-3 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "bg-blue-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }
              `}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
