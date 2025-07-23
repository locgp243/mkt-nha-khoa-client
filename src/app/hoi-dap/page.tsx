"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqItems = [
  {
    question:
      "Tôi có thể yêu cầu thêm chức năng cho phòng khám của mình hay không?",
    answer: (
      <>
        <p className="mb-2">
          Maydental là{" "}
          <span className="text-primary font-semibold">
            phần mềm quản lý nha khoa online
          </span>
          . Chúng tôi sinh ra là để giúp cho cộng đồng Bác sĩ, Nha sĩ có một
          giải pháp tốt và đơn giản hơn những phần mềm mà các BS đang sử dụng để
          quản lý phòng khám của mình. Vì vậy, với bất cứ một yêu cầu nào của BS
          dù lớn dù nhỏ, miễn là giúp ích cho cộng đồng BS đều được chúng tôi
          nghiên cứu và thực hiện trong thời gian ngắn nhất có thể.
        </p>
        <p className="mb-2">
          Chúng tôi sẽ ưu tiên các chức năng giúp tiết kiệm thời gian và công
          sức của Bs, cũng như những chức năng có nhiều Bs yêu cầu.
        </p>
        <p className="mb-2">
          Trong 2 tháng vừa qua, nhận được sự góp ý của Bs, Maydental đã bổ sung
          những tính năng sau:
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
            Xếp lịch hẹn, phiếu hẹn cho từng chi nhánh của chuỗi phòng khám nha
            khoa
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
            className="text-primary hover:underline"
          >
            {" "}
            hello@maysoft.vn{" "}
          </a>
          hoặc chat, gọi điện với bộ phận hỗ trợ của Maydental. Xin chân thành
          cảm ơn các đóng góp của các BS đã tin tưởng và ủng hộ Ứng dụng quản lý
          phòng khám nha khoa Online - Maydental.
        </p>
      </>
    ),
  },
  {
    question: "Giá trị mà Maydental mang lại là gì?",
    answer: (
      <div className="flex justify-center">
        <Image
          src="/logo/giavsgiatri.png"
          alt="Giá trị Maydental"
          width={800}
          height={500}
        />
      </div>
    ),
  },
  {
    question:
      "Sử dụng Maydental để quản lý chuỗi phòng khám nha khoa được hay không?",
    answer: (
      <>
        <p className="mb-2">
          Maydental là phần mềm nha khoa, ứng dụng trên công nghệ đám mây. Dữ
          liệu phòng khám được phân lớp, đồng bộ giữa trung tâm và các chi nhánh
          cũng như lưu trữ và bảo mật trên cloud. Vì vậy việc quản lý chuỗi
          phòng khám trên Maydental là hết sức dễ dàng.
        </p>
        <p>
          Hiện tai, Maydental đã được áp dụng cho 1 số chuỗi có quy mô địa lý
          chia cắt giữa Hà Nội và TP.HCM, cũng như nghiệp vụ phức tạp với phòng
          Telesale và chăm sóc khách hàng từ xa. Tuy nhiên, do nghiệp vụ và báo
          cáo của mỗi chuỗi phòng khám nha khoa khác nhau vì vậy sau khi tìm
          hiểu hoạt động của từng chuỗi phòng khám, đội ngũ kỹ sư của Maysoft sẽ
          thay đổi 1 số config trong hệ thống để phần mềm có thể đáp ứng nhu cầu
          vận hành, báo cáo của từng chuỗi phòng khám riêng biệt
        </p>
      </>
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
          có thể đăng ký và tận dụng sức mạnh của điện toán đám mây ngay hôm nay
        </li>
        <li>Cần có Internet để sử dụng phần mềm</li>
      </ol>
    ),
  },
  {
    question: "Giá phần mềm nha khoa là bao nhiêu?",
    answer: (
      <p>
        Phần mềm nha khoa Maydental được bán theo phí sử dụng hàng tháng là
        300.000 VNĐ, ngoài ra bạn không phải trả thêm bất cứ 1 chi phí nào khác,
        chỉ cần đăng ký là bạn có thể sử dụng được ngay.
      </p>
    ),
  },
  {
    question: "Các phương thức thanh toán phần mềm nha khoa?",
    answer: (
      <>
        <p className="mb-2">
          Hiện tại, các phòng khám có thể thanh toán chi phí license hàng năm để
          sử dụng phần mềm qua 2 phương thức sau
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
    question: "Chế độ bảo trì phần mềm như thế nào?",
    answer: (
      <p>
        Phần mềm sẽ được bảo trì, fix bug và cập nhật liên tục. Trong thời gian
        sử dụng bạn sẽ được cập nhật phần mềm tự động đối với tất cả các tính
        năng của phần mềm quản lý nha khoa mà không phải trả thêm bất cứ một chi
        phí nào khác.
      </p>
    ),
  },
  {
    question: "Tài khoản dùng thử (demo) và tài khoản trả phí có khác gì nhau?",
    answer: (
      <p>
        Tất cả các tính năng bạn sử dụng trên phần mềm quản lý nha khoa trong
        tài khoản dùng thử và tài khoản của bạn là hoàn toàn giống nhau, chỉ
        khác nhau về dữ liệu, tất cả những gì bạn thấy ở tài khoản Demo sẽ không
        được thấy ở bất cứ tài khoản nào khác và ngược lại. Ngay cả các tài
        khoản của admin cũng hoàn toàn không thể nhìn thấy được dữ liệu của bạn.
        Đảm bảo dữ liệu của bạn sẽ được bảo mật 100%. Ngoài ra, trong tài khoản
        Demo không có tiên để sử dụng chức năng gởi SMS và Email tự động vì các
        hoạt động này làm phát sinh thêm chi phí từ các nhà cung cấp dịch vụ
        viễn thông như MobileFone, Viettel & VNPT.
      </p>
    ),
  },
  {
    question: "Phần mềm có những tính năng hữu ích nào?",
    answer: (
      <p>
        Phần mềm nha khoa Maydental có rất nhiều tính năng hữu ích giúp bạn quản
        lý phòng khám nha và chăm sóc bệnh nhân một cách hiệu quả và tiết kiệm
        nhất. Phần mềm tập trung giải quyết 3 bài toàn là: Lịch hẹn - giúp tiết
        kiệm thời gian của bệnh nhân cũng như bác sỹ và nha sỹ, quản lý thu chi
        - giúp bác sỹ dễ dàng nắm bắt được tình hình tài chính của phòng khám
        hay là công nợ của từng bệnh nhân, hồ sơ bệnh nhân, giúp phòng khám số
        hóa 100% hồ sơ bệnh nhân giúp cho việc tìm kiếm và quản lý bệnh nhân một
        cách dễ dàng và rất là nhanh chóng. Xem thêm các tính năng hữu ích của{" "}
        <Link href="/phan-mem" className="text-primary hover:underline">
          phần mềm nha khoa.
        </Link>
      </p>
    ),
  },
  {
    question: "Bao lâu thì phần mềm được cập nhật 1 lần?",
    answer: (
      <p>
        Phần mềm nha khoa Maydental được cập nhật hàng tuần đối với các bản
        fixbug hoặc thay đổi giao diện. Phần mềm cũng sẽ được cập nhật hàng
        tháng đối với các tính năng mới và cao cấp hơn.
      </p>
    ),
  },
  {
    question: "Cho hỏi đường link để tải phần mềm quản lý nha khoa Maydental?",
    answer: (
      <p>
        <Link href="/phan-mem" className="text-primary hover:underline">
          Phần mềm quản lý nha khoa
        </Link>{" "}
        Maydental được xây dựng trên công nghệ đám mây. Nhờ đó tất cả dự liệu,
        chương trình đều được lưu trữ trên đám mây vì các Bs không cần phải
        download và cài đặt vào máy. Giúp cho các Bác sĩ có thể truy cập phần
        mềm ờ bất cứ đâu nhưng vẫn đảm bảo an toàn tuyệt đối về dữ liệu bằng cơ
        chế bảo mật của Amazon Web Service. Các Bác sĩ chỉ cần tham khảo các
        tính năng ưu việc của phần mềm quản lý phòng nha và{" "}
        <Link href="/dang-ky" className="text-primary hover:underline">
          đăng ký phần mềm quản lý nha khoa
        </Link>{" "}
        tại đây. Sau đó nhận password và kích hoạt tài khoản thông qua email đã
        đăng ký để sử dụng phần mềm.
      </p>
    ),
  },
  {
    question: "Làm sao để truy cập ứng dụng khi phòng khám bị mất internet?",
    answer: (
      <p>
        Trong trường hợp mất internet bạn vẫn có thể truy cập phần mềm nha khoa
        bằng thủ thuật share 3G, 4G từ điện thoại di động. Với việc hơn 60% các
        bạn trẻ đi làm có sử dụng 3G, 4G thì chúng tôi tin chắc đây là 1 trong
        những thủ thuật đơn giản nhất.
      </p>
    ),
  },
  {
    question: "Phần mềm có tính năng đặt lịch tự động hay không?",
    answer: (
      <p>
        Có. Bs có thể tạo ra các dịch vụ + với thời gian khoảng thời gian lặp
        lại ví dụ: Cạo vôi răng, tự động hẹn lại sau 6 tháng, kiểm tra định kỳ
        tự động hẹ lại sau 1 năm ... Hệ thống sẽ tự động đặt lịch hẹn khi cuộc
        hẹn trước đó được hoàn tất.
      </p>
    ),
  },
];

