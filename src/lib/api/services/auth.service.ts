// src/lib/api/services/auth.service.ts

// Kiểu dữ liệu cho response thành công từ API
interface SuccessResponse {
  success: true;
  message: string;
}

// Kiểu dữ liệu cho response lỗi từ API
interface ErrorResponse {
  success: false;
  message: string;
}

/**
 * Gửi yêu cầu OTP đến backend.
 * @param phoneNumber - Số điện thoại người dùng.
 * @param captchaToken - Token từ Google reCAPTCHA.
 * @returns Promise chứa dữ liệu trả về từ API.
 */
const sendOtpRequest = async (
  phoneNumber: string,
  captchaToken: string
): Promise<SuccessResponse> => {
  const response = await fetch("/api/verify-phone", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phoneNumber, captchaToken }),
  });

  const data: SuccessResponse | ErrorResponse = await response.json();

  if (!response.ok || !data.success) {
    // Ném lỗi với thông báo từ API để component có thể bắt được
    throw new Error(data.message || "Đã có lỗi xảy ra từ server.");
  }

  return data;
};

/**
 * Gửi mã OTP người dùng nhập để xác thực.
 * @param phoneNumber - Số điện thoại.
 * @param otp - Mã OTP người dùng nhập.
 * @returns Promise chứa dữ liệu trả về từ API.
 */
const verifyOtp = async (
  phoneNumber: string,
  otp: string
): Promise<SuccessResponse> => {
  // Giả sử em có endpoint là /api/verify-otp
  const response = await fetch("/api/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phoneNumber, otp }),
  });

  const data: SuccessResponse | ErrorResponse = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Xác thực OTP thất bại.");
  }

  return data;
};

export const AuthService = {
  sendOtpRequest,
  verifyOtp,
};
