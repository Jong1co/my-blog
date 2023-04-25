import { getClassifiedPosts } from '@/service/posts';
import PostCard from '@/_common/PostCard';

const PostPage = async () => {
  const posts = await getClassifiedPosts();

  return (
    <>
      {posts.map((post) => {
        return <PostCard key={post.path} {...post} />;
      })}
    </>
  );
};

export default PostPage;
