import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import mypicture from "../../assets/profile/mypicture.png";
import coverphoto from "../../assets/coverphoto/banner2.svg";
import ResumeDL from "../../components/modal/ResumeDL";
import About from "./About";

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [isCoverImageLoading, setIsCoverImageLoading] = useState(true); // For cover photo
  const [skeletonDuration, setSkeletonDuration] = useState(1000); // Default skeleton duration (ms)

  // Adjust skeleton duration based on network speed
  useEffect(() => {
    if (navigator.connection) {
      const { effectiveType } = navigator.connection;
      if (effectiveType === "4g") {
        setSkeletonDuration(500); // Fast connection, shorter skeleton
      } else if (effectiveType === "3g") {
        setSkeletonDuration(1500); // Moderate connection, moderate skeleton
      } else {
        setSkeletonDuration(3000); // Slow connection, longer skeleton
      }
    }
  }, []);

  const handleResumeClick = () => {
    setShowModal(true);
  };

  const handleAccept = () => {
    setShowModal(false);

    const link = document.createElement("a");
    link.href = "/Resume/Jorence_Mendoza_Resume.pdf";
    link.download = "Jorence_Mendoza_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDecline = () => {
    setShowModal(false);
  };

  // Handle image load events
  const handleImageLoad = (type) => {
    if (type === "cover") setIsCoverImageLoading(false);
  };

  return (
    <div className="items-center lg:w-130 md:w-130 md:items-start lg:items-start flex flex-col gap-y-4 lg:pt-48 pt-40">
      <div className="w-full lg:h-47 h-38 z-0 absolute left-0 top-15">
        {/* Skeleton Loader for Cover Photo */}
        {isCoverImageLoading && (
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 animate-pulse"
            style={{ animationDuration: `${skeletonDuration}ms` }} // Adjust skeleton animation duration based on network speed
          ></div>
        )}
        <img
          src={coverphoto}
          alt="Cover Photo"
          className="w-full h-full object-cover"
          loading="lazy"
          onLoad={() => handleImageLoad("cover")} // Trigger when cover image is loaded
        />
      </div>

      <div className="size-25 z-1 border-4 border-white rounded-full">
        <img
          src={mypicture}
          alt="Jorence"
          className="object-cover rounded-full"
          loading="lazy"
          onLoad={() => handleImageLoad("profile")} // Trigger when profile image is loaded
        />
      </div>

      <div className="text-center w-full lg:pr-20 md:pr-20 lg:text-left">
        <h1 className="font-bold md:text-left text-2xl mb-1 lg:mb-3 text-neutral-800">
          Jorence Mendoza
        </h1>
        <div className="text-center lg:text-left md:text-left flex flex-col gap-y-2 text-sm text-neutral-800 mb-2">
          <p className="flex gap-x-1 justify-center md:justify-start lg:justify-start items-center">
            <Icon
              icon="material-symbols-light:event-available"
              className="size-3 text-neutral-500"
            />
            Available for Freelance
          </p>
          <p className="flex gap-x-1 justify-center md:justify-start lg:justify-start items-center">
            <Icon
              icon="grommet-icons:user-expert"
              className="size-3 text-neutral-500"
            />
            Web & Game Developer
          </p>
          <p className="flex gap-x-1 justify-center md:justify-start lg:justify-start items-center">
            <Icon icon="mdi:contact" className="size-3 text-neutral-500" />
            09123456789
          </p>
          <p className="flex gap-x-1 justify-center md:justify-start lg:justify-start items-center">
            <Icon icon="picon:address" className="size-3 text-neutral-500" />
            Sampaga, San Antonio, Quezon
          </p>
        </div>

        <div className="flex items-center flex-col lg:mt-5 gap-3 justify-center">
          <button
            onClick={handleResumeClick}
            className="bg-blue-600 cursor-pointer hover:bg-blue-400 text-white text-sm py-2 px-3 md:w-full lg:w-full w-1/2 rounded-2xl font-medium"
          >
            CV
          </button>
          {showModal && (
            <ResumeDL onAccept={handleAccept} onDecline={handleDecline} />
          )}
          <a
            href="mailto:jorencemendoza2@gmail.com?subject=Contact%20from%20Website"
            className="bg-blue-100 text-center text-blue-700 cursor-pointer hover:bg-blue-200 w-1/2 py-2 md:w-full lg:w-full text-sm rounded-2xl font-medium"
          >
            Email
          </a>
        </div>
        <About />
      </div>
    </div>
  );
}

export default Hero;
