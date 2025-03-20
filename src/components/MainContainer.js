import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    
    //above line fetch movies data from store
    if (!movies || movies.length === 0) return <div>Loading...</div>;

    const mainMovie = movies[0];

    const {original_title,overview , id}=mainMovie;



  return (
    <div className=''>
      <VideoTitle  title={original_title} overview={overview}/>
      <VideoBackground  movieid={id}/>
    </div>
  )
}

export default MainContainer;
