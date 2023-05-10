import { getClassifiedPosts } from '@/service/posts';
import { Metadata } from 'next';
import { PostTitle } from '@/_common/components/PostTitle';
import { classifyPostsByCategory } from '@/utils/classifyPostsByCategory';

export const metadata: Metadata = {
  title: 'Posts',
  description: '개발 관련 모든 포스트 모아보기',
};

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  const posts = await getClassifiedPosts();
  const countByCategory = classifyPostsByCategory(posts);

  return (
    <section>
      <PostTitle countByCategory={countByCategory} />
      <div>
        <ul className="flex flex-col gap-4 px-4 py-2 bg-neutral-20 ">{children}</ul>
      </div>
    </section>
  );
}
