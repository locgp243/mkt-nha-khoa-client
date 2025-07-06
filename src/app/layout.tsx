// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Maydental - Quản lý phòng khám nha khoa Online",
  description: "Phần mềm quản lý nha khoa hàng đầu Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Thêm suppressHydrationWarning vào thẻ body */}
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
