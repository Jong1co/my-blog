'use client';

import { useIntersectionObserver } from '@/hook/useIntersectionObserver';
import { TOCElement } from '@/_common/components/MarkdownViewer/MarkdownViewer';
import React, { useState } from 'react';

export const TOC = ({ content }: { content: string }) => {
  const [active, setActive] = useState('');

  const [tocInfoList] = useIntersectionObserver(setActive, content);

  const scrollToTitle = ({ scrollTop, title }: TOCElement) => {
    window.scrollTo({ top: scrollTop });
    setActive(title);
  };

  if (tocInfoList.length === 0) return null;

  return (
    <div className="sticky right-0 float-right w-1 px-0 top-20 text-neutral-50">
      <ul className="flex flex-col w-12 gap-3 py-4 border-r-2 border-primary-60">
        {tocInfoList.map((toc) => {
          return (
            <li
              className={`duration-100 w-52 ease-in-out cursor-pointer md-8 ml-${12 + toc.indent * 4} hover:text-primary-60 ${
                toc.title === active ? 'text-primary-60 ft-title-02' : 'ft-body-01'
              }`}
              key={toc.title}
              onClick={() => scrollToTitle(toc)}
            >
              {toc.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
