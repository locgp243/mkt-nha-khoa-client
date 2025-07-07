"use client";

import Image from "next/image";
import { useState } from "react";

export default function LienHePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ lại sớm nhất.");
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      note: "",
    });
  };

  return (
    <main className="bg-white">
      <section
        className="
          relative h-[calc(100vh-100px)] md:h-[calc(50vh - 100px)] lg:h-[423px]
          bg-cover bg-no-repeat bg-center bg-[#EEEEEF]
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/logo/MayDent_Contact_Tablet.jpg')]
          before:md:bg-[url('/logo/MayDent_Contact_Tablet.jpg')]
          before:lg:bg-[url('/logo/banner_contacts.jpg')]
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
              float-left
            "
          >
            <h1
              className="
                text-[36px] text-white font-bold
                leading-[4.025rem] tracking-[.2px]
              "
            >
              Liên hệ
            </h1>
            <p
              className="
                text-white text-[1.5rem] leading-[2rem] tracking-[.2px]
                hidden md:block
              "
            >
              Khi cần tư vấn về phần mềm và các giải pháp quản lý nha khoa, hãy
              liên hệ với chúng tôi ngay khi có thể
            </p>
          </div>
        </div>
      </section>

      <section className="p-4 bg-white w-[90%] lg:w-[80%] mx-auto ">
        <div className="pt-4 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-3xl font-semibold leading-12">
                Giải pháp quản lý nha khoa online | Maydental
              </h1>
              <span>
                Với phương châm {'"sinh ra là để phụng sự"'} cho cộng đồng Bác
                sĩ, Nha sĩ có được một{" "}
                <span className="text-[#018DCC] italic  ">
                  phần mềm quản lý phòng khám nha khoa Online
                </span>{" "}
                <span className="italic">tốt nhất</span> và đơn giản hơn so với
                những giải pháp và ứng dụng nha khoa mà các Bs hay Nha sĩ đang
                sử dụng.
              </span>
              <br />
              <br />
              <span>
                Vì vậy, với bất cứ một yêu cầu nào dù lớn, dù nhỏ (thay đổi mẫu
                phiếu in, thêm 1 loại báo cáo, thêm chức năng ...), miễn là giúp
                ích cho cộng đồng Bs cũng như giúp cho phần mềm ngày càng hoàn
                thiện hơn thì đều được chúng tôi nghiên cứu và thực hiện trong
                thời gian ngắn nhất có thể. Chúng tôi sẽ ưu tiên thực hiện trước
                các chức năng giúp tiết kiệm tiền, tài nguyên, thời gian, công
                sức và giúp qua trình quản lý phòng khám chuyên nghiệp và dễ
                dàng hơn ... cũng như những chức năng có nhiều Bs yêu cầu.
              </span>
              <br />
              <span>
                (xem thêm{" "}
                <span className="text-[#018DCC]">
                  Một số câu hỏi về phần mềm nha khoa
                </span>{" "}
                Maydental và{" "}
                <span className="text-[#018DCC]">
                  Vì sao nên chọn phần mềm nha khoa online?
                </span>
                )
              </span>
              <br />
              <br />
              <span>
                Đừng ngần ngại, hãy liên hệ với chúng tôi nếu Bs có bất kỳ yêu
                cầu gì liên quan đến phần mềm và giải pháp nha khoa online.
                Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
              </span>
              <br />
              <br />
              <span>
                Maydental là lựa chọn hàng đầu của cộng đồng Bs và Marketing
              </span>
            </div>

            <div className="flex items-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31334.49890779533!2d106.64098262786862!3d10.977531217133592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d13a88ef03b5%3A0xa8fe7df8f754fb63!2zQ2jDuWEgVMOieSBU4bqhbmc!5e0!3m2!1svi!2s!4v1751855577991!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start  mb-12">
          <div className="bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className="block text-gray-800 text-lg font-semibold mb-2"
                >
                  Họ và tên của bạn <span className="text-red-500">(*)</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Họ và tên của bạn"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-800 text-lg font-semibold mb-2"
                >
                  Số điện thoại <span className="text-red-500">(*)</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Số điện thoại của bạn"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-800 text-lg font-semibold mb-2"
                >
                  Email của bạn <span className="text-red-500">(*)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Email của bạn"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="note"
                  className="block text-gray-800 text-lg font-semibold mb-2"
                >
                  Ghi chú <span className="text-red-500">(*)</span>
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
                  placeholder="Ghi chú của bạn"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-xl font-bold text-sm hover:bg-yellow-600 transition-colors duration-200"
              >
                Gửi
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="bg-white">
            <div className="flex items-start mb-4">
              <Image
                src="/logo/icons/call.png"
                alt="Phone icon"
                width={30}
                height={30}
                className="mr-5 pt-0 mt-1 flex-shrink-0"
              />
              <div>
                <span className="text-black font-semibold text-lg">
                  Điện thoại
                </span>
                <br />
                <span className="text-gray-700 text-lg">(+84) 908 030 910</span>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <Image
                src="/logo/icons/email.png"
                alt="Email icon"
                width={30}
                height={30}
                className="mr-5 pt-0 mt-1 flex-shrink-0"
              />
              <div>
                <span className="text-black font-semibold text-lg">Email</span>
                <br />
                <span className="text-gray-700 text-lg">
                  hi@maysoft.co
                </span>{" "}
              </div>
            </div>

            <div className="flex items-start mb-6">
              <Image
                src="/logo/icons/place.png"
                alt="Location icon"
                width={30}
                height={30}
                className="mr-5 pt-0 mt-1 flex-shrink-0"
              />
              <div>
                <span className="text-black font-semibold text-lg">
                  Địa chỉ
                </span>
                <br />
                <p className="text-gray-700 text-lg">
                  15 Nguyễn Lương Bằng, Phường Tân Phú, Quận 07, TP.HCM
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=15+Nguyen+Luong+Bang+Tan+Phu+District+7+HCMC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 justify-center w-full bg-[#028BFF] text-white py-2 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors duration-200"
                >
                  Google map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
