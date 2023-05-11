import { getAllCategories, getClassifiedPosts } from '@/service/posts';
import PostCard from '@/_common/components/PostCard';
import React from 'react';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({ slug: category }));
}

const CategoryPage = async ({ params: { slug } }: CategoryPageProps) => {
  const posts = await getClassifiedPosts(decodeURIComponent(slug));

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.path} {...post} />
      ))}
    </>
  );
};

export default CategoryPage;
