import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { ClipLoader } from 'react-spinners'; // Assuming you're using react-spinners
import logo from '../../my-app/src/assets/logo/mylogo.png'; // Import your logo image

// Lazy load components
const Profile = React.lazy(() => import('./modules/section/Profile'));
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const Project = React.lazy(() => import('./modules/section/Project'));
const Footer = React.lazy(() => import('./components/footer/Footer'));

function App() {
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine); // Check initial online status

  // Check network speed
  useEffect(() => {
    const updateNetworkStatus = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        // Assume 'slow-2g' or '2g' indicates a slow network
        setIsSlowNetwork(connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
      }
    };

    // Listen for changes in network status
    updateNetworkStatus();
    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkStatus);
    }

    // Listen for offline/online status
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    // Clean up listeners
    return () => {
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkStatus);
      }
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-100 text-neutral-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">No Internet Connection</h1>
          <p>Please check your network settings and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:px-15 md:px-15 px-5 bg-white">
      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center relative">
            <ClipLoader size={50} color="#4169E1" loading={true} />
            <img src={logo} alt="Logo" className="absolute z-10" style={{ width: '25px', height: '25px' }} />
          </div>
        }
      >
        <Navbar />
      </Suspense>

      <div className="flex flex-col md:flex-row lg:flex-row">
        <Suspense
          fallback={
            <div className="w-full h-screen flex justify-center items-center relative">
              {isSlowNetwork ? (
                <ClipLoader size={50} color="#000" loading={true} />
              ) : (
                <div>Loading...</div>
              )}
              <img src={logo} alt="Logo" className="absolute z-10" style={{ width: '40px', height: '40px' }} />
            </div>
          }
        >
          <Profile />
        </Suspense>

        <Suspense
          fallback={
            <div className="w-full h-screen flex justify-center items-center relative">
              {isSlowNetwork ? (
                <ClipLoader size={50} color="#000" loading={true} />
              ) : (
                <div>Loading...</div>
              )}
              <img src={logo} alt="Logo" className="absolute z-10" style={{ width: '40px', height: '40px' }} />
            </div>
          }
        >
          <Project />
        </Suspense>
      </div>

      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center relative">
            <ClipLoader size={50} color="#000" loading={true} />
            <img src={logo} alt="Logo" className="absolute z-10" style={{ width: '40px', height: '40px' }} />
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
