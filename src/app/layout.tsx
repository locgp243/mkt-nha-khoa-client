import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { getGlobalSettings } from "@/lib/api/services/setting.service";

// BƯỚC 1: Import thư viện mới
import { oklch } from "culori";

// Giữ lại hàm generateMetadata nếu em muốn tiêu đề động
export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await getGlobalSettings();
    return {
      title: settings?.site_title || "Maydental - Quản lý phòng khám",
      description: "Phần mềm quản lý nha khoa hàng đầu Việt Nam.",
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      title: "Maydental - Quản lý phòng khám",
      description: "Phần mềm quản lý nha khoa hàng đầu Việt Nam.",
    };
  }
}

// BƯỚC 2: Tạo hàm chuyển đổi mới sang OKLCH
const convertHexToOklchString = (hex: string): string => {
  const color = oklch(hex);
  // Nếu chuyển đổi thất bại, trả về một giá trị mặc định an toàn
  if (!color) return "0.584 0.17 235.5";

  // Trả về chuỗi giá trị l, c, h cho biến CSS
  return `${color.l} ${color.c} ${color.h || 0}`;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Giá trị mặc định giờ là các thành phần của OKLCH cho màu #018DCA
  let primaryColorCssVar = "0.584 0.17 235.5";
  let a = "";
  try {
    const settings = await getGlobalSettings();
    if (settings && settings.primary_color) {
      // BƯỚC 3: Sử dụng hàm chuyển đổi mới
      a = settings.primary_color;
      primaryColorCssVar = convertHexToOklchString(settings.primary_color);
      console.log(primaryColorCssVar);
    }
  } catch (error) {
    console.error("Không thể lấy cài đặt chung, sử dụng màu mặc định.", error);
  }

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        style={{ "--primary": a } as React.CSSProperties}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
