'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const menu = [
  { title: 'Home', href: '/' },
  { title: 'Posts', href: '/posts' },
  // { title: 'Resume', href: 'https://www.rallit.com/resumes/4883@antoni0922/%EB%B0%95%EC%A2%85%ED%98%84' },
];

const resume = 'https://www.rallit.com/resumes/4883@antoni0922/%EB%B0%95%EC%A2%85%ED%98%84';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-row items-center justify-between px-4 py-6 bg-neutral-20 ft-logo-01">
      <Link href="/">
        <span className="ft-logo-01">Jong1co</span>
      </Link>
      <nav>
        <ul className="flex flex-row gap-4 ft-title-02">
          {menu.map(({ title, href }) => {
            return (
              <li key={title}>
                <Link
                  href={href}
                  className={`${pathname === href ? '' : 'text-neutral-50'} hover:text-neutral-100 ease-in-out duration-150`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
          <li>
            <a target="_blank" href={resume} className={`text-neutral-50 hover:text-neutral-100 ease-in-out duration-150`}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
