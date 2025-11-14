import React, { Suspense, useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import LoadingFallback from "../../components/common/loadingfallback/LoadingFallback";

import Sidebar from "../../components/sections/Certificates";
import Footer from "../../components/layout/footer/Footer";

const Navbar = React.lazy(() =>
  import("../../components/layout/navbar/Navbar")
);

function Certificates() {
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
        <Navbar />
      </Suspense>
      <div className="flex flex-col md:flex-row lg:flex-row gap-x-5">
        <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
          <Sidebar />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Certificates;
