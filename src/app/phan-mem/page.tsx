"use client";

import Image from "next/image";

export default function PhanMemPage() {
  const khachHang = [
    "Maydental tạo hồ sơ bệnh án nhanh chóng, đơn giản và chuyên nghiệp",
    "Giảm 80% số lượt tìm kiếm bệnh nhân với danh sách bệnh nhân thông minh",
    "Tìm kiếm thông tin bệnh nhân nhanh chóng bằng tên, mã hồ sơ, số điện thoại hoặc địa chỉ",
    "Thông tin bệnh nhân được trình bày đơn giản và khoa học",
    "Quá trình trồng răng, nhổ răng, chỉnh răng... được trình bày theo thứ tự thời gian (timeline), bao gồm kế hoạch điều trị, nội dung điều trị, hình ảnh, toa thuốc...",
    "Thông tin bệnh nhân được mã hóa và bảo mật tối ưu",
  ];
  const lichHen = [
    "Tạo lịch hẹn đơn giản và dễ dàng cho từng dịch vụ như khám răng, cạo vôi, trồng răng sứ…",
    "Thêm lịch tái khám đơn giản",
    "Thay đổi thông tin lịch hẹn dễ dàng",
    "Lịch hẹn Labo cho từng kế hoạch điều trị",
    "Đồng bộ lịch hẹn thông qua SMS, Email.. với Apple Calendar, Google Calendar hoặc Outlook. Giúp Bác sĩ dễ dàng theo dõi lịch hẹn trên điện thoại hoặc các thiết bị cầm tay khác",
    "Xem lịch trình làm việc của từng Bác sĩ theo ngày, tuần hoặc tháng",
    "Quản lý chi tiết chất lượng lịch hẹn theo các thông số như: thời gian bệnh nhân đến trễ, thời gian bệnh nhân chờ đến lượt, thời gian phục vụ..",
  ];
  const price = [
    "Phiếu thu được tự động lập khi Bác sĩ tạo phiếu điều trị",
    "Dễ dàng kiểm soát chặt chẽ thu, chi, thanh toán tại phòng khám",
    "Lập phiếu thu, chi dễ dàng với chế độ phân quyền hợp lý",
    "Hỗ trợ thu, chi nhiều lần và theo đợt cho một hạng mục điều trị",
    "Theo dõi các báo cáo thu, chi, công nợ của từng khách hàng ",
    "Theo dõi doanh thu của từng trung tâm & chi nhánh trong hệ thống",
    "Cập nhật thống kê và báo biểu về thu chi bất cứ lúc nào",
    "Thống kế thu-chi theo từng mục dựa trên phiếu điều trị của bệnh nhân, giúp các Bác sĩ dễ dàng theo dõi hồ sơ bệnh án",
  ];
  const report = [
    "Thống kê và biểu đồ Thu-Chi",
    "Tỉ lệ đặt hẹn của từng loại dịch vụ như trám răng sứ, trồng răng, nhổ răng…",
    "Tỉ lệ khách hàng tái khám đúng hẹn, dời hoặc hủy bỏ lịch hẹn",
    "Số lượng cuộc hẹn đã lên lịch",
    "Thời gian chờ trung bình và tỉ lệ hài lòng của khách hàng",
    "Các chỉ số tăng trưởng, bao gồm tỉ lệ khách hàng mới",
    "Biểu đồ so sánh các loại dịch vụ và doanh thu",
  ];
  const danhMuc = [
    "Quản lý dịch vụ nha khoa",
    "Quản lý nhóm dịch vụ nha khoa",
    "Quản lý khách hàng",
    "Quản lý nhóm khách hàng",
    "Quản lý nhà cung cấp labo",
    "Quản lý chương trình khuyến mãi & hậu mãi",
    "Quản lý thông tin phòng khám",
    "Quản lý danh sách Nha sĩ",
    "Quản lý danh sách nhân viên phòng khám",
    "Quản lý danh sách user truy cập",
    "Phân quyền user trên từng đối tượng dữ liệu",
    "Quản lý danh sách đối tượng: răng, hàm",
    "Quản lý danh sách thuốc + đơn giá",
    "Quản lý danh sách đơn vị tính",
    "Quản lý danh sách cách sử dụng thuốc",
  ];
  const CSKH = [
    'Tự động cập nhật nội dung CSKH chỉ sau một cái click chuột "tạo lịch hẹn", " hoàn tất kế hoạch điều trị "',
    "Hiển thị nội dung , tên khách hàng, trạng thái, thời gian cụ thể rõ ràng giúp xử lý dịch vụ CSKH hiệu quả, nhanh gọn",
    "Quản lý được thời gian cụ thể từng ngày cụ thể, hoặc 1 tuần trước hay sau, tùy chỉnh thời gian cụ thể.",
    "Xử lý CSKH thành công hay thất bại được hiển thị rõ ràng, chỉ qua 1 cái click chuột, để được tư vấn, chăm sóc một cách hiệu quả.",
  ];
  const telesale = [
    "Thêm LEAD nhanh chóng, đơn giản chỉ bằng 1 click chuột với đầy đủ thông tin quan trọng, thời gian cụ thể",
    "Phân loại rõ ràng tình trạng xử lý, nguồn, trạng thái, thời gian hiển thị cụ thể từng ngày, hoặc tùy chọn.",
    "Hiển thị tên, số điện thoại, nội dung cần tư vấn rõ ràng, đầy đủ, nhanh chóng giúp loại bỏ những thao tác dư thừa.",
    "Quản lý chi tiết LEAD đầy đủ nội dung chỉ với 1 cái click chuột, lịch sử cuộc gọi, SMS, giới tính, dịch vụ khách hàng quan tâm.",
  ];
  const truCap = [
    "Giải pháp bảo mật 2 lớp",
    "Phần mềm có thể chạy tốt trên tablet & Ipad và thiết bị di động",
    "Phần mềm thân thiện trên các hệ điều hành MacOS, Linux và Windows",
    "Phần mềm không đòi hỏi cài đặt trên máy tính của người dùng",
    "Phần mềm được kích hoạt và sử dụng ngay sau khi đăng ký tài khoản",
    "Dễ dàng truy cập và theo dõi doanh thu, các hoạt động phòng khám",
    "Đăng ký và sử dụng ngay phần mềm nha khoa với chi phí thấp hơn một ly cà phê mỗi ngày",
    "Chúng tôi sẵn sàng lắng nghe tư vấn từ Bs Bề để PM ngày càng hoàn thiện hơn",
  ];

  return (
    <main className="">
      <section
        className="
          relative h-[calc(100vh-100px)] md:h-[calc(100vh-50px)] lg:h-[423px]
          bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/logo/MayDent_Feature_Tablet.jpg')]
          before:md:bg-[url('/logo/MayDent_Feature_Tablet.jpg')]
          before:lg:bg-[url('/logo/banner_feature.jpg')]
          before:bg-cover before:bg-no-repeat before:bg-center
        "
      >
        <div
          className="
            w-[100%] md:w-[95%] lg:w-[80%]
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
            // The float style is often replaced by flexbox/grid in modern CSS,
            // but keeping it here for minimal change. For cleaner layout, consider
            // refactoring the parent div to use flexbox/grid for alignment.
            style={{ float: "left" }}
          >
            <h1
              className="text-[32px] text-white font-bold"
              style={{
                lineHeight: "4.025rem",
                letterSpacing: ".2px",
              }}
            >
              Quản lý phòng khám răng, nha khoa Online
            </h1>
            <p
              className="
                text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
                hidden md:block
              "
            >
              Maydental là phần mềm quản lý nha khoa Online giúp Bs quản lý bệnh
              nhân dễ dàng, quản lý lịch hẹn hiệu quả, quản lý chính xác dòng
              tiền, thông kê và phân tích đa chiều hiện trạng phòng khám...
            </p>
          </div>
        </div>
      </section>

      {/* Quản lý bệnh nhân dễ dàng */}
      <section className="p-4 bg-white">
        <div
          className="w-[90%] lg:w-[80%] mx-auto pt-4 pb-16"
          // Removed conditional class based on !isLaptop
        >
          {/* Title and Subtitle */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Quản lý bệnh nhân dễ dàng
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Tìm kiếm 3000 hồ sơ bệnh nhân trong vòng 1 giây. Tạo hồ sơ mới
              trong vòng 1 phút, xem toàn bộ thông tin quá trình khám chữa bệnh
              của bệnh nhân với thao tác đơn giản, tiết kiệm 1 giờ mỗi ngày
            </p>
            <div className="w-24 h-1 bg-[#1DBCE7] mt-4"></div>
          </div>

          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Benefits List */}
            <div>
              <ul className="space-y-4">
                {khachHang.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1DBCE7"
                        className="w-6 h-6 text-[#1DBCE7]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Video Link */}
              <div className="mt-8 hover:text-blue-800 transition-colors cursor-pointer">
                <p className="font-semibold text-sm">
                  Xem Video:{" "}
                  <span className=" text-[#1DBCE7]">
                    Thực hiện các công việc cơ bản tại phòng khám nha khoa trong
                    1 nốt nhạc{" "}
                  </span>{" "}
                  trên{" "}
                  <span className=" text-[#1DBCE7]">
                    phần mềm quản lý nha khoa Maydental
                  </span>
                </p>
              </div>
            </div>

            {/* Right Column: Image Mockup */}
            <div className="flex items-start">
              <Image
                src="/logo/phan-mem-quan-ly-benh-nhan.gif"
                alt="Giao diện quản lý bệnh nhân"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quản lý lịch hẹn hiệu quả */}
      <section className="p-4 bg-[#F6F6F6]">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-16 pb-16">
          {/* Title and Subtitle */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-right text-gray-800 mb-4">
              Quản lý lịch hẹn hiệu quả
            </h2>
            <div className="flex justify-end">
              <p className="text-sm text-right text-gray-600 max-w-2xl">
                Quản lý tất cả lịch phòng khám chỉ trong 10 phút, tăng 30% lượng
                khách tái khám
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-24 h-1 bg-[#1DBCE7] mt-4 text-right"></div>
            </div>
          </div>

          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Right Column: Image Mockup */}
            <div className="flex items-start">
              <Image
                src="/logo/phan-mem-dat-lich-hen.gif"
                alt="Giao diện quản lý bệnh nhân"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            {/* Left Column: Benefits List */}
            <div>
              <ul className="space-y-4">
                {lichHen.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1DBCE7"
                        className="w-6 h-6 text-[#1DBCE7]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8 transition-colors cursor-pointer">
                <button className="bg-[#f9b01e] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quản lý và kiểm soát dòng tiền hiệu quả */}
      <section className="p-4 bg-white">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-4 pb-16">
          {/* Title and Subtitle */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Quản lý và kiểm soát dòng tiền hiệu quả
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Thống kê, lập biểu đồ và báo cáo thanh toán, thu, chi theo tuần,
              tháng hoặc một khoảng thời gian nhất định. Dễ dàng quản lý mức độ
              thu, chi để có kế hoạch phát triển phòng khám hợp lý, giúp đem lại
              lợi nhuận tối đa.
            </p>
            <div className="w-24 h-1 bg-[#1DBCE7] mt-4"></div>
          </div>

          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Benefits List */}
            <div>
              <ul className="space-y-4">
                {price.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1DBCE7"
                        className="w-6 h-6 text-[#1DBCE7]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8 transition-colors cursor-pointer">
                <button className="bg-[#018DCA] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity">
                  Chi phí sử dụng
                </button>
              </div>
            </div>

            {/* Right Column: Image Mockup */}
            <div className="flex items-start">
              <Image
                src="/logo/phan-mem-quan-ly-thu-chi.gif"
                alt="Giao diện quản lý bệnh nhân"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Thống kê và phân tích đa chiều */}
      <section className="p-4 bg-[#F6F6F6]">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-16 pb-16">
          {/* Title and Subtitle */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-right text-gray-800 mb-4">
              Thống kê và phân tích đa chiều
            </h2>
            <div className="flex justify-end">
              <p className="text-sm text-right text-gray-600 max-w-2xl">
                Hiện trạng của một phòng không chỉ đơn thuần thể hiện ở lượng
                khách ra vào hàng ngày và số liệu cân đối thu-chi mà còn phụ
                thuộc vào nhiều các yếu tố khác bao gồm: chất lượng phục vụ
                khách hàng, chất lượng từng cuộc hẹn, tỉ lệ hài lòng, thời gian
                chờ của bệnh nhân…
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-24 h-1 bg-[#1DBCE7] mt-4 text-right"></div>
            </div>
          </div>

          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Right Column: Image Mockup */}
            <div className="flex items-start">
              <Image
                src="/logo/phan-mem-thong-ke-tong-quan.gif"
                alt="Giao diện quản lý bệnh nhân"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            {/* Left Column: Benefits List */}
            <div>
              <ul className="space-y-4">
                {report.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1DBCE7"
                        className="w-6 h-6 text-[#1DBCE7]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Video Link */}
              <div className="mt-8 transition-colors cursor-pointer">
                <p className="font-medium text-sm">
                  Xem thêm{" "}
                  <span className=" text-[#1DBCE7]">
                    Vì sao nên chọn phần mềm nha khoa online?
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quản lý Danh mục */}
      <section className="p-4 bg-white">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-4 pb-16">
          {/* Title and Subtitle */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Quản lý Danh mục
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Bao gồm hơn 20 danh mục dữ liệu phần mềm được quản lý và tập trung
              đồng nhất.
            </p>
            <div className="w-24 h-1 bg-[#1DBCE7] mt-4"></div>
          </div>

          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Benefits List */}
            <div>
              <ul className="space-y-4">
                {danhMuc.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1DBCE7"
                        className="w-6 h-6 text-[#1DBCE7]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image Mockup */}
            <div className="flex items-start">
              <Image
                src="/logo/phan-mem-quan-ly-danh-muc.gif"
                alt="Giao diện quản lý bệnh nhân"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chăm sóc khách hàng [CSKH] */}
      <section className="p-4 bg-[#F6F6F6]">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-16 pb-16">
          {/* Title and Subtitle */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-right text-gray-800 mb-4">
              Chăm sóc khách hàng [CSKH]
            </h2>
            <div className="flex justify-end">
              <p className="text-sm text-right text-gray-600 max-w-2xl">
                Quản lý và cập nhật tất cả thông tin sau khi tạo lịch hẹn cho
                Khách hàng cần tư vấn, điều trị hay đặt cọc, khách hẹn nhưng
                chưa đến, đến nhưng không làm dịch vụ....
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-24 h-1 bg-[#1DBCE7] mt-4 text-right"></div>
            </div>
          </div>

          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Right Column: Image Mockup */}
            <div className="flex items-start">
              <Image
                src="/logo/CSKH.gif"
                alt="Giao diện quản lý bệnh nhân"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            {/* Left Column: Benefits List */}
            <div>
              <ul className="space-y-4">
                {CSKH.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1DBCE7"
                        className="w-6 h-6 text-[#1DBCE7]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8 transition-colors cursor-pointer">
                <button className="bg-[#f9b01e] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dịch vụ quản lý telesale */}
      <section className="p-4 bg-white">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-4 pb-16">
          {/* Title and Subtitle */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Dịch vụ quản lý telesale
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Phân loại, xử lý hàng trăm khách hàng cần tư vấn nhanh chóng nhờ
              nội dung được hiển thị rõ ràng bằng màu sắc nhận diện.
            </p>
            <div className="w-24 h-1 bg-[#1DBCE7] mt-4"></div>
          </div>

          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Benefits List */}
            <div>
              <ul className="space-y-4">
                {telesale.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1DBCE7"
                        className="w-6 h-6 text-[#1DBCE7]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-8 transition-colors cursor-pointer">
                <button className="bg-[#018DCA] text-white py-2 px-9 rounded-xl cursor-pointer hover:opacity-90 transition-opacity">
                  Chi phí sử dụng
                </button>
              </div>
            </div>

            {/* Right Column: Image Mockup */}
            <div className="flex items-start">
              <Image
                src="/logo/telesale.gif"
                alt="Giao diện quản lý bệnh nhân"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Truy cập mọi lúc mọi nơi với chi phí thấp */}
      <section className="p-4 bg-[#F6F6F6]">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-16 pb-16">
          {/* Title and Subtitle */}
          <div className="text-left mb-12">
            <h2 className="text-xl font-bold text-right text-gray-800 mb-4">
              Truy cập mọi lúc mọi nơi với chi phí thấp
            </h2>
            <div className="flex justify-end">
              <p className="text-sm text-right text-gray-600 max-w-2xl">
                Truy cập, quản lý phòng khám ở tất cả mọi nơi có thể kết nối
                Internet và vẫn đảm bảo mức độ bảo mật cao với chi phí thấp
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-24 h-1 bg-[#1DBCE7] mt-4 text-right"></div>
            </div>
          </div>

          {/* Content Grid: Benefits (left) and Image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Right Column: Image Mockup */}
            <div className="flex items-start">
              <Image
                src="/logo/phan-mem-dang-nhap-moi-luc-moi-noi.gif"
                alt="Giao diện quản lý bệnh nhân"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            {/* Left Column: Benefits List */}
            <div>
              <ul className="space-y-4">
                {truCap.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#1DBCE7"
                        className="w-6 h-6 text-[#1DBCE7]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
