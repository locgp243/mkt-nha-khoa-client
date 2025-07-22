import Link from "next/link";
import { CategoryService } from "@/lib/api/services/category.service";

// Đây là một Server Component, có thể dùng async/await trực tiếp
export async function CategoryList() {
  // Gọi service để lấy dữ liệu
  const response = await CategoryService.getAll({});
  const categories = response.data;
  console.log("Categories:", categories);

  // Trả về null nếu không có danh mục nào
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold border-b pb-3 mb-4">Danh mục</h3>
      <div className="space-y-3">
        {/* Dùng map để lặp qua mảng categories và render ra từng mục */}
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex justify-between items-center text-gray-700"
          >
            <Link
              href={`/danh-muc/${category.slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
