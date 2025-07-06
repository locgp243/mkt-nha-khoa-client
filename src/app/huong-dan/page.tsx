"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Removed: import { useMediaQuery } from "react-responsive";

export default function HuongDanPage() {
  const featureCards = [
    {
      iconSrc: "/logo/icons/icon_2.png",
      title: "Khởi tạo phòng khám",
      description: "Khởi tạo phòng khám dễ hơn bao giờ hết",
    },
    {
      iconSrc: "/logo/icons/icon_lich_hen.png",
      title: "Quản lý lịch hẹn",
      description:
        "Quản lý toàn bộ thông tin về lịch hẹn khám chữa bệnh của phòng khám.",
    },
    {
      iconSrc: "/logo/icons/icon_download_phan_mem.png",
      title: "Quản lý khách hàng",
      description: "Thêm, xóa, sửa và tìm kiếm thông tin bệnh nhân",
    },
    {
      iconSrc: "/logo/icons/icon_thongke.png",
      title: "Thống kê thanh toán",
      description:
        "Thêm phiếu thu, phiếu chi, thống kê lại tình hình thu chi phòng khám theo ngày tháng năm ...",
    },
    {
      iconSrc: "/logo/icons/icon_setting.png",
      title: "Thay đổi password và ngôn ngữ",
      description:
        "Bạn có thể thiết lập profile, password, notification phù hợp với nhu cầu quản lý.",
    },
    {
      iconSrc: "/logo/icons/icon_benh_an.png",
      title: "Xem tổng quan và hiện trạng phòng khám",
      description: "", // Mô tả trống nếu không có trong hình
    },
    {
      iconSrc: "/logo/icons/icon_8.png",
      title: "Quản lý danh mục",
      description: "Thêm và điều chỉnh các danh mục trong hệ thống",
    },
    {
      iconSrc: "/logo/icons/icon_shortcut.png",
      title: "Hướng dẫn tạo shortcut",
      description:
        "Hướng dẫn tạo nhanh 1 shortcut trên màn hình để dễ dàng truy cập phần mềm",
    },
    {
      iconSrc: "/logo/icons/icon_lichhen_tudong.png",
      title: "Tự động tạo cuộc hẹn",
      description:
        "Tự động hóa công việc, đặt lịch hẹn, tiết kiệm thời gian cho đội ngũ hỗ trợ phòng khám.",
    },
  ];
  const faqItems = [
    {
      question: "Các phương thức thanh toán phần mềm nha khoa?",
      answer: (
        <>
          <p className="mb-2">
            Hiện tại, các phòng khám có thể thanh toán chi phí license hàng năm
            để sử dụng phần mềm qua 2 phương thức sau
          </p>
          <p className="font-semibold mb-1">
            1. Thanh toán thông qua tài khoản ngân hàng:
          </p>
          <p>Tên tài khoản: hihi</p>
          <p>Số tài khoản: hihi</p>
          <p className="mb-2">Nội dung thanh toán: hihi</p>
          <p className="font-semibold mb-1">
            2. Thanh toán thông qua cổng thanh toán VNPay:
          </p>
          <p>
            Thực hiện theo các bước thanh toán đã được thiết lập trong ứng dụng
          </p>
        </>
      ),
    },
    {
      question: "Giá phần mềm nha khoa là bao nhiêu?",
      answer: (
        <p>
          Phần mềm nha khoa Maydental được bán theo phí sử dụng hàng tháng là
          300.000 VNĐ, ngoài ra bạn không phải trả thêm bất cứ 1 chi phí nào
          khác, chỉ cần đăng ký là bạn có thể sử dụng được ngay.
        </p>
      ),
    },
    {
      question:
        "Tôi có thể yêu cầu thêm chức năng cho phòng khám của mình hay không?",
      answer: (
        <>
          <p className="mb-2">
            Maydental là{" "}
            <span className="text-[#018DCA] font-semibold">
              phần mềm quản lý nha khoa online
            </span>
            . Chúng tôi sinh ra là để giúp cho cộng đồng Bác sĩ, Nha sĩ có một
            giải pháp tốt và đơn giản hơn những phần mềm mà các BS đang sử dụng
            để quản lý phòng khám của mình. Vì vậy, với bất cứ một yêu cầu nào
            của BS dù lớn dù nhỏ, miễn là giúp ích cho cộng đồng BS đều được
            chúng tôi nghiên cứu và thực hiện trong thời gian ngắn nhất có thể.
          </p>
          <p className="mb-2">
            Chúng tôi sẽ ưu tiên các chức năng giúp tiết kiệm thời gian và công
            sức của Bs, cũng như những chức năng có nhiều Bs yêu cầu.
          </p>
          <p className="mb-2">
            Trong 2 tháng vừa qua, nhận được sự góp ý của Bs, Maydental đã bổ
            sung những tính năng sau:
          </p>
          <ul className="list-disc list-inside ml-6 mb-2">
            <li>
              Tự động nhắc lịch cho các việc có tính chất lặp lại như: Cạo vôi
              răng, khám định kỳ ...
            </li>
            <li>Gởi tin nhắn lịch hẹn cho bệnh nhân</li>
            <li>Thay đổi giao diện lịch hẹn</li>
            <li>Xếp lịch, thời gian làm việc của Bs tại các chi nhánh</li>
            <li>
              Xếp lịch hẹn, phiếu hẹn cho từng chi nhánh của chuỗi phòng khám
              nha khoa
            </li>
            <li>Quản lý thu chi cho chuỗi phòng khám nha khoa</li>
            <li>
              Bổ sung thông tin bệnh nhân, thay đổi form nhập để Bs có thể nhập
              nhanh và chính xác hơn ...
            </li>
          </ul>
          <p>
            Để yêu cầu các tính năng mới xin BS gởi email trực tiếp
            <a
              href="mailto:hello@maysoft.vn"
              className="text-[#018DCA] hover:underline"
            >
              {" "}
              hello@maysoft.vn{" "}
            </a>
            hoặc chat, gọi điện với bộ phận hỗ trợ của Maydental. Xin chân thành
            cảm ơn các đóng góp của các BS đã tin tưởng và ủng hộ Ứng dụng quản
            lý phòng khám nha khoa Online - Maydental.
          </p>
        </>
      ),
    },
    {
      question:
        "Em đang dùng phần mềm nha khoa mà chưa thấy được sự thuận tiện, em muốn đổi sang bên phần mềm Maydental thì có add dữ liệu cũ sang cho em được không? Có tốn phí không?",
      answer: (
        <span>
          Hoàn toàn không tốn phí. Thời gian xử lý dữ liệu và cập nhật vào app
          sẽ khác nhau, tùy vào số lượng dữ liệu/data. Maydental luôn sẵn sàng
          trước những yêu cầu của khách hàng.
        </span>
      ),
    },
    {
      question:
        "Làm thế nào để tạo shortcut truy cập vào ứng dụng trên màn hình desktop? ",
      answer: (
        <span>
          Làm thế nào để tạo shortcut truy cập vào ứng dụng trên màn hình
          desktop?
        </span>
      ),
    },
    {
      question: "Làm sao để truy cập ứng dụng khi phòng khám bị mất internet?",
      answer: (
        <p>
          Trong trường hợp mất internet bạn vẫn có thể truy cập phần mềm nha
          khoa bằng thủ thuật share 3G, 4G từ điện thoại di động. Với việc hơn
          60% các bạn trẻ đi làm có sử dụng 3G, 4G thì chúng tôi tin chắc đây là
          1 trong những thủ thuật đơn giản nhất.
        </p>
      ),
    },
    {
      question: "Các ưu điểm của phần mềm nha khoa Online?",
      answer: (
        <ol className="list-decimal list-inside ml-6">
          <li>Truy cập mọi lúc mọi nơi</li>
          <li>Đơn giản dễ sử dụng. </li>
          <li>Chuẩn hóa quy trình phòng khám. </li>
          <li>Không cần phải có đội ngũ IT để vận hành</li>
          <li>Dễ dàng mở rộng thành chuỗi</li>
        </ol>
      ),
    },
    {
      question: "Các nhược điểm của phần mềm nha khoa Online?",
      answer: (
        <ol className="list-decimal list-inside ml-6">
          <li>
            Triển khai quá nhanh với chi phí thấp, vì vậy phòng khám kế bên cũng
            có thể đăng ký và tận dụng sức mạnh của điện toán đám mây ngay hôm
            nay
          </li>
          <li>Cần có Internet để sử dụng phần mềm</li>
        </ol>
      ),
    },
    {
      question:
        "Sử dụng Maydental để quản lý chuỗi phòng khám nha khoa được hay không?",
      answer: (
        <>
          <p className="mb-2">
            Maydental là phần mềm nha khoa, ứng dụng trên công nghệ đám mây. Dữ
            liệu phòng khám được phân lớp, đồng bộ giữa trung tâm và các chi
            nhánh cũng như lưu trữ và bảo mật trên cloud. Vì vậy việc quản lý
            chuỗi phòng khám trên Maydental là hết sức dễ dàng.
          </p>
          <p>
            Hiện tai, Maydental đã được áp dụng cho 1 số chuỗi có quy mô địa lý
            chia cắt giữa Hà Nội và TP.HCM, cũng như nghiệp vụ phức tạp với
            phòng Telesale và chăm sóc khách hàng từ xa. Tuy nhiên, do nghiệp vụ
            và báo cáo của mỗi chuỗi phòng khám nha khoa khác nhau vì vậy sau
            khi tìm hiểu hoạt động của từng chuỗi phòng khám, đội ngũ kỹ sư của
            Maysoft sẽ thay đổi 1 số config trong hệ thống để phần mềm có thể
            đáp ứng nhu cầu vận hành, báo cáo của từng chuỗi phòng khám riêng
            biệt
          </p>
        </>
      ),
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        // If already open, remove it (close it)
        return prevOpenIndexes.filter((i) => i !== index);
      } else {
        // If closed, add it (open it)
        return [...prevOpenIndexes, index];
      }
    });
  };
  return (
    <main className="bg-[#F2F5F8]">
      <section
        className="
          relative h-[calc(100vh-100px)] md:h-[calc(100vh-100px)] lg:h-[423px]
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
              Hướng dẫn
            </h1>
            <p
              className="
                text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
                hidden md:block
              "
            >
              Cách thức sử dụng phần mềm nha khoa online nhanh chóng, dễ dàng và
              hiệu quả
            </p>
          </div>
        </div>
      </section>
      <section
        className="
          w-[90%] md:w-[90%] lg:w-[80%]
          py-10 mx-auto bg-[#F2F5F8]
        "
      >
        <h1 className="text-2xl font-semibold mb-4 text-black">Hướng dẫn</h1>
        <span className="text-black">
          Maydental là{" "}
          <span className="text-[#018DCC]">phần mềm quản lý nha khoa</span>{" "}
          Online được Maysoft phát triển theo tiêu chí : Đơn giản, đầy đủ và tin
          cậy. Bs có thể tham khảo thêm các hướng dẫn sử dung như sau:
        </span>

        <div
          className={`grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto`}
        >
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-[165px] justify-center transition-shadow hover:shadow-lg duration-300"
            >
              <div className="w-[100%] flex">
                <div className="w-[30%]">
                  <Image
                    src={card.iconSrc}
                    alt={card.title}
                    width={80}
                    height={80}
                  />
                </div>
                <div className="w-[70%]">
                  <h3 className="text-[16px] font-semibold text-[#018DCA] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-4">
          <h1 className="text-2xl font-semibold mb-6 text-black">
            Câu hỏi thường gặp
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {/* Cột trái */}
            <div className="flex flex-col gap-y-4">
              {faqItems
                .slice(0, Math.ceil(faqItems.length / 2))
                .map((item, index) => (
                  <div key={index}>
                    <h2
                      className="font-semibold text-[#444444] text-base cursor-pointer flex justify-between items-center"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="mr-2">
                        {index + 1}. {item.question}
                      </span>
                      {/* Removed chevron icons */}
                    </h2>
                    {openIndexes.includes(index) && (
                      <div className="mt-2 ml-6 text-gray-700 animate-fadeIn transition-all duration-300 overflow-hidden">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Cột phải */}
            <div className="flex flex-col gap-y-4">
              {faqItems
                .slice(Math.ceil(faqItems.length / 2))
                .map((item, index) => (
                  <div key={index + Math.ceil(faqItems.length / 2)}>
                    <h2
                      className="font-semibold text-[#444444] text-base cursor-pointer flex justify-between items-center"
                      onClick={() =>
                        toggleAccordion(index + Math.ceil(faqItems.length / 2))
                      }
                    >
                      <span className="mr-2">
                        {index + Math.ceil(faqItems.length / 2) + 1}.{" "}
                        {item.question}
                      </span>
                      {/* Removed chevron icons */}
                    </h2>
                    {openIndexes.includes(
                      index + Math.ceil(faqItems.length / 2)
                    ) && (
                      <div className="mt-2 ml-6 text-gray-700 animate-fadeIn transition-all duration-300 overflow-hidden">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <span>
          Xem thêm các{" "}
          <Link href="#" className="text-[#018DCC] hover:underline">
            {" "}
            câu hỏi thường gặp
          </Link>
        </span>

        <div className="mt-4 mb-4">
          <h1 className="text-2xl font-semibold mb-6 text-black">
            Video hướng dẫn
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8"></div>
        </div>
      </section>
    </main>
  );
}
