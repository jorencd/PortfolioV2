import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Icon } from "@iconify/react";
import ModalDescription from "../../sections/ModalDescription";

function Modal({ isOpen, project, onClose }) {
  const [loadedImages, setLoadedImages] = useState({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Reset loaded states when project changes
  useEffect(() => {
    if (!project) return;
    
    setLoadedImages({});
    setAllImagesLoaded(false);
    
    // Create an array to track image loading
    const imagePromises = project.images.map((image, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [index]: true }));
          resolve();
        };
        img.onerror = () => {
          setLoadedImages(prev => ({ ...prev, [index]: true }));
          resolve();
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setAllImagesLoaded(true);
    });

    // Cleanup function
    return () => {
      // Cancel any ongoing image loading if needed
    };
  }, [project]);

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
              
              {/* Skeleton Loader */}
              {(!loadedImages[index] && !allImagesLoaded) && (
                <div className="w-full h-[300px] lg:h-[400px] md:h-[350px] animate-pulse bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-lg relative overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              )}
              
              {/* Actual Image */}
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className={`object-contain w-full h-full transition-opacity duration-300 ${
                  loadedImages[index] || allImagesLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                onError={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                style={{
                  display: loadedImages[index] || allImagesLoaded ? 'block' : 'none'
                }}
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