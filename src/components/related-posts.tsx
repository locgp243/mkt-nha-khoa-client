import { PostService } from "@/lib/api/services/post.service";
import Link from "next/link";

export async function RelatedPosts() {
  const response = await PostService.getAll({
    limit: 5,
  });

  const posts = response.data;
  if (posts.length === 0) return null;

  return (
    <div className="mt-12 max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Các tin liên quan</h2>
      <ul className="space-y-2 list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-primary hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
