import { getContent } from '@/service/content';
import React from 'react';
import { MarkdownViewer } from '@/_common/components/MarkdownViewer/MarkdownViewer';
import { getPostTitle } from '@/service/posts';
import TOC from '../components/TOC';

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
      <TOC />
      <div className="px-4">
        <h1 className="my-10 ft-header-01">{post.title}</h1>
        <MarkdownViewer content={content} />
      </div>
    </>
  );
};

export default ContentPage;
