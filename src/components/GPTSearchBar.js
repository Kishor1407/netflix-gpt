import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from "../utils/openai";
import { apiOptions } from '../utils/constant';
import { addGptMovieResult } from '../utils/GPTSlice';


const GPTSearchBar = () => {

  const dispatch = useDispatch();
const langKey = useSelector((store)=>store.config?.lang)
const searchText=useRef(null);


// Search Movie in TMdb
const searchMovieTMDB = async(movie)=>{
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +movie+"&include_adult=false&language=en-US&page=1",apiOptions
  );
  const json = await data.json();
  return json.results;
}

const handleGPTSearchClick= async()=>{
  console.log(searchText.current.value);
  //Make an API call toGPT API and get Movie Results
  const gptQuery="Act as a Movie Recommmendation System and sugest some movies for the query" + searchText.current.value +". Only give me names of 5 movies, comman seperated movie names. like the exampleresult given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  const gptResults = await openai.chat.completions.create({
    meassages:[{role:"user",content:gptQuery}],
    model:"gpt-3.5-turbo"
  });
  console.log(gptResults.choices?.[0]?.message?.content);
  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  // gptMovies is array of 5 movies reccommended we need to search through tmdb api
  const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));
  // result will be array of promise [Promise,Promise,Promise,Promise,Promise]

  const tmdbResults = await Promise.all(promiseArray);
  console.log(tmdbResults);
  dispatchEvent(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
}


console.log(langKey)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 grid grid-cols-12 bg-black' action="" onSubmit={(e)=> e.preventDefault()} >
        <input
        ref={searchText} type="text" className='p-4 m-4 col-span-9'  placeholder={lang[langKey]?.gptPlaceholder}  />
        <button onClick={handleGPTSearchClick} className='py-2 px-4 m-4 col-span-3 bg-red-700 rounded-lg text-white'>{lang[langKey]?.search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
