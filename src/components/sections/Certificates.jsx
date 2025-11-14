import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import coverphoto from "../../assets/images/coverphoto/banner3.svg";
import CertificateSidebar from "./CertificatePageSidebar"; // Import the new sidebar
import CertificatesCard from "../common/cards/CertificatesCard";
import { certificates } from "../../data/CertificatesData" // Assuming you have a card component for displaying certificates

function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);


  // Filter certificates based on the selected category
  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((certificate) => certificate.category === selectedCategory);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ClipLoader size={50} color="#000" loading={true} />
      </div>
    );
  }

  return (
    <div className="items-center w-full lg:w-full md:w-full md:items-start lg:items-start flex flex-col lg:flex-row md:flex-row lg:pt-48 pt-40">
      <div className="w-full lg:h-47 h-38 z-0 absolute left-0 top-15">
        <img
          src={coverphoto}
          alt="Cover Photo"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="lg:mt-15 md:mt-15 text-center w-full lg:w-75 md:w-75 lg:text-left rounded-xl p-5">
        <button className="bg-blue-600 mt-14 lg:mt-0 md:mt-0 w-full rounded-full font-semibold text-white py-1 lg:mb-5 md:mb-5">
          Button
        </button>

        <hr className="mb-4 border-gray-200 hidden lg:block md:block" />

        <CertificateSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>  

      {/* Display filtered certificates */}
      <div className="grid p-5 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:mt-17 md:mt-17">
        {filteredCertificates.map((certificate) => (
          <CertificatesCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
