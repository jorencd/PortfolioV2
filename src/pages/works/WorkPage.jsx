import React from 'react'
import { Suspense, useState, useEffect } from 'react';
import { ClipLoader } from "react-spinners";
import LoadingFallback from "../../components/common/loadingfallback/LoadingFallback";

import WorkNav from '../../components/sections/worksection/WorkNav';
import WorkCateg from '../../components/sections/worksection/WorkCateg';
import Work from '../../components/sections/worksection/Work';
import Footer from "../../components/layout/footer/Footer";

function Works() {

  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <ClipLoader size={50} color="#000" loading={true} />
        </div>
      );
    }
  
  return (
    <div className="lg:px-5 md:px-5 px-5">
      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <WorkNav />
      </Suspense>
      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <WorkCateg />
      </Suspense>
      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <Work />
      </Suspense>
      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Works