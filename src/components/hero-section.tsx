import Image from "next/image";

// Định nghĩa props cho component để có thể tái sử dụng
interface HeroSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export function HeroSection({ title, imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative w-full  min-h-screen bg-[#0091FF] flex items-center justify-center overflow-hidden text-white">
      {/* ===== Các hình cung trang trí ở nền ===== */}
      <div className="absolute w-[1000px] h-[1000px] -top-1/4 -left-1/4 bg-white/5 rounded-full" />
      <div className="absolute w-[800px] h-[800px] -bottom-1/4 -right-1/4 bg-white/5 rounded-full" />

      {/* ===== Nội dung chính ===== */}
      <div className="relative container mx-auto px-4 z-10 max-w-5xl ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Cột trái: Tiêu đề */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              {title}
            </h1>
          </div>

          {/* Cột phải: Hình ảnh */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-video bg-white/20 p-4 rounded-lg shadow-2xl backdrop-blur-sm">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
