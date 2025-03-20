
import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies=()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    useEffect(()=>{
        const getUpcomingMovies = async()=>{
            const data = await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US",apiOptions)
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        }
        if(!upcomingMovies){
            getUpcomingMovies();
          }
    },[dispatch]);
}

export default useUpcomingMovies;