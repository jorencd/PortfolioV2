import React from 'react';

const CvButton = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 py-2 w-full cursor-pointer hover:bg-blue-400 text-white text-sm px-3 rounded-2xl font-medium ${className}`}
    >
      {text}
    </button>
  );
};

export default CvButton;
