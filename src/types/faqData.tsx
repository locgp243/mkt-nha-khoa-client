import React from "react"; // Cần import React để sử dụng JSX

// Định nghĩa kiểu dữ liệu để đảm bảo code nhất quán và tránh lỗi
interface FAQItem {
  question: string;
  answer: React.ReactNode; // Kiểu dữ liệu cho JSX
  plainAnswer: string; // Kiểu dữ liệu cho text thuần túy (SEO)
}

// Xuất mảng dữ liệu với kiểu đã định nghĩa
export const faqItems: FAQItem[] = [
  {
    question: "Các phương thức thanh toán phần mềm nha khoa?",
    answer: (
      <>
        <p className="mb-2">
          Hiện tại, các phòng khám có thể thanh toán chi phí license hàng năm để
          sử dụng phần mềm qua 2 phương thức sau:
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
          Thực hiện theo các bước thanh toán đã được thiết lập trong ứng dụng.
        </p>
      </>
    ),
    plainAnswer:
      "Hiện tại, các phòng khám có thể thanh toán qua 2 phương thức: 1. Thanh toán thông qua tài khoản ngân hàng (Tên tài khoản: hihi, Số tài khoản: hihi). 2. Thanh toán qua cổng VNPay theo các bước được thiết lập trong ứng dụng.",
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
    plainAnswer:
      "Phần mềm nha khoa Maydental có giá 300.000 VNĐ mỗi tháng, không có chi phí phát sinh nào khác.",
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
          Để yêu cầu các tính năng mới xin BS gởi email trực tiếp{" "}
          <a
            href="mailto:hello@maysoft.vn"
            className="text-[#018DCA] hover:underline"
          >
            hello@maysoft.vn
          </a>{" "}
          hoặc chat, gọi điện với bộ phận hỗ trợ của Maydental. Xin chân thành
          cảm ơn các đóng góp của các BS đã tin tưởng và ủng hộ Ứng dụng quản lý
          phòng khám nha khoa Online - Maydental.
        </p>
      </>
    ),
    plainAnswer:
      "Có. Maydental luôn nghiên cứu và thực hiện các yêu cầu tính năng mới để giúp ích cho cộng đồng Bác sĩ. Chúng tôi ưu tiên các chức năng tiết kiệm thời gian và được nhiều Bác sĩ yêu cầu. Các tính năng mới được bổ sung gần đây bao gồm nhắc lịch tự động, gửi tin nhắn hẹn, quản lý lịch làm việc, và nhiều hơn nữa. Để yêu cầu, xin gửi email đến hello@maysoft.vn.",
  },
  {
    question:
      "Em đang dùng phần mềm nha khoa mà chưa thấy được sự thuận tiện, em muốn đổi sang bên phần mềm Maydental thì có add dữ liệu cũ sang cho em được không? Có tốn phí không?",
    answer: (
      <span>
        Hoàn toàn không tốn phí. Thời gian xử lý dữ liệu và cập nhật vào app sẽ
        khác nhau, tùy vào số lượng dữ liệu/data. Maydental luôn sẵn sàng trước
        những yêu cầu của khách hàng.
      </span>
    ),
    plainAnswer:
      "Hoàn toàn không tốn phí. Maydental hỗ trợ chuyển dữ liệu từ phần mềm cũ sang. Thời gian xử lý sẽ tùy thuộc vào số lượng dữ liệu của bạn.",
  },
  {
    question:
      "Làm thế nào để tạo shortcut truy cập vào ứng dụng trên màn hình desktop?",
    answer: (
      <span>
        Làm thế nào để tạo shortcut truy cập vào ứng dụng trên màn hình desktop?
      </span>
    ),
    // Câu trả lời này có vẻ đang là placeholder, thầy tạm điền, em có thể sửa lại sau
    plainAnswer:
      "Bạn có thể tạo shortcut của ứng dụng Maydental trên màn hình desktop bằng cách sử dụng tính năng 'Add to Home Screen' hoặc 'Install App' trên trình duyệt Chrome hoặc Edge.",
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
    plainAnswer:
      "Khi mất internet, bạn có thể truy cập phần mềm bằng cách chia sẻ kết nối 3G hoặc 4G từ điện thoại di động của mình.",
  },
  {
    question: "Các ưu điểm của phần mềm nha khoa Online?",
    answer: (
      <ol className="list-decimal list-inside ml-6">
        <li>Truy cập mọi lúc mọi nơi</li>
        <li>Đơn giản dễ sử dụng.</li>
        <li>Chuẩn hóa quy trình phòng khám.</li>
        <li>Không cần phải có đội ngũ IT để vận hành</li>
        <li>Dễ dàng mở rộng thành chuỗi</li>
      </ol>
    ),
    plainAnswer:
      "Các ưu điểm của phần mềm nha khoa Online bao gồm: 1. Truy cập mọi lúc mọi nơi. 2. Đơn giản dễ sử dụng. 3. Chuẩn hóa quy trình phòng khám. 4. Không cần đội ngũ IT. 5. Dễ dàng mở rộng thành chuỗi.",
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
    plainAnswer:
      "Các nhược điểm của phần mềm nha khoa Online là: 1. Đối thủ cạnh tranh cũng có thể dễ dàng tiếp cận và sử dụng. 2. Cần có kết nối Internet để hoạt động.",
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
          vận hành, báo cáo của từng chuỗi phòng khám riêng biệt.
        </p>
      </>
    ),
    plainAnswer:
      "Hoàn toàn được. Maydental được xây dựng trên công nghệ đám mây, giúp đồng bộ dữ liệu và quản lý chuỗi phòng khám một cách dễ dàng. Đội ngũ kỹ sư của Maysoft cũng sẽ cấu hình hệ thống để đáp ứng nhu cầu vận hành và báo cáo riêng của từng chuỗi.",
  },
];
