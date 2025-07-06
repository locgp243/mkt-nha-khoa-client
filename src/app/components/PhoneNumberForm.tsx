"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Khai báo type cho grecaptcha v2
declare global {
  interface Window {
    grecaptcha: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
        }
      ) => number; // render trả về widget ID
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad: () => void;
  }
}

interface PhoneNumberFormProps {
  // Bạn có thể thêm props nếu muốn tùy chỉnh tiêu đề hoặc hành vi
}

function PhoneNumberFormComponent({}: PhoneNumberFormProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Kiểm tra client-side để tránh hydration error
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load reCAPTCHA v2 script
  useEffect(() => {
    // Chỉ chạy trên client-side
    if (!isClient) return;

    // Kiểm tra biến môi trường
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY không được thiết lập");
      return;
    }

    const renderCaptcha = () => {
      if (captchaRef.current && window.grecaptcha && !captchaLoaded) {
        try {
          // Kiểm tra xem element đã có reCAPTCHA chưa
          if (captchaRef.current.children.length > 0) {
            return;
          }

          const widgetId = window.grecaptcha.render(captchaRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              setCaptchaToken(token);
              console.log("reCAPTCHA verified successfully");
            },
            "expired-callback": () => {
              setCaptchaToken(null);
              console.log("reCAPTCHA expired");
            },
          });

          widgetIdRef.current = widgetId;
          setCaptchaLoaded(true);
        } catch (error) {
          console.error("Lỗi khi render reCAPTCHA:", error);
        }
      }
    };

    // Chỉ tải script nếu nó chưa được tải
    if (!document.getElementById("recaptcha-script")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoad`;
      script.async = true;
      script.defer = true;

      // Xử lý lỗi khi load script
      script.onerror = () => {
        console.error("Không thể tải reCAPTCHA script");
      };

      document.body.appendChild(script);

      // Gán hàm callback toàn cục cho reCAPTCHA
      window.onRecaptchaLoad = renderCaptcha;
    } else {
      // Nếu script đã được tải, render ngay
      renderCaptcha();
    }

    // Cleanup function
    return () => {
      if (window.grecaptcha && widgetIdRef.current !== null) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (error) {
          console.error("Lỗi khi reset reCAPTCHA:", error);
        }
      }
    };
  }, [isClient, captchaLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber) {
      alert("Vui lòng nhập số điện thoại.");
      return;
    }

    if (!captchaToken) {
      alert("Vui lòng xác minh reCAPTCHA bằng cách tick vào checkbox.");
      return;
    }

    // Validate phone number format (basic)
    const phoneRegex = /^[0-9]{9,10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert("Số điện thoại không hợp lệ. Vui lòng nhập 9-10 chữ số.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/verify-phone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, captchaToken }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Xác minh thành công! Tin nhắn đã được gửi.");
        // Reset form
        setPhoneNumber("");
        setCaptchaToken(null);
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      } else {
        alert("Xác minh thất bại: " + data.message);
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
      if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render loading state cho server-side
  if (!isClient) {
    return (
      <section className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Nhập số điện thoại của bạn
          </h2>
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="h-20 bg-gray-200 rounded mb-6"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Nhập số điện thoại của bạn
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Phần nhập số điện thoại */}
          <div className="flex items-center border border-gray-300 rounded-md mb-6">
            {/* Chọn mã vùng quốc gia */}
            <div className="flex items-center px-3 py-2 border-r border-gray-300 rounded-l-md">
              <span className="text-gray-700">+84</span>
              <svg
                className="w-4 h-4 text-gray-500 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {/* Input số điện thoại */}
            <input
              type="tel"
              className="flex-grow p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-r-md"
              placeholder="Nhập số điện thoại"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* reCAPTCHA v2 Checkbox */}
          <div className="flex justify-center mb-6">
            {!captchaLoaded && (
              <div className="flex items-center justify-center text-gray-500 text-sm min-h-[78px]">
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Đang tải reCAPTCHA...
              </div>
            )}
            {/* ĐÂY LÀ NỚI HIỂN THỊ CHECKBOX reCAPTCHA */}
            <div ref={captchaRef} className="g-recaptcha"></div>
          </div>

          {/* Hiển thị trạng thái xác minh */}
          {captchaToken && (
            <div className="flex items-center justify-center mb-4 text-green-600 text-sm">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              ✅ reCAPTCHA đã được xác minh
            </div>
          )}

          {/* Nút Xác minh */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!captchaToken || !captchaLoaded || isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                ĐANG XÁC MINH...
              </div>
            ) : (
              "XÁC MINH"
            )}
          </button>
        </form>

        {/* Thông báo dưới nút */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Bằng cách nhấn vào Xác minh, bạn có thể nhận được tin nhắn SMS. Có thể
          áp dụng cước tin nhắn và dữ liệu.
        </p>
      </div>
    </section>
  );
}

// Export component với dynamic import để tránh hydration error
const PhoneNumberForm = dynamic(
  () => Promise.resolve(PhoneNumberFormComponent),
  {
    ssr: false,
    loading: () => (
      <section className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Nhập số điện thoại của bạn
          </h2>
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="h-20 bg-gray-200 rounded mb-6"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    ),
  }
);

export default PhoneNumberForm;
