import Image from 'next/image';
import React, { useState } from 'react';
import profileImage from '../../../public/images/profile.png';

type HeroProps = {
  handleModal: () => void;
};

export const Hero = ({ handleModal }: HeroProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative" onClick={handleModal} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Image
        src={profileImage}
        width={250}
        height={250}
        alt="profile"
        className={`hidden duration-150 ease-in-out rounded-full cursor-pointer mobile:block ${hover && 'brightness-50'}`}
        priority
      />
      {hover && <span className="absolute cursor-pointer left-12 top-28 ft-header-02">Contact Me!</span>}
    </div>
  );
};
