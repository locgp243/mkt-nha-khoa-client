"use client"; // Rất quan trọng: Đánh dấu đây là Client Component

import { useState } from "react";
import Link from "next/link";
import { faqItems } from "@/types/faqData"; // Dùng chung data

export default function FAQSection() {
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

  return (
    <div className="mt-12 mb-4">
      <h2 className="text-2xl font-semibold mb-6 text-black">
        Câu Hỏi Thường Gặp
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* Cột trái */}
        <div className="flex flex-col gap-y-4">
          {faqItems
            .slice(0, Math.ceil(faqItems.length / 2))
            .map((item, index) => (
              <div key={index}>
                <h3
                  className="font-semibold text-[#444444] text-base cursor-pointer flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="mr-2">
                    {index + 1}. {item.question}
                  </span>
                  {/* Có thể thêm icon mũi tên ở đây */}
                </h3>
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
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => {
            const globalIndex = index + Math.ceil(faqItems.length / 2);
            return (
              <div key={globalIndex}>
                <h3
                  className="font-semibold text-[#444444] text-base cursor-pointer flex justify-between items-center"
                  onClick={() => toggleAccordion(globalIndex)}
                >
                  <span className="mr-2">
                    {globalIndex + 1}. {item.question}
                  </span>
                  {/* Có thể thêm icon mũi tên ở đây */}
                </h3>
                {openIndexes.includes(globalIndex) && (
                  <div className="mt-2 ml-6 text-gray-700 animate-fadeIn transition-all duration-300 overflow-hidden">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <span>
          Xem thêm các{" "}
          <Link href="/faq" className="text-[#018DCC] hover:underline">
            {" "}
            câu hỏi thường gặp
          </Link>
        </span>
      </div>
    </div>
  );
}
