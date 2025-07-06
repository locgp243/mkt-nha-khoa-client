"use client";

export default function DieuKhoanSuDungPage() {
  return (
    <main className="bg-white">
      <section
        className="
          relative h-[calc(100vh-100px)] md:h-[calc(50vh - 100px)] lg:h-[423px]
          bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/logo/manual_Tablet.jpg')]
          before:md:bg-[url('/logo/manual_Tablet.jpg')]
          before:lg:bg-[url('/logo/banner_manual.jpg')]
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
              Chính sách bảo mật
            </h1>
            <p
              className="
                text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
                hidden md:block
              "
            >
              Chúng tôi cam kết sẽ bảo mật các Thông tin cá nhân của khách hàng,
              sẽ nỗ lực hết sức và sử dụng các biện pháp thích hợp để các thông
              tin mà khách hàng cung cấp cho chúng tôi trong quá trình sử
              dụng...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
