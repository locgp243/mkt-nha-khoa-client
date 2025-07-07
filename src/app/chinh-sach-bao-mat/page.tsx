"use client";

import Link from "next/link";

interface PolicyItem {
  id: number; // Số thứ tự của điều khoản
  title: string;
  content: string | string[]; // Nội dung có thể là string hoặc mảng string cho nhiều đoạn
}
export default function ChinhSachBaoMatPage() {
  const privacyPolicy: PolicyItem[] = [
    {
      id: 1,
      title: "Mục đích và phạm vi thu thập",
      content: [
        "Việc thu thập dữ liệu chủ yếu trên website https://maydental.vn/ bao gồm email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ khách hàng. Đây là những thông tin bắt buộc mà MAYSOFT yêu cầu khách hàng cung cấp khi đăng ký sử dụng dịch vụ và để MAYSOFT liên hệ xác nhận lại với khách hàng nhằm đảm bảo quyền lợi cho khách hàng. Bên cạnh đó Công ty chúng tôi có thể thu thập thông tin về số lần khách hàng đăng ký sử dụng dịch vụ trên phần mềm nha khoa, tên miền khách hàng sử dụng, IP khách hàng đăng nhập phần mềm, hệ điều hành và trình duyệt của khách hàng sử dụng phần mềm. Sau khi khách hàng kết thúc đăng nhập phần mềm, hệ thống sẽ lưu lại IP cuối cùng của lần đăng nhập đó.",
        "Các Khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình. Ngoài ra, Khách hàng có trách nhiệm thông báo kịp thời cho MAYSOFT về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.",
      ],
    },
    {
      id: 2,
      title: "Phạm vi sử dụng thông tin",
      content: [
        "Maydental sử dụng thông tin Khách hàng cung cấp để:",
        "   • Hỗ trợ Khách hàng khi có yêu cầu",
        "   • Giải đáp thông báo của Khách hàng trên website.",
        "   • Cung cấp các dịch vụ quản lý phòng khám nha khoa Online cho Khách hàng",
        "   • Hỗ trợ quản lý báo cáo, thống kê về tình hình kinh doanh của Khách hàng.",
        "   • Giải quyết các vấn đề liên quan đến Khách hàng, tài chính, hợp đồng, chất lượng dịch vụ của Khách hàng.",
        "   • Liên lạc và giải quyết với Khách hàng trong những trường hợp đặc biệt.",
        "   • Chúng tôi không sử dụng thông tin cá nhân của Khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến website.",
      ],
    },
    {
      id: 3,
      title: "Thời gian lưu trữ thông tin",
      content:
        "Dữ liệu cá nhân của Khách hàng sẽ được lưu giữ cho đến khi có yêu cầu hủy bỏ từ Khách hàng. Còn lại trong mọi trường hợp thông tin cá nhân Khách hàng sẽ được bảo mật trên máy chủ của Maysoft.",
    },
    {
      id: 4,
      title:
        "Địa chỉ của đơn vị thu thập, quản lý thông tin và hỗ trợ Khách hàng",
      content: [
        "Công ty TNHH Phần Mềm Trên Mây",
        "Địa chỉ: 17.12A (U2-17) Tòa nhà Golden King, số 15 Nguyễn Lương Bằng, P.Tân Phú, Quận 7, TP.HCM",
        "Điện thoại: 0908.030.910",
      ],
    },
    {
      id: 5,
      title:
        "Phương tiện và công cụ để Khách hàng tiếp cận và chỉnh sửa dữ liệu của mình",
      content:
        "Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin cá nhân của mình. Sau khi thay đổi thông tin khách hàng phải liên hệ với MAYSOFT để cập nhật lại thông tin.",
    },
    {
      id: 6,
      title: "Cam kết bảo mật thông tin cá nhân Khách hàng",
      content: [
        "Thông tin cá nhân của Khách hàng được phòng khám bảo mật tuyệt đối theo chính sách bảo mật thông tin cá nhân của Khách hàng. Việc thu thập và sử dụng thông tin của mỗi Khách hàng chỉ được thực hiện khi có sự đồng ý của Khách hàng đó, trừ những trường hợp pháp luật có quy định khác. Chúng tôi cam kết không tiết lộ, chuyển giao, bán các thông tin cá nhân của Khách hàng cho bên thứ ba ngoại trừ những trường hợp được cấp phép từ Khách hàng và đối tác đã cam kết bảo mật theo dữ liệu mà chúng tôi đã cam kết bảo mật theo dữ liệu Khách hàng.",
        "Thông tin dữ liệu của Khách hàng được chúng tôi bảo mật và mã hóa bằng công nghệ hiện đại. Chúng tôi chỉ cung cấp thông tin dữ liệu của Khách hàng khi có yêu cầu của Khách hàng.",
        "Trường hợp chia sẻ thông tin dữ liệu của Khách hàng với các đối tác, chúng tôi cam kết sẽ chỉ chia sẻ dữ liệu cần thiết và đối tác đó cũng phải tuân thủ chính sách bảo mật của chúng tôi.",
        "Chúng tôi cam kết sử dụng các biện pháp bảo mật tốt nhất để bảo vệ thông tin cá nhân của Khách hàng khỏi sự truy cập trái phép, sử dụng sai mục đích hoặc tiết lộ.",
        "Trong trường hợp có bất kỳ câu hỏi nào về chính sách bảo mật, vui lòng liên hệ với chúng tôi qua email hello@maysoft.vn hoặc gọi điện trực tiếp.",
      ],
    },
    {
      id: 7,
      title: "Thay đổi về chính sách",
      content:
        "Nội dung của “Chính sách bảo mật” này có thể thay đổi để phù hợp với các nhu cầu của Maysoft cũng như nhu cầu và tư vấn của Khách hàng. Do đó, khuyến nghị Khách hàng thường xuyên kiểm tra để cập nhật các chính sách mới nhất của Maysoft.",
    },
    {
      id: 8,
      title: "Thông tin liên hệ",
      content: [
        "Chúng tôi thường xuyên kiểm tra tính xác thực của thông tin cá nhân khách hàng đã cung cấp và luôn hoan nghênh các ý kiến đóng góp, lời bình và phản hồi từ khách hàng về Chính sách bảo mật này cũng như những thông tin cá nhân khách hàng đang sử dụng. Vì vậy, nếu bạn có bất cứ câu hỏi nào liên quan đến Chính sách bảo mật này, xin vui lòng liên hệ trực tiếp với chúng tôi qua email hello@maysoft.vn hoặc gọi điện trực tiếp.",
        "Bản quyền thuộc Maysoft 2020. Bảo lưu mọi quyền.",
      ],
    },
  ];
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
      <section className=" w-[90%] md:w-[90%] lg:w-[80%] bg-white mx-auto py-16">
        <div className="container mx-auto px-4">
          {/* Phần giới thiệu chung */}
          <div className="mb-12 text-gray-700 leading-relaxed">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Chính sách bảo mật thông tin
            </h1>
            <p className="mb-4">
              Chính sách bảo mật này cũng bao gồm cách MAYSOFT và Khách hàng
              liên quan (Sau đây gọi là{" "}
              <Link
                href="https://maydental.vn/"
                className="text-blue-600 hover:underline"
              >
                maydental.vn/
              </Link>
              ) hay{" "}
              <span className="font-semibold">
                phần mềm CRM, quản lý nha khoa
              </span>
              .
            </p>
            <p className="mb-4">
              Chúng tôi cam kết sẽ luôn bảo mật các thông tin cá nhân của khách
              hàng, và sẽ nỗ lực hết sức và sử dụng các biện pháp thích hợp để
              các thông tin mà khách hàng cung cấp cho chúng tôi trong quá trình
              sử dụng website này được bảo mật và bảo vệ khỏi sự truy cập trái
              phép. Tuy nhiên, Maysoft không đảm bảo bảo mật 100% trong mọi
              trường hợp, và không chịu trách nhiệm về việc bảo mật của Khách
              hàng trong mọi trường hợp.
            </p>
            <p className="mb-4">
              Thông tin cá nhân của Khách hàng được thu thập từ các nguồn khác
              nhau, bao gồm: thông tin mà Khách hàng cung cấp trực tiếp cho
              chúng tôi (ví dụ: khi đăng ký tài khoản, sử dụng dịch vụ, liên hệ
              với chúng tôi); thông tin được thu thập tự động từ việc sử dụng
              website của Khách hàng (ví dụ: thông tin về thiết bị, trình duyệt,
              địa chỉ IP); thông tin từ các nguồn bên thứ ba (ví dụ: đối tác
              kinh doanh, nhà cung cấp dịch vụ).
            </p>
            <p className="mb-4">
              Để hiểu rõ hơn về cách chúng tôi công tác với MAYSOFT nhằm xây
              dựng một phần mềm quản lý nha khoa trên công nghệ đám mây ngày
              càng thân thiện, đơn giản và phục vụ tốt những yêu cầu của chính
              bạn. Ngoài ra, nếu có bất cứ câu hỏi nào về những thỏa thuận trên
              đây, vui lòng email cho MAYSOFT qua địa chỉ{" "}
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

          {/* Danh sách các Điều khoản Chính sách */}
          <ol className="list-none list-inside space-y-8 text-gray-700">
            {privacyPolicy.map((item) => (
              <li key={item.id} className="pl-2">
                <h3 className="font-bold text-3xl text-gray-800 mb-2">
                  {item.id}. {item.title}
                </h3>
                {typeof item.content === "string" ? (
                  <p className="text-base leading-relaxed">{item.content}</p>
                ) : (
                  // Nếu content là mảng, render từng đoạn
                  item.content.map((paragraph, pIndex) => (
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
          </ol>
        </div>
      </section>
    </main>
  );
}
