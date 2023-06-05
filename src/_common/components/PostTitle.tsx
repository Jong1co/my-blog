'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tag } from '@/_common/components/Tag';
import { CountByCategory } from '@/utils/classifyPostsByCategory';

type PostTitleProps = { countByCategory: CountByCategory; count: number };

export const PostTitle = ({ countByCategory, count }: PostTitleProps) => {
  const pathname = usePathname();
  const tag = decodeURIComponent(pathname.split('/')[2]);

  const title: string = tag !== 'undefined' ? tag : 'All Posts';
  const postsNumber: number = countByCategory[tag] || count;

  const categorySubtitle = `${title} (${postsNumber})`;

  return (
    <div className="px-4 bg-neutral-20 py-2.5 mb-4">
      <div className="flex flex-col gap-6">
        <span className="ft-title-02">{categorySubtitle}</span>
        <span className="flex gap-2.5 max-w-3xl flex-wrap justify-center">
          {Object.entries(countByCategory).map(([category, number]) => {
            return (
              <Link href={`/posts/${encodeURIComponent(category)}`} key={category}>
                <Tag key={category} category={`${category} (${number})`} isClickable isActive={category === tag} />
              </Link>
            );
          })}
        </span>
      </div>
    </div>
  );
};
