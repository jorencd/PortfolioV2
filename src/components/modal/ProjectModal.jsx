// src/components/Modal.js
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function Modal({ isOpen, images, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/75 bg-opacity-75 flex items-center justify-center z-40">
      <div
        className="absolute hidden lg:block md:block top-4 right-5 bg-neutral-600 rounded-full size-8 cursor-pointer text-xl text-center text-white z-50"
        onClick={onClose}
      >
        &times;
      </div>
      <div className="relative pt-12 h-full w-full lg:p-10 md:p-10 rounded overflow-auto bg-white lg:bg-transparent md:bg-transparent">
        <div className="px-4 py-6 lg:py-0 md:py-0 flex items-center gap-x-4">
          <div>
            <h2 className="lg:text-white md:text-white font-semibold text-md">
              Project Name
            </h2>
            <p className="lg:text-white md:text-white font-light text-xs">
              Jorence Mendoza
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:gap-y-2 md:gap-y-2 overflow-y-auto w-full lg:p-4 md:p-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project Image ${index + 1}`}
              className="object-contain w-full h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
