import { useState, useCallback } from 'react';

// Custom hook to handle image loading
const useImageLoad = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textLoaded, setTextLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    setTextLoaded(true);
    setLoading(false);
  }, []);

  return {
    imageLoaded,
    textLoaded,
    loading,
    handleImageLoad,
  };
};

export default useImageLoad;
