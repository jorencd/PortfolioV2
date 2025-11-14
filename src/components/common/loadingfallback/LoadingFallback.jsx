import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingFallback = ({ isSlowNetwork }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <ClipLoader size={50} color="#000" loading={true} />
      {isSlowNetwork && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white">
          <p>Slow network detected...</p>
        </div>
      )}
    </div>
  );
};

export default LoadingFallback;
