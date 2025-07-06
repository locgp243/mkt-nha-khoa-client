import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#008ECA] text-white py-12">
        <div className="w-[80%] mx-auto px-4">
          {/* Top Section of Footer - Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-6">
            {/* Column 1: Maydental */}
            <div>
              <h4 className="text-xl font-bold mb-4">Maydental</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/trang-chu"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lien-he"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dieu-khoan"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Điều khoản sử dụng
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chinh-sach-bao-mat"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Chính sách bảo mật
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Phần mềm nha khoa */}
            <div>
              <h4 className="text-xl font-bold mb-4">Phần mềm nha khoa</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/phan-mem/online-offline"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Online vs Offline
                  </Link>
                </li>
                <li>
                  <Link
                    href="/phan-mem"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Phần mềm
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bang-gia"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Bảng giá
                  </Link>
                </li>
                <li>
                  <Link
                    href="/huong-dan"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Hướng dẫn
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hoi-dap"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Hỏi đáp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dang-ky"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Đăng ký
                  </Link>
                </li>
                <li>
                  <Link
                    href="/release-notes"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Release notes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Hỗ trợ & Tư vấn */}
            <div>
              <h4 className="text-xl font-bold mb-4">Hỗ trợ & Tư vấn</h4>
              <p className="text-gray-200 mb-2">
                <span className="font-semibold">Sale:</span> 0908.030.910 (Mr.Ý)
              </p>
              <p className="text-gray-200">
                <span className="font-semibold">Kỹ thuật:</span> 0984.358.352
                (Mr. Xuân)
              </p>
            </div>

            {/* Column 4: Đối tác */}
            <div>
              <h4 className="text-xl font-bold mb-4">Đối tác</h4>
              <div className="bg-white p-3 rounded-lg inline-block">
                <Image
                  src="/logo/suredent.png"
                  alt="Suredent Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Middle Section of Footer - Company Info & Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 items-start">
            {/* Company Info */}
            <div className="col-span-1">
              <h4 className="text-xl font-bold mb-4">
                CÔNG TY TNHH PHẦN MỀM TRÊN MÂY - Maysoft
              </h4>
              <div className="flex items-start mb-4">
                <Image
                  src="/logo/Logo_Maysoft_white.png"
                  alt="Maysoft Logo"
                  width={80}
                  height={60}
                  className="mr-4 flex-shrink-0"
                />
                <div className="text-gray-200 text-sm">
                  <p>17.12A (U2-17) Tòa nhà Golden King, số 15</p>
                  <p>Nguyễn Lương Bằng, P.Tân Phú, Quận 7,</p>
                  <p>TP.HCM</p>
                  <p>ĐKKD số: 0315477974, ngày 14/01/2019</p>
                </div>
              </div>
            </div>

            {/* Đã đăng ký */}
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-bold mb-4">Đã đăng ký</h4>
              <Image
                src="/logo/logoSaleNotiw200.png"
                alt="Đã thông báo Bộ Công Thương"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Follow Us */}
            <div className="flex flex-col items-start md:items-end ">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/maydental.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/your-channel-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/your-twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-6 border-t border-white/30 text-sm">
            <p>Copyright ©MAYSOFT Ltd 2021 - 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Zalo Button */}
      <div className="fixed bottom-12 right-12 z-50">
        <a
          href="https://zalo.me/your-zalo-number"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50px] h-[50px]  bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        >
          <Image
            src="/logo/download.png"
            alt="123"
            width={50}
            height={50}
            className="object-contain"
          />
        </a>
      </div>
    </>
  );
}
