"use client";
import Link from "next/link";
import PhoneNumberForm from "@/app/components/PhoneNumberForm";
import RegistrationForm from "@/app/components/RegistrationForm";
import { useState } from "react";

const RegistrationSuccessMessage = () => {
  return (
    <div className="text-center p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Đăng ký thành công!
      </h2>
      <p className="text-lg text-gray-700 mb-2">
        Để sử dụng phần mềm, Bs vui lòng đăng nhập tại{" "}
        <a
          href="https://app.maydental.vn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold"
        >
          https://app.maydental.vn
        </a>
      </p>
      <p className="text-lg text-gray-700 mb-2">
        Tài liệu hướng dẫn sử dụng phần mềm xin tham khảo link sau{" "}
        <a
          href="LINK_DEN_TAI_LIEU_HUONG_DAN" // <--- Cần thay bằng link tài liệu thật
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold"
        >
          Hướng dẫn sử dụng phần mềm maydental
        </a>
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Hỗ trợ và tư vấn phần mềm:{" "}
        <span className="font-semibold text-red-500">Mr. Ý: 0908.030.910</span>
      </p>
      <p className="text-gray-700 mt-6">Xin chân thành cảm ơn.</p>
      <p className="font-semibold text-gray-800 mt-1">Maydental team!</p>
    </div>
  );
};

export default function DangKyPage() {
  const [step, setStep] = useState<
    "phone-verify" | "register-form" | "registration-success"
  >("phone-verify");
  const [verifiedPhone, setVerifiedPhone] = useState<string>("");
  const handleVerificationSuccess = (phoneNumber: string) => {
    setVerifiedPhone(phoneNumber);
    setStep("register-form"); // Chuyển sang bước điền form
  };
  const handleRegistrationSuccess = () => {
    setStep("registration-success"); // <--- Chuyển sang bước hiển thị thông báo thành công
  };
  return (
    <main className="bg-white">
      <section
        className="
          relative h-[calc(100vh-100px)] md:h-[calc(50vh - 100px)] lg:h-[423px]
          bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/logo/MayDent_Register_Mobile.jpg')]
          before:md:bg-[url('/logo/MayDent_Register_Mobile.jpg')]
          before:lg:bg-[url('/logo/banner_summary.jpg')]
          before:bg-cover before:bg-no-repeat before:bg-center
        "
      >
        <div
          className="
            w-[90%] md:w-[90%] lg:w-[80%]
            mx-auto px-4 h-full flex lg:items-center
          "
        >
          <div
            className="
              w-[90%] pt-8 mx-auto
              md:w-[90%] md:pt-8 md:mx-auto
              lg:w-[42%] lg:mx-0
              z-10
              text-center lg:text-right
            "
            style={{ float: "left" }}
          >
            <h1
              className="
                text-[36px] text-white font-bold
                leading-[4.025rem] tracking-[.2px]
              "
            >
              Đăng ký miễn phí
            </h1>
            <p
              className="
                text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
                hidden md:block
              "
            >
              Miễn phí 7 ngày sử dụng phần mềm nha khoa (free download), đăng ký
              ngay để tận dụng sức mạnh công nghệ đám mây cho phòng khám của bạn
            </p>
          </div>
        </div>
      </section>
      <section
        className="
          w-[90%] md:w-[90%] lg:w-[80%]
          py-14 mx-auto bg-white
        "
      >
        <h1 className="text-3xl font-semibold pb-4 mt-8 text-[#F9B01E]">
          Đăng ký phần mềm nha khoa
        </h1>
        <span className="text-black">
          Vui lòng điền đầy đủ thông tin của phòng khám & chuỗi phòng khám nha
          khoa và nhấn nút đăng ký.
        </span>
        <br />
        <br />
        <span className="block lg:w-[80%] text-black">
          Chỉ tốn 1 phút để đăng ký, Bs có thể đăng nhập và dùng thử{" "}
          <Link
            href="#"
            className="text-[#018DCC] hover:underline font-semibold"
          >
            phần mềm quản lý nha khoa Maydental
          </Link>{" "}
          hoàn toàn miễn phí trong 7 ngày Xem thêm{" "}
          <Link href="#" className="text-[#018DCC] hover:underline">
            Vì sao nên chọn phần mềm nha khoa online?
          </Link>
        </span>
        {/* --- LOGIC HIỂN THỊ ĐỘNG --- */}
        {step === "phone-verify" && (
          <PhoneNumberForm onVerificationSuccess={handleVerificationSuccess} />
        )}

        {step === "register-form" && (
          <RegistrationForm
            phoneNumber={verifiedPhone}
            onRegistrationSuccess={handleRegistrationSuccess}
          />
        )}

        {step === "registration-success" && ( // <--- Thêm điều kiện render mới
          <RegistrationSuccessMessage />
        )}
      </section>
    </main>
  );
}
