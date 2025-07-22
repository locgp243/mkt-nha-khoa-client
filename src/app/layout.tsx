import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { getGlobalSettings } from "@/lib/api/services/setting.service";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Giá trị mặc định giờ là các thành phần của OKLCH cho màu #018DCA
  let primaryColorCssVar = "";
  try {
    const settings = await getGlobalSettings();
    if (settings && settings.primary_color) {
      primaryColorCssVar = settings.primary_color;
    }
  } catch (error) {
    console.error("Không thể lấy cài đặt chung, sử dụng màu mặc định.", error);
  }

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        style={{ "--primary": primaryColorCssVar } as React.CSSProperties}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
