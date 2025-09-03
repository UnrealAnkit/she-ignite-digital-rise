import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  fallbackOptions?: string[];
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  fallbackOptions = [],
  onLoad,
  onError
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allOptions = [src, ...fallbackOptions];

  const handleError = () => {
    console.log(`Image failed to load: ${currentSrc}`);
    
    if (currentIndex < allOptions.length - 1) {
      // Try next fallback option
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentSrc(allOptions[nextIndex]);
    } else {
      // All options failed
      setHasError(true);
      onError?.();
    }
  };

  const handleLoad = () => {
    console.log(`Image loaded successfully: ${currentSrc}`);
    setHasError(false);
    onLoad?.();
  };

  // Reset when src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setCurrentIndex(0);
    setHasError(false);
  }, [src]);

  if (hasError && fallbackText) {
    return (
      <div className={`fallback-text text-red-600 font-semibold text-sm text-center ${className}`}>
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
    />
  );
};

export default OptimizedImage; 