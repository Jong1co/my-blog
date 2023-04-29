import { TOCElement } from '@/_common/components/MarkdownViewer/MarkdownViewer';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (setActive: Dispatch<SetStateAction<string>>, content: string) => {
  const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});
  const [tocInfoList, setTocInfoList] = useState<TOCElement[]>([]);

  useEffect(() => {
    headingElementsRef.current = {};

    const callback: IntersectionObserverCallback = (headings) => {
      headingElementsRef.current = headings.reduce((map: any, headingElement) => {
        map[headingElement.target.innerHTML] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];

        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (top: number) => headingElements.findIndex((heading) => heading.getBoundingClientRect().top === top);

      if (visibleHeadings.length === 1) {
        setActive(visibleHeadings[0].target.innerHTML);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.getBoundingClientRect().top) - getIndexFromId(b.target.getBoundingClientRect().top),
        );
        setActive(sortedVisibleHeadings[0].target.innerHTML);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '80px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));

    headingElements.forEach((element) => {
      observer.observe(element);
      setTocInfoList((prev) => [
        ...prev,
        { title: element.innerHTML, scrollTop: element.getBoundingClientRect().top, indent: Number(element.nodeName[1]) },
      ]);
    });

    return () => observer.disconnect();
  }, [content]);

  return [tocInfoList];
};
