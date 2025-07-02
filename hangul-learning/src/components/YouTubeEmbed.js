import React, { useState } from 'react';

const YouTubeEmbed = ({ 
  videoId = 'dQw4w9WgXcQ',
  title = 'YouTube Video',
  className = '',
  autoplay = false,
  mute = true,
  controls = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate thumbnail URLs with fallbacks
  const thumbnailUrls = [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
  ];

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    // Use youtube-nocookie.com for privacy
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: mute ? '1' : '0',
      controls: controls ? '1' : '0',
      rel: '0',
      modestbranding: '1',
      iv_load_policy: '3'
    })}`;

    return (
      <div className={`aspect-video bg-black rounded-2xl overflow-hidden ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div 
      className={`aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden cursor-pointer group relative ${className}`}
      onClick={handleLoadVideo}
    >
      {/* Thumbnail Image */}
      <img
        src={!imageError ? thumbnailUrls[0] : thumbnailUrls[1]}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={() => setImageError(true)}
        loading="lazy"
      />
      
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <div className="flex flex-col items-center text-white">
          <div className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          </div>
          <p className="text-sm font-medium opacity-90">Nhấn để xem video</p>
          <p className="text-xs opacity-70 mt-1">Bảo vệ quyền riêng tư - Không cookies</p>
        </div>
      </div> */}

      {/* Privacy Badge */}
    </div>
  );
};

export default YouTubeEmbed; 