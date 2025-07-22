// src/services/apiClient.ts

// Định nghĩa một kiểu lỗi tùy chỉnh để dễ dàng bắt lỗi hơn
class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

const apiClient = async (endpoint: string) => {
  // Lấy URL gốc của API từ biến môi trường
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new ApiError(
      "Biến môi trường NEXT_PUBLIC_API_BASE_URL chưa được cấu hình."
    );
  }

  // Nối URL gốc với endpoint để tạo ra một URL tuyệt đối
  const fullUrl = `${baseUrl}${endpoint}`;

  console.log(`Đang gọi đến API: ${fullUrl}`); // Thêm log để debug

  try {
    const response = await fetch(fullUrl, {
      // Cấu hình cache cho Next.js, giúp tối ưu hiệu suất
      // 'force-cache' là mặc định, 'no-store' để luôn lấy dữ liệu mới
      cache: "no-store",
    });

    if (!response.ok) {
      // Nếu response trả về lỗi (4xx, 5xx), chúng ta ném ra lỗi
      throw new ApiError(
        `Lỗi API tại endpoint: ${endpoint} với status ${response.status}`
      );
    }

    // Nếu thành công, parse JSON và trả về
    return response.json();
  } catch (error) {
    // Bắt các lỗi mạng hoặc lỗi từ logic ở trên
    console.error("Lỗi trong apiClient:", error);
    // Ném lại lỗi để component có thể xử lý (ví dụ: hiển thị trang 404)
    throw error;
  }
};

export default apiClient;
