
import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constant";
import { useEffect } from "react";
import {  addPopularMovies } from "../utils/movieSlice";
const usePopularMovies =()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.nowPlayingMovies);


  useEffect(()=>{

    const getPopularMovies = async ()=>{
      const data = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",apiOptions)
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
    getPopularMovies();

    if(!popularMovies){
      // getPopularMovies();
    }
  },[dispatch])

}

export default usePopularMovies;