'use client';
import { Portal } from '@/_common/Portal';
import React, { useState } from 'react';
import { ContactModal } from './ContactModal';
import { Hero } from './Hero';

export const MyInfo = () => {
  const INFO = [
    {
      title: 'Github',
      link: 'https://github.com/Jong1co',
    },
    {
      title: 'Blog',
      link: 'https://jonco.com',
    },
  ];

  const [showContactModal, setShowContactModal] = useState(false);

  const handleContactModal = () => {
    setShowContactModal((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center gap-8 mt-4">
        <Hero handleModal={handleContactModal} />
        <div className="flex flex-col gap-3 ft-header-02">
          <h3 className="mb-3">____ 박종현입니다</h3>
          <div className="mb-3 ft-body-02">날 한 줄로 표현할 수 있는 문장이 무엇이 있을까</div>
          <div className="align-middle ft-title-02">
            E-mail :{' '}
            <span onClick={handleContactModal} className="cursor-pointer ft-body-02 hover:underline">
              narira0922@gmail.com
            </span>
          </div>
          {INFO.map(({ title, link }) => {
            return (
              <div className="align-middle ft-title-02" key={title}>
                {title} :{' '}
                <a href={link} className="cursor-pointer ft-body-02 hover:underline">
                  {link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {showContactModal && (
        <Portal selector="#portal">
          <ContactModal handleModal={handleContactModal} />
        </Portal>
      )}
    </>
  );
};
