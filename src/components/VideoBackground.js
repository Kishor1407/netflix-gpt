import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieid }) => {
  const trailerVideo=useSelector(store=> store.movies?.trailerVideo);
useTrailerVideo(movieid);
  return (
    <div className="w-screen">
      {trailerVideo && trailerVideo.key ? (
        <iframe
  className="w-screen aspect-video"
  src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
  
};

export default VideoBackground;
