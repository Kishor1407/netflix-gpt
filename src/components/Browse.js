import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useHorroMovies from '../hooks/useHorrorMovies'
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt?.showGptSearch);
  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useHorroMovies();
  console.log(showGptSearch);

  return (
    <div>
      <Header/>

      {
        showGptSearch  ? (<GPTSearch/>) : (
        <>
              <MainContainer/>
              <SecondaryContainer/>
        </>)
      }

    </div>
  )
}

export default Browse
