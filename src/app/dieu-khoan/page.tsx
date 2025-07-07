// src/app/dieu-khoan/page.tsx
"use client"; // Đảm bảo component này là Client Component nếu có các tương tác (ví dụ: Link)

import Link from "next/link"; // Import Link component

interface TermItem {
  title: string;
  content: string | string[]; // Nội dung có thể là string hoặc mảng string cho nhiều đoạn
}

export default function DieuKhoanSuDungPage() {
  // Dữ liệu các điều khoản được định nghĩa trực tiếp trong component
  const termsAndConditions: TermItem[] = [
    {
      title: "Quy định sử dụng",
      content:
        "Là các quy định liên quan đến việc sử dụng dịch vụ trên website. Người dùng khi đăng ký, và sau khi đăng ký đều phải tuân thủ những quy định này.",
    },
    {
      title: "Thay đổi quy định",
      content:
        "Công ty chúng tôi có thể thay đổi quy định theo các chính sách của công ty. Khi có thay đổi, chúng tôi sẽ đăng tải mới phiên bản trên wesite https://maydental.vn/. Phiên bản sửa đổi sẽ có hiệu lực tại thời điểm được đăng. Sau khi quy định thay đổi, nếu thành viên sử dụng wesite, chúng tôi coi thành viên đã chấp nhận tất cả các quy định mới.",
    },
    {
      title: "Sử dụng dịch vụ",
      content:
        "Người dùng đăng ký sử dụng dịch vụ của phần mềm quản lý nha khoa online là người đã đăng ký sử dụng dịch vụ theo quy định của MAYSOFT, và được công ty chấp nhận sự đăng ký đó.",
    },
    {
      title: "Quản lý thông tin",
      content:
        "Sau khi bàn giao các thông số quản trị dịch vụ cho người dùng, MAYSOFT không chịu trách nhiệm và không bảo đảm về tính chính xác của những thông tin từ website của người dùng. MAYSOFT không chịu trách nhiệm pháp lý và bồi thường cho người dùng và bên thứ ba đối với các thiệt hại trực tiếp, gián tiếp, vô ý, đặc biệt, vô hình, các thiệt hại về lợi nhuận, doanh thu, uy tín phát sinh từ việc sử dụng sản phẩm, dịch vụ của website https://maydental.vn.",
    },
    {
      title: "Quản lý tài khoản quản trị",
      content:
        "Người dùng giữ một cách an toàn các thông tin tài khoản, mật khẩu hay những thông tin, mật khẩu liên quan đến tài khoản của mình và lập tức thông báo cho Maydental khi phát hiện các hình thức truy cập trái phép bằng tài khoản của mình hoặc các sơ hở về bảo mật, bao gồm mất mát, đánh cắp hoặc để lộ các thông tin về mật khẩu và các thông tin bảo mật khác.",
    },
    {
      title: "Sử dụng email",
      content:
        "Người dùng phải tự chịu trách nhiệm về nội dung các email được gửi đi từ hộp thư trong tài khoản của mình.",
    },
    {
      title: "Giải quyết tranh chấp, luật áp dụng",
      content:
        "Trong quá trình sử dụng nếu xảy ra tranh chấp giữa người sử dụng và công ty chúng tôi, hai bên sẽ tiến hành đàm phán hòa giải với tinh thần hữu nghị. Trong trường hợp không giải quyết được bằng hòa giải sẽ đưa ra toà án kinh tế TP.HCM giải quyết.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Phần Banner/Header của trang Điều khoản */}
      <section
        className="
          relative h-[calc(100vh-100px)] md:h-[calc(50vh - 100px)] lg:h-[423px]
          bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/logo/faqs_Tablet.jpg')]
          before:md:bg-[url('/logo/faqs_Tablet.jpg')]
          before:lg:bg-[url('/logo/banner_faqs.jpg')]
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
            // style={{ float: "left" }} // Vẫn nên xem xét thay thế float bằng flexbox/grid
          >
            <h1
              className="
                text-[36px] text-white font-bold
                leading-[4.025rem] tracking-[.2px]
              "
            >
              Điều khoản sử dụng
            </h1>
            <p
              className="
                text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
                hidden md:block
              "
            >
              Là các quy định liên quan đến việc sử dụng dịch vụ phần mềm quản
              lý nha khoa online Maydental. Người dùng khi đăng ký, và sau khi
              đi đăng ký đều phải tuân thủ những quy định này.
            </p>
          </div>
        </div>
      </section>

      {/* Phần nội dung chính các điều khoản */}
      <section className=" w-[90%] md:w-[90%] lg:w-[80%] bg-white mx-auto py-16">
        {" "}
        {/* Thêm py-16 để có padding trên dưới */}
        <div className="container mx-auto px-4">
          {/* Phần giới thiệu chung */}
          <div className="mb-12 text-gray-700 leading-relaxed">
            <p className="mb-4">
              Chào mừng bạn đến với website{" "}
              <Link
                href="https://maydental.vn/"
                className="text-blue-600 hover:underline"
              >
                maydental.vn
              </Link>{" "}
              hay{" "}
              <span className="font-semibold">
                phần mềm CRM, quản lý nha khoa.
              </span>
            </p>
            <p className="mb-4">
              Sau khi truy cập vào trang Thông tin Điện tử{" "}
              <Link
                href="https://maydental.vn/"
                className="text-blue-600 hover:underline"
              >
                https://maydental.vn/
              </Link>{" "}
              để tham khảo hoặc sử dụng dịch vụ, bạn đã đồng ý tuân thủ và ràng
              buộc với những quy định của CÔNG TY TNHH PHẦN MỀM TRÊN MÂY (Sau
              đây gọi tắt là "MAYSOFT").
            </p>
            <p className="mb-4">
              Vui lòng xem kỹ các quy định và hợp tác với MAYSOFT nhằm xây dựng
              một phần mềm quản lý nha khoa trên công nghệ đám mây ngày càng
              thân thiện, đơn giản và phục vụ tốt những yêu cầu của chính bạn.
              Ngoài ra, nếu có bất cứ câu hỏi nào về những thỏa thuận trên đây,
              vui lòng email cho MAYSOFT qua địa chỉ{" "}
              <a
                href="mailto:hello@maysoft.vn"
                className="text-blue-600 hover:underline"
              >
                hello@maysoft.vn
              </a>
            </p>
            <p className="mb-8">
              Quý khách vui lòng kiểm tra thường xuyên để cập nhật những thay
              đổi của Maysoft.
            </p>
          </div>

          {/* Danh sách các Điều khoản */}
          <ul className="list-none list-inside space-y-8 text-gray-700">
            {termsAndConditions.map((term, index) => (
              <li key={index} className="pl-2">
                {" "}
                {/* pl-2 để căn chỉnh số với nội dung */}
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  Điều {index + 1}: {term.title}
                </h3>
                {typeof term.content === "string" ? (
                  <p className="text-base leading-relaxed">{term.content}</p>
                ) : (
                  // Nếu content là mảng, render từng đoạn
                  term.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base leading-relaxed mb-2 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
