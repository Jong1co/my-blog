import React from 'react';
import { MyInfo } from './MyInfo';

export const Banner = () => {
  return (
    <section className="flex items-center justify-start w-full max-w-2xl px-4 pb-10 mx-auto whitespace-pre ">
      <MyInfo />
    </section>
  );
};
