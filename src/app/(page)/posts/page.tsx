import { getPosts } from '@/service/posts';
import PostCard from '@/_common/PostCard';
import Link from 'next/link';

const PostPage = async () => {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => {
        return <PostCard key={post.path} {...post} />;
      })}
    </>
  );
};

export default PostPage;
