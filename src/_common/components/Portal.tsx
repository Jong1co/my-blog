'use client';
import React from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
  selector: string;
};

export const Portal = ({ children, selector }: PortalProps) => {
  const element = typeof window !== 'undefined' && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};
