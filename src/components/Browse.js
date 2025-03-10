import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {
  useNowPlayingMovies();  
  usePopularMovies();

  return (
    <div>
      <Header/>
      {/*
      MainContainer
      -VideoBackground
      -VideoTitle
      SecondaryContainer
      -MovieList*n
       -cards*n
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
