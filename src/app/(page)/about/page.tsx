import { Metadata } from 'next';
import React from 'react';
import { Experience } from '@/_common/components/Experience';
import { MyInfo } from '@/_common/components/MyInfo';

export const metadata: Metadata = {
  title: 'About Me',
  description: '소개 페이지',
};

const AboutPage = () => {
  return (
    <section className="flex flex-col max-w-2xl gap-8 px-4 mx-auto">
      <MyInfo />
      <Experience />
    </section>
  );
};

export default AboutPage;
