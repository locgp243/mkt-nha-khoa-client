import React from "react";

// KHÔNG CẦN DÒNG IMPORT ẢNH NÀY NỮA
// import { banner } from "@/public/logo/banner.jpg";

interface CategoryHeroProps {
  name: string;
  description: string;
}

export const CategoryHero: React.FC<CategoryHeroProps> = ({
  name,
  description,
}) => {
  // Đường dẫn đến ảnh là một chuỗi tĩnh, bắt đầu từ gốc (public folder)
  const backgroundImageUrl = "/logo/banner.jpg";

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      // Sử dụng biến chuỗi trực tiếp ở đây
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* LỚP PHỦ (OVERLAY) */}
      <div className="absolute inset-0 bg-blue-800/30 z-0"></div>

      {/* Container cho nội dung chính */}
      <div className="max-w-5xl relative z-10 mx-auto px-6 py-24 text-left text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">
          {name}
        </h1>
        <p className="mt-6 max-w-2xl text-left text-lg md:text-xl opacity-95 drop-shadow-sm">
          {description}
        </p>
      </div>
    </section>
  );
};
