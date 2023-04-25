'use client';
import { replaceFirstCharToUpperCase } from '@/utils/replaceFirstCharToUpperCase';
import { Tag } from '@/_common/components/Tag';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const PostTitle = ({ categoryWithNumber }: { categoryWithNumber: { [key: string]: number } }) => {
  const pathname = usePathname();
  const tag = pathname.split('/')[2];

  const title: string = tag === undefined ? 'All Posts' : replaceFirstCharToUpperCase(tag);
  const postsNumber: number = categoryWithNumber[decodeURIComponent(tag)] || Object.values(categoryWithNumber).reduce((a, b) => a + b, 0);

  return (
    <div className="px-4 bg-neutral-20 py-2.5 mb-4">
      <div className="flex flex-col gap-6">
        <span className="ft-title-02">{`${title} (${postsNumber})`}</span>
        <span className="flex gap-2.5 max-w-3xl flex-wrap justify-center">
          {Object.entries(categoryWithNumber).map(([category, number]) => {
            return (
              <Link href={`/posts/${encodeURIComponent(category.toLowerCase())}`} key={category}>
                <Tag
                  key={category}
                  category={`${replaceFirstCharToUpperCase(category)} (${number})`}
                  isClickable
                  isActive={category.toLowerCase() === tag}
                />
              </Link>
            );
          })}
        </span>
      </div>
    </div>
  );
};
