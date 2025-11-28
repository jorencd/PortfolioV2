import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Icon } from "@iconify/react";
import ModalDescription from "../../sections/ModalDescription";

function Modal({ isOpen, project, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/75 bg-opacity-75 flex items-center justify-center z-40">
      <div
        className="absolute hidden lg:block md:block top-4 right-7 bg-neutral-600 rounded-full size-8 cursor-pointer text-xl text-center text-white z-50"
        onClick={onClose}
      >
        &times;
      </div>
      <div className="relative pt-12 h-full w-full lg:p-10 md:p-10 rounded overflow-auto bg-transparent bg-black/75 bg-opacity-75 lg:bg-transparent md:bg-transparent">
        <div className="px-4 py-6 lg:py-0 md:py-0 flex items-center gap-x-4">
          <div>
            <h2 className="text-white font-semibold text-md">
              {project.title}
            </h2>
            <p className="text-white font-light text-xs">Jorence Mendoza</p>
          </div>
          <div
        className="lg:hidden md:hidden absolute bg-neutral-800 p-2 rounded-full top-17 right-5 cursor-pointer z-50"
        onClick={onClose}
      >
        <Icon
          icon="humbleicons:arrow-go-back"
          width="20"
          height="20"
          className="text-neutral-200"
        />
      </div>
        </div>
        <div className="grid grid-cols-1 gap-y-2 overflow-y-auto w-full lg:p-4 md:p-4 px-5">
          {project.images.map((image, index) => (
            <div key={index} className="relative w-full h-full group">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex md:flex absolute left-20 top-5 transform -translate-x-1/2 bg-[#00000094] backdrop-blur-sm cursor-pointer text-white lg:py-2 md:py-1 lg:px-5 md:px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity items-center gap-x-1"
              >
                <Icon icon="weui:link-filled" className="md:size-4" />
                project link
              </a>
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
        <ModalDescription project={project} />
      </div>
    </div>
  );
}

export default Modal;
