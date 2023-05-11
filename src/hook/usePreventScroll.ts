'use client';
import { useEffect } from 'react';

const usePreventScroll = (showContactModal: boolean) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (showContactModal) {
      body?.style.setProperty('position', 'fixed');
    } else {
      body?.style.setProperty('position', 'static');
    }
  }, [showContactModal]);
};

export default usePreventScroll;
