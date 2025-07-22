"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Khai báo type cho grecaptcha v2 (Giữ nguyên)
declare global {
  interface Window {
    grecaptcha: {
      render: (
        element: HTMLElement | string,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
        }
      ) => number;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad: () => void;
  }
}

interface PhoneNumberFormProps {
  className?: string;
  onVerificationSuccess: (phoneNumber: string) => void; // <--- THÊM DÒNG NÀY VÀO
}

function PhoneNumberFormComponent({
  className = "",
  onVerificationSuccess,
}: PhoneNumberFormProps) {
  // --- STATE MANAGEMENT ---
  // Thêm state để quản lý giao diện (UI) và dữ liệu OTP
  const [uiState, setUiState] = useState<"phone-input" | "otp-input">(
    "phone-input"
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null); // State để hiển thị lỗi cho người dùng

  // --- REFS & ROUTER ---
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [isClient, setIsClient] = useState(false); // Giữ nguyên

  // --- EFFECTS ---
  // Giữ nguyên useEffect để kiểm tra client và load reCAPTCHA, em đã làm rất tốt
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const siteKey =
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
      "6Ldu3HgrAAAAAAe7nDCpTGJVvhHVGfi9D0eBXDdy";
    const renderCaptcha = () => {
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
              setError(null); // Xóa lỗi khi người dùng tick lại
            },
            "expired-callback": () => setCaptchaToken(null),
          });
          widgetIdRef.current = widgetId;
        } catch (e) {
          console.error("Lỗi render reCAPTCHA:", e);
        }
      }
    };
    if (!window.grecaptcha) {
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      window.onRecaptchaLoad = renderCaptcha;
    } else {
      renderCaptcha();
    }
  }, [isClient]);

  // --- HANDLERS ---
  /**
   * Xử lý gửi số điện thoại và yêu cầu mã OTP
   */
  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const phoneRegex = /^(0\d{9})$/; // Validate SĐT Việt Nam (10 số, bắt đầu bằng 0)
    if (!phoneRegex.test(phoneNumber)) {
      return setError(
        "Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số, bắt đầu bằng số 0."
      );
    }
    if (!captchaToken) {
      return setError("Vui lòng xác minh bạn không phải là robot.");
    }

    setIsSubmitting(true);
    try {
      // Gọi API /api/send-otp
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/send-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, captchaToken }),
        }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        // Chuyển sang giao diện nhập OTP khi thành công
        setUiState("otp-input");
      } else {
        // Hiển thị lỗi từ backend và reset reCAPTCHA
        setError(data.message || "Đã có lỗi xảy ra. Vui lòng thử lại.");
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
          setCaptchaToken(null);
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(
        "Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại đường truyền."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Xử lý xác minh mã OTP
   */
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!otp || otp.length !== 6) {
      return setError("Mã OTP phải có 6 chữ số.");
    }

    setIsSubmitting(true);
    try {
      // Gọi API /api/verify-otp
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber, otp }),
        }
      );
      const data = await response.json();
      console.log("Check data xác nhận: ", data);
      if (response.ok && data.success) {
        // Chuyển hướng đến trang dashboard hoặc trang đăng ký thông tin
        onVerificationSuccess(phoneNumber);
      } else {
        setError(data.message || "Xác thực OTP thất bại.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(
        "Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại đường truyền."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- RENDER LOGIC ---
  if (!isClient) {
    // Giữ nguyên loading skeleton của em, rất tốt cho UX!
    return (
      <div className="animate-pulse h-96 bg-gray-200 rounded-lg max-w-md mx-auto mt-8"></div>
    );
  }

  // Giao diện nhập OTP
  if (uiState === "otp-input") {
    return (
      <section className={`flex justify-center items-center mt-8 ${className}`}>
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
            Nhập mã OTP
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Một mã xác thực đã được gửi đến số{" "}
            <strong className="text-gray-700">{phoneNumber}</strong>.
          </p>
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="------"
              maxLength={6}
              className="w-full p-4 text-center text-3xl tracking-[0.5em] border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
              disabled={isSubmitting}
            />

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || otp.length !== 6}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Đang xác minh..." : "XÁC MINH"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Giao diện nhập SĐT (Mặc định)
  return (
    <section className={`flex justify-center items-center mt-8 ${className}`}>
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Xác thực số điện thoại
        </h2>
        <form onSubmit={handlePhoneSubmit}>
          <div className="mb-4">
            <input
              type="tel"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập số điện thoại của bạn (VD: 0912345678)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex justify-center mb-4">
            <div ref={captchaRef}></div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <button
            type="submit"
            disabled={!captchaToken || isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Đang gửi..." : "GỬI MÃ OTP"}
          </button>
        </form>
      </div>
    </section>
  );
}

// Export component với dynamic import để tránh hydration error (giữ nguyên)
const PhoneNumberForm = dynamic(
  () => Promise.resolve(PhoneNumberFormComponent),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse h-96 bg-gray-200 rounded-lg max-w-md mx-auto mt-8"></div>
    ),
  }
);

export default PhoneNumberForm;
