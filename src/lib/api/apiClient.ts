// src/services/apiClient.ts

// Định nghĩa một kiểu lỗi tùy chỉnh để dễ dàng bắt lỗi hơn
class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

type FetchOptions = {
  cache?: "force-cache" | "no-store";
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

const apiClient = async (endpoint: string, options: FetchOptions = {}) => {
  // Lấy URL gốc của API từ biến môi trường
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new ApiError(
      "Biến môi trường NEXT_PUBLIC_API_BASE_URL chưa được cấu hình."
    );
  }

  const fullUrl = `${baseUrl}${endpoint}`;
  console.log(`Đang gọi đến API: ${fullUrl} với options:`, options);

  try {
    const response = await fetch(fullUrl, {
      // Đặt một giá trị mặc định thông minh, ví dụ revalidate sau 10 phút
      // Dùng spread operator để ghi đè giá trị mặc định bằng options do người dùng truyền vào
      ...options,
    });

    if (!response.ok) {
      throw new ApiError(
        `Lỗi API tại endpoint: ${endpoint} với status ${response.status}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Lỗi trong apiClient:", error);
    throw error;
  }
};

export default apiClient;
