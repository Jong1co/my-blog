'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const path = pathname.split('/')[1];
  console.log(path);

  return (
    <header className="flex flex-row items-center justify-between px-4 py-6 bg-neutral-20 ft-logo-01">
      <Link href="/">
        <span className="ft-logo-01">Jongco</span>
      </Link>
      <nav className="flex flex-row gap-4 ft-title-02">
        <Link href="/" className={`${pathname === '/' ? '' : 'text-neutral-50'} hover:text-neutral-100 ease-in-out duration-150`}>
          Home
        </Link>
        <Link
          href="/posts"
          className={`${path === 'content' || path === 'posts' ? '' : 'text-neutral-50'} hover:text-neutral-100 ease-in-out duration-150`}
        >
          Posts
        </Link>
        <Link href="/about" className={`${pathname === '/about' ? '' : 'text-neutral-50'} hover:text-neutral-100 ease-in-out duration-150`}>
          About
        </Link>
      </nav>
    </header>
  );
};
