import { useDispatch, useSelector } from "react-redux";
import { apiOptions } from "../utils/constant";
import { useEffect } from "react";
import { addHorrorMovies } from "../utils/movieSlice";


const useHorroMovies=()=>{
    const dispatch=useDispatch();
    const horrorMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    useEffect(()=>{
        const getHorrorMovies=async()=>{
            const data = await fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",apiOptions)
            const json = await data.json();
            dispatch(addHorrorMovies(json.results));
        }
        getHorrorMovies();

        if(!horrorMovies){
            // getHorrorMovies();
          }
    },[dispatch])
}

export default useHorroMovies;
