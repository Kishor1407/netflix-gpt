import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className='bg-black'>
<div className='mt-[-276px] relative z-20'>
  
<MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>   
               <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>    
               <MovieList title={"Comedy Movies"} movies={movies?.nowPlayingMovies}/>    
               <MovieList title={"Action Movies"} movies={movies?.nowPlayingMovies}/>    
               <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies}/>    
               <MovieList title={"Romantic Movies"} movies={movies?.nowPlayingMovies}/>   </div> 
                
    </div>
  )
}

export default SecondaryContainer;
