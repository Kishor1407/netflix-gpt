import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    useEffect(()=>{
        const getTopRatedMovies = async()=>{
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",apiOptions)
            const json = await data.json();
            dispatch(addTopRatedMovies(json.results));
        }
        getTopRatedMovies();

        if(!topRatedMovies){
            // getTopRatedMovies();
          }
    },[dispatch])
}

export default useTopRatedMovies;