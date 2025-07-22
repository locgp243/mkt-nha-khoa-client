// lib/api/services/contact.service.ts

import { ENDPOINTS } from "@/lib/api/apiEndpoints";

// 1. Định nghĩa kiểu dữ liệu cho payload gửi đi
// Dựa trên code backend em đã cung cấp
interface ContactPayload {
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// 2. Hàm gọi API để gửi form liên hệ
export const submitContactForm = async (payload: ContactPayload) => {
  // Lấy URL gốc của API từ biến môi trường
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Kiểm tra xem biến môi trường đã được cấu hình chưa
  if (!API_BASE_URL) {
    throw new Error(
      "Biến môi trường NEXT_PUBLIC_API_BASE_URL chưa được cấu hình."
    );
  }

  // Bọc logic trong try...catch để xử lý lỗi mạng
  try {
    const response = await fetch(
      `${API_BASE_URL}${ENDPOINTS.CONTACT.CREATE}`, // Sử dụng endpoint đã định nghĩa
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    // Lấy dữ liệu JSON từ phản hồi
    // Cần kiểm tra xem response có body không trước khi gọi .json()
    const responseBody = await response.text();
    const data = responseBody ? JSON.parse(responseBody) : null;

    // Kiểm tra status của response để xác định thành công hay thất bại
    if (!response.ok) {
      // Ném lỗi với thông điệp từ API (nếu có) để component có thể bắt và xử lý
      throw new Error(data?.message || "Gửi thông tin liên hệ thất bại.");
    }

    // Trả về dữ liệu nếu thành công
    return data;
  } catch (error) {
    // Log lỗi để dễ debug ở phía server của Next.js
    console.error("Lỗi khi gửi form liên hệ:", error);

    // Ném lại lỗi để component gọi có thể hiển thị thông báo cho người dùng
    throw error;
  }
};
