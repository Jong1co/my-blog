import React from 'react';
import { Experience } from './components/Experience';
import { MyInfo } from './components/MyInfo';

const AboutPage = () => {
  return (
    <section className="flex flex-col max-w-2xl gap-8 px-4 mx-auto">
      <MyInfo />
      <Experience />
    </section>
  );
};

export default AboutPage;
