import React from 'react';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="relative overflow-auto">{children}</section>;
};

export default ContentLayout;
