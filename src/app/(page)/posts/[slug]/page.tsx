import { getPosts } from '@/service/posts';
import PostCard from '@/_common/PostCard';
import React from 'react';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

const CategoryPage = async ({ params: { slug } }: CategoryPageProps) => {
  const posts = await getPosts(slug);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.path} {...post} />
      ))}
    </>
  );
};

export default CategoryPage;