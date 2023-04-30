import { getClassifiedPosts } from '@/service/posts';
import { Metadata } from 'next';
import { PostTitle } from '@/_common/components/PostTitle';

export const metadata: Metadata = {
  title: 'Posts',
  description: '개발 관련 모든 포스트 모아보기',
};

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  const posts = await getClassifiedPosts();

  const categoryWithNumber: { [key: string]: number } = posts.reduce((accr, curr) => {
    let temp: { [key: string]: string } = { ...accr };

    curr.category.forEach((tag) => {
      temp = { ...temp, [tag.toLowerCase()]: (temp[tag.toLowerCase()] ?? 0) + 1 };
    });
    return { ...temp };
  }, {});

  return (
    <section>
      <PostTitle categoryWithNumber={categoryWithNumber} />
      <div>
        <ul className="flex flex-col gap-4 px-4 py-2 bg-neutral-20 ">{children}</ul>
      </div>
    </section>
  );
}