export default function HoiDapPage() {
  // Initialize openIndex with all indices to have all FAQs open by default
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    faqItems.map((_, index) => index)
  );

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
    <main className="bg-white">
      <section
        className="
          relative h-[calc(100vh-50px)] md:h-[calc(100vh-50px)] lg:h-[423px]
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
            style={{ float: "left" }}
          >
            <h1
              className="
                text-[36px] text-white font-bold
                leading-[4.025rem] tracking-[.2px]
              "
            >
              Hỏi đáp về phần mềm nha khoa
            </h1>
            <p
              className="
                text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
                text-center lg:text-right  hidden md:block
              "
            >
              Các câu hỏi thường gặp khi sử dụng phần mềm nha khoa Maydental
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
        <div className="flex items-center breadcrumbs cursor-pointer ">
          {/* Maydental với mũi tên */}
          <div className="relative bg-[#C1F1FF] h-[34px] text-gray-700 text-sm breadcrumbsList pr-6 flex items-center hover:scale-[1.1] hover:z-10">
            <span className="">Maydental</span>
          </div>

          {/* Phần mềm nha khoa */}
          <div className="bg-[#81d4fa] relative h-[34px] text-gray-700 text-sm pl-4 pr-6 breadcrumbsList flex items-center hover:scale-[1.1] hover:z-10">
            <span>Phần mềm nha khoa</span>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-[#444444] pb-6 mt-8">
          {" "}
          Hỏi đáp phần mềm nha khoa Maydental:
        </h1>

        {faqItems.map((item, index) => (
          <div key={index} className="mt-2 mb-6 border-gray-200 pb-4 last:pb-0">
            <h2
              className="font-semibold text-[#444444] text-xl cursor-pointer flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              {/* Removed chevron icons */}
            </h2>
            {openIndexes.includes(index) && (
              <div className="mt-2 text-gray-700 animate-fadeIn transition-all duration-300 overflow-hidden">
                {item.answer}
              </div>
            )}
          </div>
        ))}

        <div className="mt-8">
          <span className="text-black">
            Xem thêm{" "}
            <Link href="#" className="text-primary hover:underline">
              Vì sao nên chọn phần mềm nha khoa online?
            </Link>
          </span>
          <br />
          <span className="text-black">
            Xem thêm{" "}
            <Link href="#" className="text-primary hover:underline">
              hướng dẫn quản lý phòng khám nha khoa
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}
