import React from 'react';

type TagProps = {
  category: string;
  isClickable?: boolean;
  isActive?: boolean;
};

export const Tag = ({ category, isClickable = false, isActive = false }: TagProps) => {
  return (
    <span
      className={`px-2 py-1 duration-150 ease-in-out border-2 cursor-pointer text-primary-60 ft-caption-04 border-primary-60 rounded-xl ${
        isClickable ? 'hover:bg-primary-60 hover:text-neutral-40' : ''
      } ${isActive ? 'bg-primary-60 text-neutral-40' : ''} `}
    >
      {category}
    </span>
  );
};
