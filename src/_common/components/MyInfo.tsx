'use client';

import React, { useEffect, useState } from 'react';
import { ContactModal } from './ContactModal';
import { Hero } from './Hero';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePreventScroll from '@/hook/usePreventScroll';

const info = [
  {
    title: 'Github',
    link: 'https://github.com/Jong1co',
  },
  {
    title: 'Blog',
    link: 'https://my-blog-jong1co.vercel.app/',
  },
];

export const MyInfo = () => {
  const successToast = () => toast.success('메일이 성공적으로 전송되었습니다.');
  const errorToast = () => toast.error('메일 전송에 실패했습니다.');

  const [showContactModal, setShowContactModal] = useState(false);

  usePreventScroll(showContactModal);

  const handleContactModal = () => {
    setShowContactModal((prev) => !prev);
  };

  return (
    <>
      <div className="flex mt-4 gap-y-8 mobile:gap-8 mobile:items-center">
        <Hero handleModal={handleContactModal} />
        <div className="flex flex-col gap-3 ft-header-02">
          <h3 className="mb-3">____박종현입니다</h3>
          <div className="mb-3 ft-body-02">
            <div className="mb-2">호기심이 많고, 매사에 긍정적 입니다.</div>
            <div>문제를 더 나은 방향으로 해결하고자 노력합니다.</div>
          </div>
          <div className="align-middle ft-title-02">
            E-mail :{' '}
            <span onClick={handleContactModal} className="cursor-pointer ft-body-02 hover:underline">
              narira0922@gmail.com
            </span>
          </div>
          {info.map(({ title, link }) => {
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
      {showContactModal && <ContactModal handleModal={handleContactModal} success={successToast} error={errorToast} />}
      <ToastContainer className="" position="top-right" theme="dark" pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};
