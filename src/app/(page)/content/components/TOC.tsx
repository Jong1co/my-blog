'use client';
import { TOCElement } from '@/_common/components/MarkdownViewer/MarkdownViewer';
import React, { useEffect, useState } from 'react';

export const TOC = ({ tocList }: { tocList: TOCElement[] }) => {
  const [tocInfoList, setTocInfoList] = useState<TOCElement[]>([]);
  const [selected, setSelected] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh((prev) => !prev);
  }, []);

  useEffect(() => {
    setTocInfoList((prev) => [...tocList]);
  }, [refresh]);

  const scrollToTitle = ({ scrollTop, title }: TOCElement) => {
    window.scrollTo({ top: scrollTop });
    setSelected(title);
  };

  if (tocInfoList.length === 0) return null;

  return (
    <div className="sticky right-0 float-right w-1 px-0 top-20 text-neutral-50">
      <div className="flex flex-col w-12 gap-3 py-4 border-r-4 border-primary-60">
        {tocInfoList.map((toc) => {
          return (
            <div
              className={`duration-100 ft-title-02 w-52 ease-in-out cursor-pointer md-8 ml-16 hover:text-primary-50 ${
                toc.title === selected ? 'text-primary-50' : 'ml-20'
              }`}
              key={toc.title}
              onClick={() => scrollToTitle(toc)}
            >
              {toc.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
