import { PostCardInfo } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tag } from './Tag';

const PostCard = ({ title, description, date, category, path, featured, thumbnail }: PostCardInfo) => {
  return (
    <Link href={`/post/${path}`}>
      <li className="flex flex-col w-full duration-150 ease-in-out border rounded-lg cursor-pointer h-[] mobile:h-40 mobile:flex-row bg-neutral-30 border-neutral-70 hover:bg-neutral-40">
        {thumbnail !== null && (
          <Image
            src={thumbnail}
            alt={path}
            width={200}
            height={156}
            className="w-full rounded-t-md mobile:rounded-l-lg mobile:max-w-[200px] opacity-70"
          />
        )}
        <div className="flex flex-col w-full gap-3 p-4 overflow-hidden">
          <div className="overflow-hidden ft-title-01 whitespace-nowrap text-ellipsis">{title}</div>
          <div className="overflow-hidden ft-body-02 text-neutral-80 h-14 text-ellipsis">{description}</div>
          <div className="flex items-center justify-between">
            <span className="ft-caption-02 text-neutral-70">{date}</span>
            <span className="flex gap-2.5">
              {category.map((tag) => {
                return <Tag key={tag} category={tag} />;
              })}
            </span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PostCard;
