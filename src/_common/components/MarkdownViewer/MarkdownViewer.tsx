'use client';

import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, twilight, atomDark, cb, xonokai, materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import { HeaderObserver } from './HeaderObserver';
import { TOC } from '@/app/(page)/content/components/TOC';

export type TOCElement = { title: string; scrollTop: number };

export const MarkdownViewer = ({ content }: { content: string }) => {
  const toc = useRef<TOCElement[]>([]);

  return (
    <div className="relative">
      {/* <TOC tocList={toc.current} /> */}
      <ReactMarkdown
        className="max-w-3xl prose"
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');

            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={xonokai}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className="p-1 mr-1 rounded-md bg-neutral-50 text-neutral-100 ">
                {children}
              </code>
            );
          },
          img: (props) => <Image src={props.src || ''} alt={props.alt || ''} width={500} height={300} />,
          h1: (props) => <h1 className="text-neutral-100 ft-header-01">{props.children}</h1>,
          h2: (props) => <HeaderObserver toc={toc}>{props.children}</HeaderObserver>,
          b: (props) => <b className="text-neutral-100">{props.children}</b>,
          a: (props) => (
            <a
              href={props.href}
              className="no-underline duration-75 ease-in-out cursor-pointer text-neutral-50 hover:underline hover:text-neutral-70"
            >
              {props.children}
            </a>
          ),
          strong: (props) => <a className="no-underline text-primary-60">{props.children}</a>,
          pre: (props) => <pre className="no-underline text-neutral-100">{props.children}</pre>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
