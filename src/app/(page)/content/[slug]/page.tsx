import { getContent } from '@/service/content';
import React from 'react';
import { MarkdownViewer } from '@/_common/components/MarkdownViewer/MarkdownViewer';

type ContentPageProps = {
  params: {
    slug: string;
  };
};

const ContentPage = async ({ params: { slug } }: ContentPageProps) => {
  const content = await getContent(slug);

  return (
    <>
      <div className="px-4">
        <MarkdownViewer content={content} />
      </div>
    </>
  );
};

export default ContentPage;
