import { getPosts } from '@/service/posts';
import { PostTitle } from './components/PostTitle';

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  const posts = await getPosts();

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
