import React from 'react';

const AboutPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex flex-col max-w-2xl gap-8 px-4 mx-auto whitespace-pre">{children}</section>;
};

export default AboutPageLayout;
