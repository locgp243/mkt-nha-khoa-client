"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // Thêm useEffect
import {
  FaBullhorn,
  FaGlobeAsia,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaUsersCog,
  FaUserShield,
} from "react-icons/fa";
// Giả sử em đã định nghĩa các type này và service ở đúng đường dẫn
import { PrincingService } from "@/lib/api/services/princing-package.service";
import { Pricing } from "@/types/princing"; // Type gốc từ API

// --- Bổ sung các dòng này ---
// Hàm trợ giúp định dạng số tiền sang kiểu Việt Nam
const formatCurrencyVND = (priceString: string): string => {
  const price = parseFloat(priceString);
  if (isNaN(price)) return "Liên hệ";
  if (price === 0) return "Miễn phí";
  return new Intl.NumberFormat("vi-VN").format(price);
};

// Định nghĩa một kiểu dữ liệu mới cho các gói giá đã được biến đổi để hiển thị trên UI
interface TransformedPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  additionalFeatures: string[]; // Giữ lại cấu trúc này
  buttonText: string;
  buttonBgColor: string;
  isFeatured: boolean;
}
// ----------------------------

export default function BangGiaPage() {
  // --- Bổ sung các state để quản lý dữ liệu động ---
  const [pricingPlans, setPricingPlans] = useState<TransformedPlan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        setLoading(true);
        const response = await PrincingService.getAll({});

        console.log("Dữ liệu thực tế từ API:", response);
        const plansFromServer = response.data || [];
        console.log("test: ", plansFromServer);

        // Biến đổi dữ liệu từ API sang cấu trúc mà component đang sử dụng
        const transformedData = plansFromServer.map((plan: Pricing) => ({
          id: plan.id.toString(),
          name: plan.name,
          description: plan.description,
          price: formatCurrencyVND(plan.price_monthly),
          features: plan.features,
          additionalFeatures: [],
          buttonText:
            parseFloat(plan.price_monthly) === 0
              ? "Dùng thử miễn phí"
              : "Đăng ký ngay",
          buttonBgColor: plan.is_featured === 1 ? "bg-red-500" : "bg-[#00B0F0]",
          isFeatured: plan.is_featured === 1,
        }));

        setPricingPlans(transformedData);
        setError(null);
      } catch (err) {
        console.error("Lỗi khi fetch bảng giá:", err);
        setError("Không thể tải bảng giá. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, []); // Mảng rỗng `[]` để useEffect chỉ chạy 1 lần khi component mount
  // ----------------------------

  const faqItems = [
    {
      question: "Các ưu điểm của phần mềm nha khoa Online?",

      answer: (
        <ol className="list-decimal list-inside ml-6">
          <li>Truy cập mọi lúc mọi nơi</li> <li>Đơn giản dễ sử dụng. </li>{" "}
          <li>Chuẩn hóa quy trình phòng khám. </li>{" "}
          <li>Không cần phải có đội ngũ IT để vận hành</li>{" "}
          <li>Dễ dàng mở rộng thành chuỗi</li>{" "}
        </ol>
      ),
    },

    {
      question: "Các nhược điểm của phần mềm nha khoa Online?",

      answer: (
        <ol className="list-decimal list-inside ml-6">
          {" "}
          <li>
            Triển khai quá nhanh với chi phí thấp, vì vậy phòng khám kế bên cũng
            có thể đăng ký và tận dụng sức mạnh của điện toán đám mây ngay hôm
            nay{" "}
          </li>
          <li>Cần có Internet để sử dụng phần mềm</li>{" "}
        </ol>
      ),
    },

    {
      question: "Chế độ bảo trì phần mềm như thế nào?",

      answer: (
        <p>
          Phần mềm sẽ được bảo trì, fix bug và cập nhật liên tục. Trong thời
          gian sử dụng bạn sẽ được cập nhật phần mềm tự động đối với tất cả các
          tính năng của phần mềm quản lý nha khoa mà không phải trả thêm bất cứ
          một chi phí nào khác.{" "}
        </p>
      ),
    },

    {
      question: "Các phương thức thanh toán phần mềm nha khoa?",

      answer: (
        <>
          {" "}
          <p className="mb-2">
            Hiện tại, các phòng khám có thể thanh toán chi phí license hàng năm
            để sử dụng phần mềm qua 2 phương thức sau{" "}
          </p>{" "}
          <p className="font-semibold mb-1">
            1. Thanh toán thông qua tài khoản ngân hàng:{" "}
          </p>
          <p>Tên tài khoản: hihi</p> <p>Số tài khoản: hihi</p>{" "}
          <p className="mb-2">Nội dung thanh toán: hihi</p>{" "}
          <p className="font-semibold mb-1">
            2. Thanh toán thông qua cổng thanh toán VNPay:{" "}
          </p>{" "}
          <p>
            Thực hiện theo các bước thanh toán đã được thiết lập trong ứng dụng{" "}
          </p>{" "}
        </>
      ),
    },

    {
      question: "Phần mềm có tính năng đặt lịch tự động hay không?",

      answer: (
        <p>
          Có. Bs có thể tạo ra các dịch vụ + với thời gian khoảng thời gian lặp
          lại ví dụ: Cạo vôi răng, tự động hẹn lại sau 6 tháng, kiểm tra định kỳ
          tự động hẹ lại sau 1 năm ... Hệ thống sẽ tự động đặt lịch hẹn khi cuộc
          hẹn trước đó được hoàn tất.{" "}
        </p>
      ),
    },

    {
      question:
        "Tôi có thể yêu cầu thêm chức năng cho phòng khám của mình hay không?",

      answer: (
        <>
          {" "}
          <p className="mb-2">
            Maydental là{" "}
            <span className="text-[#018DCA] font-semibold">
              phần mềm quản lý nha khoa online{" "}
            </span>
            . Chúng tôi sinh ra là để giúp cho cộng đồng Bác sĩ, Nha sĩ có một
            giải pháp tốt và đơn giản hơn những phần mềm mà các BS đang sử dụng
            đủ để quản lý phòng khám của mình. Vì vậy, với bất cứ một yêu cầu
            nào của BS dù lớn dù nhỏ, miễn là giúp ích cho cộng đồng BS đều được
            chúng tôi nghiên cứu và thực hiện trong thời gian ngắn nhất có thể.{" "}
          </p>{" "}
          <p className="mb-2">
            Chúng tôi sẽ ưu tiên các chức năng giúp tiết kiệm thời gian và công
            sức của Bs, cũng như những chức năng có nhiều Bs yêu cầu.{" "}
          </p>{" "}
          <p className="mb-2">
            Trong 2 tháng vừa qua, nhận được sự góp ý của Bs, Maydental đã bổ
            sung những tính năng sau:{" "}
          </p>{" "}
          <ul className="list-disc list-inside ml-6 mb-2">
            {" "}
            <li>
              Tự động nhắc lịch cho các việc có tính chất lặp lại như: Cạo vôi
              răng, khám định kỳ ...{" "}
            </li>
            <li>Gởi tin nhắn lịch hẹn cho bệnh nhân</li>{" "}
            <li>Thay đổi giao diện lịch hẹn</li>{" "}
            <li>Xếp lịch, thời gian làm việc của Bs tại các chi nhánh</li>{" "}
            <li>
              Xếp lịch hẹn, phiếu hẹn cho từng chi nhánh của chuỗi phòng khám
              nha khoa{" "}
            </li>
            <li>Quản lý thu chi cho chuỗi phòng khám nha khoa</li>{" "}
            <li>
              Bổ sung thông tin bệnh nhân, thay đổi form nhập để Bs có thể nhập
              nhanh và chính xác hơn ...{" "}
            </li>{" "}
          </ul>{" "}
          <p>
            Để yêu cầu các tính năng mới xin BS gởi email trực tiếp{" "}
            <a
              href="mailto:hello@maysoft.vn"
              className="text-[#018DCA] hover:underline"
            >
              hello@maysoft.vn{" "}
            </a>
            hoặc chat, gọi điện với bộ phận hỗ trợ của Maydental. Xin chân thành
            cảm ơn các đóng góp của các BS đã tin tưởng và ủng hộ Ứng dụng quản
            lý phòng khám nha khoa Online - Maydental.{" "}
          </p>{" "}
        </>
      ),
    },
  ];

  const coreFeatures = [
    {
      iconSrc: <FaShieldAlt className="text-[#018DCA] text-6xl" />, // Cập nhật icon

      title: "An toàn - Bảo mật",

      description: "Không còn nỗi lo mất dữ liệu với hệ thống backup hàng ngày",
    },

    {
      iconSrc: <FaUserShield className="text-[#018DCA] text-6xl" />, // Cập nhật icon

      title: "An toàn, an tâm ngủ ngon",

      description:
        "Dữ liệu được lưu trữ dạng Read-only ở rất nhiều server trên hệ thống Cloud của AWS",
    },

    {
      iconSrc: <FaGlobeAsia className="text-[#018DCA] text-6xl" />, // Cập nhật icon

      title: "Online, truy cập mọi lúc mọi nơi",

      description:
        "Chuyển đổi số, quản lý phòng khám online 24/7, chỉ cần Wifi Internet hoặc 3G/4G",
    },

    {
      iconSrc: <FaBullhorn className="text-[#018DCA] text-6xl" />, // Cập nhật icon

      title: "Zalo, SMS, CSKH nha khoa",

      description:
        "Tự động gửi SMS, tin nhắn Zalo CSKH: kế hoạch điều trị, lịch sử thanh toán, tái khám định kỳ 6 tháng, HPPD, lịch hẹn, cảm ơn ...",
    },

    {
      iconSrc: <FaUsersCog className="text-[#018DCA] text-6xl" />, // Cập nhật icon

      title: "Quản lý chuỗi phòng khám toàn diện",

      description:
        "Với phòng khám nhỏ, không có phần mềm cũng chẳng sao, nhưng nếu mở chuỗi thì Maydental là giải pháp số 1",
    },

    {
      iconSrc: <FaHandHoldingUsd className="text-[#018DCA] text-6xl" />, // Cập nhật icon

      title: "Tiết kiệm chi phí đầu tư",

      description:
        "Ứng dụng quản lý nha khoa công nghệ đám mây với chi phí chỉ < 1 ly cafe mỗi ngày",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((i) => i !== index);
      } else {
        return [...prevOpenIndexes, index];
      }
    });
  };

  // --- Bổ sung xử lý loading và error cho UX tốt hơn ---
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold">Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );
  }
  // ----------------------------------------------------

  return (
    <main className="bg-white">
      {/* Tất cả JSX bên dưới được giữ nguyên, chỉ thay đổi nguồn dữ liệu của pricingPlans.map */}
      <section
        className="
         relative h-[calc(100vh-100px)] md:h-[calc(100vh-100px)] lg:h-[423px]
         bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
         before:content-[''] before:absolute before:inset-0
         before:bg-[url('/logo/MayDent_Price_Tablet.jpg')]
         before:md:bg-[url('/logo/MayDent_Price_Tablet.jpg')]
         before:lg:bg-[url('/logo/banner_price.jpg')]
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
             w-[100%] pt-8 mx-auto
             md:w-[100%] md:pt-8 md:mx-auto
             lg:w-[42%] lg:mx-0
             text-center lg:text-right
             z-10
           "
            style={{ float: "left" }}
          >
            <h1
              className="
               text-[32px] text-white font-bold
               leading-[4.025rem] tracking-[.2px]
             "
            >
              Bảng giá phần mềm quản lý nha khoa
            </h1>
            <p
              className="
               text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
               hidden md:block
             "
            >
              Phần mềm nha khoa Maydental miễn phí khởi tạo, dùng thử 7 ngày, sử
              dụng hiệu quả với chi phí hạt dẻ
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
        <div className="flex items-center breadcrumbs cursor-pointer flex-wrap ">
          {/* Maydental với mũi tên */}
          <div className="relative bg-[#C1F1FF] h-[34px] text-gray-700 text-sm breadcrumbsList pr-6 flex items-center hover:scale-[1.1] hover:z-10">
            <span className=""> CRM - Phần mềm quản lý nha khoa</span>
          </div>

          {/* Phần mềm nha khoa */}
          <div className="bg-[#81d4fa] relative h-[34px] text-gray-700 text-sm pl-4 pr-6 breadcrumbsList flex items-center hover:scale-[1.1] hover:z-10">
            <span>Quản lý phòng khám răng, nha khoa Online</span>
          </div>
          {/* Phần mềm nha khoa */}
          <div className="bg-[#4FC3F7] relative h-[34px] text-gray-700 text-sm pl-4 pr-6 breadcrumbsList flex items-center hover:scale-[1.1] hover:z-10">
            <span>Bảng giá phần mềm quản lý nha khoa</span>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-[#444444] pb-6 mt-8">
          Bảng giá phần mềm quản lý nha khoa
        </h1>
        <span className="text-black">
          <Link href="#" className="text-[#018DCC] hover:underline">
            {" "}
            Phần mềm quản lý nha khoa Maydental
          </Link>{" "}
          ứng dụng công nghệ đám mây và được phân phối dạng dịch vụ (SaaS), giá
          phần mềm được tính dựa vào nhu cầu thật sự của từng phòng khám hay
          chuỗi phòng khám. Hoàn toàn miễn phí khởi tạo dịch vụ, chỉ tính phí
          lưu trữ và sử dụng phần mềm hằng năm. Tùy vào mức độ độ lớn của phòng
          khám theo: số lượng bác sĩ, số lượng phụ tá hoặc số ghế trong từng
          phòng khám mà có mức chi phí sử dụng theo từng gói khác nhau:
        </span>
        <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-8 w-[97%] mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col border 
               transition-transform transform hover:-translate-y-2 duration-300 ease-in-out
               ${
                 plan.isFeatured
                   ? "border-red-500 border-2"
                   : "border-[#00B0F0]"
               }`}
            >
              {plan.isFeatured && (
                <div className="bg-red-500 text-white text-center py-1 font-bold">
                  Phổ Biến Nhất
                </div>
              )}
              {/* Header của gói */}
              <div className="text-center p-6 border-b border-gray-200">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Giá */}
              <div className="text-center p-6 bg-gray-50">
                <span
                  className={`text-4xl font-bold ${
                    plan.isFeatured ? "text-red-500" : "text-[#00B0F0]"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.price !== "Miễn phí" && (
                  <span className="text-xl text-gray-600"> đ/tháng</span>
                )}
              </div>

              {/* Danh sách tính năng */}
              <div className="flex-grow p-6">
                <ul className="space-y-3 text-gray-700">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-[#00B0F0] flex-shrink-0 mr-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                  {plan.additionalFeatures &&
                    plan.additionalFeatures.length > 0 && (
                      <li className="pt-3 mt-3 border-t border-gray-200">
                        <ul className="space-y-3">
                          {plan.additionalFeatures.map((addFeature, index) => (
                            <li
                              key={`add-${index}`}
                              className="flex items-center text-sm"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-[#00B0F0] flex-shrink-0 mr-2"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.154-.974l-3.376 4.22-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-4.706Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {addFeature}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                </ul>
              </div>

              {/* Nút mua gói */}
              <div className="p-6 text-center mt-auto">
                <Link
                  href={`/dang-ky?plan=${plan.id}`}
                  className={`inline-block w-full py-3 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity ${plan.buttonBgColor}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 mb-8">
          <span className="text-black">
            (*) Chi phí hỗ trợ Import dữ liệu sẽ là 500K cho 1000 khách hàng
            (thông tin khách hàng, dịch vụ & thủ thuật liên quan, quá trình điều
            trị, thu chi )
          </span>
          <br />
          <span className="text-black">
            (*) Giá sẽ tăng thêm 200K/tháng trong trường hợp phòng khám có phát
            sinh thêm 1 chi nhánh ..{" "}
          </span>
          <br />
          <strong className="text-black">
            (**) Ngoài ra, chúng tôi vẫn có các gói customize và host trên
            server riêng theo yêu cầu khách hàng
          </strong>
          <br />
          <span className="text-black">
            (***) Trong trường hợp, Nha khoa có nhu cầu thiết kế Web và Mobile
            App riêng theo đặc thù của hệ thống nha khoa xin vui lòng gọi số:
            0908 030 910
          </span>
        </div>
        <div className="container mx-auto px-4 mt-20 mb-8 text-center">
          {/* Title and Subtitle */}
          <h2 className="text-3xl font-bold text-[#018DCA] mb-2">
            Đơn giản - Đầy đủ - Tin cậy
          </h2>
          <p className="text-sm text-gray-600 mb-12">
            Đáp ứng 95% nhu cầu quản lý của phòng khám nha
          </p>

          <div
            className={`grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto`}
          >
            {coreFeatures.map((card, index) => (
              <div
                key={index}
                className="bg-white pt-2 rounded-lg flex flex-col items-start h-[165px] justify-start duration-300"
              >
                <div className="w-[100%] flex">
                  <div className="w-[25%] ">
                    <div className="mb-4 mt-4 ml-2">{card.iconSrc}</div>
                  </div>
                  <div className="w-[75%] flex flex-col items-start">
                    <h3 className="text-[20px] font-semibold text-left mb-2 text-black">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-[16px] text-left leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="text-black">
          Xem thêm{" "}
          <Link href="#" className="text-[#018DCC] hover:underline">
            {" "}
            Vì sao nên chọn phần mềm nha khoa online?
          </Link>
        </span>
        <div className="mt-8 mb-4">
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
      </section>
    </main>
  );
}
