import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/post"; // Sửa lại đường dẫn type nếu cần

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(
    post.published_at || post.created_at
  ).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative w-full aspect-video">
            <Image
              src={
                post.featured_image_url ||
                "/logo/blog/giamthatthoattrongquanlynhakhoa.jpeg"
              } // Ảnh mặc định
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-0 left-0 bg-primary text-primary-foreground text-xs px-3 py-1 m-2 rounded-md z-10">
              {formattedDate}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-sm font-medium text-primary mb-2">
            {post.category_name}
          </p>
          <CardTitle className="leading-snug text-lg group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <p className="text-muted-foreground text-sm mt-3 line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
