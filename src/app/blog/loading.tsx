// app/blog/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

const POSTS_PER_PAGE = 5;

export default function Loading() {
  // Giao diện Skeleton sẽ tự động được hiển thị trong khi page.tsx đang fetch dữ liệu
  const renderSkeletons = () =>
    Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
      <div key={index} className="flex flex-col space-y-3">
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    ));

  return (
    <main>
      {/* Em có thể copy cả banner và breadcrumbs vào đây để có trải nghiệm loading mượt mà hơn */}
      <section className="w-[90%] lg:w-[80%] py-14 mx-auto">
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderSkeletons()}
          </div>
        </div>
      </section>
    </main>
  );
}
