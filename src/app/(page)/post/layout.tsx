import React from 'react';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="relative">{children}</section>;
};

export default ContentLayout;
