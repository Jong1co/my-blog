import React from 'react';
import PassPostButton, { PassPostButtonProps } from './PassPostButton';
import { BsArrowRightCircle } from 'react-icons/bs';

const NextPostButton = (props: Pick<PassPostButtonProps, 'title' | 'path'>) => {
  return <PassPostButton {...props} type="next" icon={<BsArrowRightCircle size={32} fill={'#83FFB7'} />} />;
};

export default NextPostButton;
