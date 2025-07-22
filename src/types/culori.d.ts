// types/culori.d.ts

declare module "culori" {
  // Định nghĩa kiểu dữ liệu cho một object màu OKLCH
  interface OklchColor {
    mode: "oklch";
    l: number;
    c: number;
    h?: number; // Hue có thể là undefined đối với các màu xám
    alpha?: number;
  }

  // Khai báo các hàm em đang sử dụng từ thư viện

  /**
   * Chuyển đổi một màu sang định dạng OKLCH.
   * @param color - Một chuỗi màu (ví dụ: hex, rgb) hoặc một object màu.
   * @returns Một object OklchColor hoặc undefined nếu chuyển đổi thất bại.
   */
  export function oklch(color: string | object): OklchColor | undefined;
}
