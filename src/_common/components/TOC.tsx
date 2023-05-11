'use client';

import React, { useState } from 'react';

import { TOCElement } from '@/_common/components/MarkdownViewer';
import { useIntersectionObserver } from '@/hook/useIntersectionObserver';

export const TOC = ({ content }: { content: string }) => {
  const [active, setActive] = useState('');

  const [tocInfoList] = useIntersectionObserver(setActive, content);

  const scrollToTitle = ({ scrollTop, title }: TOCElement) => {
    window.scrollTo({ top: scrollTop });
    setActive(title);
  };

  if (tocInfoList.length === 0) return null;

  return (
    <div className="sticky right-0 hidden float-right w-1 px-0 top-20 text-neutral-50 web:block">
      <div className="flex flex-col w-12 gap-3 py-4 border-r-2 border-primary-60">
        {tocInfoList.map((toc) => {
          return (
            <div
              className={`duration-100 w-52 ease-in-out cursor-pointer md-8 hover:text-primary-60 ${
                toc.title === active ? 'text-primary-60 ft-title-02' : 'ft-body-01'
              }`}
              key={toc.title}
              onClick={() => scrollToTitle(toc)}
            >
              <span className={`${toc.indent === 1 ? 'ml-16' : toc.indent === 2 ? 'ml-20' : 'ml-24'}`}>{toc.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
