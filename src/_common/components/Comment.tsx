'use client';
import React from 'react';

const Comment = () => {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'Jong1co/my-blog');
        scriptElem.setAttribute('issue-term', 'title');
        scriptElem.setAttribute('theme', 'photon-dark');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';
        elem.appendChild(scriptElem);
      }}
    ></section>
  );
};

export default Comment;
