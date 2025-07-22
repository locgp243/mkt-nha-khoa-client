// src/services/customerService.ts

import { ENDPOINTS } from "@/lib/api/apiEndpoints"; // Điều chỉnh đường dẫn cho đúng
// Hoặc import { ENDPOINTS } from "../config/endpoints";

interface RegistrationPayload {
  clinicName: string;
  address: string;
  referring_doctor_1: string;
  referring_doctor_2?: string;
  email: string;
  password: string;
  phone: string;
}

// Nếu em có một hàm fetch chung (ví dụ axios instance, hoặc một helper function)
// import api from './apiClient'; // Giả sử em có một apiClient để xử lý fetch request

// Hàm này sẽ gọi API đăng ký khách hàng
export const registerCustomer = async (payload: RegistrationPayload) => {
  // Thầy giả định em có biến môi trường cho URL gốc của API, ví dụ NEXT_PUBLIC_API_URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const response = await fetch(
      `${API_BASE_URL}${ENDPOINTS.CUSTOMER.REGISTER}`, // Sử dụng endpoint đã định nghĩa
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Có thể thêm Authorization header nếu cần cho các API khác
        },
        body: JSON.stringify(payload),
      }
    );

    // Xử lý response từ API
    const data = await response.json();

    // Kiểm tra status của response
    if (!response.ok) {
      // Ném lỗi để bên ngoài có thể bắt và xử lý
      throw new Error(data.message || "Đăng ký thất bại.");
    }

    return data; // Trả về dữ liệu thành công
  } catch (error) {
    // Log lỗi để dễ debug
    console.error("Error registering customer:", error);
    throw error; // Ném lại lỗi để component gọi có thể xử lý
  }
};
