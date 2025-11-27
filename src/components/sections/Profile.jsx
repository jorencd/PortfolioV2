import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import mypicture from "../../assets/images/profile/mypicture.png";
import coverphoto from "../../assets/images/coverphoto/banner2.svg";
import ResumeDL from "../common/modal/ResumeDL";
import About from "./About";
import CvButton from "../common/button/CvButton";  // Import the reusable button

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [isCoverImageLoading, setIsCoverImageLoading] = useState(true);
  const [skeletonDuration, setSkeletonDuration] = useState(1000);

  useEffect(() => {
    if (navigator.connection) {
      const { effectiveType } = navigator.connection;
      if (effectiveType === "4g") {
        setSkeletonDuration(500);
      } else if (effectiveType === "3g") {
        setSkeletonDuration(1500);
      } else {
        setSkeletonDuration(3000);
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

  const handleImageLoad = (type) => {
    if (type === "cover") setIsCoverImageLoading(false);
  };

  return (
    <div className="items-center lg:w-130 md:w-130 md:items-start lg:items-start flex flex-col gap-y-4 lg:pt-48 pt-40">
      <div className="w-full lg:h-47 h-38 z-0 absolute left-0 top-15">
        {isCoverImageLoading && (
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 animate-pulse"
            style={{ animationDuration: `${skeletonDuration}ms` }}
          ></div>
        )}
        <img
          src={coverphoto}
          alt="Cover Photo"
          className="w-full h-full object-cover"
          loading="eager"
          onLoad={() => handleImageLoad("cover")}
        />
      </div>

      <div className="size-25 z-1 border-4 border-white rounded-full">
        <img
          src={mypicture}
          alt="Jorence"
          className="object-cover rounded-full"
          loading="eager"
          onLoad={() => handleImageLoad("profile")}
        />
      </div>

      <div className="text-center w-full lg:pr-20 md:pr-20 lg:text-left md:bg-neutral-100 lg:bg-neutral-100 rounded-xl p-5">
        <h1 className="font-bold md:text-left text-2xl mb-1 lg:mb-3 text-neutral-800">
          Jorence Mendoza
        </h1>
        <div className="text-center lg:text-left md:text-left flex flex-col gap-y-2 text-sm text-neutral-800 mb-2">
          <p className="flex gap-x-1 justify-center md:justify-start lg:justify-start items-center">
            <Icon icon="material-symbols-light:event-available" className="size-3 text-neutral-500" />
            Available for Freelance
          </p>
          <p className="flex gap-x-1 justify-center md:justify-start lg:justify-start items-center">
            <Icon icon="grommet-icons:user-expert" className="size-3 text-neutral-500" />
            Web & Game Developer
          </p>
          <p className="flex gap-x-1 justify-center md:justify-start lg:justify-start items-center">
            <Icon icon="mdi:contact" className="size-3 text-neutral-500" />
            +63 993 534 7826
          </p>
          <p className="flex gap-x-1 justify-center md:justify-start lg:justify-start items-center">
            <Icon icon="picon:address" className="size-3 text-neutral-500" />
            Sampaga, San Antonio, Quezon
          </p>
        </div>

        <div className="flex items-center flex-col lg:mt-5 gap-3 justify-center">
          {/* Use the reusable CvButton component */}
          <CvButton onClick={handleResumeClick} text="CV" />
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
        <div className="hidden md:block">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Profile;
