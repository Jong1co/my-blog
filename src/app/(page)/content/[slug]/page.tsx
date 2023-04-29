import { getContent } from '@/service/content';
import React from 'react';
import { MarkdownViewer } from '@/_common/components/MarkdownViewer/MarkdownViewer';
import { getPostTitle } from '@/service/posts';

type ContentPageProps = {
  params: {
    slug: string;
  };
};

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
