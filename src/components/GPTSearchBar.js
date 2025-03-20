import React from 'react'
import lang from '../utils/languageConstants'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from "../utils/openai";
import { apiOptions } from '../utils/constant';
import { addGptMovieResult } from '../utils/GPTSlice';
import geminiai from '../utils/openai';

const GPTSearchBar = () => {

  const dispatch = useDispatch();
const langKey = useSelector((store)=>store.config?.lang)
const searchText=useRef(null);
const [loading, setLoading] = useState(false);

// Search Movie in TMdb
const searchMovieTMDB = async(movie)=>{
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +movie+"&include_adult=false&language=en-US&page=1",apiOptions
  );
  const json = await data.json();
  return json.results;
}

const handleGPTSearchClick = async () => {
  try {
    setLoading(true);
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma-separated. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.";

    const model = geminiai();
    const result = await model.generateContent(gptQuery);
    const gptResults = await result.response.text();

    console.log(gptResults);

    const gptMovies = gptResults.split(",").map((movie) => movie.trim());
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  } catch (error) {
    console.error("Error fetching movie recommendations:", error);
  } finally {
    setLoading(false); 
  }
};



console.log(langKey)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 grid grid-cols-12 bg-black' action="" onSubmit={(e)=> e.preventDefault()} >
        <input
        ref={searchText} type="text" className='p-4 m-4 col-span-9'  placeholder={lang[langKey]?.gptPlaceholder}  />
              <button
        onClick={handleGPTSearchClick}
        className="py-2 px-4 m-4 col-span-3 bg-red-700 rounded-lg text-white"
        disabled={loading} 
      >
        {loading ? "Loading..." : lang[langKey]?.search}
      </button>
      </form>
    </div>
  )
}

export default GPTSearchBar
