// Home.jsx
import React, { Suspense, useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners'; 
import LoadingFallback from '../../components/common/loadingfallback/LoadingFallback';  

const Profile = React.lazy(() => import('../../components/sections/Profile'));
const Project = React.lazy(() => import('../../components/sections/Project'));
const Contact = React.lazy(() => import('../../components/sections/Contact'));
const Footer = React.lazy(() => import('../../components/layout/footer/Footer'));

function Home() {
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateNetworkStatus = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        const isSlow = connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
        setIsSlowNetwork(isSlow);
      }
    };

    updateNetworkStatus();
    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkStatus);
    }

    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkStatus);
      }
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const renderOfflineMessage = () => (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 text-neutral-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">No Internet Connection</h1>
        <p>Please check your network settings and try again.</p>
      </div>
    </div>
  );

  if (isOffline) return renderOfflineMessage();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ClipLoader size={50} color="#000" loading={true} />
      </div>
    );
  }

  return (
    <div className="lg:px-15 md:px-15 px-5 bg-white pt-16"> {/* Added pt-16 for navbar spacing */}
      {/* Navbar removed from here */}

      <div className="flex flex-col md:flex-row lg:flex-row gap-x-5">
        <Suspense fallback={<LoadingFallback isSlowNetwork={isSlowNetwork} />}>
          <Profile />
        </Suspense>

        <Suspense fallback={<LoadingFallback isSlowNetwork={isSlowNetwork} />}>
          <Project />
        </Suspense>
      </div>

      <hr className="my-10 border-gray-300" />

      <Suspense fallback={<LoadingFallback isSlowNetwork={isSlowNetwork} />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingFallback isSlowNetwork={isSlowNetwork} />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;