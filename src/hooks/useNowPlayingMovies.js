import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovies =()=>{
    const dispatch = useDispatch();


  useEffect(()=>{

    const getNowPlayingMovies = async ()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",apiOptions)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
getNowPlayingMovies();
  },[dispatch])

}

export default useNowPlayingMovies;