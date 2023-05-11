import { getContent } from '@/service/content';
import React from 'react';
import { MarkdownViewer } from '@/_common/components/MarkdownViewer';
import { getClassifiedPosts, getNearbyPosts, getPostTitle } from '@/service/posts';
import { Metadata } from 'next';
import NextPostButton from '@/_common/components/PassPostButtons/NextPostButton';
import PrevPostButton from '@/_common/components/PassPostButtons/PrevPostButton';
import Comment from '@/_common/components/Comment';

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
  const { prevPost, nextPost } = await getNearbyPosts(slug);

  return (
    <div className="px-8">
      <div className="my-10 ft-header-01">{post.title}</div>
      <MarkdownViewer content={content} />
      <div className="flex justify-between w-full gap-4 my-20">
        {prevPost ? <PrevPostButton title={prevPost?.title} path={prevPost?.path} /> : <div className="w-3 h-3" />}
        {nextPost ? <NextPostButton title={nextPost?.title} path={nextPost?.path} /> : <div className="w-3 h-3" />}
      </div>
      <Comment />
    </div>
  );
};

export default ContentPage;
