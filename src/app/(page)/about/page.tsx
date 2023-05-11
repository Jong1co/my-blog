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
    <>
      <MyInfo />
      <Experience />
    </>
  );
};

export default AboutPage;
