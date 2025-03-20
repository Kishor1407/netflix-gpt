import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
const useTrailerVideo=(movieid)=>{
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store)=>store.movies.nowPlayingMovies);

    const getMovieVideos = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
          apiOptions
        );
        const json = await data.json();
        const trailers = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.result[0];
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getMovieVideos();
        
        if(!trailerVideo){
          // getMovieVideos();
        }
      }, [movieid]);
}

export default useTrailerVideo;