import React from 'react';
import PassPostButton, { PassPostButtonProps } from './PassPostButton';
import { BsArrowLeftCircle } from 'react-icons/bs';

const PrevPostButton = (props: Pick<PassPostButtonProps, 'title' | 'path'>) => {
  return <PassPostButton {...props} type="prev" icon={<BsArrowLeftCircle size={32} fill={'#83FFB7'} />} />;
};

export default PrevPostButton;
