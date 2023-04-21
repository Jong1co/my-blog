'use client';
import { replaceFirstCharToUpperCase } from '@/utils/replaceFirstCharToUpperCase';
import { Tag } from '@/_common/Tag';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const PostTitle = ({ categoryWithNumber }: { categoryWithNumber: { [key: string]: number } }) => {
  const pathname = usePathname();
  const tag = pathname.split('/')[2];

  return (
    <div className="px-4 bg-neutral-20 py-2.5">
      <div className="flex justify-between">
        <span className="ft-title-02">{`${tag === undefined ? 'All Posts' : replaceFirstCharToUpperCase(tag)} (${
          categoryWithNumber[tag] || Object.values(categoryWithNumber).reduce((a, b) => a + b, 0)
        })`}</span>
        <span className="flex gap-2.5">
          {Object.entries(categoryWithNumber).map(([category, number]) => {
            return (
              <Link href={`/posts/${category.toLowerCase()}`} key={category}>
                <Tag key={category} category={`${replaceFirstCharToUpperCase(category)} (${number})`} isClickable isActive={category.toLowerCase() === tag} />
              </Link>
            );
          })}
        </span>
      </div>
      <div></div>
    </div>
  );
};
