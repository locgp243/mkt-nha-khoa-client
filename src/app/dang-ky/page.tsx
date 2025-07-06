"use client";
import Link from "next/link";
import PhoneNumberForm from "../components/PhoneNumberForm";

export default function DangKyPage() {
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
        <PhoneNumberForm />
      </section>
    </main>
  );
}
