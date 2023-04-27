import React, { Children, Dispatch, MutableRefObject, SetStateAction, useEffect, useRef } from 'react';
import { TOCElement } from './MarkdownViewer';

type HeaderObserverProps = {
  children: React.ReactNode;
  toc: MutableRefObject<TOCElement[]>;
};

export const HeaderObserver = ({ children, toc }: HeaderObserverProps) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref != null && ref.current != null) {
      const category = {
        title: (ref.current as HTMLHeadingElement).innerText,
        scrollTop: (ref.current as HTMLHeadingElement).getBoundingClientRect().top,
      };

      toc.current.push(category);
    }
  }, []);

  return (
    <h2 className="text-neutral-100 ft-header-02" ref={ref}>
      {children}
    </h2>
  );
};
