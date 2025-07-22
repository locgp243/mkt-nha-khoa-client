// src/components/TestimonialsCarousel.tsx
"use client"; // ĐẶT DÒNG NÀY ĐẦU TIÊN để biến thành Client Component

import React, { useState } from "react"; // <--- CẦN import useState ở đây!
import Image from "next/image";

export function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      text: "Sau 10 năm làm phụ tá Nha khoa tại Pháp, tôi trở về Việt Nam, đảm nhận vị trí trưởng phòng đào tạo tại nha khoa SINGAE, với nhiệm vụ chuẩn hóa và nâng tầm chất lượng nha khoa. Tôi luôn tìm kiếm giải pháp quản lý & vận hành phòng khám nha khoa như tôi từng sử dụng tại Pháp.",
      author: "Đinh Xuân Thu Trinh",
      title: "TRƯỞNG PHÒNG ĐÀO TẠO TẠI NHA KHOA SINGAE",
      avatar: "/logo/tran_ngoc_phuong_thao.png",
    },
    {
      id: 2,
      text: "Phần mềm Maydental thực sự đã giúp phòng khám của chúng tôi tối ưu hóa quy trình làm việc, từ việc quản lý lịch hẹn cho đến theo dõi hồ sơ bệnh nhân. Giao diện thân thiện và dễ sử dụng, giúp đội ngũ nhanh chóng làm quen. Rất hài lòng với sự hỗ trợ nhiệt tình từ đội ngũ Maydental.",
      author: "Nguyễn Văn A",
      title: "GIÁM ĐỐC PHÒNG KHÁM NHA KOC",
      avatar: "/logo/tran_ngoc_phuong_thao.png",
    },
    {
      id: 3,
      text: "Là một bác sĩ bận rộn, việc quản lý thông tin bệnh nhân và lịch làm việc luôn là thách thức. Maydental đã giải quyết triệt để vấn đề này, giúp tôi tập trung hơn vào chuyên môn. Tính năng báo cáo thống kê cũng rất hữu ích để nắm bắt tình hình kinh doanh.",
      author: "Lê Thị B",
      title: "BÁC SĨ NHA KHOA TẠI HÀ NỘI",
      avatar: "/logo/tran_ngoc_phuong_thao.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // <--- useState sẽ hoạt động TẠI ĐÂY

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-[100%]">
      <div className="relative flex items-center justify-end min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-0 opacity-80 lg:opacity-100">
          <Image
            src="/logo/character.png"
            alt="Doctor"
            width={400}
            height={500}
            objectFit="contain"
            className="max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto"
          />
        </div>

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
  );
}
