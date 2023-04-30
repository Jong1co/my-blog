import { getClassifiedPosts } from '@/service/posts';
import PostCard from '@/_common/components/PostCard';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

export const RecentPosts = async () => {
  const posts = await getClassifiedPosts();

  return (
    <div className="bg-neutral-20">
      <div className="flex justify-between items-center px-4 py-2.5">
        <h3 className="ft-title-01">Recent Posts</h3>
        <Link href="/posts">
          <span className="flex items-center gap-1 duration-150 ease-in-out ft-title-03 text-neutral-70 hover:text-neutral-90">
            모든 포스트 보러가기
            <MdArrowForwardIos />
          </span>
        </Link>
      </div>
      <ul className="flex flex-col gap-4 px-4 py-3">
        {posts.slice(0, 5).map((post) => {
          return <PostCard key={post.title} {...post} />;
        })}
      </ul>
    </div>
  );
};
