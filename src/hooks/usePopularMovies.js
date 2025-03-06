


import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
const usePopularMovies =()=>{
    const dispatch = useDispatch();


  useEffect(()=>{

    const getPopularMovies = async ()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",apiOptions)
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
    getPopularMovies();
  },[dispatch])

}

export default usePopularMovies;