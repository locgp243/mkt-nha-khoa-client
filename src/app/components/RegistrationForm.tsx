// components/RegistrationForm.tsx

import React, { useState } from "react";
import { registerCustomer } from "@/lib/api/services/customer.service"; // Điều chỉnh đường dẫn cho đúng

interface RegistrationFormProps {
  phoneNumber: string;
  onRegistrationSuccess: () => void;
}

export default function RegistrationForm({
  phoneNumber,
  onRegistrationSuccess,
}: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    clinic_name: "",
    address: "",
    referring_doctor_1: "",
    referring_doctor_2: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    if (
      !formData.clinic_name ||
      !formData.address ||
      !formData.referring_doctor_1 ||
      !formData.email ||
      !formData.password
    ) {
      setError("Vui lòng điền đầy đủ các trường bắt buộc (*)");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        clinic_name: formData.clinic_name,
        address: formData.address,
        referring_doctor_1: formData.referring_doctor_1,
        referring_doctor_2: formData.referring_doctor_2,
        email: formData.email,
        password: formData.password,
        phone: phoneNumber,
      };

      // Gọi hàm service thay vì fetch trực tiếp
      const data = await registerCustomer(payload);

      alert(data.message || "Đăng ký thành công!");
      onRegistrationSuccess();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // Sử dụng 'any' hoặc định nghĩa type cho err nếu muốn chi tiết hơn
      setError(err.message || "Đăng ký thất bại, vui lòng thử lại.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... Phần giao diện giữ nguyên ...
  return (
    <div className="mt-8 border-t pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit}>
            {/* --- SECTION PHÒNG KHÁM --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  PHÒNG KHÁM
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Bạn hãy điền đầy đủ thông tin phòng khám của bạn vào khung bên
                  tay phải
                </p>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label className="block font-medium text-sm">
                    Tên phòng khám (*)
                  </label>
                  <input
                    type="text"
                    name="clinic_name"
                    value={formData.clinic_name}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-md"
                    placeholder="Tên phòng khám của bạn"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm">
                    Địa chỉ phòng khám (*)
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-md"
                    placeholder="Địa chỉ phòng khám của bạn"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm">
                    Điện thoại (*)
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={phoneNumber}
                    disabled
                    className="w-full p-3 mt-1 border rounded-md bg-gray-100"
                  />
                </div>
              </div>
            </div>

            <hr className="my-8" />

            {/* --- SECTION BÁC SĨ --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1 text-center">
                <h3 className="text-lg font-semibold text-gray-800">BÁC SĨ</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Khu vực thông tin Bác sĩ.
                </p>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label className="block font-medium text-sm">
                    Bác sĩ 1 (*)
                  </label>
                  <input
                    type="text"
                    name="referring_doctor_1"
                    value={formData.referring_doctor_1}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm">Bác sĩ 2</label>
                  <input
                    type="text"
                    name="referring_doctor_2"
                    value={formData.referring_doctor_2}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-md"
                  />
                </div>
              </div>
            </div>

            <hr className="my-8" />

            {/* --- SECTION TÀI KHOẢN --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  TÀI KHOẢN
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Địa chỉ email sẽ là tài khoản để đăng nhập phần mềm.
                </p>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label className="block font-medium text-sm">Email (*)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-md"
                    placeholder="Email của bạn"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm">
                    Mật khẩu (*)
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* --- NÚT SUBMIT VÀ LỖI --- */}
            <div className="text-right mt-8">
              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold text-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? "Đang xử lý..." : "HOÀN TẤT ĐĂNG KÝ"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
