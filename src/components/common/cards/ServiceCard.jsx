import React from "react";
import { Icon } from "@iconify/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useImageLoad from "../../../hooks/useServiceCard";
import useSkeletonDuration from "../../../hooks/useServiceCardSkel";  

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg"></div>
);

// Loading spinner component
const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full animate-spin"></div>
  </div>
);

// ServiceCard component
const ServiceCard = ({ image, title, description, index, icon }) => {
  // Using the custom hooks
  const { imageLoaded, textLoaded, loading, handleImageLoad } = useImageLoad();
  const skeletonDuration = useSkeletonDuration();

  return (
    <div className="relative h-55 w-full">
      <link rel="preload" href={image} as="image" />

      <React.Suspense fallback={<SkeletonLoader />}>
        <LazyLoadImage
          src={image}
          alt="Service"
          className="object-cover rounded-lg w-full h-full transition-all duration-300"
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </React.Suspense>

      <div
        className={`absolute h-full bottom-0 rounded-lg left-0 right-0 p-4 flex flex-col justify-between ${!imageLoaded ? 'bg-gray-300 animate-pulse' : ''}`}
        style={{ animationDuration: `${skeletonDuration}ms` }}
      >
        {/* Skeleton background */}
        {!imageLoaded && <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg" />}

        {/* Loading spinner */}
        {loading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LoadingSpinner />
          </div>
        )}

        {/* Content */}
        <div className={`absolute h-full backdrop-blur-xs bg-[#000000b6] bottom-0 rounded-lg left-0 right-0 p-4 flex flex-col justify-between ${imageLoaded ? '' : 'hidden'}`}>
          <div className="text-neutral-200">
            <h3 className="lg:text-xl md:text-xl text-base font-semibold text-left mb-2">{textLoaded ? title : <SkeletonLoader />}</h3>
            <p className="text-xs font-light">{textLoaded ? description : <SkeletonLoader />}</p>
          </div>
          <div className="mt-auto flex justify-between items-center text-white">
            <Icon icon={icon} width="30" height="30" className="text-neutral-200" />
            <p className="text-3xl font-light text-neutral-200 text-end">{textLoaded ? `0${index}` : <SkeletonLoader />}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);
