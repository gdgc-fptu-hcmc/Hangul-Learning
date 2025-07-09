import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const TopikImageViewer = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image container */}
        <div className="relative max-w-4xl w-full h-[80vh] flex items-center justify-center">
          <img
            src={images[currentImageIndex]}
            alt={`TOPIK test ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPreviousImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-r hover:bg-opacity-75 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-l hover:bg-opacity-75 transition-opacity"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto p-2 bg-black bg-opacity-50 rounded-lg">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopikImageViewer; 