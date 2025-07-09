import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';

const TopikAudioPlayer = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    };

    const handleError = (e) => {
      setError('Không thể tải file âm thanh. Vui lòng thử lại sau.');
      setIsLoading(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    audioRef.current.volume = value;
    setVolume(value);
    if (value === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipBackward = () => {
    const newTime = Math.max(0, currentTime - 5);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipForward = () => {
    const newTime = Math.min(duration, currentTime + 5);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm w-full max-w-full">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      
      {/* Progress Bar */}
      <div
        ref={progressRef}
        className="h-2 bg-gray-200 rounded-full mb-4 cursor-pointer relative w-full"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-primary rounded-full relative"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        >
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-md"></div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-full sm:flex-nowrap flex-wrap gap-2">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <Pause className="w-6 h-6 text-primary" />
            ) : (
              <Play className="w-6 h-6 text-primary" />
            )}
          </button>

          {/* Skip Buttons */}
          <button
            onClick={skipBackward}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <SkipBack className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={skipForward}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <SkipForward className="w-5 h-5 text-gray-600" />
          </button>

          {/* Time Display */}
          <div className="text-sm text-gray-600 min-w-[80px] ml-2">
            <span>{formatTime(currentTime)}</span>
            <span className="mx-1">/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center space-x-2 min-w-[120px]">
          <button
            onClick={toggleMute}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-gray-600" />
            ) : (
              <Volume2 className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 sm:w-20 md:w-24 accent-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default TopikAudioPlayer; 