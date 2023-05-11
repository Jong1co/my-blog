import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { TOCElement } from '@/_common/components/MarkdownViewer';

type HeadlineMap = { [key: string]: IntersectionObserverEntry };

const options = {
  rootMargin: '80px 0px -40% 0px',
};

export const useIntersectionObserver = (setActive: Dispatch<SetStateAction<string>>, content: string) => {
  const headlineMap = useRef<HeadlineMap>({});
  const [tocInfoList, setTocInfoList] = useState<TOCElement[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));

    const getScrollTopFromElement = (element: Element): number => {
      return element.getBoundingClientRect().top;
    };

    //알맞은 entry를 선택하기 위한 함수
    const setActiveEntry = (visibleHeadings: IntersectionObserverEntry[]) => {
      if (visibleHeadings.length === 1) {
        setActive(visibleHeadings[0].target.innerHTML);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort((a, b) => getScrollTopFromElement(a.target) - getScrollTopFromElement(b.target));
        setActive(sortedVisibleHeadings[0].target.innerHTML);
      }
    };

    const inctersectionObserverCallback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      // headlineMap에 callback을 등록한 entries를 돌면서 해당 타겟의 innerHTML을 key값으로 entry를 등록한다.
      headlineMap.current = entries.reduce((accr, entry) => {
        accr[entry.target.innerHTML] = entry;
        return accr;
      }, headlineMap.current);

      // 현재 보이는 entry들의 배열을 만든다.
      const visibleHeadings: IntersectionObserverEntry[] = [];

      // 저장한 headlineMap을 돌면서 isIntersecting이라면 현재 보이는 entry 배열에 추가한다.
      Object.values(headlineMap.current).forEach((headingElement) => {
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      setActiveEntry(visibleHeadings);
    };

    const observer = new IntersectionObserver(inctersectionObserverCallback, options);

    // 해당 리스트를 돌면서 옵저버를 각각 요소마다 등록하는데, tocList에는 scrollTop과, indent를 함께 넣어준다.
    headingElements.forEach((element) => {
      observer.observe(element);
      setTocInfoList((prev) => [
        ...prev,
        { title: element.innerHTML, scrollTop: getScrollTopFromElement(element), indent: Number(element.nodeName[1]) },
      ]);
    });

    return () => observer.disconnect();
  }, [content]);

  return [tocInfoList];
};
