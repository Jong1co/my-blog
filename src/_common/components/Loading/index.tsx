import React from 'react';
import Lottie from 'react-lottie-player';
import loading from '../../lotties/loading.json';

export const Loading = () => {
  return <Lottie loop animationData={loading} play className="w-10 h-6 " />;
};
