import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { ClipLoader } from 'react-spinners'; 

// Lazy load components
const Profile = React.lazy(() => import('./modules/section/Profile'));
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const Project = React.lazy(() => import('./modules/section/Project'));
const Contact = React.lazy(() => import('./modules/section/Contact'));
const Footer = React.lazy(() => import('./components/footer/Footer'));

function App() {
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Check network speed
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

    // Cleanup
    return () => {
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkStatus);
      }
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  const renderFallback = (isSlowNetwork) => (
    <div className="w-full h-screen flex justify-center items-center relative">
      {isSlowNetwork ? (
        <ClipLoader size={50} color="#000" loading={true} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );

  const renderOfflineMessage = () => (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 text-neutral-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">No Internet Connection</h1>
        <p>Please check your network settings and try again.</p>
      </div>
    </div>
  );

  if (isOffline) return renderOfflineMessage();

  return (
    <div className="lg:px-15 md:px-15 px-5 bg-white">
      <Suspense fallback={renderFallback(isSlowNetwork)}>
        <Navbar />
      </Suspense>

      <div className="flex flex-col md:flex-row lg:flex-row gap-x-5">
        <Suspense fallback={renderFallback(isSlowNetwork)}>
          <Profile />
        </Suspense>

        <Suspense fallback={renderFallback(isSlowNetwork)}>
          <Project />
        </Suspense>
      </div>

      <hr className="my-10 border-gray-300" />

      <Suspense fallback={renderFallback(isSlowNetwork)}>
        <Contact />
      </Suspense>

      <Suspense fallback={renderFallback(isSlowNetwork)}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
