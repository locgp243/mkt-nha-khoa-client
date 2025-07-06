// src/app/hoi-dap/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Pagination from "../components/Pagination";
export default function BlogPage() {
  const blogPosts = [
    {
      id: "ban-chai-tre",
      date: "10 tháng 08 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Vì sao nên dùng bàn chải tre The Humble? Và đâu là lý do",
      description:
        "Từ trước đến nay, chúng ta đã hình thành thói quen với việc sử dụng bàn chải đánh răng có nguồn gốc từ nhựa. Mổi cho đến khi chúng ta nhận ra những chiếc b...",
      link: "/blog/vi-sao-nen-dung-ban-chai-tre",
    },
    {
      id: "ban-chai-nhua",
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
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "[Chia sẻ] 7 cách tạo profile phòng khám trên Internet",
      description:
        "Internet là một công cụ giúp phòng khám Marketing hiệu quả. Sau đây, Maydental sẽ cùng Bs đi qua các cách để tạo Profile nha khoa tối ưu!...",
      link: "/blog/7-cach-tao-profile-phong-kham",
    },
    {
      id: "covid-cong-viec",
      date: "07 tháng 07 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "[Top 7] công việc phòng khám nên làm trong mùa dịch covid",
      description:
        "Nha khoa nên làm gì trong mùa dịch, hãy cùng Maydental thử qua các công việc sau: phân loại khách hàng, tìm hiểu phần mềm, tạo profile trên internet, kiếm kề và...",
      link: "/blog/top-7-cong-viec-phong-kham-mua-covid",
    },
    {
      id: "sau-rang-tre-em",
      date: "18 tháng 05 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Sâu răng trẻ em, các điểm cần lưu ý",
      description:
        "Sâu răng ở trẻ em (Early childhood caries ECC) thường gặp 2-3 tuổi đến 3 tuổi, mặc dù có thể xuất hiện sớm hơn và có rất nhiều nguyên nhân...",
      link: "/blog/sau-rang-tre-em",
    },
    {
      id: "bi-quyet-upsell",
      date: "31 tháng 03 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Bí quyết Upsell trong nha khoa",
      description:
        "Trong kinh doanh nha khoa, nhờ bí quyết Upsell mà phòng khám dễ thu nhiều lợi nhuận hơn nhưng không bộ khiến khách hàng khó chịu...",
      link: "/blog/bi-quyet-upsell-nha-khoa",
    },
    {
      id: "bi-quyet-upsell1",
      date: "31 tháng 03 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Bí quyết Upsell trong nha khoa",
      description:
        "Trong kinh doanh nha khoa, nhờ bí quyết Upsell mà phòng khám dễ thu nhiều lợi nhuận hơn nhưng không bộ khiến khách hàng khó chịu...",
      link: "/blog/bi-quyet-upsell-nha-khoa",
    },
    {
      id: "bi-quyet-upsell2",
      date: "31 tháng 03 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Bí quyết Upsell trong nha khoa",
      description:
        "Trong kinh doanh nha khoa, nhờ bí quyết Upsell mà phòng khám dễ thu nhiều lợi nhuận hơn nhưng không bộ khiến khách hàng khó chịu...",
      link: "/blog/bi-quyet-upsell-nha-khoa",
    },
    {
      id: "bi-quyet-upsell3",
      date: "31 tháng 03 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Bí quyết Upsell trong nha khoa",
      description:
        "Trong kinh doanh nha khoa, nhờ bí quyết Upsell mà phòng khám dễ thu nhiều lợi nhuận hơn nhưng không bộ khiến khách hàng khó chịu...",
      link: "/blog/bi-quyet-upsell-nha-khoa",
    },
    {
      id: "bi-quyet-upsell4",
      date: "31 tháng 03 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Bí quyết Upsell trong nha khoa",
      description:
        "Trong kinh doanh nha khoa, nhờ bí quyết Upsell mà phòng khám dễ thu nhiều lợi nhuận hơn nhưng không bộ khiến khách hàng khó chịu...",
      link: "/blog/bi-quyet-upsell-nha-khoa",
    },
    {
      id: "bi-quyet-upsell45",
      date: "31 tháng 03 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Bí quyết Upsell trong nha khoa",
      description:
        "Trong kinh doanh nha khoa, nhờ bí quyết Upsell mà phòng khám dễ thu nhiều lợi nhuận hơn nhưng không bộ khiến khách hàng khó chịu...",
      link: "/blog/bi-quyet-upsell-nha-khoa",
    },
    {
      id: "bi-quyet-upsell46",
      date: "31 tháng 03 năm 2021",
      imageSrc: "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg", // Cần hình ảnh này
      title: "Bí quyết Upsell trong nha khoa",
      description:
        "Trong kinh doanh nha khoa, nhờ bí quyết Upsell mà phòng khám dễ thu nhiều lợi nhuận hơn nhưng không bộ khiến khách hàng khó chịu...",
      link: "/blog/bi-quyet-upsell-nha-khoa",
    },
  ];
  const totalPosts = 40; // Tổng số bài viết của bạn
  const postsPerPage = 6; // Số bài viết mỗi trang (như trong BlogGridSection)
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1); // State để theo dõi trang hiện tại

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Ở đây, bạn cũng có thể fetch dữ liệu mới cho trang đó
    // Ví dụ: fetchPosts(page);
  };
  return (
    <main className="bg-white">
      <section
        className="
          relative h-[calc(100vh-100px)] md:h-[calc(100vh-100px)] lg:h-[423px]
          bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/logo/MayDent_Blogs_Mobile.jpg')]
          before:md:bg-[url('/logo/MayDent_Blogs_Mobile.jpg')]
          before:lg:bg-[url('/logo/banner_blogs.jpg')]
          before:bg-cover before:bg-no-repeat before:bg-center
        "
      >
        <div
          className="
            w-[90%] md:w-[90%] lg:w-[80%]
            mx-auto px-4 h-full flex lg:items-center
          "
        >
          <div
            className="
              w-[90%] pt-8 mx-auto
              md:w-[90%] md:pt-8 md:mx-auto
              lg:w-[42%] lg:mx-0
              z-10
              text-center lg:text-right
            "
            style={{ float: "left" }}
          >
            <h1
              className="
                text-[36px] text-white font-bold
                leading-[4.025rem] tracking-[.2px]
              "
            >
              Blog
            </h1>
            <p
              className="
                text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
                hidden md:block
              "
            >
              Blog kiến thức, tips, thủ thuật hay về công nghệ, phần mềm, CRM,
              SMS, Email marketing, chăm sóc khách hàng ... dành cho các phòng
              khám, chuỗi phòng khám nha khoa
            </p>
          </div>
        </div>
      </section>
      <section
        className="
          w-[90%] md:w-[90%] lg:w-[80%]
          py-14 mx-auto bg-white
        "
      >
        <div className="flex items-center breadcrumbs cursor-pointer ">
          {/* Maydental với mũi tên */}
          <div className="relative bg-[#C1F1FF] h-[34px] text-gray-700 text-sm breadcrumbsList pr-6 flex items-center hover:scale-[1.1] hover:z-10">
            <span className=""> CRM - Phần mềm quản lý nha khoa</span>
          </div>

          {/* Phần mềm nha khoa */}
          <div className="bg-[#81d4fa] relative h-[34px] text-gray-700 text-sm pl-4 pr-6 breadcrumbsList flex items-center hover:scale-[1.1] hover:z-10">
            <span>Blog</span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              className="block bg-white rounded-lg shadow-md overflow-hidden
                         transition-transform transform duration-300 ease-in-out"
            >
              <div className="absolute border bg-[#1FBAE4] text-white text-xs px-3 py-1 rounded-br-lg z-10">
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
