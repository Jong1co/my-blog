import Link from 'next/link';
import React from 'react';

export type PassPostButtonProps = {
  title: string;
  path: string;
  icon: React.ReactElement;
  type: 'next' | 'prev';
};

const PassPostButton = ({ title, path, type, icon }: PassPostButtonProps) => {
  return (
    <Link href={`/post/${path}`} className="max-w-[100%] post:max-w-[50%]">
      <button
        className={`flex items-center w-full gap-5 px-6 py-5 duration-150 ease-in-out rounded-md bg-neutral-30 hover:bg-neutral-40
      ${type === 'next' ? 'justify-end' : 'justify-start'}`}
      >
        {type === 'prev' && <div>{icon}</div>}
        <div className={`flex flex-col ${type === 'next' ? 'items-end' : 'items-start'} gap-2 overflow-hidden text-ellipsis`}>
          <div className="ft-body-01">{type === 'next' ? '다음 포스트' : '이전 포스트'}</div>
          <div className="w-full overflow-hidden ft-title-01 whitespace-nowrap text-ellipsis">{title}</div>
        </div>
        {type === 'next' && <div>{icon}</div>}
      </button>
    </Link>
  );
};

export default PassPostButton;
