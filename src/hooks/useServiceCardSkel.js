import { useState, useEffect } from 'react';

// Custom hook to determine skeleton loader duration based on network speed
const useSkeletonDuration = () => {
  const [skeletonDuration, setSkeletonDuration] = useState(1000);

  useEffect(() => {
    if (navigator.connection) {
      const { effectiveType } = navigator.connection;
      setSkeletonDuration(
        effectiveType === '4g' ? 500 :
        effectiveType === '3g' ? 1500 :
        3000
      );
    }
  }, []);

  return skeletonDuration;
};

export default useSkeletonDuration;
