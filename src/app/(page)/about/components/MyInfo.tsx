import Image from 'next/image';
import React from 'react';

export const MyInfo = () => {
  const INFO = [
    {
      title: 'E-mail',
      link: 'narira0922@gmail.com',
    },
    {
      title: 'Github',
      link: 'https://github.com/Jong1co',
    },
    {
      title: 'Blog',
      link: 'https://jonco.com',
    },
  ];

  return (
    <div className="flex items-center gap-8 mt-4">
      <Image src="/images/profile.png" alt="profile" width={200} height={200} className="hidden mobile:block" />
      <div className="flex flex-col gap-3 ft-header-02">
        <h3 className="mb-3">____ 박종현입니다</h3>
        <div className="mb-3 ft-body-02">날 한 줄로 표현할 수 있는 문장이 무엇이 있을까</div>
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
  );
};
