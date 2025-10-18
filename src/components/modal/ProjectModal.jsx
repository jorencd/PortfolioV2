// src/components/Modal.js
import React from 'react';

function Modal({ isOpen, images, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="absolute top-4 right-2 bg-neutral-600 rounded-full size-8 cursor-pointer text-xl text-center text-white" onClick={onClose}>
          &times;
        </div>
      <div className="relative size-5/6 bg-white rounded overflow-auto">
        
        <div className="grid grid-cols-1 gap-4 overflow-y-auto h-full">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Project Image ${index + 1}`} className="object-contain w-full h-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
