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
      // Hàm execute thường dùng cho reCAPTCHA v3, nhưng cũng có thể dùng cho v2 ẩn
      // execute: (siteKey?: string, options?: { action: string }) => Promise<string>;
    };
    onRecaptchaLoad: () => void;
  }
}

// Không cần định nghĩa interface rỗng nếu component không nhận props nào
// interface PhoneNumberFormProps {}

function PhoneNumberFormComponent() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(true); // Thêm trạng thái tải captcha
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Xử lý việc tải và render reCAPTCHA
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.error(
        "Lỗi: NEXT_PUBLIC_RECAPTCHA_SITE_KEY không được thiết lập."
      );
      setIsLoadingCaptcha(false); // Dừng trạng thái tải nếu thiếu key
      return;
    }

    const loadRecaptchaScript = () => {
      // Chỉ tải script nếu nó chưa được tải
      if (!document.getElementById("recaptcha-script")) {
        const script = document.createElement("script");
        script.id = "recaptcha-script";
        script.src = `https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoad`;
        script.async = true;
        script.defer = true;

        script.onerror = () => {
          console.error(
            "Không thể tải reCAPTCHA script. Vui lòng kiểm tra kết nối mạng hoặc nguồn script."
          );
          setIsLoadingCaptcha(false);
        };

        document.body.appendChild(script);
      } else {
        // Nếu script đã có, đảm bảo hàm onRecaptchaLoad được gọi nếu cần
        if (
          window.grecaptcha &&
          captchaRef.current &&
          widgetIdRef.current === null
        ) {
          renderCaptcha();
        } else {
          setIsLoadingCaptcha(false); // Nếu đã có script và captcha đã render thì không cần tải nữa
        }
      }
    };

    const renderCaptcha = () => {
      // Đảm bảo ref và grecaptcha đã sẵn sàng
      if (
        captchaRef.current &&
        window.grecaptcha &&
        widgetIdRef.current === null
      ) {
        try {
          const widgetId = window.grecaptcha.render(captchaRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              setCaptchaToken(token);
              console.log("reCAPTCHA đã xác minh thành công.");
            },
            "expired-callback": () => {
              setCaptchaToken(null);
              console.log("reCAPTCHA đã hết hạn.");
            },
          });
          widgetIdRef.current = widgetId;
          setIsLoadingCaptcha(false); // Tắt trạng thái tải khi reCAPTCHA đã render
        } catch (error) {
          console.error("Lỗi khi render reCAPTCHA:", error);
          setIsLoadingCaptcha(false); // Tắt trạng thái tải khi có lỗi
        }
      }
    };

    // Gán hàm callback toàn cục cho reCAPTCHA khi script được tải
    window.onRecaptchaLoad = renderCaptcha;

    loadRecaptchaScript();

    // Cleanup: Reset reCAPTCHA khi component unmount
    return () => {
      if (window.grecaptcha && widgetIdRef.current !== null) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
          widgetIdRef.current = null; // Đặt lại widgetId
        } catch (error) {
          console.error("Lỗi khi reset reCAPTCHA:", error);
        }
      }
    };
  }, []); // [] đảm bảo useEffect chỉ chạy một lần khi component mount

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
    const phoneRegex = /^(0|\+84)[3-9]\d{8}$/; // Regex hợp lệ hơn cho số điện thoại Việt Nam
    if (!phoneRegex.test(phoneNumber)) {
      alert(
        "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam gồm 10 chữ số (VD: 0912345678 hoặc +84912345678)."
      );
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

      if (response.ok && data.success) {
        // Kiểm tra response.ok để đảm bảo HTTP status code là thành công
        alert("Xác minh thành công! Tin nhắn đã được gửi.");
        // Reset form
        setPhoneNumber("");
        setCaptchaToken(null);
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      } else {
        // Sử dụng data.message từ server nếu có, hoặc thông báo lỗi mặc định
        alert(
          "Xác minh thất bại: " +
            (data.message || "Đã có lỗi xảy ra trên server.")
        );
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
      alert("Có lỗi xảy ra trong quá trình gửi yêu cầu, vui lòng thử lại.");
      if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Nhập số điện thoại của bạn
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Phần nhập số điện thoại */}
          <div className="flex items-center border border-gray-300 rounded-md mb-6">
            <div className="flex items-center px-3 py-2 border-r border-gray-300 rounded-l-md bg-gray-50">
              <span className="text-gray-700 font-medium">+84</span>
              {/* Icon mũi tên */}
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
            <input
              type="tel"
              className="flex-grow p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-r-md"
              placeholder="Nhập số điện thoại (VD: 912345678)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* reCAPTCHA v2 Checkbox */}
          <div className="flex justify-center mb-6 min-h-[78px]">
            {" "}
            {/* Đặt min-h để tránh layout shift */}
            {isLoadingCaptcha ? (
              <div className="flex items-center justify-center text-gray-500 text-sm">
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
            ) : (
              <div ref={captchaRef} className="g-recaptcha"></div>
            )}
          </div>

          {/* Hiển thị trạng thái xác minh */}
          {captchaToken && !isLoadingCaptcha && (
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
            disabled={!captchaToken || isLoadingCaptcha || isSubmitting}
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
// Thêm prop `ssr: false` để đảm bảo component chỉ được render trên client
const PhoneNumberForm = dynamic(
  () => Promise.resolve(PhoneNumberFormComponent),
  {
    ssr: false,
    loading: () => (
      <section className="flex justify-center items-center min-h-screen">
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
