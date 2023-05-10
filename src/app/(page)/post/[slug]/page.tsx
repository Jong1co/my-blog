import { getContent } from '@/service/content';
import React from 'react';
import { MarkdownViewer } from '@/_common/components/MarkdownViewer';
import { getClassifiedPosts, getPostTitle } from '@/service/posts';
import { Metadata } from 'next';

type ContentPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: ContentPageProps): Promise<Metadata> {
  const { title, description } = await getPostTitle(slug);
  return {
    title,
    description,
  };
}

export async function generateStaticParams() {
  const posts = await getClassifiedPosts();
  return posts.map((post) => ({ slug: post.path }));
}

const ContentPage = async ({ params: { slug } }: ContentPageProps) => {
  const content = await getContent(slug);
  const post = await getPostTitle(slug);

  return (
    <>
      <div className="px-8">
        <div className="my-10 ft-header-01">{post.title}</div>
        <MarkdownViewer content={content} />
      </div>
    </>
  );
};

export default ContentPage;
