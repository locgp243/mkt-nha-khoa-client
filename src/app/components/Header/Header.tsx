"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Phần mềm", href: "/phan-mem" },
    { name: "Hỏi đáp", href: "/hoi-dap" },
    { name: "Hướng dẫn", href: "/huong-dan" },
    { name: "Bảng giá", href: "/bang-gia" },
    { name: "Blog", href: "/blog" },
    { name: "Đăng ký", href: "/dang-ky" },
  ];

  return (
    <header className="bg-white py-2 shadow-sm z-50 sticky top-0">
      <div className="w-[95%] lg:w-[80%] mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Maydental Logo"
              width={130}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 text-[#777777] font-bold">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#36444D] z-[55] transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-start px-4 py-4">
            <ul className="w-full">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block w-full py-4 px-0 border-b border-gray-600 text-white text-xl font-semibold hover:text-blue-400 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
