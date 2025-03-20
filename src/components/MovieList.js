import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);

  return (
    <div className='px-6 bg-transparent'>
    <h1 className='text-3xl font-semibold text-white py-2'>{title}</h1>

    <div className='flex overflow-x-scroll no-scrollbar'
            style={{
                scrollbarWidth: "none", 
                msOverflowStyle: "none", 
              }}>
        <div className='flex'>
       {movies?.map((movie)=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
    </div>
    </div>
  )
}

export default MovieList
